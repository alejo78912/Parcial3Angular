import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { GamesModule } from '../games/games.module';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardAdminComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GamesModule
  ],
  exports:[
    DashboardComponent,
    DashboardAdminComponent
  ]
})
export class DashboardModule { }
