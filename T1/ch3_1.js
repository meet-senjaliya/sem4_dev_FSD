/* var url = require("url");
var a = 'https://video.co:8080/video?doc= -01&hl=en#Hello';
var b = url.parse(a,true);
console.log(b);
process.noDeprecation = true; */


// ------------------------------------------
/* Write a node js script to fetch the query string from the static url and check if year is leap year or not.*/

/* var u = require("url")
var addr = "http://localhost:8080/default.html?year=2025&month=feb"

var q = u.parse(addr,true)
console.log(q)

qdata = q.query;
console.log(qdata.year);
if(qdata.year%4==0){
    console.log("its a leap year");
}
else{
    console.log("its not a leap year");
} */

// Write a node js script to print query string of url in file (fsd.txt) using es6 callback function


// var u = require('url');
// var ps =require('fs');

// var addr = "http://localhost:8080/default.html?year=2025&month=feb";
// var q = u.parse(addr);






// write a node js prog to parse a url and calc the avg of 3 numbers passed as a query parameters.

var u = require('url');
var addr = "http://localhost:8080/default.html?year=2025&month=feb";
var q = u.parse(addr,true);
console.log(q.query);
console.log(typeof(q.query.m1));
var m1 = parseInt(q.query.m1);
var m2 = parseInt(q.query.m2);
var m3 = parseInt(q.query.m3);
var avg = (m1+m2+m3)/3;
console.log(avg);