const taskDetails = require("../models/task_model");

// redirecting to the to_do_app web page
module.exports.application = function(req, res){

    taskDetails.find({}, function(err, tasks){
        if(err){
            console.log("Error in reading from the view ", err);
            return;
        }
    
        return res.render("appPage", {title: "My to do app",
                                  task_list: tasks});
    });

}

