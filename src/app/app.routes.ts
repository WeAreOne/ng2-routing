import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from "./about";
import { ContactComponent } from "./contact";
import { PostDetailComponent } from "./post-detail";

const routes: RouterConfig = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact-us', redirectTo: 'contact' },
  { path: 'posts/:id', component: PostDetailComponent }
];

export const appRouterProviders = [ provideRouter(routes) ];
