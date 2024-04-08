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
        if (existingCourse){
            return res.status(409).send({error: "Course already exists"})
        }
        return newCourse.save()
        .then(savedCourse => {
            return res.status(201).send({savedCourse})
        })
        .catch(saveErr => {
            console.error("Error in saving the course:", saveErr);
            return res.status(500).send({error: "Failed to save the course"})
        });
    })
    .catch(findErr=>{
        console.error("Error in finding the course", findErr)
        return res.status(500).send({error: 'Error finding the course'})
    })

    // Saves the created object to our database
    

    // try {
    //     let newCourse = new Course({
    //         name : req.body.name,
    //         description : req.body.description,
    //         price : req.body.price
    //     });

    //     return newCourse.save()
    //     .then(result => res.send(result))
    //     .catch(err => res.send(err));
    // } catch (err) {
    //     console.log(err)
    //     res.send("Error in variables");
    // }
}; 


// Retrieve all courses
/*
    Steps: 
    1. Retrieve all courses using the mongoose "find" method
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getAllCourses = (req, res) => {

    return Course.find({})
    .then(courses => {
        if(courses.length > 0) {
            return res.status(200).send({courses});
        } else {
            return res.status(200).send({message: "No courses found."});
        }
    })
    .catch (err => {
        console.error("Error in finding all courses", err)
        return res.status(500).send({error: "Error finding courses"})
    })

};

//Retrieve all active courses
/*
    Steps: 
    1. Retrieve all courses using the mongoose "find" method with the "isActive" field values equal to "true"
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getAllActive = (req, res) => {

    Course.find({ isActive: true })
    .then(courses => {
        
        if (courses.length > 0){
            return res.status(200).send({courses})
        }else{
            return res.status(200).send({message: "no active courses found."})
        }
    }).catch(err => {
        console.error("Error in finding active courses: ", err)
        res.status(500).send({error: 'Error in finding active courses.'})
    });

};

//Retrieve a specific course
/*
    Steps: 
    1. Retrieve a course using the mongoose "findById" method
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getCourse = (req, res) => {

    Course.findById(req.params.courseId)
    .then(course => res.status(200).send(course))
    .catch(err => res.status(500).send(err));
    
};


// Updating a course
module.exports.updateCourse = (req, res) => {

    let updatedCourse = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }

    return Course.findByIdAndUpdate(req.params.courseId, updatedCourse, {new: true})
    .then(updatedCourse => {

        if(updatedCourse) {
            res.status(200).send({
                message: "Course updated successfully",
                updatedCourse: updatedCourse
            });
        } else {
            res.status(404).send({error: 'Course not found'})
        }
    })
    .catch(err => {
        console.error("Error in updating a course: ", err)
        res.status(500).send({error: "Error in updating a course."})
    });

}

//[S44 Activity]

//Archive a course
module.exports.archiveCourse = (req, res) => {
    let updateActiveField = {
        isActive: false
    }

    if(!req.user.isAdmin){
        return res.status(403).send(false)
    } else {
        return Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
        .then(course => {
            if (course) {
                res.status(200).send(true);
            } else {
                res.status(400).send(false);
            }
        })
        .catch(err => res.status(500).send(err));
    }
    
};

module.exports.activateCourse = (req, res) => {

    let updateActiveField = {
        isActive: true
    }
    
    if(!req.user.isAdmin){
        return res.status(403).send(false)
    } else {
        return Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
        .then(course => {
            if (course) {
                return res.status(200).send(true);
            } else {
                return res.status(400).send(false);
            }
        })
        .catch (err => {
            console.error("Error in activating the course", err)
            return res.status(500).send(err)
        })
    } 
    
};