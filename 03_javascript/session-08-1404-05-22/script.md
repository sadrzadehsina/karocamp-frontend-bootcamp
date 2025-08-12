# JavaScript Learning Roadmap (Beginner to Advanced Core)

## 🟢 Stage 6: Events and Interaction

### 📌 Goal: Stage 6

Respond to user actions.

### 💡 Topics: Stage 6

- **Event handlers:** `onclick`, `onchange`, `oninput`
- **addEventListener()**
- **Event object and** `e.target`
- **Form submission and prevent default** `e.preventDefault()`

### ✅ Practice: Stage 6

- Create a login form with validation
- Add event listeners to multiple buttons (e.g., calculator keys)

### 🎯 Challenges: Stage 6

#### Easy Challenge 1: Interactive To-Do List
Create a simple to-do list application with the following features:
- An input field to add new tasks
- A button to add tasks to the list
- Each task should have a "Delete" button that removes it from the list
- Use `addEventListener()` for all interactions
- Display tasks as list items (`<li>`)

**Requirements:**
- HTML with input, button, and empty `<ul>`
- JavaScript to handle adding and removing tasks
- Use `e.target` to identify which delete button was clicked

#### Easy Challenge 2: Image Gallery with Navigation
Build an image gallery viewer:
- Display one image at a time
- Add "Previous" and "Next" buttons to navigate between images
- Show current image number (e.g., "3 of 5")
- Use an array of image URLs
- Handle edge cases (first/last image)

**Requirements:**
- Use `onclick` or `addEventListener()`
- Update image `src` and counter text
- Disable/enable buttons appropriately

#### Medium Challenge 1: Restaurant Order Form
Create an interactive restaurant order form:
- Multiple food categories (appetizers, mains, desserts)
- Each item has a checkbox and price
- Real-time order summary showing selected items and total price
- Form validation before submission
- Use `e.preventDefault()` to handle form submission

**Requirements:**
- Use `onchange` for checkboxes
- Calculate total price dynamically
- Validate that at least one item is selected
- Display order summary in a separate div

---

## 🟡 Stage 7: Error Handling and Debugging

### 📌 Goal: Stage 7

Handle errors gracefully and debug effectively.

### 💡 Topics: Stage 7

- **try, catch, finally**

### ✅ Practice: Stage 7

Build a mini app that validates form input and handles errors.

---

## 🟠 Stage 9: ES6+ Modern JavaScript

### 📌 Goal: Stage 8

Use modern, clean syntax and tools.

### 💡 Topics: Stage 8

- **let, const, block scope**
- **Destructuring:** `const {name} = obj`
- **Spread and rest operators**
- **Default parameters**
- **Short-circuiting and optional chaining** `(?.)`

### ✅ Practice: Stage 8

- Refactor older code with modern syntax
- Use destructuring to extract data from an object

---
