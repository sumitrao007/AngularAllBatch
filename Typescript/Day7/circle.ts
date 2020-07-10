 import {Shape} from './Shapeclass';
export class Circle extends Shape
{
    private radius:number

    constructor(radius:number){
        super();
        this.radius=radius;

    }

    area(){
        console.log(`
        --------Area of Circle is ----------------------
        Area is :: ${this.radius*this.radius*3.14}
        `);

    }

    
}