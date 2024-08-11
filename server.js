const express = require("express");
const app = express(); // creating instanse of express
const db_connect = require('./config/database'); // importing function to connect database
require('dotenv').config(); // impoting dotenv to fetch value from .env file
const route = require('./routes/todoRoutes'); // importing routes

const PORT = process.env.PORT || 3000; 


app.use(express.json()); // using midleware to extract json data
app.use('/api/v1',route); // creting route

// starting app on a port
app.listen(PORT, ()=>{
	console.log(`App is running on ${PORT}`)
})

// creating default routes

app.get('/',(req, res)=>{
	res.send("This is default route")
})

// calling function to connect database
db_connect();