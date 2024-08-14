const mongoose = require("mongoose"); //importing mongoose to use todo schema
const TodoSchema = require("../model/todoSchema"); // importing todo schema

const updateTodo = async (request, response) =>{
	try {
		const {id} = request.params;
		const {title, description} = request.body;
		const todo = await TodoSchema.findByIdAndUpdate(id,{title, description});
		response.status(200).json({
			success:true,
			data:todo,
			message:"Todo Updated Successfully"
		})
	} 
	catch (error) {
		response.status(500).json({
			success:false,
			message:"Internal server Error"
		})
	}
}


module.exports = updateTodo;