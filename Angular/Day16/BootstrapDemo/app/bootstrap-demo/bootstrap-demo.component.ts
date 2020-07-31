import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent implements OnInit {

  product=[
    {
      name:"Shahi utane",
      price:30,
      quantity:'30gm'
    },
    {
      name:"Shahi utane",
      price:30,
      quantity:'30gm'
    },
    {
      name:"Shahi utane",
      price:30,
      quantity:'30gm'
    },
    {
      name:"Shahi utane",
      price:30,
      quantity:'30gm'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
