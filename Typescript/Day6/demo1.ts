//json object
// java script object Notation
//data should be in key & value format
//Json use dot notation

var jsonObj={
    firstname:"Sumit",
    lastname:"Raokhande",
    id:1
};
//parsing of a json/retrive the data

// console.log("First name is "+jsonObj.firstname);
// console.log("Id  is "+jsonObj.id);

// console.log("First name Using Square notation "+jsonObj['firstname']);

//Array of Object

var arrobj=[
        {
            fname:"Sumit",
            lname:"Raokhande",
            rollno:1
        },
        {
            fname:"Kiran",
            lname:"Raokhande",
            rollno:2
        },
        {
            fname:"Spruha",
            lname:"Raokhande",
            rollno:3
        }        
];

// console.log("0th index Data is --------------- ");
// console.log("First Name "+arrobj[0].fname);
// console.log("Last Name "+arrobj[0].lname);
// console.log("Roll No. "+arrobj[0].rollno);
console.log("================================");
// for(let i=0;i<arrobj.length;i++){
    
//     console.log("First name "+arrobj[i].fname);
//     console.log("Last name "+arrobj[i].lname);
//     console.log("Roll No.  "+arrobj[i].rollno);
//     console.log("-------------------- ");
// }

// Industry Json

var indusjson={
        status:"Success",
        data:[
            {
                prodname:"Shahi Utane",
                quantity:1,
                weight:"30gm",
                price:30
            },
            {
                prodname:"Gulab Utane",
                quantity:1,
                weight:"30gm",
                price:30
            },
            {
                prodname:"Sadhe Utane",
                quantity:1,
                weight:"30gm",
                price:20
            }
        ],
    error:"Invalid",
    location:{
        area:"Sainik School",
        city:"satara",
        pincode:415001,
        state:"MH"
    }
};

console.log("Status is "+indusjson.status);
console.log("Error is "+indusjson.error);
console.log("------------------------------");
for (let i = 0; i < indusjson.data.length; i++) {
    
    console.log("Product Name "+indusjson.data[i].prodname);
    console.log("Quantity "+indusjson.data[i].quantity);
    console.log("Weight "+indusjson.data[i].weight);
    console.log("Price "+indusjson.data[i].price);
    console.log("-----------------------------------");    
}

console.log(`
------------------------------------------------
----------------Location Data is ----------------------
    Area : ${indusjson.location.area}
    city : ${indusjson.location.city}
    Pincode: ${indusjson.location.pincode}
    State : ${indusjson.location.state}
`);





