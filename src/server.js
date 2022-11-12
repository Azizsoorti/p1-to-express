const express = require('express');
const app = express();
const port = 8000;

const path = require("path");

const staticpath = path.join(__dirname, "../public");
app.use(express.static(staticpath));

// app.get("/home", (req,res)=>{
//     res.send('welcome to ho page')
// })


app.listen(port, ()=>{
    console.log("listening to the port",port);
})