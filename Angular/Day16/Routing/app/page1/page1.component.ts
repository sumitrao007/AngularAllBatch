import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

MyId;
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.UrlParsing();

  }

  UrlParsing(){
    this.router.paramMap
    .subscribe(param=>{
      console.log(param.get('id'));
      this.MyId=param.get('id');
    })
  }

}
