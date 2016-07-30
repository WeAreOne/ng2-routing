import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthenticateService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login() {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout() {
    this.isLoggedIn = false;
  }
}
