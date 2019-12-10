import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import {ManagerComponent} from './manager/manager.component';
import {AppComponent} from './app.component';
import {BackgroundComponent} from './background/background.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'popup', component: PopupComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'background', component: BackgroundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
