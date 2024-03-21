// console.log("Hello World!");

// [SECTION] Array
// An array is simply a list of data
// They are declared using square brackes[] also known as array literals
// Syntax: let/const = [elementA, elementB, elementC];

let studentA = "2020-1923";
let studentB = "2020-1924";
let studentC = "2020-1925";
let studentD = "2020-1926";
let studentE = "2020-1927";

let studentNumbers = ["2020-1923", "2020-1924", "2020-1925", "2020-1926", "2020-1927"];


let grades = [98.5, 94.3, 82.9, 90.1];
let computerBrands = ["Acer", "Asus", "Lenovo", "Neo", "Redfox", "Toshiba", "Dell"];

let mixedArr = [12, "Asus", null, undefined, {}, true];

let myTasks = [
	"drink html",
	"eat javascript",
	"inhale css",
	"bake bootstrap"
];
console.log(myTasks);

let city1 = "Tokyo";
let city2 = "Manila";
let city3 = "Hairobi";
let city4 = "Helsinki";

let cities = [city1, city2, city3, city4];
console.log(cities);


// [SECTION] Array length property
console.log(myTasks.length);
console.log(cities.length);

let blankArr = [];
console.log(blankArr.length);

let username = "Jamie Noble";
console.log(username.length); // 11 -> spaces are counted

myTasks.length = myTasks.length-1;
console.log(myTasks.length);
console.log(myTasks);

// Using decrementation
cities.length--;
console.log(cities);

// Not applicable to strings
username.length = username.length-1;
console.log(username.length);
username.length = username.length--;
console.log(username);


let theBeatles = ["John", "Paul", "Ringo", "George"];
console.log(theBeatles);
theBeatles.length++;
console.log(theBeatles);


// Accessing the elements of an Array
console.log(grades[0]);
console.log(computerBrands[3]);
// Accessing an array element that does not exist will return undefined
console.log(grades[20]);

let lakersLegends = ["Kobe", "Shaq", "Magic", "Kareem", "LeBron"];
console.log(lakersLegends[1]);
console.log(lakersLegends[2]);

let currentLaker = lakersLegends[4];
console.log(currentLaker);

// Reassigning array values using their index
console.log("Array before reassignment");
console.log(lakersLegends);
lakersLegends[2] = "Pau Gasol";
console.log("Array after reassignment");
console.log(lakersLegends);

// Accessing the last element of an array
let bullsLegends = ["Jordan", "Pippen", "Rodman", "Rose", "Kukoc"];

let lastElementIndex = bullsLegends.length - 1; // 5-2 = 4
console.log(bullsLegends[lastElementIndex]);
console.log(bullsLegends[bullsLegends.length - 1]);

// Adding items into the array
let newArr = [];
console.log(newArr[0]);

newArr[0] = "Cloud Strife";
console.log(newArr);
console.log(newArr[0]);

newArr[1] = "Tifa Lockhart";
console.log(newArr);

// newArr[1] = "Barrett Wallace";
// newArr[newArr.length - 1] = "Barrett Wallace";
// console.log(newArr);

// newArr[2] =  "Barrett Wallace";
newArr[newArr.length] = "Barrett Wallace";
console.log(newArr);


// Looping over an array

for (let index = 0; index < newArr.length; index++) {
	console.log(newArr[index]);
}

let numArr = [5, 12, 30, 46, 40];

for (let index = 0; index < numArr.length; index++) {
	
	if(numArr[index] % 5 ===0) {
		
		console.log(numArr[index] + " is divisible by 5");

	} else {

		console.log(numArr[index] + " is not divisible by 5");
	}
}

// Multidimensional Arrays
/*
	- Multidimensional arrays are useful for storing complex data structures
*/
let chessBoard = [
	["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
	["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
	["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
	["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
	["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
	["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
	["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
	["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"]
];
console.table(chessBoard);

console.log(chessBoard[1][4]); //e2
console.log(chessBoard[5][2]); //c6
console.log(chessBoard[7][7]); //h8

console.log("Pawn moves to: " + chessBoard[1][5]); //f2

