const express = require("express");
const route = express.Router();

// storing information of the controller for task deletion
const task_deletion = require("../controller/app_delete_task");

console.log("New task Route Loaded");

console.log("deletion task route loaded");

route.post("/",task_deletion.deletion_of_task);

module.exports = route;
