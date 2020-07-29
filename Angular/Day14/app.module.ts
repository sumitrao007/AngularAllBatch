import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpServiceComponent } from './http-service/http-service.component';
import {HttpModule} from '@angular/http';
import { MyHttpService } from './my-http.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HttpServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [MyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
