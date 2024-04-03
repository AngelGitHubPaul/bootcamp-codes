const User = require("../models/User");
const auth = require("../auth")
const bcrypt = require("bcrypt");

module.exports.checkEmailExist = (reqBody) => {

	return User.find({email: reqBody.email})
	.then(result => {

		if(result.length > 0) {
			return true;
		} else {
			return false;
		}
	})
	.catch(err => err)
}

// Register new user into database
module.exports.registerUser = (reqBody) => {
	// 1. Creating a new instance of the User model
	let newUser = new User({
		firstName: reqBody.firstName,
		lastName: reqBody.lastName,
		email: reqBody.email,
		mobileNo: reqBody.mobileNo,
		password: bcrypt.hashSync(reqBody.password, 10)
	})

	// 2. Save the new user data into the database by using the 'save()' dunction which comes from the usage of mongoose npm package
	return newUser.save()
	.then(result => result)
	.catch(err => err)
}

// Log in an existing user
module.exports.loginUser = (reqBody) => {
	// First looks for an existing user based on the email provided
	return User.findOne({email: reqBody.email})
	.then(result => {
		// If user doesnt exist, then return false
		if(result == null) {
			return false;
		} else {
			// Compare the existing password to the password from postman(returns either true or false)
			const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);
			// Checks if password matches, if it does then return a newly generated access token. if not, just return false.
			if(isPasswordCorrect) {
				return {accessToken: auth.createAccessToken(result)}
			} else {
				return false;
			}
		}
	}).catch(err => err)
}