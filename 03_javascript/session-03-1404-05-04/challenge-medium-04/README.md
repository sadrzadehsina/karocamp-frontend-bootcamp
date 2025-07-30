# 🎯 Challenge Medium 04: Restaurant Menu System

## 📝 Description

Create a restaurant ordering system that uses switch statements and functions to process orders!

## 🎯 Objectives

- Advanced switch statement usage
- Function scope and organization
- Real-world application logic

## 📋 Requirements

1. Create these global variables:
   ```javascript
   let restaurantName = "Code Café";
   let totalSales = 0;
   ```

2. Create a function `getItemPrice(item)` that uses switch to return prices:
   - "burger": 12.99
   - "pizza": 15.99
   - "salad": 9.99
   - "coffee": 4.99
   - "cake": 6.99
   - default: 0

3. Create a function `processOrder(customerName, items)` that:
   - Takes a customer name and array of items
   - Calculates total using `getItemPrice()`
   - Updates global `totalSales`
   - Shows order receipt

4. Process these orders:
   ```javascript
   processOrder("John", ["burger", "coffee"]);
   processOrder("Sarah", ["pizza", "salad", "cake"]);
   processOrder("Mike", ["coffee", "cake", "unknown"]);
   ```

## 💡 Example Output

```javascript
=== Code Café ===
Order for: John
- burger: $12.99
- coffee: $4.99
Total: $17.98

=== Code Café ===
Order for: Sarah
- pizza: $15.99
- salad: $9.99
- cake: $6.99
Total: $32.97

Daily Sales: $50.95
```

## 🚀 Bonus

- Add tax calculation (8% tax rate)
- Track number of orders
- Add item categories

## ✅ Expected Topics Used

- switch statements
- Functions with parameters
- Global vs local scope
- Arrays and loops
- Return values
