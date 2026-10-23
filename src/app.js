
const express = require("express");

const app = express();

app.use("/hello ",(req, res) => {
    res.send("Namaste from the Dashabord!");
});

app.listen(3000, ()=> {
    console.log("Server is successfully listening on port 3000")
});

 