import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strin-interpolation',
  templateUrl: './strin-interpolation.component.html',
  styleUrls: ['./strin-interpolation.component.css']
})
export class StrinInterpolationComponent implements OnInit {

  name:string='S A ROKHANDE';
  id:number=2;

  lname:string="hefshine";

  myname:string='Sumit Raokhande';
  
  imgname:string='../../assets/Desert.jpg';

  constructor() { }

  ngOnInit() {
    
  }

  getname(){
    this.lname="dattu";
    return (this.lname);
  }


}
