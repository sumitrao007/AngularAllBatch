import { Shape } from './Shapeclass';
export class Rectangle extends  Shape
{
   private  length:number;
   private breadth:number;

    constructor(length:number,breadth:number){
        super();
        this.length=length;
        this.breadth=breadth;
    }

    area(){
        console.log(`
        --------Area of Rectangle is ----------------------
        Area is :: ${this.length*this.breadth}
        `);
    }
}