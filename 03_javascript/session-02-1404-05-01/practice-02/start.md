<!-- markdownlint-disable -->

# Practice 02: Build a Personal Data Logger

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Working with different primitive data types (String, Number, Boolean, null, undefined)
- Understanding complex data types (Object, Array)
- Using logical operators (`&&`, `||`, `!`)
- Practicing comparison operators and their differences
- Creating and manipulating objects and arrays
- Using `typeof` operator effectively

## 📋 Exercise Description

Create a personal data logger that stores and displays information about a person. This exercise will help you practice working with various data types, objects, arrays, and logical operators from Stage 2.

## 🔧 Requirements

### Basic Requirements:
1. Create variables for personal information using appropriate data types
2. Create an object to store person details
3. Create an array to store multiple pieces of information
4. Use logical operators to validate data
5. Display information using `console.log()`
6. Check data types using `typeof`

### Advanced Requirements:
1. Add data validation using logical operators
2. Create nested objects and arrays
3. Implement basic search functionality in arrays
4. Add comparison logic for different data values

## 💻 Example Code Structure

```javascript
// Step 1: Declare primitive variables
const personName = "John Doe";
const age = 25;
const isStudent = true;
const spouse = null;
let favoriteColor; // undefined

// Step 2: Create an object
const person = {
    name: personName,
    age: age,
    isStudent: isStudent,
    spouse: spouse,
    favoriteColor: favoriteColor
};

// Step 3: Create an array
const hobbies = ["reading", "coding", "gaming"];

// Step 4: Type checking
console.log("Data Types:");
// Your type checking code here

// Step 5: Logical operations and validations
// Your logical operations here

// Step 6: Display information
console.log("Person Information:");
// Your display code here
```

## ✅ Expected Output

```
Data Types:
Name type: string
Age type: number
Is Student type: boolean
Spouse type: object
Favorite Color type: undefined

Person Information:
Name: John Doe
Age: 25
Is Student: Yes
Has Spouse: No
Favorite Color: Not specified
Hobbies: reading, coding, gaming

Validations:
Is adult: true
Has complete profile: false
```

## 🎯 Challenge Tasks

1. **Data Validation**: Create validation rules using logical operators
2. **Nested Structures**: Add nested objects (address, education) and arrays
3. **Data Comparison**: Compare two person objects and show differences
4. **Profile Completeness**: Calculate profile completion percentage

## 📝 Submission Guidelines

1. Create a file named `dataLogger.js`
2. Include detailed comments explaining data types and operations
3. Test with different data combinations
4. Handle cases with null and undefined values

## 🔍 Key Concepts to Practice

- Primitive data types (String, Number, Boolean, null, undefined)
- Complex data types (Object, Array)
- Type checking with `typeof`
- Logical operators (`&&`, `||`, `!`)
- Comparison operators (`==`, `===`, `!=`, `!==`)
- Object property access
- Array manipulation

## 💡 Tips

- Remember that `typeof null` returns "object" (this is a known JavaScript quirk)
- Use strict equality (`===`) for accurate comparisons
- Logical operators can be used for default values: `value || "default"`
- Objects and arrays are passed by reference, not by value
- Use descriptive property names in objects for better code readability

## 🧪 Test Cases to Try

```javascript
// Test with different data combinations
const testPerson1 = { name: "", age: 0, isStudent: false };
const testPerson2 = { name: "Jane", age: null, isStudent: true };
const testPerson3 = { name: "Bob", age: -5, isStudent: "yes" };
```
