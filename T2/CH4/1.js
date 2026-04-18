const express = require('express');
const app = express();
app.get('/', function (req, res) {
    // res.set('content-type',"text/plain")
    res.send("<i>HII</i>") // write + end .. send sets the content automaticaliy
    // res.end();
});

app.get("/about", (req, res) => {
    res.set("content-type", "text/html");
    res.write("<h2>Hiee</h2>")
    res.end()
});
app.listen(3601);