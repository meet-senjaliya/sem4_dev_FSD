// write express js script to request server to display json object on browser 
const express = require('express');
const app = express();

student = {
    name: "FSD",
    lec: 3
}
app.get("/", (req, res) => {
    // res.set("content-type","application/json");
    res.send(JSON.stringify(student));
    // res.end();
});
app.listen(3605);