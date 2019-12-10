import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }

  getAllWindows() {
    chrome.windows.getAll({populate: true}, w => {
      console.log('Windows list', w);
    });
  }
}
