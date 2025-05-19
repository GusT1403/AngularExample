import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    title: 'Home Page'
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./components/details/details.module').then(m => m.DetailsModule),
    title: 'Home Details'
  }
];