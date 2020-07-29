import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css']
})
export class HttpServiceComponent implements OnInit {

  mypost=[];
  myId="";
  myTitle="";
  myBody="";
  ishidden=true;
  constructor(private service:MyHttpService) { }

  ngOnInit() {
    this.getdata();
  }

  getdata(){
    this.service.Getposts()
    .subscribe(response=>{
      console.log(response.json());
      this.mypost=response.json();
    },myerror=>{
      alert("Unexpected Error Occur!!!!");
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

  OnUpdate(item){
    this.ishidden=false;
    this.myId=item.id;
    this.myTitle=item.title;
    this.myBody=item.body;
  }

  onFinalUpdate(){
    let tempobj={
      id:this.myId,
      title:this.myTitle,
      body: this.myBody
    }

    this.service.UpdatePostData(tempobj)
    .subscribe(response=>{
        console.log(response.json());
        console.log("ID:: "+response.json().id);
        this.mypost.splice(response.json().id-1,1,tempobj)
        this.myId="";
        this.myTitle="";
        this.myBody="";
        this.ishidden=true;
    })
  }

  OnDelete(item){
    this.service.DeletePostData(item.id)
    .subscribe(response=>{
      console.log(response.json());
      this.mypost.splice(item.id-1,1);
    })

  }


}
