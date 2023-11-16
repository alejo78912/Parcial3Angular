import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertasEspecialesRoutingModule } from './ofertas-especiales-routing.module';
import { OfertasComponent } from './ofertas/ofertas.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OfertasComponent
  ],
  imports: [
    CommonModule,
    OfertasEspecialesRoutingModule,
    HeaderModule,
    FormsModule
  ],
  exports:[
    OfertasComponent
  ]
})
export class OfertasEspecialesModule { }
