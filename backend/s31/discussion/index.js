// console.log("Hello World!");

// [SECTION] Exponent Operator
const firstNum = 8 ** 2;
console.log(firstNum);

const secondNum = Math.pow(8, 2);
console.log(secondNum);

// [SECTION] Template Literals

let name = "John";

// Pre-Template Literals
// Uses double/single quotes
let message = "Hello " + name + "! Welcome to programming!";
console.log("Message without template literals: " + message);

// Strings Using Template Literal
// Uses backticks(``)
message = `Hello ${name}! Welcome to programming!`;
console.log(`Message with template literals: ${message}`);

// Multi-line Using Template Literals
const anotherMessage = `
${name} attended a math competition.
He won it by solving the problem 8 ** 2 
with the solution of ${firstNum}.
`
console.log(anotherMessage);


const interestRate = .1;
const principal = 1000;

console.log(`The interest on your savings account is: ${principal * interestRate}`);


// [SECTION] Array Destructuring
/*
	- Allows us to unpack elements into distinct variables
	- Allows us to name array elements with variables instead of using index numbers
*/
const fullName = ["Juan", "Dela", "Cruz"];
// Pre-array Destructuring
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);
console.log(`Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}! It's nice to meet you!`);

// Array Destructuring
const [firstName, middleName, lastName] = fullName;
console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(`Hello ${firstName} ${middleName} ${lastName}! It's nice to meet you!`);

// [SECTION] Object Destructuring
const person = {
	givenName: "Jane",
	mName: "Doe",
	familyName: "Smith"
}
// Pre-object destructuring
console.log(person.givenName);
console.log(person.mName);
console.log(person.familyName);

// Object Destructuring
const { givenName, mName, familyName } = person;
console.log(givenName);
console.log(mName);
console.log(familyName);
console.log(`Hello ${givenName} ${mName} ${familyName}! It'ce good to see you again!`);


// [SECTION] Arrow Functions
/*
	Syntax: 
		let/const variableName = (parameterA, parameterB) => {
			code block/statement
		}
*/
const hello = () => {
	console.log("Hello, Batch 402!");
}

// Pre-arrow functions
// function printFullName(firstName, middleInitial, lastName) {
// 	console.log(firstName + " " + middleInitial + ". " + lastName);
// }
// printFullName("Taylor", "A", "Swift");

// Arrow function
const printFullName = (firstName, middleInitial, lastName) => {
	console.log(`${firstName} ${middleInitial}. ${lastName}`)
}

printFullName("Taylor", "A", "Swift");

// Arrow functions with loops
const students = ["John", "Jane", "Judy"];

// Pre-arrow functions
students.forEach(function(student) {
	console.log(`${student} is a student`);
});

students.forEach((student) => {
	console.log(`${student} is a student`);
})


// [SECTION] Implicit Return Statement

// const add = (x, y) => {
// 	return x + y;
// }

// let total = add(1, 2);
// console.log(total);

const add = (x, y) => x + y;
let total = add(1, 2);
console.log(total);


// [SECTION] Default Function Argument Value

const greet = (name = 'User') => {
	return `Good morning, ${name}!`;
}

console.log(greet("Daisy"));

// Class-Based Object Blueprints
/*
	Syntax:
		 class className {
			constructor(propertyA, propertyB) {
				this.propertyA = propertyA;
				this.propertyB = propertyB;
			}
		 }
*/

class Car {
	constructor(brand, name, year) {
		this.brand = brand;
		this.name = name;
		this.year = year;
	}
}

const myCar = new Car("Toyota", "Vios", 2021);
console.log(myCar);

const myNewCar = new Car();
console.log(myNewCar);

myNewCar.brand = "Ford";
myNewCar.name = "Ranger Raptor";
myNewCar.year = 2021;
console.log(myNewCar);


// [SECTION] ES14 Updates

let array = [5, 3, 4, 1, 2];

// toSorted() - allows us to sort an array by returning a new (sorted) array instead of updating the original array
let sortedArray = array.toSorted();
console.log("Original Array:", array);
console.log("Sorted New Array:", sortedArray);

// Updates the original array
array.sort();
console.log("Original Array:", array);


// toReversed - allows us to reverse an array by returning a new (reversed) array instead of updating the original array
let players = ["Michael Jordan", "Kobe Bryant", "LeBron James"];
let reversedArray = players.toReversed();
console.log("Original Array:", players);
console.log("Reversed New Array:", reversedArray);

players.reverse();
console.log("Original Array:", players);


// findLast() - allows us to find the last occurence of an element in array
let arrayNumbers = [15, 2, 8, 6, 24, 23];

let lastEvenNumber = arrayNumbers.findLast((number) => {
	console.log(number);
	return number % 2 === 0;
})
// console.log(lastEvenNumber);

// find()
let firstEvenNumber = arrayNumbers.find((number) => {
	console.log(number);
	return number % 2 === 0;
})

// toSpliced() - allows us to create an updated new array by removing or adding elements and does not affect the original array

let songsList = ["Uhaw", "Raining in Manila", "Jopay", "Ere"];

let updatedSongsList = songsList.toSpliced(2, 1, "Buloy");
console.log("Original Array:", songsList);
console.log("Updated Array:", updatedSongsList);

songsList.splice(2, 1, "Pantropiko");
console.log("Original Array:", songsList);


// with() - allows us to create an updated new array without affecting the original array
// Syntax: arrayName.with(index, valueToBeAdded)
let teams = ["Naruto", "Sasuke", "Sakura", "Kakashi"];
let updatedTeams = teams.with(3, "Sai");
// teams[3] = "Sai";
console.log("Original Array:", teams);
console.log("Updated Array:", updatedTeams);