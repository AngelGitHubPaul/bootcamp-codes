require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");

// Google Login
const passport = require("passport");
const session = require("express-session");
require('./passport')

// Allows access to routes defined within our application
const userRoutes = require("./routes/user");
const courseRoutes = require("./routes/course");
const port = 4000;

const app = express();

// Google Login
// Creates a sessioon with given data
app.use(session({
	secret: process.env.clientSecret,
	resave: false,
	saveUninitialized: false
}))

// Initializes the passport package when the application runs
app.use(passport.initialize());
app.use(passport.session());


// MongoDB Connection
mongoose.connect("mongodb+srv://admin:admin123@b402-course-booking.5g84hfd.mongodb.net/course-booking-API?retryWrites=true&w=majority&appName=b402-course-booking");

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Now connected to MongoDB Atlas"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Groups all routes in userRoutes under "/users" and courseRoutes under "/courses"
app.use("/users", userRoutes);
app.use("/courses", courseRoutes);


if(require.main === module) {
	app.listen(process.env.PORT || port, () => {
		console.log(`API is now online on port ${ process.env.PORT || port}`);
	})
}

module.exports = {app, mongoose};