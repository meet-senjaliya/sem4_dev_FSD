/*write express js script to perform the task as asked below
1. add one form which contains userID,password and submit button
2. data should be submitted by http post method.
3. on home page form should be displayed and while submitting the form , on next page (/login), if username is admin then it will display welcome admin. else display "plz login with admin name (in red colr)"
*/

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send(`<form action="/login" method="post">
        <input type = "text" name="uname"/>
        <input type = "password" name="pswd"/>
        <input type = "submit" value="Submit"/>
    </form>`)
})
app.post("/login", (req, res) => {
    if (req.query.uname == "admin") {
        res.write("welcome:" + req.body.uname)
    }
    else {
        res.send("<h2 style='color: red'>PLz login as admin</h2>")
    }
});
app.listen(6009);