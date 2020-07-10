export class MyClass{
    public firstname:string;
    private lastname:string;
    rollno:number;

    constructor(fname:string,lname:string,rollno:number){
        this.firstname=fname;
        this.lastname=lname;
        this.rollno=rollno;
    }

    display(){

        console.log(`
           First name is :: ${this.firstname} 
           Last Name is ::  ${this.lastname}
           Roll No ::: ${this.rollno}
        `);
    }

}

export function add(a:number,b:number){
    return (a+b);

}

export const pi=3.14;

// var myclass=new MyClass("Sumit",'Raokhande',10);
// myclass.display();

