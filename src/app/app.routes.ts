import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)},
  { path: 'first', loadComponent: () => import('./pages/first/first.component').then(m => m.FirstComponent)},
  { path: 'second', loadComponent: () => import('./pages/second/second.component').then(m => m.SecondComponent)},
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)},
];
