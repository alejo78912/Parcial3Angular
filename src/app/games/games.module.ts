import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games/games.component';


@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  exports:[
    GamesComponent
  ]
})
export class GamesModule { }
