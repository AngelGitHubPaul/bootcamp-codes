//Dependencies and Modules
const express = require("express");
const courseController = require("../controllers/course");
const auth = require("../auth");
const {verify, verifyAdmin} = auth;

//Routing Component
const router = express.Router();

//Route for creating a course
router.post("/", verify, verifyAdmin, courseController.addCourse);

//Route for retrieving all courses
// router.get("/all", (req, res)=>{
//     courseController.getAllCourses().then(resultFromController => res.send(resultFromController));
// }); 
router.get("/all", verify, verifyAdmin, courseController.getAllCourses); 

router.get("/",courseController.getAllActive); 

router.get("/:courseId",courseController.getCourse);

// Route for updating a course (admin)
router.patch("/:courseId", verify, verifyAdmin, courseController.updateCourse);

// Allows us to export the "router" object that will be accessed in our "index.js" file
module.exports = router;

