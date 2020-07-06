//add();

//function with  no arg & no return
function add(){
    console.log("Addition is "+(5+6));
}

//add();//call function

//function with arg & no return type

function add1(a:number,b:number){
    let res=a+b;
    console.log("Addition is "+res);
   
}
//console.log(res1);

//add1(2,3);


//function with return type & no arg

function add2(){
    return (4+4);
}

var res1=add2();
//console.log("Result of add2() is "+res1);

function add3():number
{
    return (5+5);
}

// console.log("Value of Add3() returns "+add3());

// console.log(`value of Add3() using string interpolation ${add3()}
//     its a result 
// `);

//function with arg & with return type
function add4(a:number,b:number):number{

    return (a+b);
}

console.log(` 
---------------------------------
Add4() value is ${add4(6,6)} 
----------------------------------
`);



