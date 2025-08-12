# 🎯 Challenge Easy Stage 6-02: Interactive Product Card (Stage 6 - Events and Interaction)

## 📝 Description

Build an interactive product card for an e-commerce website with image gallery, quantity selector, and add to cart functionality.

## 🎯 Objectives

- Use multiple event handlers effectively
- Practice `addEventListener()` with different event types
- Handle user interactions with buttons and inputs
- Update DOM elements dynamically

## 📋 Requirements

1. Create a product card with:
   - Product images (3-4 images in an array)
   - Image thumbnails for navigation
   - Product title and description
   - Price display
   - Quantity selector (+ and - buttons)
   - "Add to Cart" button
   - Size selector (S, M, L, XL)

2. Implement these interactions:
   - Click thumbnails to change main image
   - Use + and - buttons to adjust quantity (min: 1, max: 10)
   - Change product price based on selected size
   - Show confirmation message when item is added to cart
   - Disable "Add to Cart" if no size is selected

3. Event handling requirements:
   - Use `addEventListener()` for all interactions
   - Use `e.target` to identify clicked elements
   - Update cart counter in navigation

## 💡 Example Structure

```html
<div class="product-card">
  <div class="image-gallery">
    <img id="mainImage" src="product1.jpg" alt="Product">
    <div class="thumbnails">
      <!-- Thumbnail images -->
    </div>
  </div>
  
  <div class="product-info">
    <h2>Premium T-Shirt</h2>
    <p class="price">$<span id="currentPrice">25</span></p>
    
    <div class="size-selector">
      <!-- Size buttons -->
    </div>
    
    <div class="quantity-control">
      <button id="decreaseQty">-</button>
      <span id="quantity">1</span>
      <button id="increaseQty">+</button>
    </div>
    
    <button id="addToCart">Add to Cart</button>
  </div>
</div>
```

## 🚀 Expected Behavior

- Main image changes when thumbnails are clicked
- Quantity adjusts with buttons (respects min/max limits)
- Price updates based on size (S: $25, M: $30, L: $35, XL: $40)
- Cart confirmation appears briefly after adding item
- Cart counter in header updates

## ✅ Expected Topics Used

- `addEventListener('click', function)`
- `e.target` to identify clicked elements
- Dynamic content updates
- Conditional logic for user interactions
- Array handling for images

## 🌟 Bonus

- Add zoom effect when hovering over main image
- Implement keyboard navigation (arrow keys for images)
- Add smooth transitions for image changes
- Save cart items to localStorage
