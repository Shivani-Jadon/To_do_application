// importing mongoose library
const mongoose = require("mongoose");

// designing the schema for storing task database
const task_schema = new mongoose.Schema({
    // data fields and 
     task : {
         type: String,
         required : true
     },
     category : {
         type : String
     },
     deadline : {
         type: Date,
         required: true
     } ,
     priority : {
         type : String
     }
});

//modelling collection of data to store schema
const taskDetails = mongoose.model('taskDetails', task_schema);

//exporting infromation of the database schema storing task details
module.exports = taskDetails;