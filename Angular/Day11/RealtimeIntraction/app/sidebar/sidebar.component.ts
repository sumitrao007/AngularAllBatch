import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() SendData=new EventEmitter();

    songsname=["Bollywood","Marathi","Purani JEANS","D J Song's","Romantic Song's"];
  constructor() { }

  ngOnInit() {
  }

  onClick(id){
    this.SendData.emit(id);
  }

}
