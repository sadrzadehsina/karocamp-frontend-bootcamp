<!-- markdownlint-disable -->

# Practice 04: Build a Multiplication Table Generator

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Using `for` loops with multiple levels (nested loops)
- Working with `while` and `do...while` loops
- Implementing loop control with `break` and `continue`
- Looping through arrays and processing data
- Creating formatted output with loops
- Understanding loop performance and optimization

## 📋 Exercise Description

Create a multiplication table generator that can display tables for single numbers or ranges of numbers. This exercise will help you master different types of loops and array iteration from Stage 3.

## 🔧 Requirements

### Basic Requirements:
1. Generate a multiplication table for a single number (e.g., 5 × 1 = 5, 5 × 2 = 10, etc.)
2. Use a `for` loop to create the basic table
3. Use a `while` loop to create an alternative version
4. Display results in a formatted way
5. Create tables for multiple numbers using nested loops

### Advanced Requirements:
1. Allow custom ranges for both the number and multiplier
2. Use `continue` to skip certain multiples (e.g., skip even numbers)
3. Use `break` to limit table size dynamically
4. Loop through an array of numbers to generate multiple tables
5. Add input validation and error handling

## 💻 Example Code Structure

```javascript
// Step 1: Single number multiplication table using for loop
function generateTableFor(number, maxMultiplier = 10) {
    console.log(`\n📊 Multiplication Table for ${number}:`);
    console.log("=".repeat(25));
    
    for (let i = 1; i <= maxMultiplier; i++) {
        // Your multiplication logic here
        let result = number * i;
        console.log(`${number} × ${i} = ${result}`);
    }
}

// Step 2: Same table using while loop
function generateTableWhile(number, maxMultiplier = 10) {
    console.log(`\n📊 Multiplication Table for ${number} (While Loop):`);
    console.log("=".repeat(35));
    
    let i = 1;
    while (i <= maxMultiplier) {
        // Your logic here
        i++;
    }
}

// Step 3: Multiple tables using nested loops
function generateMultipleTables(numbers, maxMultiplier = 10) {
    console.log("\n📚 Multiple Multiplication Tables:");
    console.log("=".repeat(40));
    
    // Your nested loop logic here
    for (let num of numbers) {
        // Generate table for each number
    }
}

// Step 4: Test your functions
const testNumber = 7;
const testNumbers = [2, 5, 9, 12];

generateTableFor(testNumber);
generateTableWhile(testNumber);
generateMultipleTables(testNumbers);
```

## ✅ Expected Output

```
📊 Multiplication Table for 7:
=========================
7 × 1 = 7
7 × 2 = 14
7 × 3 = 21
7 × 4 = 28
7 × 5 = 35
7 × 6 = 42
7 × 7 = 49
7 × 8 = 56
7 × 9 = 63
7 × 10 = 70

📚 Multiple Multiplication Tables:
========================================

Table for 2:
2 × 1 = 2
2 × 2 = 4
2 × 3 = 6
...

Table for 5:
5 × 1 = 5
5 × 2 = 10
5 × 3 = 15
...
```

## 🎯 Challenge Tasks

1. **Conditional Tables**: Use `continue` to create tables that skip multiples of 3
2. **Limited Tables**: Use `break` to stop when result exceeds 50
3. **Formatted Grid**: Create a grid-style multiplication table (like traditional times tables)
4. **Interactive Range**: Allow dynamic start and end points for both number and multiplier ranges
5. **Performance Comparison**: Compare execution time between different loop types

## 📝 Advanced Implementation Ideas

```javascript
// Grid-style multiplication table
function generateGrid(maxNumber = 10) {
    console.log("\n🔢 Multiplication Grid:");
    
    // Header row
    process.stdout.write("   ");
    for (let i = 1; i <= maxNumber; i++) {
        process.stdout.write(`${i.toString().padStart(4)}`);
    }
    console.log();
    
    // Nested loops for grid
    for (let row = 1; row <= maxNumber; row++) {
        process.stdout.write(`${row.toString().padStart(2)} |`);
        for (let col = 1; col <= maxNumber; col++) {
            process.stdout.write(`${(row * col).toString().padStart(4)}`);
        }
        console.log();
    }
}

// Skip certain conditions with continue
function generateSelectiveTable(number, maxMultiplier = 20) {
    console.log(`\n🎯 Selective Table for ${number} (skipping multiples of 3):`);
    
    for (let i = 1; i <= maxMultiplier; i++) {
        if (i % 3 === 0) {
            continue; // Skip multiples of 3
        }
        console.log(`${number} × ${i} = ${number * i}`);
    }
}

// Limited table with break
function generateLimitedTable(number, limit = 100) {
    console.log(`\n⚡ Limited Table for ${number} (stop when result > ${limit}):`);
    
    for (let i = 1; i <= 20; i++) {
        let result = number * i;
        if (result > limit) {
            console.log(`Stopping: ${number} × ${i} would be ${result} (> ${limit})`);
            break;
        }
        console.log(`${number} × ${i} = ${result}`);
    }
}
```

## 🔍 Key Concepts to Practice

- For loops with initialization, condition, and increment
- While loops with manual counter management
- Do-while loops for at least one execution
- Nested loops for multi-dimensional data
- Array iteration with for...of and traditional for loops
- Loop control statements (break, continue)
- String formatting and output formatting

## 💡 Tips

- Use `padStart()` or `padEnd()` for aligned output formatting
- Remember that nested loops can have performance implications with large datasets
- `break` only exits the innermost loop in nested structures
- Use meaningful variable names like `multiplier` instead of just `i` in complex loops
- Consider using `for...of` for iterating arrays when you don't need the index
- Test edge cases like 0, negative numbers, and large numbers

## 🧪 Test Cases

```javascript
// Test various scenarios
const testCases = [
    { number: 0, expected: "All results should be 0" },
    { number: 1, expected: "Results should equal the multiplier" },
    { number: -3, expected: "Results should be negative" },
    { numbers: [], expected: "Should handle empty array gracefully" },
    { numbers: [1, 2, 3], maxMultiplier: 3, expected: "Limited range test" }
];
```
