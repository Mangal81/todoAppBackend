const mongoose = require("mongoose"); //importing mongoose to use todo schema
const TodoSchema = require("../model/todoSchema"); // importing todo schema

const deleteTodo = async (request, response) =>{
	try {
		const {id} = request.params;
		const todo = await TodoSchema.findByIdAndDelete(id);
		response.status(200).json({
			success:true,
			data:todo,
			message:"Todo deleted Successfully"
		})
	} 
	catch (error) {
		response.status(500).json({
			success:false,
			message:"Internal server Error"
		})
	}
}


module.exports = deleteTodo;