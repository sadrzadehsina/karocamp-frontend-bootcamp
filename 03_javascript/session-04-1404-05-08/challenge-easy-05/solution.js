// Challenge Easy 05: Simple Greeting Function
// Your code here

const num1 = 10;
const num2 = 20;


function add(num1, num2) {
    const num3 = num1 + num2;
    return num3;
}

console.log(add(num1, num2));
console.log(add(num1, num2));

// function sayHi() {
//     // console.log("Hiii");

//     return "Hiii";
// }
// console.log(sayHi());

// const message = "Hiii";

// console.log(message);
// console.log("Hiii");


/*
function [function_name](parameter, parameter, parameter, ...) {

    return [any];

}
*/

// const message = "Hi Alice";


// Create your greetUser function here
function greetUser(name) {
    // Add your code here
    return `Hello, ${name}! Welcome!`;
}

// [function_name](parameter)

// Test your function
console.log(greetUser("Alice"));
console.log(greetUser("Bob"));
console.log(greetUser("Charlie"));
