import { RouterConfig } from '@angular/router';

import { PostsComponent } from "./posts.component";
import { PostsSearchComponent } from "./posts-search";
import { PostDetailComponent } from "./post-detail";
import { DiscardChangesGuard } from "../shared";

export const postsRoutes: RouterConfig = [
  { path: 'posts', component: PostsComponent, children: [
    { path: 'search', component: PostsSearchComponent, pathMatch: 'full' },
    { path: ':id', component: PostDetailComponent, canDeactivate: [ DiscardChangesGuard ] }
  ]}
];
