import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string='brown';
  rating:number=20;
  mycolor1:string="darkcyan";
  mycolor2:string="blueviolet";
  
  mycolorobj={
    color:'red',
    fontStyle:'italic'
  }

  bgcolor:string="azure";

  constructor() { }

  ngOnInit() {
  }

}
