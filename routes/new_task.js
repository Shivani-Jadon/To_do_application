const express = require("express");
const route = express.Router();

// storing information of the controller for task deletion
const new_task = require("../controller/add_new_task")

console.log("New task Route Loaded");

//routing the post requeszt to the task insertion in database controller
route.post("/createTask", new_task.addTask);

module.exports = route;