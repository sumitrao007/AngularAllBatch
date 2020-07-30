import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.myid=9;
    this.myusername="Angular 7";
  }

}
