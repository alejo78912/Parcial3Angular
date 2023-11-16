import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamerComponent } from './gamer/gamer.component';
import { OfertasComponent } from '../ofertas-especiales/ofertas/ofertas.component';

const routes: Routes = [ {path: '', component:GamerComponent},

{path: 'ofertas', component:OfertasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamerRoutingModule { }
