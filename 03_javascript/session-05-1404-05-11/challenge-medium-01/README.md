# 🎯 Challenge Medium 01: Library Book System (Stage 5 - Arrays)

## 📝 Description
Create a comprehensive library book management system using arrays. This challenge combines multiple array operations to simulate a real-world book lending system.

## 🎯 Objectives
- Master advanced array manipulation techniques
- Combine multiple array methods in sequence
- Work with complex data operations and business logic
- Practice array searching, filtering, and reorganization

## 📋 Requirements
1. Create an array `availableBooks` with these titles: ["JavaScript Guide", "Python Basics", "HTML/CSS Fundamentals", "React Tutorial", "Node.js Essentials"]
2. Create an empty array `borrowedBooks` to track borrowed books
3. Create an array `waitingList` to manage book requests

**Implement these operations:**
4. Borrow the first 2 books (move them from `availableBooks` to `borrowedBooks`)
5. Add "Vue.js Guide" and "Angular Basics" to the waiting list
6. Return "Python Basics" (move it back to available books)
7. Process the waiting list: add the first waiting book to available books
8. Find and display the position of "React Tutorial" in any array
9. Create a `allBooks` array that combines all books from all arrays (without duplicates)
10. Display statistics: total books, available, borrowed, and waiting

## 💡 Example Output
```
Initial available books: ["JavaScript Guide", "Python Basics", "HTML/CSS Fundamentals", "React Tutorial", "Node.js Essentials"]
After borrowing 2 books:
  Available: ["HTML/CSS Fundamentals", "React Tutorial", "Node.js Essentials"]
  Borrowed: ["JavaScript Guide", "Python Basics"]
Waiting list: ["Vue.js Guide", "Angular Basics"]
After returning "Python Basics":
  Available: ["HTML/CSS Fundamentals", "React Tutorial", "Node.js Essentials", "Python Basics"]
  Borrowed: ["JavaScript Guide"]
After processing waiting list:
  Available: ["HTML/CSS Fundamentals", "React Tutorial", "Node.js Essentials", "Python Basics", "Vue.js Guide"]
  Waiting: ["Angular Basics"]
Position of "React Tutorial": Found in available books at index 1
All books in system: ["HTML/CSS Fundamentals", "React Tutorial", "Node.js Essentials", "Python Basics", "Vue.js Guide", "JavaScript Guide", "Angular Basics"]
Statistics:
  Total books in system: 7
  Available: 5
  Borrowed: 1
  Waiting: 1
```

## 🚀 Bonus
- Implement a search function that finds a book in any array
- Add a "reserve" function that moves books from available to waiting list
- Create a function to display the most popular books (most borrowed)
- Add error handling for operations (e.g., borrowing unavailable books)

## ✅ Expected Topics Used
- Multiple array creation and management
- `.push()`, `.pop()`, `.shift()`, `.unshift()` methods
- `.splice()` for complex removal and insertion
- `.includes()` and `.indexOf()` for searching
- `.forEach()` for iteration
- Array combination and deduplication techniques
- Complex array state management
