//Arrow Function

var temp1=(str1:string,str2:string)=>{

    return (str1+" "+str2);
}

console.log(`
------------------------------------------
Value of Function is ${temp1("Sumit","Raokhande")}
------------------------------------------
`);

var temp2=():number=>{
    return (1+1);
}

// console.log("Return type mentioned value is "+temp2());

//optional parameter function

function mult(a?:number,b?:number){
    console.log(`
    Value of A is ${a}
    Value of B is ${b}
    Value of a*b ${a*b}
    `);
}

// mult();

function mult1(a?:string,b?:string){
    console.log(`
    Value of A is ${a}
    Value of B is ${b}
    Value of a*b ${a+b}
    `);
}

var temp3=(a:number,b?:number)=>{
    console.log(`
    Value of A is ${a}
    Value of B is ${b}
    Value of a*b ${a*b}
    `);
}

// temp3(5);


//Default parameter Function

function mutl2(a:number=3,b:number=2){
    console.log(`
    Value of A is ${a}
    Value of B is ${b}
    Value of a*b ${a*b}
    `);

}

//mutl2();

//Function Constructor

var temp4=new Function("a1","a2","console.log(a1+a2)");

// temp4(7,7);

var temp5=new Function("b1","b2",`
    console.log(b1)
    console.log(b2)
    console.log(b1+b2)
`);

temp5(8,8);

//Rest parameter Function








