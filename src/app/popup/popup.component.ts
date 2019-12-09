import { Component, OnInit } from '@angular/core';
import {BookmarkService} from '../service/bookmark.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.bookmarkService.getBookmarks().subscribe(bookmarks => {
      console.log('Popup', bookmarks);
    })
  }

}
