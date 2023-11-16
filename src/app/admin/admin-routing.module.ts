import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { OfertasComponent } from '../ofertas-especiales/ofertas/ofertas.component';

const routes: Routes = [ {path: '', component:AdminComponent},{path: 'ofertas', component:OfertasComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
