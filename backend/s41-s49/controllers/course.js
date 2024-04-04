const Course = require("../models/Course");

// Create a course
/*
    Steps: 
    1. Instantiate a new object using the Course model and the request body data
    2. Save the record in the database using the mongoose method "save"
    3. Use the "then" method to send a response back to the client appliction based on the result of the "save" method
*/
module.exports.addCourse = (req, res) => {

    // Creates a variable "newCourse" and instantiates a new "Course" object using the mongoose model
    // Uses the information from the request body to provide all the necessary information
    // let newCourse = new Course({
    //     name : req.body.name,
    //     description : req.body.description,
    //     price : req.body.price
    // });

    // // Saves the created object to our database
    // return newCourse.save()
    // .then(result => res.send(result))
    // .catch(err => res.send(err))
    try {
    	let newCourse = new Course({
	        name : req.body.name,
	        description : req.body.description,
	        price : req.body.price
	    });

        return newCourse.save()
	    .then(result => res.send(result))
	    .catch(err => res.send(err))
    } catch(err) {
    	console.log(err)
    	res.send("Error in variables")
    }

}; 


// Retrieve all courses
/*
    Steps: 
    1. Retrieve all courses using the mongoose "find" method
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getAllCourses = (req,res) => {

    return Course.find({})
    .then(result => res.send(result))
    .catch(err => res.send(err))

};

module.exports.getAllActive = (req,res) => {

    return Course.find({isActive : true})
    .then(result => res.send(result))
    .catch(err => res.send(err))
}

module.exports.getCourse = (req,res) => {

    return Course.findById(req.params.courseId)
    .then(result => res.send(result))
    .catch(err => res.send(err))
};

module.exports.updateCourse = (req, res) => {

	let updatedCourse = {
		name: req.body.name,
		description: req.body.description,
		price: req.body.price
	}

	return Course.findByIdAndUpdate(req.params.courseId, updatedCourse)
	.then(course => {

		if(course) {
			res.send(true);
		} else {
			res.send(false);
		}
	})
	.catch(err => res.send(err));
}