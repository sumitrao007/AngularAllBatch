import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() childtoparentmsg=new EventEmitter();

   @Output() childtoparentOBJ=new EventEmitter();

   @Output() childtoparentArrObj=new EventEmitter();

   msg="Data from Child to parent";
   childObj={
     product:"Shahi Utane",
     quantity:5,
     price:30
   }

   childArrObj=[
    {
      product:"Shahi Utane",
      quantity:5,
      price:30
    },
    {
      product:"Gulab Utane",
      quantity:1,
      price:25
    },
    {
      product:"Anant Mul Utane",
      quantity:1,
      price:30
    },
    {
      product:"Perfume",
      quantity:2,
      price:90
    }
   ];


  constructor() { }

  ngOnInit() {
  }

  onSend(){
    // this.childtoparentmsg.emit(this.msg);

    // this.childtoparentOBJ.emit(this.childObj);
    this.childtoparentArrObj.emit(this.childArrObj);
  }

}
