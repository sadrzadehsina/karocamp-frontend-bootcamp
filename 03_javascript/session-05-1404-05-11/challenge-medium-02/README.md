# 🎯 Challenge Medium 02: Interactive Todo List (Stage 7 - Events & Interaction)

## 📝 Description

Build a fully functional todo list with add, remove, and mark complete functionality using events.

## 🎯 Objectives

- Combine multiple event types
- Practice form handling and prevention of default behavior
- Work with dynamic DOM manipulation
- Handle events with different elements

## 📋 Requirements

1. Create an HTML structure with:
   - An input field for new todos
   - An "Add Todo" button
   - A "Clear All" button
   - An empty `<ul>` container for todo items

2. JavaScript functionality:
   - Add new todos when button is clicked OR Enter is pressed
   - Use `e.preventDefault()` for form submission
   - Each todo item should have:
     - The todo text
     - A "Complete" button (changes color/style when clicked)
     - A "Delete" button
   - Clear all todos when "Clear All" is clicked
   - Show total count of todos

## 💡 Example HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>Interactive Todo List</title>
    <style>
        .completed { text-decoration: line-through; color: gray; }
        .todo-item { margin: 10px 0; padding: 5px; border: 1px solid #ccc; }
    </style>
</head>
<body>
    <h1>My Todo List</h1>
    <form id="todoForm">
        <input type="text" id="todoInput" placeholder="Enter a new todo...">
        <button type="submit">Add Todo</button>
    </form>
    <button id="clearAll">Clear All</button>
    <p id="todoCount">Total todos: 0</p>
    <ul id="todoList"></ul>
    <script src="script.js"></script>
</body>
</html>
```

## 💡 Example Behavior

```
1. Type "Buy groceries" and click Add → New todo appears
2. Click "Complete" on a todo → Text gets crossed out
3. Click "Delete" on a todo → Todo disappears
4. Press Enter in input → Adds new todo
5. Click "Clear All" → All todos removed
```

## 🚀 Bonus

- Add edit functionality (double-click to edit)
- Save todos to localStorage
- Add categories or priorities
- Filter todos (All, Active, Completed)

## ✅ Expected Topics Used

- `addEventListener()` with multiple event types
- Form submission and `e.preventDefault()`
- Dynamic DOM manipulation (`createElement`, `appendChild`)
- Event delegation for dynamically created elements
- Input validation
