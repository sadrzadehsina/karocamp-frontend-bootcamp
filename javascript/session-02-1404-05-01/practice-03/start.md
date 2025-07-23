<!-- markdownlint-disable -->

# Practice 03: Build a Number Guessing Game

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Using conditional statements (`if`, `else if`, `else`)
- Working with `switch` statements for multiple conditions
- Implementing different types of loops (`for`, `while`, `do...while`)
- Using `break` and `continue` statements in loops
- Combining control flow with previous concepts (variables, operators)
- Creating interactive logic with conditional branching

## 📋 Exercise Description

Create a number guessing game where the computer generates a random number and the user (simulated) tries to guess it. This exercise will help you practice control flow concepts from Stage 3.

## 🔧 Requirements

### Basic Requirements:
1. Generate a random number between 1 and 100
2. Create a simulation of user guesses
3. Use `if`/`else` statements to check if the guess is correct, too high, or too low
4. Use a loop to allow multiple guesses
5. Count the number of attempts
6. Use `break` to exit the loop when the number is guessed

### Advanced Requirements:
1. Add difficulty levels using `switch` statements
2. Implement a maximum number of attempts
3. Use `continue` to skip invalid guesses
4. Add a replay feature using `do...while` loop

## 💻 Example Code Structure

```javascript
// Step 1: Generate random number and set up game
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 10;
let gameWon = false;

// Step 2: Simulate user guesses (in real game, this would be user input)
const simulatedGuesses = [50, 75, 60, 65, 62, 64, 63]; // Example guesses

console.log("🎯 Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 100");
console.log(`You have ${maxAttempts} attempts to guess it!`);

// Step 3: Game loop
while (attempts < maxAttempts && !gameWon) {
    // Your game logic here
    let currentGuess = simulatedGuesses[attempts];
    attempts++;
    
    console.log(`Attempt ${attempts}: Your guess is ${currentGuess}`);
    
    // Your conditional logic here
    if (currentGuess === targetNumber) {
        // Handle correct guess
    } else if (currentGuess < targetNumber) {
        // Handle guess too low
    } else {
        // Handle guess too high
    }
}

// Step 4: Game end logic
// Your end game logic here
```

## ✅ Expected Output

```
🎯 Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100
You have 10 attempts to guess it!

Attempt 1: Your guess is 50
Too low! Try a higher number.

Attempt 2: Your guess is 75
Too high! Try a lower number.

Attempt 3: Your guess is 62
Too low! Try a higher number.

Attempt 4: Your guess is 64
🎉 Congratulations! You guessed the number 64 in 4 attempts!
```

## 🎯 Challenge Tasks

1. **Difficulty Levels**: Implement Easy (1-50), Medium (1-100), Hard (1-200) using `switch`
2. **Invalid Input Handling**: Use `continue` to skip non-numeric or out-of-range guesses
3. **Game Statistics**: Track wins, losses, and average attempts
4. **Multiple Rounds**: Use `do...while` to allow playing multiple games

## 📝 Advanced Implementation Ideas

```javascript
// Difficulty selection with switch
function setDifficulty(level) {
    switch (level) {
        case 'easy':
            return { max: 50, attempts: 8 };
        case 'medium':
            return { max: 100, attempts: 10 };
        case 'hard':
            return { max: 200, attempts: 15 };
        default:
            return { max: 100, attempts: 10 };
    }
}

// Game statistics tracking
let gameStats = {
    gamesPlayed: 0,
    gamesWon: 0,
    totalAttempts: 0
};
```

## 🔍 Key Concepts to Practice

- Conditional statements (`if`, `else if`, `else`)
- Switch statements for multiple conditions
- Loop types (`for`, `while`, `do...while`)
- Loop control (`break`, `continue`)
- Combining conditions with logical operators
- Nested control structures

## 💡 Tips

- Use `Math.floor(Math.random() * max) + 1` to generate random numbers
- Remember that `break` exits the entire loop, while `continue` skips to the next iteration
- Use meaningful variable names for game state (e.g., `gameWon`, `attempts`)
- Consider edge cases like invalid inputs or boundary values
- Test your game logic with known values before using random numbers

## 🧪 Test Scenarios

1. **Perfect Game**: Guess the number on first try
2. **Maximum Attempts**: Use all attempts without guessing correctly
3. **Edge Cases**: Test with guesses of 1, maximum number, and out-of-range values
4. **Invalid Inputs**: Test with non-numeric values (simulated)
