import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=0;
  myusername="";

  queryobj={
    order:1,
    brand:'Renuka Group',
    quantity:2,
    price:100
  };

  constructor(private routes:Router) { }

  ngOnInit() {
    this.myid=9;
    this.myusername="Angular 7";
  }

  onClickpage1(){
    this.myid=8;
    this.routes.navigate(['/PAGE1',this.myid]);

  }
  onClickpage2(){
    this.myid=8;
    this.myusername="MEAN Stack";
    this.routes.navigate(['/PAGE2',this.myid,this.myusername]);
  }
  onClickFollower(){
    this.routes.navigate(['/FOLLOWER']);
  }
  onClickQuery(){
    this.routes.navigate(['/QueryParam'],{queryParams:this.queryobj});
  }

}
