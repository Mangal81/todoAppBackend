const express = require('express')
const app = express();


app.listen(3000, ()=>{
	console.log("app is running")
})

app.get('/',(req, res)=>{
	res.send("This is default route")
})

