# 🎯 Challenge Easy 02: To-Do List Manager (Stage 5 - Arrays)

## 📝 Description
Create a simple to-do list manager using arrays to store and manipulate tasks.

## 🎯 Objectives
- Practice array creation and manipulation
- Use array methods like `.push()`, `.indexOf()`, `.splice()`
- Work with array searching and removal

## 📋 Requirements
1. Create an empty array called `todoList`
2. Add these tasks using `.push()`: "Buy groceries", "Walk the dog", "Study JavaScript"
3. Display all tasks with their index numbers
4. Find the index of "Walk the dog" using `.indexOf()`
5. Remove "Walk the dog" using `.splice()`
6. Add a new task "Call mom" at the beginning using `.unshift()`
7. Display the final to-do list and its length

## 💡 Example Output
```
Initial todo list: []
After adding tasks: ["Buy groceries", "Walk the dog", "Study JavaScript"]
Tasks with index:
0: Buy groceries
1: Walk the dog
2: Study JavaScript
Index of "Walk the dog": 1
After removing "Walk the dog": ["Buy groceries", "Study JavaScript"]
After adding "Call mom" at beginning: ["Call mom", "Buy groceries", "Study JavaScript"]
Final todo list length: 3
```

## 🚀 Bonus
- Try removing multiple tasks at once with `.splice()`
- Use `.slice()` to create a copy of the array
- Add a function to mark tasks as completed

## ✅ Expected Topics Used
- Array creation and initialization
- `.push()`, `.unshift()` methods
- `.indexOf()` method
- `.splice()` method for removal
- Array length property
