import { Component, OnInit } from '@angular/core';
import {BookmarkService} from '../service/bookmark.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {


  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.bookmarkService.getBookmarks().subscribe(bookmarks => {
      console.log('Bookmarks are', bookmarks);
    });
  }
}
