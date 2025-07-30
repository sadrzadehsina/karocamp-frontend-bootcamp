# 🎯 Challenge Medium 03: Student Grade System

## 📝 Description

Build a comprehensive student grade system that processes multiple students using loops, conditionals, and functions!

## 🎯 Objectives

- Combine arrays, loops, conditionals, and functions
- Process multiple data points
- Create reusable code

## 📋 Requirements

1. Create an array of student objects:
   ```javascript
   let students = [
       {name: "Alice", score: 85},
       {name: "Bob", score: 92},
       {name: "Charlie", score: 78},
       {name: "Diana", score: 96},
       {name: "Eve", score: 67}
   ];
   ```

2. Create these functions:
   - `getGrade(score)` - returns letter grade (A, B, C, D, F)
   - `isPassing(score)` - returns true if score >= 70
   - `processStudents(studentArray)` - processes all students

3. Use a for loop to process each student and display:
   - Name, score, grade, and pass/fail status

## 💡 Example Output

```javascript
=== Student Grade Report ===
Alice: 85 (B) - PASSED ✅
Bob: 92 (A) - PASSED ✅
Charlie: 78 (C) - PASSED ✅
Diana: 96 (A) - PASSED ✅
Eve: 67 (D) - FAILED ❌

Summary: 4 passed, 1 failed
```

## 🚀 Bonus

- Calculate class average
- Find highest and lowest scores
- Add student count by grade

## ✅ Expected Topics Used

- Arrays with objects
- for loops
- if-else statements
- Functions with parameters and return values
- Local variables in functions
