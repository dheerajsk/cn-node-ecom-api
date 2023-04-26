const express = require("express");
const productRoutes = require("./src/routes/product.routes");

const server = express();

server.use(express.json());

server.use("/api/products", productRoutes);
server.get("/",(req, res)=>{
    res.send("Server is Ready at 4100");
})

server.listen(4100);

console.log("Server is listening on 4100");