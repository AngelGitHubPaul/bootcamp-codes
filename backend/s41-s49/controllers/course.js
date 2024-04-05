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
    let newCourse = new Course({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price
    });

    Course.findOne({name: req.body.name})
    .then(existingCourse => {
        if(existingCourse) {
            return res.status(409).send(false)
        }
        // Saves the created object to our database
        return newCourse.save()
        .then(savedCourse => {
            return res.status(201).send(true)
        })
        .catch(err => {
            console.error("Error in saving the course:", err)
            res.status(500).send(false)
        })
    })
    .catch (err => {

        console.error("Error in finding the course", err)
        return res.status(500).send({message: "Error finding the cours"})
    })

    
}; 


// Retrieve all courses
/*
    Steps: 
    1. Retrieve all courses using the mongoose "find" method
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getAllCourses = (req,res) => {

    return Course.find({})
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err))

};

module.exports.getAllActive = (req,res) => {

    return Course.find({isActive : true})
    .then(result => {

        if(result.length > 0) {
            return res.status(200).send(result);
        } else {
            return res.status(500).send(false);
        }
    })
    .catch(err => res.status(500).send(err))
}

module.exports.getCourse = (req,res) => {

    return Course.findById(req.params.courseId)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err))
};

// Updating a course
module.exports.updateCourse = (req, res) => {

    let updatedCourse = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }

    return Course.findByIdAndUpdate(req.params.courseId, updatedCourse)
    .then(course => {

        if(course) {
            res.status(200).send(true);
        } else {
            res.status(404).send(false)
        }
    })
    .catch(err => res.status(500).send(err));

}

module.exports.activateCourse = (req, res) => {
    let activatedCourse = {
        isActive: true
    }

    return Course.findByIdAndUpdate(req.params.courseId, activatedCourse)
    .then(course => {

        if(course) {
            res.status(200).send(true);
        } else {
            res.status(404).send(false)
        }
    })
    .catch(err => res.status(500).send(err));
}

// Archive a course
module.exports.archiveCourse = (req, res) => {
    let archivedCourse = {
        isActive : false
    }

    return Course.findByIdAndUpdate(req.params.courseId, archivedCourse)
    .then(course => {

        if(course) {
            res.status(200).send(true);
        } else {
            res.status(404).send(false)
        }
    })
    .catch(err => res.status(500).send(err));
}