import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strdetail:string="sumit Raokhande";
  strdetails1:string="Hello welcome to Angular Course";

  person={
    firstnmae:"Sumit",
    lastname:"Raokhande",
    id:1
  };

  num1=5.678556;
  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
