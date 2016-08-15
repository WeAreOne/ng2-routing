import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PostsComponent } from "./posts.component";
import { PostDetailComponent, PostsSearchComponent } from "./index";
import { postsRouting, postsRouterProviders } from "./posts.routing";
import { DialogService } from "../shared";

@NgModule({
  declarations: [ PostsComponent, PostDetailComponent, PostsSearchComponent ],
  imports:      [ CommonModule, postsRouting, FormsModule ],
  providers:    [ postsRouterProviders, DialogService ]
})
export class PostsModule {}
