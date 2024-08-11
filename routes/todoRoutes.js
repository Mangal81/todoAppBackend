const express = require("express"); // importing express to create route

const route = express.Router();

const createTodo = require('../controller/createTodo'); // importing createTodo function 

route.post("/createTodo",createTodo); // creating routes


module.exports = route; // exporting route to use in server.js file
