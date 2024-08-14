const mongoose = require("mongoose"); //importing mongoose to use todo schema
const TodoSchema = require("../model/todoSchema"); // importing todo schema

const getTodo = async (request, response) =>{
	try {
		const todo = await TodoSchema.find({});
		response.status(200).json({
			success:true,
			data:todo,
			message:"Todo fetched successfully"
		})
	} 
	catch (error) {
		response.status(500).json({
			success:false,
			message:"Internal server Error"
		})
	}
}

const getTodoById = async (request, response) => {
	try{
		const {id} = request.params;
		const todo = await TodoSchema.find({_id:id});
		//console.log(todo);
		if(!todo){
			response.status(404).json({
				success:false,
				message:"Todo not found"
			})
		}
		else{
			response.status(200).json({
				success:true,
				data:todo,
				message:"Todo fetched successfully"
			})
		}
	}
	catch(e){
		console.log(e);
		response.status(500).json({
			success:false,
			message:"Internal server Error"
		}) // sending response on failer
	}
	
}

module.exports = {getTodoById, getTodo}; // exporting createTodo function to use in route file

