// Controllers contain all the functions and business logic of our application
const Task = require("../models/Task")

module.exports.getAllTasks = () => {

	return Task.find({}).then(result => {
		return result;
	})
}

// Controller for creating a task
module.exports.createTask = (reqBody) => {

	let newTask = new Task({
		name: reqBody.name,
	})

	return newTask.save()
	.then((task) => task)
	.catch(error => false)

		// if(error){
		// 	console.log(error);
		// 	return false
		// } else {
		// 	return task;
		// }

}

// Controller for deleting a task
module.exports.deleteTask = (taskId) => {

	return Task.findByIdAndDelete(taskId)
	.then((removedTask) => removedTask)
	.catch(error = false)
}

// Controller for updating a task
module.exports.updateTask = (taskId, newContent) => {

	// "findById" method will look for a task with the same id provided in the URL
	return Task.findById(taskId).then(result => {

		// Result of the findById will be stored in the "result" parameter
		// The result "name" will be reassigned with the value of the "name" from the req body
		result.name = newContent.name;

		return result.save()
		.then((updatedTask) => updatedTask)
		.catch(err => "Update failed")

	}).catch(err => "Find failed")
}