// console.log("Hello World!")

// [SECTION] if, else if, else statement

let numG = -1;

// If statement
// Executes if a speceified condition is true
if(numG < 0) {
	console.log("Hello!");
}

if(numG > 0) {
	console.log("Hello Again!");
}

// else if
// Executes a statement if previous conditions are false and if the specified condition is true
// else
// executes a statement if all other conditions are false

let numH = 1;

if(numG > 0) {
	console.log("Hello");
} else if(numH = 0) {
	console.log("World");
} else {
	console.log("Again");
}


// If, else if, and else in functions

let message = "No message";

function determineTyphoonIntensity(windSpeed) {

	if(windSpeed < 30) {
		return "Not a typhoon yet.";
	} else if (windSpeed <= 61) {
		return "Tropical depression detected.";
	} else if (windSpeed >= 62 && windSpeed <= 88) {
		return "Tropical storm detected.";
	} else if (windSpeed >= 89 && windSpeed <= 117) {
		return "Severe Tropical storm detected";
	} else {
		return "Typhoon detected.";
	}
}

message = determineTyphoonIntensity(69);
console.log(message);

if(message == "Tropical storm detected.") {
	console.warn(message);
}


// [SECTION] Truthy and Falsy
/*
	Falsy values/exceptions for truthy:
	1. false
	2. 0
	3. -0
	4. ""
	5. null
	6. undefined
	7. NaN
*/

// Truthy Examples

if(true) {
	console.log("Truthy")
}

if(1) {
	console.log("Truthy")
}

if([]) {
	console.log("Truthy")
}

// Falsy values
if(false) {
	console.log("Falsy")
}

if(0) {
	console.log("Falsy")
}

if(undefined) {
	console.log("Falsy")
}


// [SECTION] Conditional ternary operator
// Syntax: (condition) ? expressionIfTrue : expressionIfFalse
// ternary operators have an implicit "return" statement, meaning without the "return" keyword, the result can be stored in a variable
let ternaryResult = (1 < 18) ? true : false;
console.log("Result of ternary operator: " + ternaryResult);


let name;

function isOfLegalAge() {
	name = "John";
	return "You are of legal age limit";
}

function isUnderAge() {
	name = "Jane";
	return "You are under the age limit"
}

// let age = parseInt(prompt("what is your age?"));
// console.log(age);
// let legalAge = (age > 18) ? isOfLegalAge() : isUnderAge();
// console.log("Result if Ternary Operator in function: " + legalAge + ", " + name);


// [SECTION] Switch statement 
// Syntax:
/*
	switch (expression)  {
		case value:
			statement;
			break;
		default:
			statement;
			break;
	}
*/

// let day = prompt("What day of the week is it today?").toLowerCase();
// console.log(day);

// switch(day) {
// 	case 'monday' :
// 		console.log("The color of the day is red.");
// 		break;
// 	case 'tuesday' :
// 		console.log("The color of the day is orange.");
// 		break;	
// 	case 'wednesday' :
// 		console.log("The color of the day is yellow.");
// 		break;
// 	case 'thursday' :
// 		console.log("The color of the day is green.");
// 		break;
// 	case 'friday' :
// 		console.log("The color of the day is blue.");
// 		break;
// 	case 'saturday' :
// 		console.log("The color of the day is indigo.");
// 		break;
// 	case 'sunday' :
// 		console.log("The color of the day is violet.");
// 		break;
// 	default:
// 		console.log("Please input a valid day.");
// 		break;
// }

//  [SECTION] Try-Catch-Finally Statement

function showIntensityAlert(windSpeed) {

	try {
		alerat(determineTyphoonIntensity(windSpeed));
	} catch (error) {
		console.log(typeof error);
		console.warn(error.message);
	} finally {
		alert("Intensity updates will show new alert.");
	}
}
showIntensityAlert(56);