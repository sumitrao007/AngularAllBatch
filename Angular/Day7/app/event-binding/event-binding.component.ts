import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  mycolorname:string='white';
  inputtext:string="";
  res1="";
  num1:number=20;
  num2:number=30;
  res2="";
  res3;
  myname1="";
  
  constructor() { }

  ngOnInit() {
  }

  onKeyUpEvent(){
    console.log("Key up event Occur....");
  }

  onKeydownEvent(){
    console.log("Key Down event Occur!!!");
  }

  onChangeEvent(){
    this.mycolorname='red';
  }
  onFocus(){
    this.mycolorname='white';
  }

  inputTextEvent(){
    this.inputtext="Hi Welcome";
  }

  myTemplateRef(myval){

    console.log("Value is :: "+myval);
  }

  myTemplateRef1(myval){
    console.log("Object is :: "+myval);
    console.log("Value is :: "+myval.value);
    myval.style.background='red';
  }

  MyAddition(num1,num2){
    let temp1=+num1;
    let temp2=+num2;
    this.res3=temp1+temp2;
  }

}
