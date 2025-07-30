// Challenge Easy 04: Array Explorer
// Your code here

let favoriteFoods = ["Pizza", "Burger", "Sushi", "Tacos", "Ice Cream"];

console.log("My favorite foods:");

const firstName = "Sina";
const lastName = "Sadr";

const fullName = firstName + " " + lastName;

// Add your for loop here

for (let index = 0; index < favoriteFoods.length; index = index + 1) {

  // index = 0
  // index = 1
  // index = 2
  // index = 3
  // index = 4

  console.log((index + 1) + ". " + favoriteFoods[index]);

  // 0Pizza => 0 Pizza => 0. Pizza => 1. Pizza
  // 1Burger => 1 Burger => 1. Burger => 2. Burger

}

// console.log("Total:", favoriteFoods.length ,"foods");
// console.log("Total: " + favoriteFoods.length + " foods");


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
console.log(`Total: ${favoriteFoods.length} foods`); // string interpolation => Template Literals
