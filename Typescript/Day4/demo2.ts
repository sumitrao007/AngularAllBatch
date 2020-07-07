var arr1=[1,2,3,4];
// for(let i=0;i<arr1.length;i++){
//     console.log("Value of Arr is "+arr1[i]);
// }

/**/ 

// arr1.forEach( value => {
//     console.log("Value is "+value);
// }

// );
// arr1.forEach( (value,i) => {
//     console.log("2nd for each Value is "+value+" Whose index is "+i);
// }
// );

var arr2:number[]=[10,20,30,40];

// console.log("value of arr2 is "+arr2);

// console.log("1 Print Array using Join Function "+arr2.join(" "));
// console.log("2 Print Array using Join Function "+arr2.join(" $ "));


var arr3:number[]=[];
//using LIFO Principal
// console.log("value of arr3 is "+arr3);
arr3.push(21);
// console.log("value of arr3 is "+arr3);
arr3.push(22);
// console.log("value of arr3 is "+arr3);
arr3.push(23);
arr3.push(24);
arr3.push(25);
// console.log("value of arr3 is "+arr3);
var temp1=arr3.pop();
// console.log("Temp1 poped value is "+temp1);
// console.log("value of arr3 is "+arr3);

//Rest parameter Function
function myfun(a:string,...item:number[]){
    console.log("value of Item is "+item.join("  "));

}

// myfun();
myfun("f",2,3);
 myfun("h",4,5,6,7,8);





