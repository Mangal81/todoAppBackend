const mongoose = require("mongoose"); //importing mongoose to use todo schema
const TodoSchema = require("../model/todoSchema"); // importing todo schema

const createTodo =async (request, response) => {
	try{
		const {title, description} = request.body; // fetching value of title and description from request ki body
		console.log(title, description);
		const todo = await TodoSchema.create({title, description}); // saving data in database
		response.status(200).json({
			success:true,
			data:todo,
			message:"Entry created successfully"
		}) // sending response on success

	}
	catch(e){
		console.log(e);
		response.status(500).json({
			success:false,
			message:"Internal servar error"
		}) // sending response on failer
	}
	
}


module.exports = createTodo; // exporting createTodo function to use in route file

