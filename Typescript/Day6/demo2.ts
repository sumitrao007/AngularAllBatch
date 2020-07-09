var institute={
    name:"Shree Enggg",
    location:{
        area:"Powai naka",
        city:"satara",
        pincode:415001,
        state:"MH"
    },
    data:[
        {
            rollno:10,
            months:['jan','march','april'],
            marks:[25,30,45]
        },
        {
            rollno:11,
            months:['jan','march','april'],
            marks:[45,35,25]
        },
        {
            rollno:12,
            months:['jan','march','april'],
            marks:[0,0,0]
        }
    ]
};

console.log("Inst. Name :: "+institute.name);
console.log("Location -------");
console.log(`
------------------------------------------------
----------------Location Data is ----------------------
    Area : ${institute.location.area}
    city : ${institute.location.city}
    Pincode: ${institute.location.pincode}
    State : ${institute.location.state}
`);
console.log("---------------------------------------------");
for (let i = 0; i < institute.data.length; i++) {
    
    console.log("Month is "+institute.data[i].months.join("  "));
    console.log("Marks is "+institute.data[i].marks.join("  "));
    console.log("---------------------------------------------");

    
}