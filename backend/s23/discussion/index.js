// console.log("Hello World!");

// prompt("Enter your name");

function printInput() {
	let nickname = prompt("Enter your nickname:");
	console.log("Hi, " + nickname);
};
// printInput();

// "name" is called a parameter
// A parameter acts as a named variable/container that exists only inside a function
// It is used to store information that is provided to a function when it is called/invoked
function printName(name) {
	console.log("My name is " + name);
}

// "Juana" is called a n argument
// Arguments is the information/data provided to a function
printName("Juana");
printName("John");
printName("Jane");

let sampleVariable = "Yui";
printName(sampleVariable);

function checkDivisibilityBy8(num) {
	let remainder = num % 8;
	console.log("The remainder of " + num + " divided by 8 is: " + remainder);

	let isDivisibleBy8 = remainder === 0;
	console.log("Is " + num + " divisible by 8?");
	console.log(isDivisibleBy8);
};
checkDivisibilityBy8(64);
checkDivisibilityBy8(28);

// functions as Arguments
function argumentFunction() {
	console.log("This function was passed as an argument before the message was printed.")
}

function invokeFunction(argumentFunction) {
	argumentFunction();
}

invokeFunction(argumentFunction);


// Using Multiple Parameters 
// The order of the argument is the same as the order of the parameters
function createFullName(firstName, middleName, lastName) {
	console.log(firstName + " "	+ middleName + " " + lastName);
};
createFullName("Juan", "Dela", "Cruz");

// "Juan" will be stored in the parameter "firstName"
// "Dela" will be stored in the parameter "middleName"
// "Cruz" will be stored in the parameter "lastName"

createFullName("Juan", "Dela");
createFullName("Juan", "Dela", "Cruz", "Baustista");

let firstName = "John";
let middleName = "Doe";
let lastName = "Smith";
// Using variables as arguments
createFullName(firstName, middleName, lastName);


// Using alert() and prompt() 
// Syntax: alert(<messageInString>);
// Syntax: prompt(<messageInString>);
// alert("Hello World!");

function showSampleAlert() {
	alert("Hello User!");
};
// showSampleAlert();

console.log("I will only log in the console when the aler is dismissed");

// let samplePrompt = prompt("Enter your ign: ");
// console.log("Hello, " + samplePrompt);

// let age = prompt("Enter your age: ");
// console.log(age);

// let sampleNullPrompt = prompt("Don't enter anything");
// console.log(sampleNullPrompt);


function printWelcomeMessage() {
	let firstName = prompt("Enter your first name: ");
	let lastName = prompt("Enter your last name: ");

	console.log("Hello, " + firstName + " " + lastName + "!");
	console.log("Welcome to my page!");
};
printWelcomeMessage();