//storing the information of the database schema 
const taskDetails = require("../models/task_model");

//function to add data in the database and send response
module.exports.addTask = function(req,res){
    
    taskDetails.create({
        task : req.body.task,
        category : req.body.category,
        deadline : req.body.deadline,
        priority : req.body.priority
    }, function(err, newTask){

            if(err){
                console.log("error in updating in database ", err);
                return;
            }

            return res.redirect("back");    //back will take you to the previous page
    })

}