
const express = require("express");             //import express library
const port = 9000;                              //declaring and defining port no
const app = express();                         //adding functionality of express
const path = require("path");                  //importing path for views

// establishing connection with database via mongoose
const db = require("./config/mongoose")

//middleware to take data from the form
app.use(express.urlencoded());

//directing app to assests folder for using static files: css,images,scripts
app.use(express.static("./assests"));

// setting and configuring path of view engine
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// setting up routes
app.use('/', require("./routes"));

app.listen(port, function(err){
    // if error is encountered in starting the server
    if(err){
        console.log("Error in starting the express server ", err);
        return;
    }

    console.log(`The server is up and started at port : ${port}`);
});