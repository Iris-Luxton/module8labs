const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();

app.use(express.json());
app.use(cors());

const router = require("./router/router");
app.use("/", router);


var PORT = 3000;
 
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});