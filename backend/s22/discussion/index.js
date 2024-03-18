// console.log("Hello World!")

// [SECTION] Functions
// Functions are blocks of codes that tell our application to perform a certain task when called/invoked.

/*
	Syntax:
		function functionName() {
			code block/ statement
		}
*/

// Function Declaration
function printName() {
	console.log("My name is John.");
};

// Invocation
printName();

function declaredFunction() {
	console.log("Hello World from declaredFunction()");
};
declaredFunction();
// console.log(name);
// let name = "Daisy";

// Function Expression
// A function can also be stored in a variable
// Anonymous function - function without a name
let variableFunction = function() {
	console.log("Hello Again!");
};

variableFunction();

// Named function
let functionExpression = function functName() {
	console.log("Hello from the other side");
};

functionExpression();

// We can re assign declared functions and function expressions to new anonymous functions
declaredFunction = function() {
	console.log("Updated declaredFunction");
};
declaredFunction();

functionExpression = function() {
	console.log("Updated functionExpression");
};
functionExpression();

// We cannot re-assign a function espression initialized with const.
const constantFunc = function() {
	console.log("Initialized with const!");
};
constantFunc();

// constantFunc = function() {
// 	console.log("Cannot be re-assigned");
// };
// constantFunc();

// Function Scoping
/*
	JavaScript has 3 types of scope:
		1. local/block scope
		2. global scope
		3. function scope
*/

let globalVar = "Mr. Worldwide";

{
	let localVar = "Armando Perez";
	console.log(localVar);
	console.log(globalVar);
}

console.log(globalVar);
//console.log(localVar); //returns an error "not defined"

// Function scope
function showNames() {
	var functionVar = "Joe";
	const functionConst = "John";
	let functionLet = "Jane";

	console.log(functionVar);
	console.log(functionConst);
	console.log(functionLet);
}

showNames();

// console.log(functionVar);
// console.log(functionConst);
// console.log(functionLet);

function myNewFunction() {
	let name = "Jane";

	function nestedFunction() {
		let nestedName = "John";
		console.log(name);
	};
	// console.log(nestedName); // not defined
	nestedFunction();
};

myNewFunction();
// nestedFunction(); // not defined


//  [SECTION] Return Statement
// The "return" statement allows us to ouput a value from a function to be passed toon to the line/code block that invokled/called the function.
function returnFullName() {
	return "Jeffrey" + " " + "Smith" + " " +"Bezos";
	console.log("This message will not be printed");
}

let fullName = returnFullName();
console.log(fullName);

function returnFullAddress () {

	let fullAddress = {
		street: "#44 Maharlika St.",
		city: "Cainta",
		province: "Rizal"
	};
	return fullAddress;
};

let myAddress = returnFullAddress();
console.log(myAddress);

function printPlayerInfo() {
	console.log("Username " + "white_knight");
	console.log("Level " + 95);
	console.log("Job: " + "Developer");
};

let user1 = printPlayerInfo();
console.log(user1);

function returnSumOf5And10() {
	return 5 + 10;
}

let sumof5And10 = returnSumOf5And10();
console.log(sumof5And10);

let total = 100 + returnSumOf5And10();
console.log(total);

function getGuildMembers() {
	return ["white_knight", "healer2000", "masterThief100", "andrewthehero", "ladylady99"];
};
console.log(getGuildMembers());
getGuildMembers();

// Function Naming Convention
/*
	1. function names should be definitive of the task that it will perform. it usually contains a verb.
	2. avoid generic names to avoid confusion
	3. avoid pointless and inappropriate function
	4. name your function using camelCase
*/

function getCourses() {
	let courses = ["Science 101", "Math 101", "English 101"];

	return courses;
}
let courses = getCourses();
console.log(courses);

function getName() {
	let name = "Jamie";
	return name;
};
let name = getName();
console.log(name);

function foo() {
	return 25 % 5;
}
console.log(foo());

function displayCarInfo() {
	console.log("Brand: Toyota");
	console.log("Type: Sedan");
	console.log("Price: 1,500,000");
}
displayCarInfo();