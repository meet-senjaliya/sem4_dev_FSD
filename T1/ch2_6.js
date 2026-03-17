// write a node JS program to manage student data. The prog. should perform the following tasks.
// 1. Create a directory named "Student Data". 
// 2. Inside the directory ,  Create a JSON file named students.json containing student records with name and marks      (array of 3 objs).
// 3. Read the JSON file, convert it into JS object and display all the student record in console. 
// 4. Display students who scored more than 75 marks using loops and condition.
// 5. Finally remove the file and the directory.

const fs = require("fs");
fs.mkdirSync("Student data")
console.log("Directory Created")

let students = [
    {'name':"Rahul","marks":80},
    {'name':"Mohan","marks":70},
    {'name':"Meet","marks":50},
]

fs.writeFileSync("studentData/students.json",
    JSON.stringify(students)
);

console.log("file created");

let data = JSON.parse(fs.readFileSync("studentData/students.json","UTF-8"));
console.log("Student List");
console.log(data);

