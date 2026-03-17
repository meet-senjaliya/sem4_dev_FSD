// write a node JS script to copy content of one file to another file 
// Data should be fetched from source.txt and inserted to destination.txt and read data from desination file at the end.
// perform all the task asynccronize ñ 


var fs=require("fs");
fs.writeFile("sorce.txt","The north rememberes",(err)=>{
    if(err)throw err;
    console.log("Sorce File Created");
    fs.copyFile("sorce.txt","destination.txt",(err)=>{
        if(err)throw err;
        console.log("File copied");
        fs.readFile("destination.txt","utf-8",(err,data)=>{
            if(err)throw err;
            console.log("Destination File completed");
            console.log(data);
        })
    })
})
