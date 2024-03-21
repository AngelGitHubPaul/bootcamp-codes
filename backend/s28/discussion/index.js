// console.log("Hello, Batch 402");

// [SECTION] Mutator methods
// Array methods that "mutate" or change an array after they're created

let fruits = ["Apple", "Orange", "Kiwi", "Dragon Fruit"];

console.log("Current array: ");
console.log(fruits);

// push() 
// adds an elements at the end of anarray and returns the array's length.
// Syntax: arrayName.push("itemToPush");

let fruitsLength = fruits.push("Mango");
console.log(fruitsLength);
console.log("Mutated array from push method: ");
console.log(fruits);

// Adding multiple elements to an array
fruits.push("Avocado", "Guava");
console.log("Mutated array from push method: ");
console.log(fruits);


function addFruit(fruit) {
	fruits.push(fruit);
}
addFruit("Pineapple");
console.log(fruits);


// pop() 
// removes the last element in an array annd returns the removed element. 
// Syntax: arrayName.pop();

let removedFruit = fruits.pop()
console.log(removedFruit);
console.log("Mutated array from pop method: ");
console.log(fruits);

function removeFruit() {
	fruits.pop();
}
removeFruit();
console.log(fruits);


// unshift()
// Adds one or more elements at the beginning of an array and returns the new length of the array
// Syntax: arrayName.unshift("elementA", "elementB");

let unshift = fruits.unshift("Lime", "Banana");
console.log(unshift);
console.log("Mutated array from unshift method: ");
console.log(fruits);

function unshiftFruit(fruit) {
	fruits.unshift(fruit);
}
unshiftFruit("Calamansi");
console.log("Mutated array from unshift method: ");
console.log(fruits);


// shift()
// removes the an element at the beginning of an array annd returns the removed element. 
// Syntax: arrayName.shift(); 
let anotherFruit = fruits.shift();
console.log(anotherFruit);
console.log("Mutated array from shift method: ");
console.log(fruits);

function shiftFruit() {
	fruits.shift();
}
shiftFruit();
console.log("Mutated array from shift method: ");
console.log(fruits);


// splice()
// Simultaneously removes elements from a specified index number and adds elements
// Syntax: arrayName.splice(startingIndex, deleteCount, elementsToBeAdded);

fruits.splice(1, 2, "Lime", "Cherry");
console.log("Mutated array from splice method: ");
console.log(fruits);

function spliceFruit(index, deleteCount, fruit){
	fruits.splice(index, deleteCount, fruit);
}

spliceFruit(1, 1, "Rambutan");
console.log(fruits);

spliceFruit(2, 1, "Durian");
console.log(fruits);


// sort()
// Rearranges the array elements in alphanumeric order and returns the sorted array
// Syntax: arrayname.sort();
fruits.sort();
console.log("Mutated array from sort method: ");
console.log(fruits);

// reverse()
// Reverses the oreder of array elements and returns the reversed array
// Syntax: arrayname.reverse();
fruits.reverse();
console.log("Mutated array from reverse method: ");
console.log(fruits);