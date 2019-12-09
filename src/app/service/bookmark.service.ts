import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {BookmarkModel} from '../models/bookmark.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  private bookmarkList: Array<BookmarkModel> = new Array<BookmarkModel>();
  private bookmarkListCache$: BehaviorSubject<Array<BookmarkModel>> = new BehaviorSubject<Array<BookmarkModel>>(this.bookmarkList);


  constructor() {
    if (!this.bookmarkList.length) {
      this.readBookmarks();
    }
  }

  getBookmarks(): Observable<Array<BookmarkModel>> {
    if (!this.bookmarkListCache$) {
      this.readBookmarks();
      this.bookmarkListCache$.next(this.bookmarkList);
    }
    return this.bookmarkListCache$;
  }

  readBookmarks() {
    console.log('Reading Bookmarks');
    chrome.bookmarks.getTree( (root) => {
      console.log('Dumping Bookmarks');
      this.bookmarkList = this.dumpBookmarks(root);
      console.log('Bookmarks Dumped', this.bookmarkList);
      this.bookmarkListCache$.next(this.bookmarkList);
    });
  }

  dumpBookmarks = (bookmarks: chrome.bookmarks.BookmarkTreeNode[]): BookmarkModel[] => {
    const list: BookmarkModel[] = [];
    bookmarks.forEach(bookmark => {
      if (bookmark.children) {
        const children = this.dumpBookmarks(bookmark.children);
        list.push({
          id: bookmark.id,
          isFolder: true,
          parentId: bookmark.parentId,
          title: bookmark.title,
          children
        });
      } else {
        list.push({
          id: bookmark.id,
          isFolder: false,
          parentId: bookmark.parentId,
          title: bookmark.title,
          url: bookmark.url
        });
      }
    });
    return list;
  }

}
