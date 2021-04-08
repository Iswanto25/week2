const express = require("express");
const app = express();
const port = process.env.port || 3001
const mainRouters = require("./src/routers/");

app.use(express.urlencoded({extended: false}));

app.use("/", mainRouters);

app.listen(port,() =>{
    console.log("server is running "+ port);
});