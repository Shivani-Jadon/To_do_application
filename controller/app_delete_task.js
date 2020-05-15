//storing the information of the database schema
const taskDetails = require("../models/task_model");

//function for deletion of the selected task(s) and send response
module.exports.deletion_of_task = function(req,res){

    //deleting data from the database
    
    let task = req.body.task_id;
    console.log("deleting " ,task);                     //printing contact to be deleted on console

    //for deleting a single task 
    if(typeof(task) == "string")    //the type would be string
    {
        taskDetails.findByIdAndDelete(task, function(err){
            if(err){
                console.log("Error in deleting from database ",err);
                return;
            }
    
        });
    }
    // for deleting multiple tasks
    else    //the type would be array/object
    {
        //looping to the selected task and deleting them
        for (let id of task)
        {
            taskDetails.findByIdAndDelete(id, function(err){
                if(err){
                    console.log("Error in deleting from database ",err);
                    return;
                }
            });                
        }
    }
    
    return res.redirect("back");        //redirecting to the previous app view
}