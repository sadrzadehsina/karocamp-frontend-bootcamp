const user = "John";
const num = 10;
const isValid = false;

/* block comment
if (condition) {
  // do something
}
*/

/* block comment */
// line comment

// if (user === "John") {
//   console.log("Hi John");
// } else if (user === "Jane") {
//   console.log("Hi Jane");
// } else if (user === "Mike") {
//   console.log("Hi Mike");
// } else {
//   console.log("Hi");
// }

// switch (user) {
//   case "John":
//     console.log("Hi John");
//     break;
//   case "Jane":
//     console.log("Hi Jane");
//     break;
//   case "Mike":
//     console.log("Hi Mike");
//     break;
//   default:
//     console.log("Hi");
// }

if (num === 10) {
  console.log("Number is 10");
}

if (isValid === true) {
  console.log("is valid");
}


const num1 = "10";

if ("10" == 10) {
  console.log("Yes, Number is 10");
}









/*
for () {
  console.log('loop');
}
*/

// index = 0
// index = 1
// index = 2
// index = 3

// let index = 0;
// index < 4;
// index = index + 1; // index++

// const arr = [1, 2, 3, 4];

for (let index = 0; index < 100; index = index + 1) {
  console.log('we are in the loop');
}









/*
function [name] ([parameters]) {
}
*/

function sayHi(user) {
  if (user === "John") {
    console.log("Hi John");
  } else if (user === "Jane") {
    console.log("Hi Jane");
  } else if (user === "Mike") {
    console.log("Hi Mike");
  } else {
    console.log("Hi");
  }
}

const user1 = "John";
const user2 = "Jane";
const user3 = "Mike";

sayHi(user1);
sayHi(user2);
sayHi(user3);