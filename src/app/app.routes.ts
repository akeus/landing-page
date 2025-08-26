import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/profile',
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
  },
]
