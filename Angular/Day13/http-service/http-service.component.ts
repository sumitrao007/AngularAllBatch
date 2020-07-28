import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css']
})
export class HttpServiceComponent implements OnInit {

  mypost=[];
  constructor(private service:MyHttpService) { }

  ngOnInit() {
    this.getdata();
  }

  getdata(){
    this.service.Getposts()
    .subscribe(response=>{
      console.log(response.json());
      this.mypost=response.json();
    })
  }

  onAddData(mytitle,mybody){

    console.log(mytitle+" "+mybody);
    let tempobj={
      title:mytitle,
      body:mybody
    }

    this.service.PostsData(tempobj)
    .subscribe(response=>{
        console.log(response.json());
        console.log(response.json().id);
        this.mypost.splice(0,0,{id:response.json().id,title:mytitle,body:mybody});
    })


  }


}
