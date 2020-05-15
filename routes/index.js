const express = require("express");
const route = express.Router();

console.log("Route Loaded");

const to_do_app = require("../controller/to_do_app");

// get request to the to_do_app controller
route.get("/to_do_app", to_do_app.application);

//route.use()
//routing to route new_task for adding new task
route.use("/add_new_task", require("./new_task"));

//routing to route delete_tasks for deleting task
route.use("/delete_tasks", require("./deleteTasks"))

module.exports = route;