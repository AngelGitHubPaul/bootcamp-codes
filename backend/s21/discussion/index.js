//console.log("hello world!");

// [SECTION] Arithmetic Operators

let x = 1397;
let y = 7831;

let sum = x + y;
console.log("Result of addition operator: " + sum);

let difference = x - y;
console.log("Result of subtraction operator: " + difference);

let product = x * y;
console.log("Result of multiplication operator: " + product);

let quotient = x / y;
console.log("Result of division operator:  " + quotient);

let remainder = y % x;
console.log("Result of modulo operator: " + remainder); 

// [SECTION] Assignment Operators
// (=) 
let assignmentNumber = 8;

assignmentNumber = assignmentNumber + 2;
console.log("Result: " + assignmentNumber);

// Addition assignment operator
assignmentNumber += 2;
console.log("Result of addition assignment operator: " + assignmentNumber);

// Subtraction assignment operator
assignmentNumber -= 2;
console.log("Result of subtraction assignment operator: " + assignmentNumber);

// Multiplication assignment operator
assignmentNumber *= 2;
console.log("Result of multiplication assignment operator: " + assignmentNumber);

// Division assignment operator
assignmentNumber /= 2;
console.log("Result of division assignment operator: " + assignmentNumber);

let mdas = 1 + 2 - 3 * 4 / 5;
console.log("Result of mdas operation: " + mdas);
/*
	1. 3 * 4 = 12
	2. 12 / 5 = 2.4
	3. 1 + 2 = 3
	4. 3 - 2.4 = 0.6
*/

let pemdas = 1 + (2 - 3) * (4 / 5);
/*
	1. 2-3 = -1
	2. 4/5 = 0.8
	3. -1 * 0.8 = -0.8
	4. 1 +-0.8 = 0.2/0.199...
*/
console.log("Result of pemdas operation: " + pemdas);

// Increment and Decrement
let z = 1;

// the value of "z" is added by 1 before returning the value and storing it in the "increment" variable.
let increment = ++z;
console.log("Result of of pre-increment: " + increment);
console.log ("Result of pre-increment: " + z);

// the value of "z" is returned and stored in the "increment" variable then the value off "z" is increased by 1.
increment = z++;
console.log("Result of of post-increment: " + increment);
console.log ("Result of post-increment: " + z);

let decrement = --z;
console.log("Result of of pre-decrement: " + decrement);
console.log ("Result of pre-decrement: " + z);

decrement = z--;
console.log("Result of of post-decrement: " + decrement);
console.log ("Result of post-decrement: " + z);

// [SECTION] Type Coercion
/*
	Type coercion is the automatic or implicit conversion of values from one type to another.
*/

let numA = '10';
let numB = 12;


// Adding a string and a number will result to a string.
let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

let numC = 16;
let numD = 14;

let nonCoercion = numC + numD;
console.log(nonCoercion);
console.log(typeof nonCoercion);

let numE = true + 1;
console.log(numE);

let numF = false + 1;
console.log(numF);

// [SECTION] Comparison Operators 

let juan = 'juan';

// Equality Operator
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 == '1'); // true
console.log(0 == false); // true
console.log('juan' == 'juan'); // true
console.log ('juan' == juan); // true

// Iquality Operator
console.log(1 != 1); // false
console.log(1 != 2); // true
console.log(1 != '1'); // false
console.log(0 != false); // false
console.log('juan' != 'juan'); // false
console.log ('juan' != juan); // false

// Strict Equality Operator
// Compares the value and data type
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 === '1'); // false
console.log(0 === false); // false
console.log('juan' === 'juan'); // true
console.log ('juan' === juan); // true

// Strict Iquality Operator
console.log(1 !== 1); // false
console.log(1 !== 2); // true
console.log(1 !== '1'); // true
console.log(0 !== false); // true
console.log('juan' !== 'juan'); // false
console.log ('juan' !== juan); // false

// [SECTION] Relational Operators 

let a = 50;
let b = 65;

// Greater than operator ( > )
let isGreaterThan = a > b;
console.log(isGreaterThan); // false

let isLessThan = a < b;
console.log(isLessThan); // true

let isGTorEqual = a >= b;
console.log(isGTorEqual); // false

let isLTorEqualt = a <= b;
console.log(isLTorEqualt); // true

let num = 'hello';
let num2 = 2;
console.log(num > num2); //false

let num3 = 'hello';
let num4 = 'boom';
console.log(num3 < num4); //true

let numStr = "30";
console.log(a > numStr); // true - forced coercion to change the string to a number;
console.log(b <= numStr); // false

let str = "twenty";
console.log(b >= str); // false
//  65 is not greater than NaN

// [SECTION] Logical Operators

let isLegalAge = true;
let isRegistered = false;

// AND Operator ( && )
// Return true if all operands are true
let allRequirementsMet = isLegalAge && isRegistered;
console.log("Result of logical AND operator: " + allRequirementsMet); //false

// OR Operator ( || )
// Return true if one of the operands is true
let someRequirementsMet = isLegalAge || isRegistered;
console.log("Result of logical OR operator: " + someRequirementsMet);

// NOT Operator ( ! )
// Returns the opposite value
let someRequirementsNotMet = !isRegistered ;
console.log("Result of logical NOT operator: " +someRequirementsNotMet);