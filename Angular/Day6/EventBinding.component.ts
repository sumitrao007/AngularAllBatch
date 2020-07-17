import { Component } from '@angular/core';


@Component({
    selector:'app-eventbinding',
    templateUrl:'./EventBinding.component.html',
    styleUrls :['./EventBinding.component.css']
})

export class EventBindingComponent{

    count:number=0;
    divcolor:string="white";
    divcolor1:string="white";
    divcolor2:string='white';

    onclick(){
        if(this.count==0){
            console.log("Click Event Occur!! ");
            this.count=this.count+1;
        }
        
    }

    onclick1(myevent){

        console.log(myevent);
        console.log(myevent.target.value);
    }

    onRed(){
        this.divcolor='red';

    }
    onBlue(){
        this.divcolor='blue';

    }
    onGreen(){
        this.divcolor='green';
    }

    onPink(){

        this.divcolor='pink';

    }

    onMyDivColor(mycolor){
        this.divcolor1=mycolor;

    }

    onMyDivColor1(mycolor1){
       // console.log(mycolor1.target.value);
        this.divcolor2=mycolor1.target.value;
    }




}