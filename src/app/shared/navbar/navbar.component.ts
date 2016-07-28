import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { HomeComponent } from "../../home";
import { AboutComponent } from "../../about";
import { ContactComponent } from "../../contact";

@Component({
  moduleId: module.id,
  selector: 'my-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ ROUTER_DIRECTIVES, HomeComponent, AboutComponent, ContactComponent ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
