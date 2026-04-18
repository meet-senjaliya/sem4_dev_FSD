// write express js script to define one json array of 3 objects having properties name and  age . sort this obj acc to age . if user req sorted name in url then all names along with age should be printed acc to descending order of age. also display this sorted values on sort page and display json object on home page 
const express = require('express');
const app = express();
student = [
    { name: 'abc', age: 28 },
    { name: 'xyz', age: 21 },
    { name: 'pqr', age: 20 }
]

app.get("/", (req, res) => {
    res.send(student);
});

app.get("/sort", (res, req) => {
    res.set("content-type", "text/html");
    var des = student.sort((a, b) => b.age - a.age);
    for (k of des) {
        res.write(k.name + "=" + k.age)
    }
    res.send();
})
app.listen(3606);