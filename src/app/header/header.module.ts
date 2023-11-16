import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header/header.component';
import { HeaderInvitadoComponent } from './header-invitado/header-invitado.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderInvitadoComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports:[
    HeaderComponent,
    HeaderInvitadoComponent
  ]
})
export class HeaderModule { }
