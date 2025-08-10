
// const numbers = [1, 2, 3, 4, 5];
const messages = ["Hi", "Hello"];

const firstName = "John";

function sayHi() {
  console.log("Hi");
}

// Person => Object
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  email: "john@doe.com",

  address: {
    country: "Iran",
    city: "Isfahan",
    street: "",
    zipcode: 123123
  },

  sayHi: () => {
    console.log('Hi')
  }
};

console.log(user.address.country);

// array of objects => JSON
// JSON => Javascript Object Notation
const allUsers = [user, user, user];

// console.log(numbers[1]);

// for (let index = 0; index < numbers.length; index++) {
//   console.log(numbers[index]);
// }

const properties = Object.keys(user);
const values = Object.values(user)

// console.log(properties);
// console.log(values);

// for (let index = 0; index < numbers.length; index++) {
//   console.log(numbers[index]);
// }

// numbers = [1, 2, 3, 4, 5];
// keys = ['firstName', 'lastName', 'age', 'email', 'sayHi']
// for (let index = 0; index < Object.keys(user).length; index++) {
//   console.log(user[index]);
// }

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(number => {
//   console.log(number);
// })

// const doubledNumbers = numbers.map(number => {
//   return number * 2;
// })

// Object.keys(user) = ['firstName', 'lastName', 'age', 'email', 'sayHi']
// Object.keys(user).forEach(key => {
//   console.log(key, user[key]);
// })

// for (property in user) {
//   console.log(property, user[property]);
// }

// console.log(person);
// console.log(person.firstName);

// console.log(allUsers); 


const contact = {
  firstName: "John",
  lastName: "Doe",
};

contact.email = "john@doe.com";

delete contact.firstName;

contact.email = "john___1@doe.com";

console.log(contact);

const numbers = [1, 2, 3, 4, 5, 10, 15, 20, 30, 40];

// doubled
// > 10
// 20 ?

const doubledNumbers = numbers.map(number => {
  return number * 2;
});

const greaterThan10 = doubledNumbers.filter(number => {
  return number > 10;
});

const indexOf20 = greaterThan10.find(number => {
  if (number === 20) return true;
  return false;
});

const newNumbers = numbers.map(number => {
  return number * 2;
}).filter(number => {
  return number > 10
}).find(number => {
  if (number === 20) return true;
  return false;
})

console.log(doubledNumbers)
console.log(greaterThan10);
console.log(indexOf20);

console.log(newNumbers);