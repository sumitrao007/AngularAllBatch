import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdfdemo',
  templateUrl: './tdfdemo.component.html',
  styleUrls: ['./tdfdemo.component.css']
})
export class TDFDemoComponent implements OnInit {


  contactMethod:any[]=[
    {id:1,name:'Email'},
    {id:2,name:'Phone'},
    {id:3,name:'Office Phone'}
  ];
  constructor() { }

  ngOnInit() {
  }

  onSumit(f){

    if(f.valid){
      console.log("Form Valid");
      console.log(f.value);
      
    }

  }


}
