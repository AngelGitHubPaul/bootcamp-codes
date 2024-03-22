console.log("Hello World!");

// Non-Mutator Methods
/*
	- Non-Mutator methods are functions that do not modify or change an array after they're created
	- These methods do not manipulate the original array performing various tasks such as returning elements from an arrray, combining arrays and printing the output.
*/

let countries = ['US', 'PH', 'CAN', 'SG', 'TH', 'PH', 'FR', 'DE'];

// indexOf()
/*
	- Returns the index number of the first matching element found in an array
	- If no match was found, the result will be -1.
	- The search process will be done from first element proceeding to the last element
	- Syntax
		arrayName.indexOf(searchValue);
		arrayName.indexOf(searchValue, fromIndex);
*/

let firstIndex = countries.indexOf('PH');
console.log('Result of indexOf method: ' + firstIndex);

let invalidCountry = countries.indexOf('BR');
console.log('Result of indexOf method: ' + invalidCountry);

// lastIndexOf()
/*
	- Returns the index number of the last matching element found in an array.
	- The search process will be done from last element proceeding to the first element.
	- Syntax
		arrayName.lastIndexOf(searchValue);
		arrayName.lastIndexOf(searchValue, fromIndex);
*/

// Getting the index number starting from the last element
let lastIndex = countries.lastIndexOf('PH');
console.log('Result of lastIndexOf method: ' + lastIndex);

let lastIndexStart = countries.lastIndexOf('PH', 6);
console.log('Result of lastIndexOf method: ' + lastIndexStart);

// slice()
/*
	- Portions/slices elements from an array AND returns a new array
	- Syntax
		arrayName.slice(startingIndex);
		arrayName.slice(startingIndex, endingIndex);
*/

let slicedArrayA = countries.slice(2);
console.log('Result from slice method: ');
console.log(slicedArrayA);

let slicedArrayB = countries.slice(2, 4);
console.log('Result from sliced method:');
console.log(slicedArrayB);

let slicedArrayC = countries.slice(-3);
console.log('Result from slice method:');
console.log(slicedArrayC);

// toString()
/*
	- Returns an array as a string separated by commas
	- Syntax
		arrayName.toString();
*/

let stringArray = countries.toString();
console.log('Result from toString method:');
console.log(stringArray);

// concat()
/*
	- combines two arrays and returns the combined result
	- Syntax
		arrayA.concat(arrayB);
		arrayA.concat(elementA);
*/

let tasksArrayA = ['drink html', 'eat javascript'];
let tasksArrayB = ['inhale css', 'breathe sass'];
let tasksArrayC = ['get git', 'be node'];

let tasks = tasksArrayA.concat(tasksArrayB);
console.log('Result from concat method:');
console.log(tasks);

console.log('Result from concat method:');
let allTasks = tasksArrayA.concat(tasksArrayB, tasksArrayC);
console.log(allTasks);

let combinedTasks = tasksArrayA.concat('smell express', 'throw react');
console.log('Result from concat method:');
console.log(combinedTasks);

// join()
/*
	- Returns an array as a string separated by specified separator string
	- Syntax
		arrayName.join('separatorString');
*/

// let users = ['John', 'Jane', 'Joe', 'Robert'];

// console.log(users.join());
// console.log(users.join(''));
// console.log(users.join(' - '));

// Iteration Methods
/*
	- Iteration methods are loops designed to perform reptitive tasks on arrays.
	- Iteration methods loops over all items/elements in an array.
	- Useful for manipulating array data resulting in complex tasks.
	- Array iteration methods normally work with a function supplied as an argument.
	- How these function works is by performing tasks that are pre-defined within an array's method.
*/

// forEach()
/*
	- Similar to a for loop that iterates on each array element.
	- For each item in the array, the anonymous function passed in the forEach() method will be run.
	- The anonymous function is able to receive the current item being iterated or loop over by assigning a parameter.
	- Variable names for arrays are normally written in the plural form of the data stored in an array.
	- It's common practice to use the singular form of the array content for parameter names used in array loops
	- Syntax
		arrayName.forEach(function(indivElement){
			statement
		})
*/

allTasks.forEach(function(task){
	console.log(task);
})

// Using forEach with conditional statements
let filteredTasks = [];

allTasks.forEach(function(task){
	// If the element/string's length is greater than 10 characters
	if(task.length > 10){
		// Add the element to the filteredTasks array
		filteredTasks.push(task);
	}
});

console.log('Result of filteredTasks:');
console.log(filteredTasks);

let adminList = [];

let users = [
	{
		username: "peterSmith",
		isAdmin: false
	},
	{
		username: "andrewJones99",
		isAdmin: true
	},
	{
		username: "alexMartin",
		isAdmin: false
	},
	{
		username: "smithyS",
		isAdmin: true
	}
]

// For each item/element in the array, we will run the code block.
users.forEach(user => {
	// each object is displayed in the console.
	console.log(user)
	// You can then add an if statement and push only user objects whose isAdmin is strictly equal to true
	if(user.isAdmin === true){
		// Push the current user's username being looped into the adminList array.
		adminList.push(user.username)
	}
});

// The adminList should now containt the usernames of all admin users.
console.log(adminList);
// The users array, still remains the same
console.log(users);

// map()
/*
	- Iterates on each element AND returns new array with different values depending on the result of the function's operation
	- This is usefol for performing tasks where mutating/changing the elements are required
	- Unlike forEach method, the map method requires the use of a "return" statement in order to create another array with the performed operation
	- Syntax
		let/const resultArray = arrayName.map(function(indivElemet){
			statement
		})
*/

let numbers = [1, 2, 3, 4, 5];

let numberMap = numbers.map(function(number){
	return number * number;
});

console.log("Original Array:");
console.log(numbers);
console.log("Result of map method:");
console.log(numberMap);

// map() vs forEach()
let numberForEach = numbers.forEach(function(number){
	return number * number;
});

console.log(numberForEach);

// every()
/*
	- Checks if all the elements in an array meet the given condition.
	- Returns a true value if all elements meet the condition and false if otherwise
	- Syntax
		let/const resultArray = arrayName.every(function(indivElement){
			return expression/condition;
		})
*/
let allValid = numbers.every(function(number){
	return (number < 3);
});
console.log("Result of every method:");
console.log(allValid);

// some()
/*
	- Checks if at least one element in the array meets the given condition
*/
let someValid = numbers.some(function(number){
	return (number < 2);
});
console.log("Result of some method:");
console.log(someValid);

// filter()
/*
	- Returns new array that contains elements which meets the given condition
	- Returns an empty array if no elements were found
*/
let filterValid = numbers.filter(function(number){
	return (number < 3);
});
console.log("Result of filter method: ");
console.log(filterValid);

let nothingFound = numbers.filter(function(number){
	return (number = 0);
});
console.log("Result of filter method:");
console.log(nothingFound);

// Filtering using forEach
let filteredNumbers = [];

numbers.forEach(function(number){
	if(number < 3){
		filteredNumbers.push(number);
	}
});
console.log("Result of filter method:");
console.log(filteredNumbers);

// Array of Objects
let movies = [
	{
		name: "The Godfather",
		rating: 5
	},
	{
		name: "Star Wars IV: A New Hope",
		rating: 4
	},
	{
		name: "Schindler's List",
		rating: 5
	}
];

let fiveStarMovies = movies.filter(movie => {
	console.log(movie)

	return (movie.rating >= 5);
})

console.log(fiveStarMovies);

// includes()
/*
	- includes() method checks if the argument passed can be found in the array.
	- it returns a boolean which can be saved in a variable.
	- Syntax:
		arrayName.includes(<argumentToFind>);
*/

let products = ['Mouse', 'Keyboard', 'Laptop', 'Monitor', 'Acer'];

let productFound1 = products.includes("Mouse");
console.log(productFound1);

let productFound2 = products.includes("Headset");
console.log(productFound2);

let filteredProducts = products.filter(function(product){
	return product.toLowerCase().includes('a');
});
console.log(filteredProducts);

// reduce()
/*
	- Evaluates elements from left to right and returns/reduces the array into a single value.
	- Syntax
		let/const resultArray = arrayName.reduce(function(accumulator, currentValue){
			return expression/operation
		})
*/

let iteration = 0;

let reducedArray = numbers.reduce(function(x, y){
	console.warn('current iteration: ' + ++iteration);
	console.log('accumulator: ' + x);
	console.log('currentValue: ' + y);

	return x + y;
});
console.log("Result of reduce method: " + reducedArray);

// Reducing string arrays
let list = ['Hello', 'Again', 'World'];

let reducedJoin = list.reduce(function(x, y){
	return x + ' ' + y;
});
console.log('Result of reduce method: ' + reducedJoin);