import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from "./posts.component";
import { PostsSearchComponent } from "./posts-search";
import { PostDetailComponent } from "./post-detail";
import { DiscardChangesGuard } from "../shared";

const postsRoutes: Routes = [
  { path: 'posts', component: PostsComponent, children: [
    { path: 'search', component: PostsSearchComponent, pathMatch: 'full' },
    { path: ':id', component: PostDetailComponent, canDeactivate: [ DiscardChangesGuard ] }
  ]}
];

export const postsRouterProviders: any[] = [
  DiscardChangesGuard
];

export const postsRouting = RouterModule.forChild(postsRoutes);
