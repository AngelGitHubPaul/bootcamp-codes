// [SECTION] JSON
/*
    - JSON stands for JavaScript Object Notation
    - JSON is also used in other programming languages hence the name JavaScript Object Notation
    - Core JavaScript has a built in JSON object that contains methods for parsing JSON objects and converting strings into JavaScript objects
    - JavaScript objects are not to be confused with JSON
    - JSON is used for serializing different data types into bytes
    - Serialization is the process of converting data into a series of bytes for easier transmission/transfer of information
    - A byte is a unit of data that is eight binary digits (1 and 0) that is used to represent a character (letters, numbers or typographic symbols)
    - Bytes are information that a computer processes to perform different tasks
    - Uses double quotes for property names
    - Syntax
        {
            "propertyA": "valueA",
            "propertyB": "valueB",
        }
*/

// JSON Objects
// {
//     "city": "Quezon City",
//     "province": "Metro Manila",
//     "coountry": "Philippines"
// }

// // JSON Arrays
// "cities": [
//     {
//         "city": "Quezon City",
//         "province": "Metro Manila",
//         "coountry": "Philippines"
//     },
//     {
//         "city": "Manila City",
//         "province": "Metro Manila",
//         "coountry": "Philippines"
//     },
//     {
//         "city": "Makati City",
//         "province": "Metro Manila",
//         "coountry": "Philippines"
//     },
// ]

// JSON Methods

 /*
    - Stringified JSON is a JavaScript object converted into a string to be used in other functions of a JavaScript application
    - They are commonly used in HTTP requests where information is required to be sent and received in a stringified JSON format
    - Requests are an important part of programming where an application communicates with a backend application to perform different tasks such as getting/creating data in a database
    - A frontend application is an application that is used to interact with users to perform different visual tasks and display information while backend applications are commonly used for all the business logic and data processing
    - A database normally stores information/data that can be used in most applications
    - Commonly stored data in databases are user information, transaction records and product information
    - Node/Express JS are two of technologies that are used for creating backend applications which processes requests from frontend applications
    - Node JS is a Java Runtime Environment (JRE)/software that is made to execute other software
    - Express JS is a NodeJS framework that provides features for easily creating web and mobile applications
    - An example of where JSON is also used is on package.json files which an express JS application uses to keep track of information regarding a project
*/

// Converting Data into Stringified JSON
let batchesArr = [
    
    {
        batchName: "Batch 402"
    },
    {
        batchName: "batch 403"
    }
]

console.log(batchesArr);
console.log("Result from stringify method: ");
console.log(JSON.stringify(batchesArr));

// The "stringify" method is used to convert JS objects to strings
let data = JSON.stringify({
    name: "John",
    age: 31,
    address: {
        city: "Manila",
        country: "Philippines"
    }
})
console.log(data);

// Using stingify method with variables

let firstName = prompt("what is you first name?")
let lastName = prompt("what is you last name?")
let age = prompt("what is you age?")
let address = {
    city: prompt("which city do you live in?"),
    country: prompt("which country does your city belong to?")
};

let otherData = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    age: age,
    address: address
});
console.log(otherData);

// COnverting Stringified JSON to JS Objects

let batchesJSON = `[
    {
        "batchName": "Batch 402"
    },
    {
        "batchName": "Batch 402"
    }
]`
 console.log(batchesJSON);
 console.log("Result from parse method: ");
 console.log(JSON.parse(batchesJSON));

 let stringifiedObject = `{
    "name": "John",
    "age" : "31",
    "address": {
        "city": "Manila",
        "country": "Philippines"
    }
 }`
console.log(stringifiedObject);
console.log(JSON.parse(stringifiedObject));
