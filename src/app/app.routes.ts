import {Component} from '@angular/core';
import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component'),
    title: 'Home | mass records'
  },
  {
    path: 'shorter',
    loadComponent: () => import('./features/shorter/shorter.component'), title: 'Shorter'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component'), title: 'Contact'
  },
  {
    path: '404',
    loadComponent: () => import('./features/not-found/not-found.component'),
    title: 'Page not found',
  },

  {path: '**', redirectTo: '404'},
];
