const express = require("express");
const route = express.Router();

console.log("Route Loaded");

const to_do_app = require("../controller/to_do_app");

// get request to the to_do_app controller
route.use("/to_do_app", to_do_app.application);


module.exports = route;