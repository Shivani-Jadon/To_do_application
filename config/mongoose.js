const mongoose = require("mongoose");

// creating connection with mongodb database at localhost
mongoose.connect("mongodb://localhost/taskList_db");

//storing connection information in database
const db = mongoose.connection;

//displaying error if error is encountered on connecting with database
db.on('error', console.error.bind("Error in connecting to database:"));

//once the connection is established the following msg will be printed on console
db.once('open',function(){
    console.log("Local Server Successfully connected to database");
});

//exporting the connection information
module.exports = db;