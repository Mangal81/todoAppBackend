const express = require("express"); // importing express to create route

const route = express.Router();

const createTodo = require('../controller/createTodo'); // importing createTodo function 
const {getTodoById, getTodo} = require('../controller/getTodo'); // importing getTodo function 



route.post("/createTodo",createTodo); // creating routes
route.get("/getTodoById/:id",getTodoById); // creating routes
route.get("/getTodo",getTodo); // creating routes



module.exports = route; // exporting route to use in server.js file
