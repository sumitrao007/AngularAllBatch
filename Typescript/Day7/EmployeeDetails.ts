import { Employee } from "./EmployeeInterface";
import {Department} from './Department';

export class EMPDetails implements Employee
{
    fname: string;
    lname: string;
    salary:number;
     deptref:Department;
        
    // constructor(fname:string,lname:string,salary:number,deptref:Department){
    //     this.fname=fname;
    //     this.lname=lname;
    //     this.salary=salary;
    //     this.deptref=deptref;
    // }

    constructor(fname:string,lname:string,salary:number,dept:string){
        this.fname=fname;
        this.lname=lname;
        this.salary=salary;
        this.deptref=new Department(dept);
    }

    display() {
        console.log(`
        --------------Emp Details-----------------
            Emp First Name :: ${this.fname}
            Emp Last name :: ${this.lname}
            Emp Salary is :: ${this.salary}
        Emp Department Is :: ${this.deptref.display()}
        `);        
    }

}