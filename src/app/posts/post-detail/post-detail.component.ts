import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Post } from "../shared";
import { CanComponentDeactivate, DialogService } from "../../shared";
import { Observable } from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'app-post-detail',
  templateUrl: 'post-detail.component.html',
  styleUrls: ['post-detail.component.css']
})
export class PostDetailComponent implements OnInit, CanComponentDeactivate {
  id: string;
  editTitle: string;
  model: Post;

  constructor(private route: ActivatedRoute, private router: Router, private dialogService: DialogService) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
    this.model = new Post(5, 'This is my post title', 'Lorem ipsum dolor sit amet...', 'Category 1', 'My tag');
    this.editTitle = this.model.title;
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no post or the post title is unchanged
    if (!this.model || this.model.title === this.editTitle) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    let p = this.dialogService.confirm('Discard changes?');
    let o = Observable.fromPromise(p);
    return o;
  }

  cancel() {
    console.log('Changes in post have been canceled.');
    this.router.navigate(['/posts/search']);
  }

  save() {
    this.model.title = this.editTitle;
    console.log('Post has been updated.');
    this.router.navigate(['/posts/search']);
  }
}
