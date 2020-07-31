import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QueryParamComponent } from './query-param/query-param.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component, 
    Page2Component,
    FollowerComponent,
    MyfollowerComponent,
    NotFoundComponent,
    QueryParamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
