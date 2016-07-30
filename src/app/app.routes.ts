import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from "./about";
import { ContactComponent } from "./contact";
import { postsRoutes } from "./posts";
import { ProtectedComponent } from "./protected";
import { AuthenticatedGuard, AuthenticateService } from "./shared/authentication";
import { LoginComponent } from "./login";

const routes: RouterConfig = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact-us', redirectTo: 'contact' },
  ...postsRoutes,
  { path: 'protected', component: ProtectedComponent, canActivate: [ AuthenticatedGuard ]},
  { path: 'login', component: LoginComponent }
];

export const appRouterProviders = [
  provideRouter(routes),
  [ AuthenticatedGuard, AuthenticateService ]
];
