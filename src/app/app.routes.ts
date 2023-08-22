import { Routes } from '@angular/router'
import { canMatch } from './guards/athenticated.guard'

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((x) => x.LoginModule),
  },
  {
    path: 'player',
    loadChildren: () =>
      import('./pages/player/player.module').then((x) => x.PlayerModule),
    canMatch: [canMatch],
  },
]
