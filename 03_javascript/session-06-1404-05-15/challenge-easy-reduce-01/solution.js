const numbers = [1, 2, 3, 4, 5];
// [1, 2, 3, 4, 5] => number

// 15

let sum1 = 0;
let sum2 = 0;

for (let index = 0; index < numbers.length; index++) {
  sum1 = sum1 + numbers[index];
}

numbers.forEach((value) => {
  sum2 = sum2 + value;
})

const sum3 = numbers.reduce((sum, value) => {
  return sum + value;
}, 10);

console.log("Old for => Sum", sum1);
console.log("forEach => Sum", sum2);
console.log("reduce => Sum", sum3);