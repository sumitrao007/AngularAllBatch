import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param',
  templateUrl: './query-param.component.html',
  styleUrls: ['./query-param.component.css']
})
export class QueryParamComponent implements OnInit {

  QueryObj={};
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParamMap
    .subscribe(param=>{
        this.QueryObj={
          myorder:param.get('order'),
          mybrand:param.get('brand'),
          myquantity:param.get('quantity'),
          myprice:param.get('price')
        }
    })
  }

}
