// require() use to load Node JS modules
// http - hypertext transfer protocol
const http = require("http");

// Variable to store the port number
const port = 4000;

let items = ["Laptop", "Desktop", "Tablet"];

const app = http.createServer((request, response) => {

	if(request.url == '/greeting') {
		response.writeHead(200, {'Content-type': 'text/plain'});
		response.end('Hello Again!');

	} else if(request.url == '/homepage') {

		response.writeHead(200, {'Content-type': 'text/plain'});
		response.end('This is the homepage');

	} else if(request.url == '/items' && request.method === 'POST'){
		response.writeHead(200, {'Content-type': 'text/plain'});
		response.end("This route will be used to add another item");

	} else if(request.url == '/items' && request.method === 'GET'){

		response.writeHead(200, {'Content-type': 'text/plain'});
		
		response.end(JSON.stringify(items));
	
	} else if(request.url == '/allItems' && request.method === 'GET'){

		response.writeHead(200, {'Content-type': 'text/plain'});
		
		response.end(`This are the current items ${items}`);
	
	} else {

		response.writeHead(404, {'Content-type': 'text/plain'});
		response.end('Page not availabe');
	}


});

app.listen(port);



// http.createServer(function (request, response){

	// Use the writeHead() method to:
    // Set a status code for the response - a 200 means OK
    // Set the content-type of the response as a plain text message
	// response.writeHead(200, {'Content-Type': 'text/plain'});
	// // Send the response with text content 'Hello World'
	// response.end('Hello World!');

//  A port is a virtual point where network connections start and end.
// }).listen(4000)

// When server is running, console will print the message:
console.log(`Server is running at localhost: ${port}`);