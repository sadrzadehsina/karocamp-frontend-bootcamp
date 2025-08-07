const numbers = [1, 3, 5, 5, 9, 2, 15];

// predicate = condition => true | false

const firstEvenNumber = numbers.find((value) => {
  if (value > 10) return true;
  return false;
})

console.log(firstEvenNumber ?? "Not Found");