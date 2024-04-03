const jwt = require("jsonwebtoken");

// The secret key is usually used by JWT to determine that a token was generated from the same application
const secret = "CourseBookingAPI";

// [SECTION] JSON Web Tokens

module.exports.createAccessToken = (user) => {
	const data = {
		id: user._id,
		email: user.email,
		isAdmin: user.isAdmin
	};


	// The sign() function is responsible for creating a token using the user data, secret key, and options/modifiers for the token (which is represented by the empty object)
	return jwt.sign(data, secret, {});
}