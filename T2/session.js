/* NOTES QUES
 write a script to meet following requirements: Create index.html file page which contains form(username, password, login button). and open it on localhost.After clicking submit button, it should jump on“ savesession” page.Store username and password in session.After saving session, redirect to“ fetchsession” page and read value.Put a LOGOUT
 link here.Jump on delete session page after clicking LOGOUT link.Destroy the session on this page and redirect to index.html page.*/
var express = require("express");
var app = express();
var es = require("express-session");
app.use(es({
    resave: true,
    saveUninitialized: false,
    secret: "123"
}));
app.use(express.static(__dirname));
app.get("/savesession", (req, res) => {
    req.session.uname = req.query.uname;
    req.session.password = req.query.password;
    res.redirect("fetchsession")
})
app.get("/fetchsession", (req, res) => {
    res.write("<h1>Welcome " + req.session.uname + "</h1>")
    res.write("<a href='/deletesession'>Logout</a>")
    res.send();
});
app.get("/deletesession", (req, res) => {
    req.session.destroy()
    res.redirect('/')
});
app.listen(6179);