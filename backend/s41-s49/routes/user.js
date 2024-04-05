const express = require("express");
const userController = require("../controllers/user");
const {verify} = require("../auth");
const router = express.Router();

// Routes
// Route for checking if the user's email already exists in the database
// router.post("/checkEmail", (req, res) => {
// 	userController.checkEmailExists(req.body).then(resultFromController => res.send(resultFromController));
// })
router.post("/checkEmail", userController.checkEmailExists)

// Route for registering a new user into the database
router.post("/register", userController.registerUser);

// Route for logging in an existing user in the database
router.post("/login", userController.loginUser);


// Route for retrieving user details
// router.get("/details", verify, (req, res)=>{
// 	// console.log(req)
// 	// console.log("Result from the details route");
// 	// console.log(req.user);

//     userController.getProfile(req.user.id).then(resultFromController => res.send(resultFromController));
// });

router.get("/details", verify, userController.getProfile);

router.post("/enroll", verify, userController.enroll);

router.get("/getEnrollments", verify, userController.getEnrollments);


module.exports = router;