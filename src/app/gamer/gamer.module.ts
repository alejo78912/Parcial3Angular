import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamerRoutingModule } from './gamer-routing.module';
import { GamerComponent } from './gamer/gamer.component';
import { GamesModule } from '../games/games.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    GamerComponent
  ],
  imports: [
    CommonModule,
    GamerRoutingModule,
    GamesModule,
    DashboardModule,
    HeaderModule
  ],
  exports:[GamerComponent]
})
export class GamerModule { }
