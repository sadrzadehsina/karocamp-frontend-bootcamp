# 🎯 Challenge Easy Stage 7-01: Safe Calculator (Stage 7 - Error Handling and Debugging)

## 📝 Description

Build a calculator that handles various error conditions gracefully and provides meaningful error messages to users.

## 🎯 Objectives

- Practice `try`, `catch`, and `finally` blocks
- Handle different types of errors
- Provide user-friendly error messages
- Implement proper error logging

## 📋 Requirements

1. Create a calculator with basic operations:
   - Addition, subtraction, multiplication, division
   - Support for decimal numbers
   - Clear and clear all functionality
   - Display current calculation and result

2. Error handling scenarios:
   - Division by zero
   - Invalid number inputs (letters, symbols)
   - Very large numbers (overflow)
   - Empty input fields
   - Mathematical errors (square root of negative numbers)

3. Implementation requirements:
   - Use `try-catch` blocks for all calculations
   - Use `finally` block to log operations
   - Display user-friendly error messages
   - Don't let errors crash the calculator
   - Keep error log in console for debugging

## 💡 Example HTML Structure

```html
<div class="calculator">
  <div class="display">
    <input type="text" id="result" readonly>
    <div id="errorMessage" class="error-display"></div>
  </div>
  
  <div class="buttons">
    <button onclick="clearAll()">AC</button>
    <button onclick="clearEntry()">CE</button>
    <button onclick="appendNumber('7')">7</button>
    <button onclick="appendNumber('8')">8</button>
    <!-- More buttons -->
    <button onclick="calculate()">=</button>
  </div>
</div>
```

## 🚀 Expected Functions

```javascript
function calculate() {
  try {
    // Perform calculation
    // Handle different error cases
  } catch (error) {
    // Show user-friendly message
    // Log detailed error
  } finally {
    // Log operation for debugging
  }
}

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    throw error; // Re-throw to be handled by caller
  }
}
```

## ✅ Expected Error Cases

- **Division by zero**: "Cannot divide by zero"
- **Invalid input**: "Please enter valid numbers"
- **Overflow**: "Number too large to calculate"
- **Empty calculation**: "Please enter a calculation"
- **Invalid operation**: "Invalid mathematical operation"

## ✅ Expected Topics Used

- `try { } catch (error) { }` blocks
- `finally { }` for cleanup/logging
- Custom error throwing with `throw new Error()`
- Error message display
- Console logging for debugging

## 🌟 Bonus

- Add scientific calculator functions (sin, cos, sqrt)
- Implement calculation history with error tracking
- Add input validation before calculation
- Create error categories (user error vs system error)
