import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CounterComponent} from "./counter/counter.component";
import {FormsModule} from "@angular/forms";
import {PostsComponent} from "./posts/posts.component";
import { RoutingComponent } from './routing/routing.component';
import {RouterModule} from "@angular/router";
import { NavlinkComponent } from './navlink/navlink.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PostsComponent,
    RoutingComponent,
    NavlinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
