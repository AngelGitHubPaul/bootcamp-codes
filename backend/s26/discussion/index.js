// console.log("Hello World!");

// [SECTION] Objects
/*
	- An object is a data type that is used to represent a real world objects
*/
// Creating objects using object initializers/literal notation
/*
	Syntax:
	let/const objectName = {
		keyA: valueA,
		keyB: valueB
	}
*/
let cellphone = {
	name: "Nokia 3210",
	manufactureDate: 1999,
};

console.log("Result from creating objects using initializers/literal notation: ");
console.log(cellphone);
console.log(typeof cellphone);

// Creating objects using a constructor function
/*
	Syntax:
	function objectName(KeyA, keyB) {
		this.keyA = keyA;
		this.keyB = keyB;
	}
*/

function Laptop(name, manufactureDate) {

	// "this" keyword allows us to assign a new object's property associating them with valie  from the contrustor's parameters
	this.name = name;
	this.manufactureDate = manufactureDate;
}

// This is a unique instance of the laptop onjects
// "new" operator created an instance of an object
let laptop = new Laptop("Lenovo", 2008);
console.log("Result from creating objects using object constructors: ");
console.log(laptop);

// This is another unique instance of the Laptop object
let myLaptop = new Laptop("MacBook Air", 2020);
console.log("Result from creating objects using object constructors: ");
console.log(myLaptop);

let oldLaptop = Laptop("Portal R2E CCMS", 1980);
console.log("Result from creating objects without the new keyword: ");
console.log(oldLaptop);

// Creating empty objects
let computer = {};
let myComputer = new Object();
console.log(computer);
console.log(myComputer);


// [SECTION] Accessing Object Properties

// Using dot notation
console.log("Result from dot notation: " + myLaptop.name);

// Using square bracket notation
console.log("Result from square bracket notation: " + myLaptop['name']);

let array = [laptop, myLaptop];
console.log(array);
console.log(array[0]['name']);
console.log(array[0].name);


// [SECTION] Initializing/Adding/Deleting/Reassigning Object Properties

// Initializing/adding object properties
let car = {};
console.log(car);
car.name = 'Honda Civic';
console.log("Result from adding properties using dot notation: ")
console.log(car);

car['manufacture date'] = 2019;
console.log(car['manufacture date']);
console.log(car['Manufacture Date']);
console.log("Result from adding properties using square bracket notation: ")
console.log(car);

// Deleting object properties
delete car['manufacture date'];
console.log("Result from deleting properties: ");
console.log(car);


// Reassigning object properties
car.name = "Dodge Charger R/T";
console.log("Result from reassigning properties: ");
console.log(car); 

// car = {
// 	name: "Toyota Fortuner";
// }


// Object Methods

let person = {
	name: "John",

	// Methods
	talk: function () {
		console.log('Hello my name is ' + this.name);
	}

}
console.log(person);
console.log("Result from object methods: ");
person.talk();

// Adding methods to objects
person.walk = function () {
	console.log(this. name + " walked 25 steps forward");
}

person.walk();


let friend = {
	firstName: "Joe",
	lastName: "Smith",
	address: {
		city: "Austin",
		country: "Texas"
	},
	emails: ["joe@mail.com", "joesmith@mail.com"],
	introduce: function() {
		console.log("Hello my name is " + this.firstName + " " + this.lastName);
	}
}
friend.introduce();


let myPokemon = {
	name: "Pikachu",
	level: 3,
	health: 100,
	attack:50,
	tackle: function() {
		console.log("This pokemon tackled targetPokemon");
		console.log("targetPokemon's health is now reduced to targetPokemonHealth");
	},
	faint: function() {
		console.log("Pokemon fainted");
	}
}
console.log(myPokemon);

function Pokemon(name, level) {

	// Properties
	this.name = name;
	this.level = level;
	this.health = 2 * level;
	this.attack = level;

	// Methods
	this.tackle = function(target) {
		console.log(this.name + " tackled " + target.name);
		console.log("targetPokemon's health is now reduced to targetPokemonHealth");
	}

	this.faint = function() {
		console.log(this.name + " fainted.");
	}
}

let pikachu = new Pokemon("Pikachu", 16);
console.log(pikachu);
let rattata = new Pokemon("rattata", 8 );
console.log(rattata);

pikachu.tackle(rattata);
rattata.tackle(pikachu);