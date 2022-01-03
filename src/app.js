const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// public static path
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));


// routing 
app.get("", (req, res)=>{
    res.send("welcome to my home page :)")
})
app.get("/about", (req, res)=>{
    res.send("welcome to my about page :)")
})
app.get("/weather", (req, res)=>{
    res.send("welcome to my weather page :)")
})
app.get("*", (req, res)=>{
    res.send("404 error page!")
})

app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`);
})