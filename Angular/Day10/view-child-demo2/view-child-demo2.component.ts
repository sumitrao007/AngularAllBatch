import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-demo2',
  templateUrl: './view-child-demo2.component.html',
  styleUrls: ['./view-child-demo2.component.css']
})
export class ViewChildDemo2Component implements OnInit {

  count:number=0;
  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.count=this.count+1;
  }

  decrement(){
    this.count=this.count-1;
  }

}
