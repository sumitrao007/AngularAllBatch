import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  msg:string="Data send from parent to child";
  objmsg={
    fname:"Sumit",
    lname:"Raokhande",
    id:1
  };

  arrobj=[
    {
      fname:"Sumit",
      lname:"Raokhande",
      id:10
    },
    {
      fname:"Kiran",
      lname:"Raokhande",
      id:20
    },
    {
      fname:"Spruha",
      lname:"Raokhande",
      id:30
    }
  ];

  datafromchild:string="";
  datafromchildOBJ={};
   datafromchildARROBJ=[];


}
