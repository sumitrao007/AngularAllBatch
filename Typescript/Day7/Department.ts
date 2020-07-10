
export class Department{
   private dept:string;

    constructor(dept:string){
        this.dept=dept;
    }

    display(){
        return (this.dept);
    }
}