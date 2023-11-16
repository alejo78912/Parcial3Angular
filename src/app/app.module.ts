import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { FooterModule } from './footer/footer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { GamerModule } from './gamer/gamer.module';
import { GamesModule } from './games/games.module';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { SignInModule } from './sign-in/sign-in.module';


@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FooterModule,
    DashboardModule,
    FooterModule,
    GamerModule,
    GamesModule,
    HeaderModule,
    LoginModule,
    SignInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
