const mongoose = require("mongoose");

// Schema
const courseSchema = new mongoose.Schema({
  	name: {
  		type: String,
  		required: [true, "Course name is required"]
  	},
  	description: {
  		type: String,
  		required: [true, "Course description is required"]
  	},
	price: {
		type: Number,
		required: [true, "Price is required"]
	},
	isActive: {
		type: Boolean,
		default: true
	},
  dateCreated: {
		type: Date,
		default: Date.now
	},
})

// Model
module.exports = mongoose.model("Course", courseSchema);