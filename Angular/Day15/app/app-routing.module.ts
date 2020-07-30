import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FollowerComponent } from './follower/follower.component';
import { QueryParamComponent } from './query-param/query-param.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"PAGE1/:id",
    component:Page1Component
  },
  {
    path:"PAGE2/:id/:username",
    component:Page2Component
  },
  {
    path:"FOLLOWER",
    component:FollowerComponent
  },
  {
    path:"MYFOLLWER",
    component:MyfollowerComponent
  },
  {
    path:"QueryParam",
    component:QueryParamComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
