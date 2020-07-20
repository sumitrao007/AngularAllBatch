import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  course=["Angular 7","React js","Vue js","Embber Js","JSP"];

   empdetails=[
     {
       fname:"Sumit",
       lname:"Raokhande",
       role:"Developer",
       id:1
     },
     {
      fname:"Kiran",
      lname:"Raokhande",
      role:"HR",
      id:2
    },
    {
      fname:"Spruha",
      lname:"Raokhande",
      role:"Developer & Operation (DevOps)",
      id:3
    },
    {
      fname:"Yogesh",
      lname:"Sapkal",
      role:"Developer",
      id:0
    }
   ]; 

   selected:string="";

  constructor() { }

  ngOnInit() {
  }

  onMouseHover(item){
    this.selected=item.fname;

  }
  onMouseOut(){
    this.selected="";
  }

}
