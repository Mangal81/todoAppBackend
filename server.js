const express = require('express')
const mongoose = require('mongoose')
const app = express();
app.use(express.json());

app.listen(3000, ()=>{
	console.log("app is running")
})

app.get('/',(req, res)=>{
	res.send("fuck off motherfucker")
})

app.post('/hell',(req, res)=>{
	const {name} = req.body;
	console.log(name);
})

mongoose.connect('mongodb://0.0.0.0:27017/')
.then(()=>{
	console.log("connected")
})
.catch((e)=>{
	console.log(e);
})


