// This file contains all the endpoints of our application

const express = require("express");
// "taskController" allows us to use the functions defined in the "taskController.js"
const taskController = require("../controllers/taskControllers")

// Allows access to HTTP method middlewares to make it easier to create routes for our application
const router = express.Router();

// [SECTION] Routes
// Route to get all tasks
// http://localhost:4000/tasks
router.get("/", (req, res) => {
	taskController.getAllTasks().then(resultFromController => res.send(resultFromController));
})


// route to create a new task
router.post("/", (req, res) => {
	taskController.createTask(req.body).then(resultFromController => res.send(resultFromController));
})


// Route for deleting a task
// ":id" is a wildcard where we can put any value, it then creates a link between the "id" parameter and the value provided in the url
router.delete("/:id", (req, res) => {
	taskController.deleteTask(req.params.id).then(resultFromController => res.send(resultFromController));
})

// Route for updating a task
router.put("/:id", (req, res) => {
	taskController.updateTask(req.params.id, req.body).then(resultFromController => res.send(resultFromController));
})


module.exports = router;