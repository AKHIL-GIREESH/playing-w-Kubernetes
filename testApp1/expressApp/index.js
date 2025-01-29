const express = require("express");
require("dotenv").config()

const app = express();

app.get("/",(req,res) => res.status(200).send(`<h1>This is a Container running in a Pod </h1>`) );

app.listen(3000,() => console.log("Server is Up and running 🚀"));

