import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrictedComponent } from './restricted/restricted.component';



@NgModule({
  declarations: [
    RestrictedComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[RestrictedComponent]
})
export class RestrictedModule { }
