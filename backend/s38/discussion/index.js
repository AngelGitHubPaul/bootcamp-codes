const express = require("express");

const app = express();

// For our application server to run, we need a port to listen to
const port = 4000;


// Middlewares
// Allows our app to read json data
app.use(express.json());

// Allows our app to read data from forms
app.use(express.urlencoded({extended:true}));


// Routes

// This route expects to receive a GET request at the base URI "/"
app.get("/", (req, res) => {

	res.send("Hello World!");
})

// This route expects to receive a GET request at the URI "/hello"
app.get("/hello", (req, res) => {
	res.send("Hello from the /hello endpoint!");
})

// This route expects to receive a POST request at the URI "/hello"
app.post("/hello", (req, res) => {

	// req.body contains the contents/data of the request body
	// All the properties defined in our Postman request will be accessible as properties with the same names
	res.send(`Hello there ${req.body.firstName} ${req.body.lastName}!`);
})

// Mock database
let users = [];

app.post("/register", (req, res) => {
	console.log(req.body);

	if (req.body.username !== "" && req.body.password !== "") {

		users.push(req.body);
		console.log(users);
		res.send(`User ${req.body.username} successgully registered!`)

	} else {

		res.send("Please input BOTH username and password.")
	}
})

app.patch("/change-password", (req, res) => {

	let message;

	for(let i = 0; i < users.length; i++) {

		if( req.body.username == users[i].username) {
			users[i].password = req.body.password;

			message = `User ${req.body.username}'s password has been updated.`;
			
			console.log(users[i]);
			break;

		} else {
			message = 'User does not exist!'
		}
	}
	res.send(message);
})

//Mini Activity: Create a delete route with the following endpoint: "/delete-user". If the users array is not empty, delete the last item in the array. Then send the updated users array to the client. Else, send a simple message: "Users collection is empty."

app.delete("/delete-user", (req, res) => {
	if(users.length != 0) {
		users.pop();
		res.send(users);
	} else {
		res.send("Users collection is empty.")
	}
})

app.listen(port, () => console.log(`Server running at port ${port}`));

