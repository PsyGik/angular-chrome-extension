import { Component, OnInit } from '@angular/core';
import {BookmarkService} from '../service/bookmark.service';
import {WindowService} from '../service/window.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  data = [
    {name: 'Blah', address: 'www'},
    {name: 'Blah', address: 'www'},
    {name: 'Blah', address: 'www'},
    {name: 'Blah', address: 'www'},
    {name: 'Blah', address: 'www'},
    {name: 'Blah', address: 'www'},
  ];
  constructor(private bookmarkService: BookmarkService, private windowService: WindowService) { }

  ngOnInit() {
    this.bookmarkService.getBookmarks().subscribe(bookmarks => {
      console.log('Bookmarks are', bookmarks);
    });

    this.windowService.getAllWindows();
  }
}
