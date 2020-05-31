//storing the information of the database schema
const taskDetails = require("../models/task_model");

// redirecting to the to_do_app web page
module.exports.application = function(req, res){
    //fetching the data from database and displaying o the screen
    taskDetails.find({}, function(err, tasks){
        if(err){
            console.log("Error in reading from the view ", err);
            return res.redirect("error");
        }
    
        // rendering the app page from views
        return res.render("appPage", {title: "My to do app",
                                  task_list: tasks});
    });

}

