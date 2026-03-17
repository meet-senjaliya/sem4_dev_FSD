// READ data from file and sort that data in asc order using .sort() function

var ps = require("fs")
ps.writeFileSync("s1.txt","50 -1 99 100 20 0 56 78 59");

data = ps.readFileSync("s1.txt","utf-8");
console.log(data);
data1 = data.split(" ");
console.log(data1);


d = data1.sort((a,b)=>a-b);
console.log(d);

