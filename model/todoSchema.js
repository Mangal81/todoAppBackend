const mongoose = require("mongoose");

// creating todo schema

const todoSchema = new mongoose.Schema(
	{
		title:{
			type:String,
			required:true,
		},
		description:{
			type:String,
			required:true,
		}
	}
);

// exporting schema
module.exports = mongoose.model("Todo", todoSchema);





