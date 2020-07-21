import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdirective',
  templateUrl: './switchdirective.component.html',
  styleUrls: ['./switchdirective.component.css']
})
export class SwitchdirectiveComponent implements OnInit {

  mycolor:string="";
  constructor() { }

  ngOnInit() {
  }

  onClick(value){
    this.mycolor=value;
  }

}
