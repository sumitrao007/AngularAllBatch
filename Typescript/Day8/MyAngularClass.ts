export class AngularClass{

    rollno:number;

    constructor(private fname:string,private lname:string,roll:number){
        this.rollno=roll;
    }

    display(){
        console.log(`
                First name is :: ${this.fname}
                Last Name is    :: ${this.lname}
                Roll no is :: ${this.rollno}
        `);
    }

}

var angObj=new AngularClass("sumit","Raokhande",20);
angObj.display();