
var objfun={
    fname:"Sumit",
    lname:"Raokhande",
    rollno:10,
    fullname:(str1:string,str2:string)=>{
        return (str1 +" "+ str2 )
    }
}

console.log(`
        First name :: ${objfun.fname}
        Last name :: ${objfun.lname}
        Full name :: ${objfun.fullname(objfun.fname,objfun.lname)}
`);