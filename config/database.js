const mongoose = require("mongoose");
require("dotenv").config(); // impoting dotenv to fetch value from .env file

const DB_URL = process.env.DB_URL;

//creating function to create connection from database

const db_connect = () => {
	mongoose.connect(DB_URL)
	.then(()=>{
		console.log("Connection stablished to the database successfully");
	})// sending response on success
	.catch((e) => {
		console.log("Can't stablish the connection to the database");
		console.error(e.message);
	})// sending response on fail
}

// exporting function
module.exports = db_connect;