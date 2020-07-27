import { Component, OnInit } from '@angular/core';
import { CourseService } from '../custom.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  mycourse:string[]=[];
  constructor(private myservice:CourseService) { 
    //  let service=new CourseService();
    //  this.mycourse= service.getCourse();
    this.mycourse= this.myservice.getCourse();

  }

  ngOnInit() {
  }

}
