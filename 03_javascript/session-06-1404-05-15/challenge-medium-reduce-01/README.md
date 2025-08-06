# 🎯 Challenge Medium: Shopping Cart Calculator (Stage 5 - Arrays .reduce())

## 📝 Description

Create a comprehensive shopping cart calculator using `.reduce()` to compute totals, taxes, and create summaries from an array of cart items.

## 🎯 Objectives

- Use `.reduce()` with complex objects
- Perform multiple calculations in one reduce
- Create summary objects as accumulator

## 📋 Requirements

1. Create an array called `cartItems` with these objects:

   ```javascript
   [
     {name: "Laptop", price: 800, quantity: 1, category: "Electronics"},
     {name: "Mouse", price: 25, quantity: 2, category: "Electronics"},  
     {name: "Book", price: 15, quantity: 3, category: "Books"},
     {name: "Headphones", price: 100, quantity: 1, category: "Electronics"}
   ]
   ```

2. Use `.reduce()` to calculate:
   - Total cart value (price × quantity for each item)
   - Total number of items
   - Category-wise totals
   - Most expensive single item

3. Add 10% tax to final total

4. Display detailed breakdown

## 💡 Example Output

```javascript
Cart Summary:
- Total Items: 7
- Subtotal: $995
- Tax (10%): $99.50  
- Final Total: $1094.50

Category Breakdown:
- Electronics: $925 (4 items)
- Books: $45 (3 items)

Most Expensive Item: Laptop ($800)
```

## 🚀 Bonus

- Apply different tax rates by category
- Add discount calculations
- Create detailed receipt format

## ✅ Expected Topics Used

- `.reduce()` method with objects
- Object accumulator pattern
- Mathematical calculations
- Complex data transformation
