<!-- markdownlint-disable -->

# Practice 05: Build a Reusable Tax and Discount Calculator

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Understanding function declaration vs function expression
- Working with parameters and arguments effectively
- Using return values to make functions reusable
- Understanding local vs global scope
- Creating and using arrow functions (`() => {}`)
- Building modular and reusable code
- Function composition and chaining

## 📋 Exercise Description

Create a comprehensive calculator system with reusable functions for tax calculations, discount applications, and final price computations. This exercise will help you master functions and scope concepts from Stage 4.

## 🔧 Requirements

### Basic Requirements:
1. Create functions using both declaration and expression syntax
2. Build functions that accept parameters and return values
3. Implement tax calculation with different tax rates
4. Create discount calculation functions
5. Use arrow functions for simple calculations
6. Demonstrate local and global scope differences

### Advanced Requirements:
1. Create a function that accepts other functions as parameters (higher-order functions)
2. Implement function chaining for multiple calculations
3. Add input validation within functions
4. Create a complete checkout system using multiple functions
5. Handle edge cases and error conditions

## 💻 Example Code Structure

```javascript
// Global variables (demonstrate global scope)
const DEFAULT_TAX_RATE = 0.08; // 8% default tax
let calculationHistory = [];

// Step 1: Function declaration
function calculateTax(amount, taxRate) {
    // Local scope variables
    const tax = amount * taxRate;
    return tax;
}

// Step 2: Function expression
const calculateDiscount = function(amount, discountPercent) {
    // Your discount calculation logic here
    const discountAmount = amount * (discountPercent / 100);
    return discountAmount;
};

// Step 3: Arrow function
const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
};

// Step 4: More complex function with multiple parameters
function calculateFinalPrice(originalPrice, discountPercent = 0, taxRate = DEFAULT_TAX_RATE) {
    // Your calculation logic here
    // Should apply discount first, then tax
    let priceAfterDiscount = originalPrice - calculateDiscount(originalPrice, discountPercent);
    let tax = calculateTax(priceAfterDiscount, taxRate);
    let finalPrice = priceAfterDiscount + tax;
    
    // Store calculation in history (demonstrate scope)
    calculationHistory.push({
        original: originalPrice,
        discount: discountPercent,
        tax: taxRate,
        final: finalPrice
    });
    
    return finalPrice;
}

// Step 5: Higher-order function example
function applyCalculation(amount, calculatorFunction) {
    // Your higher-order function logic here
    return calculatorFunction(amount);
}

// Test your functions
console.log("Testing Tax and Discount Calculator:");
console.log("=====================================");

const testPrice = 100;
const testDiscount = 15; // 15%
const testTaxRate = 0.10; // 10%

// Your test calls here
```

## ✅ Expected Output

```
Testing Tax and Discount Calculator:
=====================================

Original Price: $100.00
Discount (15%): $15.00
Price After Discount: $85.00
Tax (10%): $8.50
Final Price: $93.50

Calculation Summary:
- Subtotal: $85.00
- Tax: $8.50
- Total: $93.50

Function Types Demonstration:
- calculateTax (declaration): $10.00
- calculateDiscount (expression): $15.00
- formatCurrency (arrow): $93.50

Scope Test:
- Global tax rate: 8%
- Local calculation: completed
- History entries: 1
```

## 🎯 Challenge Tasks

1. **Function Composition**: Create a function that combines multiple calculation functions
2. **Validation Functions**: Add functions to validate input parameters
3. **Bulk Calculator**: Create functions that work with arrays of prices
4. **Receipt Generator**: Build a function that generates a formatted receipt
5. **Tax Bracket System**: Implement progressive tax calculation

## 📝 Advanced Implementation Ideas

```javascript
// Arrow function variations
const simpleCalculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : 0
};

// Function with default parameters
function calculateWithOptions(
    price, 
    options = {
        discountPercent: 0,
        taxRate: DEFAULT_TAX_RATE,
        includeTip: false,
        tipPercent: 15
    }
) {
    let finalPrice = price;
    
    // Apply discount
    if (options.discountPercent > 0) {
        finalPrice -= calculateDiscount(finalPrice, options.discountPercent);
    }
    
    // Apply tax
    finalPrice += calculateTax(finalPrice, options.taxRate);
    
    // Apply tip if requested
    if (options.includeTip) {
        finalPrice += calculateTax(finalPrice, options.tipPercent / 100);
    }
    
    return finalPrice;
}

// Higher-order function for batch processing
function processPrices(prices, processorFunction) {
    return prices.map(processorFunction);
}

// Function that returns a function (closure example)
function createTaxCalculator(taxRate) {
    return function(amount) {
        return amount * taxRate;
    };
}

// Usage examples
const salesTaxCalc = createTaxCalculator(0.08);
const luxuryTaxCalc = createTaxCalculator(0.15);

// Input validation function
function validatePrice(price) {
    if (typeof price !== 'number' || price < 0) {
        throw new Error('Price must be a positive number');
    }
    return true;
}

// Receipt generator function
function generateReceipt(items) {
    let receipt = "RECEIPT\n";
    receipt += "="*20 + "\n";
    
    let subtotal = 0;
    items.forEach(item => {
        receipt += `${item.name}: ${formatCurrency(item.price)}\n`;
        subtotal += item.price;
    });
    
    receipt += "-"*20 + "\n";
    receipt += `Subtotal: ${formatCurrency(subtotal)}\n`;
    
    return receipt;
}
```

## 🔍 Key Concepts to Practice

- Function declaration vs expression vs arrow functions
- Parameters, arguments, and default parameters
- Return statements and return values
- Local scope vs global scope
- Function hoisting behavior
- Higher-order functions
- Function composition
- Error handling in functions

## 💡 Tips

- Function declarations are hoisted, but function expressions are not
- Arrow functions don't have their own `this` context
- Use `const` for function expressions to prevent reassignment
- Default parameters are evaluated at call time, not declaration time
- Functions should have a single responsibility (do one thing well)
- Use descriptive function names that explain what the function does
- Consider returning objects for functions that need to return multiple values

## 🧪 Test Cases

```javascript
// Test various scenarios
const testCases = [
    {
        description: "Basic calculation",
        price: 100,
        discount: 10,
        tax: 0.08,
        expected: 97.2
    },
    {
        description: "No discount",
        price: 50,
        discount: 0,
        tax: 0.05,
        expected: 52.5
    },
    {
        description: "High discount",
        price: 200,
        discount: 50,
        tax: 0.10,
        expected: 110
    },
    {
        description: "Edge case - zero price",
        price: 0,
        discount: 10,
        tax: 0.08,
        expected: 0
    }
];

// Function to run all tests
function runTests() {
    testCases.forEach((testCase, index) => {
        console.log(`Test ${index + 1}: ${testCase.description}`);
        const result = calculateFinalPrice(testCase.price, testCase.discount, testCase.tax);
        const passed = Math.abs(result - testCase.expected) < 0.01;
        console.log(`Expected: ${testCase.expected}, Got: ${result}, Passed: ${passed}`);
        console.log("---");
    });
}
```
