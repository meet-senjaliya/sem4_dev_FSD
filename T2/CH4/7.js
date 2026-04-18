const express = require("express");
const app = express();

app.get("/user/:id", (req, res) => {
    const userID = req.params.id;
    const name = req.params.name;
    const age = req.query.age;

    res.json({
        message: "Data recieved",
        params: {
            id: userID
        },
        query: { name, age }
    });
});
app.listen(4513);