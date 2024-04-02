const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

// MongoDB Connection
mongoose.connect("mongodb+srv://admin:admin123@b402-course-booking.5g84hfd.mongodb.net/b402-todo?retryWrites=true&w=majority&appName=b402-course-booking")

// Sets notifications for connection success or failure
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", () => console.log("We're connected to MongoDB Atlas"));

// allows to read json data
app.use(express.json());
//  allows to read data from forms
app.use(express.urlencoded({extended:true}));

// Mongoose Schemas
// Schemas determine the structure of the documents to be written in the database
// Schemas act as a blueprint of our data
// Schema() constructor to create a new Schema object
const taskSchema = new mongoose.Schema({
	name: String,
	status: {
		type: String,
		// Default value = predefined value for a field if we don't put any value
		default: "pending",
	}
})

const userSchema = new mongoose.Schema({
	firstName: String,
	email: String,
	password: String
})

// Mongoose Model
// Uses schemaas to create/instantiate objects that correspond to schema
// "Task" - indicates the collection in where to store the data
// "taskSchema" - specifies the schema/blueprint of the documents to be stored in the collection
const Task = mongoose.model("Task", taskSchema)


// Routes

// Creating a new task 
// Business Logic
/*
	1. Add a functionality to check if there are duplicate tasks
	    - If the task already exists in the database, we return an error
	    - If the task doesn't exist in the database, we add it in the database
	2. The task data will be coming from the request's body
	3. Create a new Task object with a "name" field/property
	4. The "status" property does not need to be provided because our schema defaults it to "pending" upon creation of an object
*/
app.post("/tasks", (req, res) => {

	Task.findOne({name: req.body.name}).then((result, err) => {
		// console.log(err);
		if(result !== null && result.name == req.body.name) {
			return res.send("Duplicate task found");
		} else {

			// Creates a new task
			let newTask = new Task({
				name: req.body.name
			});
			//  Saves the newTask to the database
			newTask.save().then((savedTask, saveErr) => {

				if(saveErr){
					return console.log(saveErr);
				} else {
					return res.send("New task created");
				}
			})
		}
	})

})

// Getting all the tasks
app.get("/tasks", (req, res) => {
	Task.find({}).then((result, err) => {
		
		// if an error occured
		if(err) {
			return console.log(err);
		// If no errors are found
		} else {

			return res.send(result)
		}
	})
})


if(require.main === module) {
	app.listen(port, () => console.log (`Server is running at port ${port}`));
}

module.exports = {app};