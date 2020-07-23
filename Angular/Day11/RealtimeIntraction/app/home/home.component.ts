import { Component, OnInit, ViewChild } from '@angular/core';
import { ListofsongsComponent } from '../listofsongs/listofsongs.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(ListofsongsComponent) childlistofsong:ListofsongsComponent;

  constructor() { }

  ngOnInit() {
  }

  onFilter(id1){
    console.log("Id is :: "+id1);
    this.childlistofsong.changeDivcolor(id1);
  }

}
