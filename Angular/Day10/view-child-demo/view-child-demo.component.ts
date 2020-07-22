import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildDemo2Component } from '../view-child-demo2/view-child-demo2.component';

@Component({
  selector: 'app-view-child-demo',
  templateUrl: './view-child-demo.component.html',
  styleUrls: ['./view-child-demo.component.css']
})
export class ViewChildDemoComponent implements OnInit {

  @ViewChild(ViewChildDemo2Component) child1:ViewChildDemo2Component;

  constructor() { }

  ngOnInit() {
  }

  onIncrement(){
    this.child1.increment();
  }

  onDecrement(){
    this.child1.decrement();
  }

}
