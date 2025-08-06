# 🎯 Challenge Medium: Product Search Engine (Stage 5 - Arrays .find())

## 📝 Description

Create a product search system using `.find()` method with complex search criteria and multiple properties.

## 🎯 Objectives

- Use `.find()` with complex objects
- Implement multiple search criteria
- Handle various data types

## 📋 Requirements

1. Create an array called `products` with these objects:

   ```javascript
   [
     {id: 101, name: "Gaming Laptop", category: "Electronics", price: 1200, inStock: true, rating: 4.5},
     {id: 102, name: "Office Chair", category: "Furniture", price: 300, inStock: false, rating: 4.2},
     {id: 103, name: "Wireless Mouse", category: "Electronics", price: 50, inStock: true, rating: 4.8},
     {id: 104, name: "Standing Desk", category: "Furniture", price: 400, inStock: true, rating: 4.3}
   ]
   ```

2. Implement these searches:
   - Find first product in "Electronics" category that's in stock
   - Find product with highest rating (use combination of methods)
   - Find product by exact price match
   - Find first affordable product (price < 100) that's in stock

3. Display search results with appropriate messages

## 💡 Example Output

```javascript
First Electronics in stock: Gaming Laptop ($1200)
Highest rated product: Wireless Mouse (4.8 stars)
Product at $50: Wireless Mouse
First affordable in-stock item: Wireless Mouse ($50)
```

## 🚀 Bonus

- Add case-insensitive name search
- Search by price range
- Combine with `.sort()` for best match

## ✅ Expected Topics Used

- `.find()` method with complex conditions
- Logical operators (&&)
- Object property access
- Comparison operators
