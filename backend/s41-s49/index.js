const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user")
const port = 4000;

const app = express();

mongoose.connect("mongodb+srv://admin:admin123@b402-course-booking.5g84hfd.mongodb.net/course-booking-API?retryWrites=true&w=majority&appName=b402-course-booking")

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", () => console.log("Now connected to MongoDB Atlas"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/users", userRoutes);




if(require.main === module) {
	app.listen(process.env.PORT || port, () => {
		console.log(`API is now online on port ${process.env.PORT || port}`)
	})
}

module.exports = app;