import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {

// This event is fired each time the user updates the text in the omnibox,
// as long as the extension's keyword mode is still active.
    chrome.omnibox.onInputChanged.addListener(
      function(text, suggest) {
        console.log('inputChanged: ' + text);
        suggest([
          {content: text + " one", description: "the first one"},
          {content: text + " number two", description: "the second entry"}
        ]);
      });
// This event is fired with the user accepts the input in the omnibox.
    chrome.omnibox.onInputEntered.addListener(
      function(text) {
        console.log('inputEntered: ' + text);
        alert('You just typed "' + text + '"');
      });
  }

}
