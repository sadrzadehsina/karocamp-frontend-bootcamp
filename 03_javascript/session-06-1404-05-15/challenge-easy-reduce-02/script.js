// 🎯 Challenge Easy: Word Counter (Stage 5 - Arrays .reduce())

// Create the array of words as required
const words = ["hello", "world", "javascript", "coding"];

const lengthOfAllWords = words.reduce((previousValue, word) => {

  console.log(word, word.length);

  previousValue += word.length;

  return previousValue;

}, 0);

console.log("Total", lengthOfAllWords);