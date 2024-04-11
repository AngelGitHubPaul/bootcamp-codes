const express = require("express");
const passport = require('passport');
const userController = require("../controllers/user");
const { verify, verifyAdmin, isLoggedIn } = require("../auth");
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

// Google Login
router.get('/google', 
	passport.authenticate('google', {
		scope:['email', 'profile'],
		// prompt: "select_account"
	})
)

router.get('/google/callback', 
	passport.authenticate('google', {
		failureRedirect: '/users/failed'
	}),
	function (req, res) {
		res.redirect('/users/success')
	}
)

router.get('/failed', (req,res) => {
	console.log("User is not authenticated.")
	res.send("Failed");
})

router.get('/success', isLoggedIn, (req,res) => {
	console.log("You are looged in");
	console.log(req.user);
	res.send(`Welcome ${req.user.displayName}`);
})

router.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		if(err) {
			console.log('Error while destroying session: ', err);
		} else {
			req.logout(() => {
				res.redirect('/');
			})
		}
	})
})

// Route for resetting the user password
router.post('/reset-password', verify, userController.resetPassword);

router.put('/profile', verify, userController.updateProfile);

router.put('/updateAdmin', verify, verifyAdmin, userController.updateAdmin);

module.exports = router;