import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from "./about";
import { ContactComponent } from "./contact";
import { ProtectedComponent } from "./protected";
import { AuthenticatedGuard, AuthenticateService } from "./shared/authentication";
import { LoginComponent } from "./login";

const routes: Routes = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact-us', redirectTo: 'contact' },
  { path: 'posts', loadChildren: 'app/posts/posts.module' },
  { path: 'protected', component: ProtectedComponent, canActivate: [ AuthenticatedGuard ]},
  { path: 'login', component: LoginComponent }
];

export const appRouterProviders: any[] = [
  AuthenticatedGuard, AuthenticateService
];

export const routing = RouterModule.forRoot(routes);
