# 🎯 Challenge Medium: Product Catalog (Stage 5 - Arrays .map())

## 📝 Description

Transform an array of product objects (JSON) using `.map()` to create a formatted product catalog with calculated prices and descriptions.

## 🎯 Objectives

- Use `.map()` with complex objects
- Calculate new values within map
- Create formatted output strings

## 📋 Requirements

1. Create an array called `products` with these objects:
   ```javascript
   [
     {name: "Laptop", price: 800, discount: 0.1},
     {name: "Phone", price: 500, discount: 0.2},
     {name: "Tablet", price: 300, discount: 0.15}
   ]
   ```
2. Use `.map()` to create a new array with objects containing:
   - Original name
   - Final price (after discount)
   - Savings amount
   - Formatted description string
3. Display the transformed catalog

## 💡 Example Output

```javascript
[
  {
    name: "Laptop",
    finalPrice: 720,
    savings: 80,
    description: "Laptop - Save $80! Final price: $720"
  },
  // ... other products
]
```

## 🚀 Bonus

- Add tax calculation
- Format prices as currency
- Add percentage savings display
- Chain with `.filter()` for products over certain price

## ✅ Expected Topics Used

- `.map()` method with objects
- Object property access
- Mathematical calculations
- Template literals
