# 🎯 Challenge Medium 01: Student Management System (Stage 5 - Arrays & Objects)

## 📝 Description

Build a student management system that combines arrays and objects to store and manipulate student data.

## 🎯 Objectives

- Combine arrays and objects effectively
- Use array methods with object data
- Practice data filtering and searching

## 📋 Requirements

1. Create an array called `students` with these student objects:

   ```javascript
   [
     { id: 1, name: "Alice", age: 20, grade: 85, subjects: ["Math", "Science"] },
     { id: 2, name: "Bob", age: 19, grade: 92, subjects: ["English", "History"] },
     { id: 3, name: "Charlie", age: 21, grade: 78, subjects: ["Math", "Art"] },
     { id: 4, name: "Diana", age: 20, grade: 96, subjects: ["Science", "Math"] }
   ]
   ```

2. Implement these functions:
   - Find all students with grade >= 90 using `.filter()`
   - Get all student names using `.map()`
   - Find a student by name using `.find()`
   - Calculate average grade using `.reduce()`
   - Check if any student takes "Math" using `.some()`

3. Add a new student to the array
4. Remove a student by id using `.splice()` and `.findIndex()`

## 💡 Example Output

```javascript
High achievers (grade >= 90): [Bob, Diana]
All student names: ["Alice", "Bob", "Charlie", "Diana"]
Found student Bob: { id: 2, name: "Bob", age: 19, grade: 92, subjects: ["English", "History"] }
Average grade: 87.75
Any student takes Math? true
After adding new student: 5 students total
After removing student: 4 students total
```

## 🚀 Bonus

- Sort students by grade (highest first)
- Find all unique subjects across all students
- Create a function to update a student's grade
- Group students by age

## ✅ Expected Topics Used

- Arrays with object elements
- Array methods: `.filter()`, `.map()`, `.find()`, `.reduce()`, `.some()`
- Object property access
- Array manipulation with `.splice()`, `.findIndex()`
