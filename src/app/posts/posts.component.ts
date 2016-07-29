import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class PostsComponent {

  constructor() { }

}
