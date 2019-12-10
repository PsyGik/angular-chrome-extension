import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { ManagerComponent } from './manager/manager.component';
import {BookmarkService} from './service/bookmark.service';
import {WindowService} from './service/window.service';
import { BackgroundComponent } from './background/background.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    ManagerComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PanelModule,
    ToolbarModule,
    TableModule
  ],
  providers: [BookmarkService, WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
