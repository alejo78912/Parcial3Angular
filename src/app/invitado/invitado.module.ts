import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitadoRoutingModule } from './invitado-routing.module';
import { InvitadoComponent } from './invitado/invitado.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    InvitadoComponent
  ],
  imports: [
    CommonModule,
    InvitadoRoutingModule,
    DashboardModule,
    HeaderModule
  ],
  exports:[
    InvitadoComponent
  ]
})
export class InvitadoModule { }
