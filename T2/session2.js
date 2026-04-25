// NOTES Write express js script using session to display how many times a user visited a website.If useris visiting a websitefor the first time then display“ Welcome!Thank youfor visiting ourwebsite!”else display the count How many times he / she has visited the websitefor thatparticular session

const express = require("express");
const app = express();
const es = require("express-session");
app.use(es({
    resave: true,
    saveUninitialized: true,
    secret: "LJU123"
}));
app.get("/", (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++;
        res.send(`<h1 style="color:blue;"> You have visited page ${req.session.page_views} times
<h1>`);
    } else {
        req.session.page_views = 1;
        res.send(`<h1 style="color:green;"> Welcome! Thank you for visiting our
website!<h1>`);
    }
});
app.listen(8003, () => { console.log("server running at http://localhost:8003"); });