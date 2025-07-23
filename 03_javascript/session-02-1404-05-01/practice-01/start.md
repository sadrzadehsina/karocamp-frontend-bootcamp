<!-- markdownlint-disable -->

# Practice 01: Build a Basic Calculator

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- How to declare and use variables with `let` and `const`
- Working with different data types (Number, String, Boolean)
- Using arithmetic operators (`+`, `-`, `*`, `/`, `%`)
- Understanding the difference between `==` and `===`
- Using `typeof` to check data types
- Working with assignment operators (`+=`, `-=`, `*=`, `/=`)

## 📋 Exercise Description

Create a basic calculator that can perform arithmetic operations on two numbers. This exercise will help you practice variables, data types, and operators that you've learned in Stage 2.

## 🔧 Requirements

### Basic Requirements:
1. Create variables to store two numbers and an operator
2. Use `const` for values that won't change and `let` for values that might change
3. Perform calculations based on the operator (+, -, *, /, %)
4. Display the result using `console.log()`
5. Use `typeof` to check the data types of your variables

### Advanced Requirements:
1. Handle division by zero cases
2. Add input validation to check if inputs are numbers
3. Create a function that can perform multiple calculations
4. Use template literals for better output formatting

## 💻 Example Code Structure

```javascript
// Step 1: Declare variables
const num1 = 10;
const num2 = 5;
const operator = '+';

// Step 2: Check data types
console.log('Type of num1:', typeof num1);
console.log('Type of num2:', typeof num2);
console.log('Type of operator:', typeof operator);

// Step 3: Perform calculation
let result;

// Your calculation logic here

// Step 4: Display result
console.log(`${num1} ${operator} ${num2} = ${result}`);
```

## ✅ Expected Output

```
Type of num1: number
Type of num2: number
Type of operator: string
10 + 5 = 15
```

## 🎯 Challenge Tasks

1. **Multiple Operations**: Create a calculator that can handle multiple operations in sequence
2. **Error Handling**: Add proper error messages for invalid inputs
3. **Memory Feature**: Add variables to store and recall previous results
4. **Comparison Operations**: Add comparison operators and display boolean results

## 📝 Submission Guidelines

1. Create a file named `calculator.js`
2. Include comments explaining each step
3. Test your calculator with different numbers and operators
4. Make sure to handle edge cases (like division by zero)

## 🔍 Key Concepts to Practice

- Variable declaration (`let` vs `const`)
- Data types (Number, String, Boolean)
- Arithmetic operators
- Assignment operators
- Type checking with `typeof`
- Template literals
- Comparison operators

## 💡 Tips

- Use meaningful variable names
- Always check data types before performing operations
- Remember that `===` is preferred over `==` for comparisons
- Use `const` by default, only use `let` when you need to reassign the variable
- Test your code with various inputs to ensure it works correctly
