import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HeaderModule } from '../header/header.module';
import { OfertasEspecialesModule } from '../ofertas-especiales/ofertas-especiales.module';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DashboardModule,
    HeaderModule,

  ], 
  exports:[AdminComponent]
})
export class AdminModule { }
