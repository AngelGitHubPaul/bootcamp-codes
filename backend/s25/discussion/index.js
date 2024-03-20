// console.log("Hello world");

// [SECTION] While loop
	/*
	    - A while loop takes in an expression/condition
	    - Expressions are any unit of code that can be evaluated to a value
	    - If the condition evaluates to true, the statements inside the code block will be executed
	    - A statement is a command that the programmer gives to the computer
	    - A loop will iterate a certain number of times until an expression/condition is met
	    - "Iteration" is the term given to the repetition of statements
	    - Syntax
	        while(expression/condition) {
	            statement
	        }
	*/	

// let count = 5;

// while(count != 0) {
// 	console.log("While: " + count);

// 	count--;
// };


// [SECTION] Do-While loop
    /*
        - A do-while loop works a lot like the while loop. But unlike while loops, do-while loops guarantee that the code will be executed at least once.
        - Syntax
            do {
                statement
            } while (expression/condition)
    */

// let number = Number(prompt("Give me a number"));

// do {
// 	console.log("Do While: " + number);
// 	// number = number + 1
// 	number +=1 

// } while (number < 10);


// [SECTION] For Loop
	/*
		- A for loop is more flexible than while and do-while loops. It consists of three parts:
	        1. The "initialization" value that will track the progression of the loop.
	        2.  The "expression/condition" that will be evaluated which will determine whether the loop will run one more time.
	        3. The "finalExpression" indicates how to advance the loop.
	    - Syntax
	        for (initialization; expression/condition; finalExpression) {
	            statement
	*/
// for(let count = 0; count <=20; count++){
// 	console.log(count);
// }

let myString = "alex";
console.log(myString.length);
// Accessing elements of a string
// the first character in a string correspons to the number/index 0 
console.log(myString[0]);
console.log(myString[1]);
console.log(myString[2]);
console.log(myString[3]);
					//  x < 4
for(let x = 0; x < myString.length; x++) {
	console.log(myString[x]);
}


let myName = "Angel Paul";

for(let i = 0; i < myName.length; i++) {

	if (
		myName[i].toLowerCase() == "a" ||
		myName[i].toLowerCase() == "e" ||
		myName[i].toLowerCase() == "i" ||
		myName[i].toLowerCase() == "o" ||
		myName[i].toLowerCase() == "u" 
	) {
		// If the letter in the name is a vowel, it will print the number 3
		console.log(3);
	} else {
		//  Print all the non-vowel characters in the name
		console.log(myName[i]);
	}
}


// [SECTION] Continue and Break Statement

for(let count = 0; count <= 20; count++) {

	// If the remainder is equal to 0
	if(count % 2 === 0) {

		// Tells the code the continue to the next iteration of the loop.
		continue;
	}
	// Prints the current value of count if the remainder is not equal to 0
	console.log("Continue and break: " + count);

	// If the curent value of count is greater than 10
	if(count > 10) {

		// Tells the code to terminate/stop the loop even if the express/condition of the loop defined that it should execute as long as the value of count is less than or equal to 20
		// The number of values after 11 will no longer be printed in the console.
		break;
	}
}


let name = "Alexandro";

for(let i = 0; i < name.length; i++) {

	// The current letter is printed out based on its index
	console.log(name[i]);

	// If the character is equal to "a", continue to the next iteration
	if(name[i].toLowerCase() === "a") {
		console.log("Continue to the next iteration");
		continue;
	}

	// If the current letter is equal to "d", stop the loop
	if(name[i] == "d") {
		break;
	}
}