import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-posts-search',
  templateUrl: 'posts-search.component.html',
  styleUrls: ['posts-search.component.css']
})
export class PostsSearchComponent {
  query: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.query = params['query']; });
  }

}
