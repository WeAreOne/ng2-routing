import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-post-detail',
  templateUrl: 'post-detail.component.html',
  styleUrls: ['post-detail.component.css']
})
export class PostDetailComponent {
  id: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

}
