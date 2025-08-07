const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

numbers.forEach((number, index) => {
  doubledNumbers[index] = number * 2;
});

const doubledNumbersWithMap = numbers.map((number) => {
  return number * 2;
})

console.log(numbers);
console.log("forEach", doubledNumbers);
console.log("map", doubledNumbersWithMap);