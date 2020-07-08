var arr1:number[]=[10,20];
// console.log("Display Original array "+arr1);
//splice function


// arr1.splice(1,0,30);
// console.log("Display the array "+arr1);
/*

arr1.splice(1,0,30);
console.log("30 Data is insertated "+arr1);
arr1.splice(1,0,40);
console.log("40 Data is insertated "+arr1);
arr1.splice(2,1);
console.log(" Data is Deleted "+arr1);
arr1.splice(2,1,50);
console.log("30 Data is Replaced "+arr1);

arr1.splice(1,0,60,70,80);
console.log("Dispaly the Array "+arr1);

arr1.splice(3,3);
console.log("Dispaly the Deleted Array "+arr1);
arr1.splice(1,0,60,70,80);
console.log("-----------------------------");
console.log("Dispaly the Array "+arr1);
arr1.splice(0,3);
console.log("Dispaly the Array "+arr1);
*/

//Slice

var arr2:number[]=[20,30,60,80,70,10];

var temp1=arr2.slice(1,3);
// console.log("Dispaly The Original Array "+arr2);
// console.log("Dispaly The Copied Array "+temp1);

//map function

var arr3=[1,2,3,4,5];

var temp2=arr3.map((myvalue)=>{
    return (myvalue*myvalue);
}
);
// console.log("Original Array "+arr3);
// console.log(`
// --------------------------------
// Square value is ${temp2}
// --------------------------------
// `);
// console.log("Original Array "+arr3);


// var temp3=arr3.map((element,i)=>{

//     if(i==2 || i==4){
//         return (element*element);
//     }
// });

// console.log("================================");
// console.log("Original Array "+arr3);
// console.log(`
// --------------------------------
// Square value is ${temp3}
// --------------------------------
// `);
// console.log("Original Array "+arr3);

function getsquare(element:number){
    return (element*element);
}

var temp4=arr3.map(getsquare)

// console.log("Value of Temp    "+temp4.join(" "));

//tuple

var arr4=[2,'Sumit',true,3.14];

console.log("Display the tuple Value is "+arr4.join("  "));






