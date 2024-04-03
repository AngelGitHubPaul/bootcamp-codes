const express = require("express");
const userController = require("../controllers/user")
const router = express.Router();

// Routes
// Route for checking if the user's email already exist in the databse
router.post("/checkEmail", (req, res) => {
	userController.checkEmailExist(req.body).then(resultFromController => res.send(resultFromController));
})

// Route for registering a new user into the database
router.post("/register", (req, res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController));
})

// Route for logging in an existing user in the database
router.post("/login", (req, res) => {
	userController.loginUser(req.body).then(resultFromController => res.send(resultFromController));
})

module.exports = router;