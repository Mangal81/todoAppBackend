const express = require("express");
const app = express();
const db_connect = require('./config/database');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
	console.log(`App is running on ${PORT}`)
})

app.get('/',(req, res)=>{
	res.send("This is default route")
})

db_connect();