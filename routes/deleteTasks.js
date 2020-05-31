const express = require("express");
const route = express.Router();

// storing information of the controller for task deletion
const task_deletion = require("../controller/app_delete_task");

console.log("deletion task route loaded");

//routing the post requeszt to the deletion controller
route.post("/delete",task_deletion.deletion_of_task);

module.exports = route;
