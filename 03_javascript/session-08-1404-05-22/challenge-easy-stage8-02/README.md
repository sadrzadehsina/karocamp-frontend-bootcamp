# 🎯 Challenge Easy Stage 8-02: Modern Shopping Cart (Stage 8 - ES6+ Modern JavaScript)

## 📝 Description

Build a shopping cart system using ES6+ features including array methods, destructuring, spread operators, and optional chaining.

## 🎯 Objectives

- Use modern array manipulation techniques
- Practice destructuring with complex data structures
- Implement optional chaining for safe property access
- Use spread operators for state management
- Apply modern JavaScript patterns

## 📋 Requirements

1. Product and cart data structure:

   ```javascript
   const products = [
     {
       id: 1,
       name: 'Laptop',
       price: 999,
       category: 'Electronics',
       specs: { brand: 'Dell', ram: '16GB', storage: '512GB SSD' }
     },
     {
       id: 2,
       name: 'T-Shirt',
       price: 25,
       category: 'Clothing',
       specs: { size: 'M', color: 'Blue', material: 'Cotton' }
     }
   ];
   ```

2. Cart functionality using modern syntax:
   - Add items with quantity and variant selection
   - Update quantities using spread operator
   - Remove items while preserving immutability
   - Calculate totals with array methods
   - Apply discounts and tax calculations

3. Modern JavaScript requirements:
   - Use `const` and `let` appropriately
   - Destructure function parameters
   - Use optional chaining for nested properties
   - Implement default parameters
   - Use template literals for formatting

## 💡 Example Functions

```javascript
// Destructuring parameters and default values
function addToCart(cart, { id, quantity = 1, variant = {} }) {
  const existingItemIndex = cart.findIndex(item => 
    item.id === id && JSON.stringify(item.variant) === JSON.stringify(variant)
  );
  
  if (existingItemIndex !== -1) {
    // Update existing item using spread
    return cart.map((item, index) => 
      index === existingItemIndex 
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }
  
  // Add new item
  return [...cart, { id, quantity, variant }];
}

// Optional chaining and destructuring
function calculateCartSummary(cart, products, { taxRate = 0.1, discountCode } = {}) {
  const cartWithDetails = cart.map(cartItem => {
    const product = products.find(p => p.id === cartItem.id);
    const { name, price, specs = {} } = product || {};
    
    return {
      ...cartItem,
      name,
      price,
      subtotal: (price || 0) * cartItem.quantity,
      specs
    };
  });
  
  const subtotal = cartWithDetails.reduce((sum, item) => sum + item.subtotal, 0);
  const discount = calculateDiscount(subtotal, discountCode);
  const tax = (subtotal - discount) * taxRate;
  
  return {
    items: cartWithDetails,
    subtotal,
    discount,
    tax,
    total: subtotal - discount + tax
  };
}

// Rest parameters and spread
function mergeCartItems(...carts) {
  const allItems = carts.flat();
  const mergedItems = [];
  
  for (const item of allItems) {
    const existingIndex = mergedItems.findIndex(existing => 
      existing.id === item.id && 
      JSON.stringify(existing.variant) === JSON.stringify(item.variant)
    );
    
    if (existingIndex !== -1) {
      mergedItems[existingIndex] = {
        ...mergedItems[existingIndex],
        quantity: mergedItems[existingIndex].quantity + item.quantity
      };
    } else {
      mergedItems.push({ ...item });
    }
  }
  
  return mergedItems;
}
```

## 🚀 Expected Features

1. **Cart Operations**:
   - Add products with variants (size, color, etc.)
   - Update quantities immutably
   - Remove items safely
   - Clear entire cart

2. **Calculations**:
   - Calculate item subtotals
   - Apply percentage-based discounts
   - Calculate tax on final amount
   - Handle currency formatting

3. **Data Display**:
   - Show cart summary with template literals
   - Display product details using optional chaining
   - Format prices and quantities

## ✅ Expected Modern Syntax Usage

- Destructuring assignment: `const { name, price } = product`
- Array destructuring: `const [first, ...rest] = items`
- Spread in arrays: `[...cart, newItem]`
- Spread in objects: `{ ...item, quantity: newQty }`
- Optional chaining: `product?.specs?.brand`
- Default parameters: `function calc(rate = 0.1)`
- Template literals: `` `Total: $${total.toFixed(2)}` ``
- Short-circuit evaluation: `price || 0`

## 🌟 Bonus

- Implement cart persistence with localStorage
- Add product search with destructured results
- Use Map for better cart item management
- Implement cart item grouping by category
- Add wishlist functionality with modern syntax
