import {Component} from '@angular/core';
import {Routes} from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {QuotesComponent} from "./features/quotes/quotes.component";
import {MoviePageComponent} from "./features/movie-page/movie-page.component";
import {CartComponent} from "./features/cart/cart.component";

export const routes: Routes = [
  {
    path: '',
    // loadComponent: () => import('./features/home/home.component'),
    component: HomeComponent,
    title: 'Home | mass records',
  },
  {
    path: 'shorter',
    loadComponent: () => import('./features/shorter/shorter.component'),
    title: 'Shorter',
  },
  {
    path: 'quotes',
    component: QuotesComponent,
    title: 'Quotes'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component'),
    title: 'Contact',
  },
  {path: 'movie/:id',
    component: MoviePageComponent,
    title:'Movie'},
  {
    path: 'cart',
    component:CartComponent,
    title: 'Cart'
  },
  {
    path: '404',
    loadComponent: () => import('./features/not-found/not-found.component'),
    title: 'Page not found',
  },

  {path: '**', redirectTo: '404'},
];
