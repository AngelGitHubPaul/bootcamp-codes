const User = require("../models/User");
const Enrollment = require("../models/Enrollment");
const auth = require('../auth');
const bcrypt = require("bcrypt");

// Check if email already exists
module.exports.checkEmailExists = (req, res) => {

	if(req.body.email.includes("@")) {
		// The result is sent back to the client via the .then method
		return User.find({email: req.body.email})
		.then(result => {
			// The find method returns a record if a match is founf
			if(result.length > 0) {
				return res.status(409).send(true);

			// No duplicate found
				// The user is not yet registered in the database
			} else {
				return res.status(404).send(false);
			}
		})
		.catch(err => res.status(500).send(err))
	} else {
		res.send(false)
	}

}

// 409 is the status code for duplicate records
// 404 is the status code for not found
// 500 internal server error

// Register new user into database
/*
    Steps:
    1. Create a new User object using the mongoose model and the information from the request body
    2. Make sure that the password is encrypted
    3. Save the new User to the database
*/
module.exports.registerUser = (req, res) => {
	// 1. Creating a new instance of the User model
	let newUser = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		mobileNo: req.body.mobileNo,
		password: bcrypt.hashSync(req.body.password, 10)
	})

	// 2. Save the new user data into the database by using the 'save()' function which comes from the usage of mongoose npm package
	return newUser.save()
	.then((result) => res.status(201).send(result))
	// catch the error and return to the handler function. No return keyword used because we're using arrow function's implicit return feature
	.catch(err => res.status(500).send(err))
}

// Login an existing user
/*
    Steps:
    1. Check the database if the user email exists
    2. Compare the password provided in the login form with the password stored in the database
    3. Generate/return a JSON web token if the user is successfully logged in and return false if not
*/
module.exports.loginUser = (req, res) => {

	if(req.body.email.includes("@")) {
		// First looks for an existing user based on the email provided
		return User.findOne({email: req.body.email})

		.then(result => {

			// If the user doesn't exist, then return false
			if(result == null){

				return res.status(404).send("No email found");

			} else {
				// Compares the existing password to the password from postman (returns either true or false).
				const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);

				// Checks if password matches, if it does then return a newly generated access token. If not, just return false.
				// Uses the "createAccessToken" method defined in the "auth.js" file
				if(isPasswordCorrect){
					return res.status(200).send({accessToken: auth.createAccessToken(result)});
				} else {
					return res.status(401).send("Email and password do not match.");
				}
			}
		}).catch(err => res.status(500).send(err))
	} else {
		return res.status(400).send(false)
	}

	
}


//Retrieve user details
/*
    Steps:
    1. Retrieve the user document using it's id
    2. Change the password to an empty string to hide the password
    3. Return the updated user record
*/
module.exports.getProfile = (req, res) => {

    return User.findById(req.user.id)
    .then(result => {
        result.password = "";
        return res.status(200).send(result);
    })
    .catch(err => res.status(500).send(err))
};

// the status code of a response is a 3-digit integer that describes the result of the req and the semantics of the res

// [Enroll a user to a course]
/*

*/

module.exports.enroll = (req, res) => {

	console.log(req.user.id);
	console.log(req.body.enrolledCourses);

	if(req.user.isAdmin) {
		return res.status(403).send(false)
		// 403 means unauthorized access
	}
	let newEnrollment = new Enrollment({
		userId: req.user.id,
		enrolledCourses: req.body.enrolledCourses,
		totalPrice: req.body.totalPrice
	})

	return newEnrollment.save()
	.then(enrolled => {
		return res.status(201).send(true)
	})
	.catch(err => res.status(500).send(err));
}

module.exports.getEnrollments = (req, res) => {
    return Enrollment.find({userId : req.user.id})
        .then(enrollments => {
            if (enrollments.length > 0) {
                return res.status(200).send(enrollments);
            }
            return res.status(404).send(false);
        })
        .catch(err => res.status(500).send(err));
};