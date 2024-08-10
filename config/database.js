const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

const db_connect = () => {
	mongoose.connect(DB_URL)
	.then(()=>{
		console.log("Connection stablished to the database successfully");
	})
	.catch((e) => {
		console.log("Can't stablish the connection to the database");
		console.error(e.message);
	})
}


module.exports = db_connect;