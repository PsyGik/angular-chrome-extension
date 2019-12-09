import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'chrome-extension';
  activeParam = 'manager';
  constructor(private _ROUTER: Router, private _ACTIVATED_ROUTE: ActivatedRoute) {
    console.log('Route is', this._ROUTER.url, window.location.href);
    console.log('Params ', this.getQueryFromURL('page'));
    this.activeParam = this.getQueryFromURL('page');
    if (this.activeParam != null) {
      this._ROUTER.navigateByUrl('/' + this.activeParam);
    }
  }

  ngOnInit(): void {
  }

  getQueryFromURL(name) {
    const url = window.location.href;
    name = name.replace(/[[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);

    if (!results) { return null; }
    if (!results[2]) { return ''; }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
}
