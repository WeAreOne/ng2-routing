import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from "@angular/router";

import { AuthenticateService } from "../authentication";

@Component({
  moduleId: module.id,
  selector: 'my-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthenticateService, private router: Router) { }

  ngOnInit() {
  }

  logout($event) {
    $event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
