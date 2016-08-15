import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { routing, appRouterProviders } from "./app.routing";
import { PostsModule } from "./posts/posts.module";
import { NavbarComponent } from "./shared";
import { HomeComponent } from "./home";
import { AboutComponent } from "./about";
import { ContactComponent } from "./contact";
import { ProtectedComponent } from "./protected";
import { LoginComponent } from "./login";

@NgModule({
  declarations: [ AppComponent, NavbarComponent, HomeComponent, AboutComponent, ContactComponent, ProtectedComponent,
    LoginComponent ],
  imports:      [ BrowserModule, routing, PostsModule ],
  bootstrap:    [ AppComponent ],
  providers:    [ appRouterProviders ]
})
export class AppModule {}
