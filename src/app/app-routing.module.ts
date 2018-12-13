import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppDashboardComponent} from './app-dashboard/app-dashboard.component';

const routes: Routes = [ {
  path: 'home',
  component: AppDashboardComponent
},
  {
  path: '', redirectTo: '/home', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
