import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  url:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:Http) { 
  }

  Getposts(){
     return (this.http.get(this.url));
  }

  PostsData(tempobj){
   return ( this.http.post(this.url,JSON.stringify(tempobj)));
  }


}
