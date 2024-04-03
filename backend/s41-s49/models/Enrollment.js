const mongoose = require("mongoose");

// Schema
const enrollmentSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: [true, "User ID is required"]
	},
	enrolledCourses: [
		{
			courseId:{
				type: String,
				required: [true, "Course ID is required"]
			}
		}
	],
	totalPrice: {
		type: Number,
		required: [true, "Total price is required"]
	},
	createdOn: {
		type: Date,
		default: Date.now
	},
	status: {
		type: String,
		default: "Enrolled"
	}
})

// Model
module.exports = mongoose.model("Enrollment", enrollmentSchema);

