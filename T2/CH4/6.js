// write 
// 1. display a form on a home page to enter user's name 
// 2. send the form data to the server using a post request
// 3. the server should read the submitted name from the req body.
// Finnally display a msg confirming the login

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
res.set("/", (res, req) => {
    <form action="/user" method="post">
        <input type="text" name="uname" />
        <button type="submit">Submit</button>
    </form>
});

app.post("/post", (req, res) => {
    const name = req.body.uname;
    res.send("User name created:" + name)
});
app.listen(5308)