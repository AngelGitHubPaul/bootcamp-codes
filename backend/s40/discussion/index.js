// Set up dependencies
const express = require("express");
const mongoose = require("mongoose");
// This allows us to use all the routes defined in "taskRoute.js"
const taskRoute = require("./routes/taskRoutes")

// Server setup
const app = express();
const port = 4000;

// MongoDB Connection
mongoose.connect("mongodb+srv://admin:admin123@b402-course-booking.5g84hfd.mongodb.net/b402-todo?retryWrites=true&w=majority&appName=b402-course-booking")

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", () => console.log("We're connected to MongoDB Atlas"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Allows all the task routes created in the "taskRoute.js" file to use "/tasks" route
// Any incoming HTTP requests whose paths start with "/tasks" will be routed to the taskRoute for further processing.
app.use("/tasks", taskRoute);



// Server listening
if(require.main === module) {
	app.listen(port, () => console.log (`Server is running at port ${port}`));
}

module.exports = {app};