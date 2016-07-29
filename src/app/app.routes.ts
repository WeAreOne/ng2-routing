import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from "./about";
import { ContactComponent } from "./contact";
import { PostDetailComponent, PostsSearchComponent } from "./posts";

const routes: RouterConfig = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact-us', redirectTo: 'contact' },
  { path: 'posts', component: PostsSearchComponent },
  { path: 'posts/:id', component: PostDetailComponent }
];

export const appRouterProviders = [ provideRouter(routes) ];
