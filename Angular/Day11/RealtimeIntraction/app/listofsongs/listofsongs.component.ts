import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofsongs',
  templateUrl: './listofsongs.component.html',
  styleUrls: ['./listofsongs.component.css']
})
export class ListofsongsComponent implements OnInit {

  mycolor=["white","red","green","blue","yellow","gray"];
  arrindex:number=0;

  constructor() { }

  ngOnInit() {
  }

  changeDivcolor(id){
    this.arrindex=id;
  }

}
