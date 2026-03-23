/* var pm = require('path');
path = pm.dirname("D:/LJ/abc.html");
console.log(path);
path1 = pm.basename("D:/LJ/abc.html");
console.log(path1);
ext = pm.extname("D:/LJ/abc.html");
console.log(ext)
path2 = pm.parse("D:/LJ/abc.html");
console.log(path2);

if (path2.ext == ".html") {
    console.log('Allow');
} else {
    console.log("Don't Allow")
}
 */


// -------------------------------------------------------------------------------------------
//                                                       LEFT |


// write a node js script that perform the following operation using the path module and async file system module
// 1. from the given existing file path (lj/sample.txt) extract the direc name using path module creat the extracted directory inside an existing folder using FS module. extract the file name from the given path. Cretae that file inside the newly created directory and write some data into it .
// copy the content of this file to another file(timeStamp.txt) . delete the org file after copying the content

/* const fs = require("fs");
const pm = require("path");

let oldpath = "LJ/sample.txt";
let dir = pm.dirname(oldpath);
let fileName = pm.basename(oldpath);

let newFilepath = dir +"/"+fileName;
fs.mkdir(dir,(err)=>{
    if(err) throw err;
    console.log("Directory Created :",dir);
})

fs.writeFile(newFilepath,"",(err)=>{
    if(err) throw err;
    console.log("original file create")
}) */