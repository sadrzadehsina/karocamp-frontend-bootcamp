const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const condition = (value) => {
  if (value > 5) return true;
  return false;
}

const eventNumbers = numbers.filter((value) => condition(value))

const firstEvenNumber = numbers.find((value) => condition(value))

console.log(eventNumbers);
console.log(firstEvenNumber);