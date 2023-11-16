import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/auth/auth.guard';
import { gamerguardGuard } from 'src/auth/gamerguard.guard';
import { invitadoguardGuard } from 'src/auth/invitadoguard.guard';
import { RestrictedComponent } from './restricted/restricted/restricted.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),  canActivateChild:[authGuard] },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),  },
  { path: 'gamer', loadChildren: () => import('./gamer/gamer.module').then(m => m.GamerModule),   canActivateChild:[gamerguardGuard]},
  { path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule),  },
  { path: 'invitado', loadChildren: () => import('./invitado/invitado.module').then(m => m.InvitadoModule),   canActivateChild:[invitadoguardGuard]},
  {path: 'restricted', component:RestrictedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
