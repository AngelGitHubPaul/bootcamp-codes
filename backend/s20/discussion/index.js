// alert("Hello Again!");

// This is a statement.qaaa
console.log("Hello, Batch 402!");

console. log ( "Hello World!" )

console. 
log 
(
	"Hello World!" 
)
/*
	There are two types of comments:
		1. Single-line comment (//)
		2. Multi-line comments (slash and asterisk)
*/

// [SECTION] Variable 
// It is used to contain data
// Declaring variables:
// Syntax: let/const variableName

// Variable declaration
let myVariable;
console.log(myVariable); // undefined

let greeting = "Happy Friday, Batch 402!";
console.log(greeting);

let hello;
console.log(hello);

/*
	Guides in writing variables:
	1. Use the 'let' keyword followed by the variable name of your choosing and use the assignment operator (=) to assign a value.
	2. Variable names should start with a lowercase character, use camelCase for multiple words.
	3. For constant variables, use the 'const' keyword.
	4. Variable names should be indicative (or descriptive) of the value being stored to avoid confusion.

	Best practices in naming variables:

	1. When naming variables, it is important to create variables that are descriptive and indicative of the data it contains.

	    let firstName = "Michael"; - good variable name
	    let pokemon = 25000; - bad variable name

	2. When naming variables, it is better to start with a lowercase letter. We usually avoid creating variable names that starts with capital letters. Because there are several keywords in JS that start in capital letter.

	    let FirstName = "Michael"; - bad variable name
	    let firstName = "Michael"; - good variable name

	3. Do not add spaces to your variable names. Use camelCase for multiple words, or underscores.

	    let first name = "Mike";

	camelCase is when we have first word in small caps and the next word added without space but is capitalized:

	    lastName emailAddress mobileNumber

	Underscores sample:

	let product_description = "lorem ipsum"
	let product_id = "250000ea1000"
*/


// Initializing variables
// Syntax = let/const variableName =  value;
let productName = "desktop computer";
console.log(productName);

let producPrice = 18999;
console.log(producPrice);

const interest = 3.539;
console.log(interest);

// Reasssignment
// Syntax: variableName = newValue;
productName =  "Laptop";
console.log(productName);

// Value of constants cannot be changed
// interest = 4;
// console.log(interest);

let friend = "Kate";
friend = "Jane";
console.log(friend);

let supplier;
supplier = "John Smith Tradings";
supplier = "Zuitt Store";
console.log(supplier);

let productCode = "DC017";
const productBrand = "Dell";
console.log(productCode, productBrand);

// using reserved keywords (let/const) as variable names will cause an error
// const let = "hello";
// console.log(let);

// [SECTION] Data Types
// Strings
let country = 'Philippines';
let province = "Laguna";

// Concatenating Strings
let fullAddress = province + ', ' + country;
console.log(fullAddress);

let greeting1 = "I live in the " + country;
console.log(greeting1);

let message = 'John\'s employee went home early.';
console.log(message);

let mailAddress = 'Metro Manila\n\nPhilipines';
console.log(mailAddress);

// Numbers
// Integers/Whole Numbers
let headCount = 26;
console.log(headCount);

// Decimal
let grade = 98.7;
console.log(grade);

// Exponential notation
let planetDistance = 2e10;
console.log(planetDistance);

console.log("John's grade last quarter is " + grade);

// Boolean
let isMarried = false;
let isGoodConduct = true;
console.log("isMarried: " + isMarried);
console.log("isGoodConduct: " + isGoodConduct);

// Array
let grades = [98.7, 92.1, 90.2, 94.6];
console.log(typeof grades);

let details = ["John", "Smith", 32, true];
console.log(details);

// Object
// key-value pairs
let person = {
	fullname: "Juan Dela Cruz",
	age: 35,
	isMarried: false,
	contact: ["09123456789", "0987654321"],
	addres: {
		houseNumber: "345",
		city: "Manila"
	}
}
console.log(person);

let myGrades = {
	firstGrading: 98.7,
	secondGrading: 92.1,
	thirdGrading: 90.2,
	fourthGrading: 94.6
}
console.log( typeof myGrades);

