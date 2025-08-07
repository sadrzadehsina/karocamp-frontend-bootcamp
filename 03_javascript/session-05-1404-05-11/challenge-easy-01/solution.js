// function = method

const isValid = true;

// if (isValid) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

// console.log(
//   isValid ? "yes" : "no"
// )

const cart = [];
// console.log(cart.length);

const length = cart.push("Apple");
// console.log(length);

cart.push("Banana");
// console.log(cart);

cart.push("Orange");
// console.log(cart);

const item = cart.pop();
// console.log(cart, item);

cart.pop();
// console.log(cart);

cart.unshift("New Item");
// console.log(cart);

const firstItem = cart.shift();
// console.log(cart, firstItem);

cart.push("Banana");
cart.push("Orange");

// const isExistApple = cart.includes("Apple");
// const isExistWatermelon = cart.includes("Watermelon");
// const isExistBanana = cart.includes("Banana");

// console.log(cart);
// console.log('do we have Apple?', isExistApple ? "Yes" : "No");
// console.log('do we have Watermelon?', isExistWatermelon ? "Yes" : "No");
// console.log('do we have Banana?', isExistBanana ? "Yes" : "No");

// ['Apple', 'Banana', 'Orange']
const isExist = cart.indexOf("Banana") !== -1;
// console.log("Banana is at", isExist);

// function
function sayHi(name) {
  console.log("Hi", name);
}

// arrow function
// const [function_name] = ([function_parameter]) => {
//   // scope
// }
// const sayHi = (name) => {
//   console.log('Hi', name)
// }

// for (let index = 0; index < cart.length; index++) {
//   console.log(index + 1, cart[index]);
// }

// const printArray = (value, index) => {
//   console.log(index, value);
// };

// cart.forEach(printArray);

/*
function [name] ([param1, param2, param3, ...]) {
  // scope
}

=> arrow function

const [name] = ([param]) => {
  // scope
}
*/

// function greetUser(name) {
//   return "Welcome " + name;
// }

// const greetUser = (name) => {
//   return "Welcome " + name;
// }

// console.log(greetUser("Alice"));

const items = ["Item 1", "Item 2", "Item 3"];

// function printItem(item, index) {
//   console.log(index, item);
// }

// const printItem =

// printItem(0, items[0]);
// printItem(1, items[1]);
// printItem(2, items[2]);

items.forEach((item, index, array) => {
  console.log(index, item, array);
});
