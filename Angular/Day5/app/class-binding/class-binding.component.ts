import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  myclass:string="success";
  rating:number=2;
  iserror:boolean=false;
  isSpecial:boolean=true;

  myclassobj={
    "on":this.iserror,
    "off":!this.iserror,
    "special":this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
