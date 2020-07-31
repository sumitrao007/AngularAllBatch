import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  MYId;
  MyUsername;
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {

    this.router.paramMap
    .subscribe(param=>{
      this.MYId=param.get('id');
      this.MyUsername=param.get('username');

    })

  }

}
