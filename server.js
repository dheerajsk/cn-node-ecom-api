const express = require("express");

const server = express();

server.get("/",(req, res)=>{
    res.send("Server is Ready at 4100");
})

server.listen(4100);

console.log("Server is listening on 4100");