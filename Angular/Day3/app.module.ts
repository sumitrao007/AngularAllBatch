import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentComponent } from './student.component';
import { EmployeeComponent } from './Employee.component';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent,EmployeeComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
