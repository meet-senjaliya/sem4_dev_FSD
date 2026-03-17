/*
write node js script that a async. writes a data to a file Test.js.
if no error occurs during the writing process , the script should then append additional data to the same file.
finally it should read the content from the file and display in the console.
*/

/*
    fs = require('fs');
    fs.writeFile('test.js','Hello',(err)=>{
        if(err) throw err;
        else{
            fs.appendFile('test.js','World',(err)=>{
                if(err) throw err;
                else{
                    fs.readFile('test.js','utf-8',(err,data)=>{
                        if(err) throw err;
                        else{
                            console.log(data)
                        }
                    })
                }
            })
        }
    })
*/



// ---------------------------------------------------------------------------------------------------------------------



// write node js script to write an array of objects with properties name and age in a file named student.txt then read the files and display the object on console.
/*

const Student = [
    {
        name: 'ABC',
        age: 20
    },
    {
        name: 'ABC',
        age: 20
    }
]

var fs = require("fs");
fs.writeFileSync("files/student.txt", JSON.stringify(student));
const data = ps.readFileSync("files/student.txt")
*/


//---------------------------------------------------------------------------------------------------------------------


// create a json object which contain array of objects . Calc the perimete of square and perimeter of circle by using side value and diameter value respectively write obj as well as perimeter values of sq nd circle in shape.txt file.

/* const shape = [
    {
        name:"circle",
        diameter : 8
    },
    {
        name:"square",
        side:10
    }
]

var ps = require("fs");
ps.writeFileSync("shape.txt",JSON.stringify(shape));
data = ps.readFileSync("shape.txt","utf-8");
b = JSON.parse(data);

var perimeter = (b[0].diameter)*3.14;
console.log(perimeter);
var peri = (b[1].side)*4;
console.log(peri);
ps.appendFileSync("shape.txt","\n perimeter of circle="+ perimeter+"\n perimeter of sq is"+peri) */


// ----------------------------------------------------------------------------------------------------------------




/*   write node js script and JSON to perform below task
write below obj in s2.txt file
read data from the same file and perform below task
    1. add a and b
    2. subtract second element of c and b (must be positive)
    3. Add the output of addition and substraction below the object in the file
 */

var fs = require("fs")
const data = {
    d:{
        a:10,
        b:20,
        c:[10,20]
    }
}

fs.writeFileSync("s2.txt",JSON.stringify(data));
data1=fs.readFileSync("s2.txt","utf-8");
data2 = JSON.parse(data1);
add = data2.d.a + data2.d.b;
sub = Math.abs(data2.d.c[1]- data2.d.b)
console.log(sub)
console.log(add)