import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { AuthenticateService } from "./authenticate.service";

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(private authService: AuthenticateService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = state.url;

    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }
}
