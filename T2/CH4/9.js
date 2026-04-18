// design a node js application using express JS to satify following req
// 1. the first middleware should display a msg " first func executed "
// 2. the second middleaware should display a msg "second func executed"
// 3. the third middleaware should perform a simple arithmetic operation and store result in req object then display in console apply all 3 ml func in sequence to a single route "/class". final response should be thank u msg 
const express = require('express');
const app = express();
const addone = (req, res, next) => {
    res.write("First fun executed");
    next();
};

const addtwo = (req, res, next) => {
    res.write("second func executed");
    next();
}
const addthree = (req, res, next) => {
    res.total = 50 + 40;
    console.log(req.total);
    next();
}
app.get("/class", addone, addtwo, addthree, (req, res) => {
    res.write("Thank You");
    res.end()
});
app.listen(4054);