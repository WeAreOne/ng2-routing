import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { routing, appRouterProviders } from "./app.routing";
import { PostsModule } from "./posts/posts.module";

@NgModule({
  declarations: [ AppComponent ],
  imports:      [ BrowserModule, routing, PostsModule ],
  bootstrap:    [ AppComponent ],
  providers:    [ appRouterProviders ]
})
export class AppModule {}
