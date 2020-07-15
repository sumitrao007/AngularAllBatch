import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentComponent } from './student.component';
import { EmployeeComponent } from './Employee.component';
import { ManagerComponent } from './manager/manager.component';
import { StrinInterpolationComponent } from './strin-interpolation/strin-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    ManagerComponent,
    StrinInterpolationComponent,
    PropertyBindingComponent
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
