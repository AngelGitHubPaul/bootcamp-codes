// console.log("Hello World");


//Objective 1
//Add code here
//Note: function name is numberLooper

function numberLooper(number) {
    let message;
    for(let x = number; x > 0; x--) {
        if(x <= 50) {
            message =  "The current value is at " + x + ". Terminating the loop.";
            break;
        }

        if(x % 10 === 0) {
            console.log("The number is divisible by 10. Skipping the number");
        }

        if(x % 10 === 5) {
            console.log(x);
        }

    }

    return message;
}








//Objective 2
let string = 'supercalifragilisticexpialidocious';
console.log(string);
let filteredString = '';

//Add code here
for (let i = 0; i < string.length; i++) {
    if (
        string[i] == "a" ||
        string[i] == "e" ||
        string[i] == "i" ||
        string[i] == "o" ||
        string[i] == "u" 
    ) {
        continue;
    } else {
        filteredString += string[i];
    }
}




//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        filteredString: typeof filteredString !== 'undefined' ? filteredString : null,
        numberLooper: typeof numberLooper !== 'undefined' ? numberLooper : null
    }
} catch(err){

}