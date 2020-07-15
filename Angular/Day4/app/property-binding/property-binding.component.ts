import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-property-binding',
  // templateUrl: './property-binding.component.html',
  template:`<h1>Register Successfully</h1>
            <h2> Visit Login page </h2>`,
  styleUrls: ['./property-binding.component.css']
  
})
export class PropertyBindingComponent implements OnInit {


  myname:string="Yogesh Sakpal";
  imgurl:string="../../assets/Desert.jpg";
  ishidden:boolean=false;



  constructor() { }

  ngOnInit() {
  }

}
