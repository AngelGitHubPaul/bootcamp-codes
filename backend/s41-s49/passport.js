// Package for configuring environment variables
// Restart of application is recommended to ensure that env variables are loaded properly
require('dotenv').config();

const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new GoogleStrategy({
	clientID: process.env.clientID,
	clientSecret: process.env.clientSecret,
	callbackURL: "http://localhost:4000/users/google/callback",
	passReqToCallback: true
},
function (request, accessToken, refreshToken, profile, done){
	return done(null, profile)
}

));

// Thios function is used to serialize user object into the session
// The entire user objecct is serialized
passport.serializeUser(function(user, done){
	done(null, user)
})

// This function is used to desiriable user object into the session
// It retrievs the serialized
passport.deserializeUser(function(user, done){
	done(null, user)
})