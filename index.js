const express = require("express");
const port = 9000;
const app = express();
const path = require("path");

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