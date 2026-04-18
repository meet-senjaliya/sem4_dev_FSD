const express = require('express');
const app = express();
app.get("/user/:id", (req, res) => {
    const userID = req.params.id;
    res.send("showing profile for user:" + userID);
});
app.listen(3607)