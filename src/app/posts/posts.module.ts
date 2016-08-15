import { NgModule }       from '@angular/core';
import { CommonModule } from "@angular/common";
import { PostsComponent } from "./posts.component";
import { PostDetailComponent, PostsSearchComponent } from "./index";
import { postsRouting, postsRouterProviders } from "./posts.routing";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ PostsComponent, PostDetailComponent, PostsSearchComponent ],
  imports:      [ CommonModule, postsRouting, FormsModule ],
  providers:    [ postsRouterProviders ]
})
export class PostsModule {}
