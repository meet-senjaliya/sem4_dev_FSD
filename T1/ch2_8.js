var fs=require("fs");
fs.writeFile("sorce1.txt","The north rememberes",(err)=>{
    if(err)throw err;
    console.log("Sorce File Created");
    fs.readFile("sorce1.txt","utf-8",(err,data1)=>{
        if(err)throw err;
        console.log("Sorce File completed.");
        fs.writeFile("destination1.txt",data1,(err)=>{
            console.log("Destination file created")
            fs.readFile("destination1.txt","utf-8",(err,data)=>{
                if(err)throw err;
                console.log("Destination File completed");
                console.log(data);
            })
        })
    })
})