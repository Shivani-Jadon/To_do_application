const express = require("express");
const route = express.Router();

const new_task = require("../controller/add_new_task")

console.log("New task Route Loaded");

route.post("/", new_task.addTask);

module.exports = route;