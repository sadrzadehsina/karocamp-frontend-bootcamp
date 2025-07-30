// Challenge Easy 01: Grade Calculator
// Your code here

let score = 40; // Try changing this value

// Add your if-else statements here

if ( score >= 90 && score <= 100 ) {
  // grade A 
  console.log("Your grade is: A");
  console.log("You passed");
} else if ( score >= 80 && score <= 89) {
  // grade B
  console.log("Your grade is: B");
  console.log("You passed");
} else if ( score >= 70 && score <= 79) {
  // grade C
  console.log("Your grade is: C");
  console.log("You passed");
} else if (score >= 60 && score <= 69) {
  // grade D
  console.log("Your grade is: D");
  console.log("You failed");
} else {
  // grade F
  console.log("Your grade is: F");
  console.log("You failed");
}