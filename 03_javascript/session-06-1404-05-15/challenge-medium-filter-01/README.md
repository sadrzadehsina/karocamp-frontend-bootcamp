# 🎯 Challenge Medium: Student Grade Filter (Stage 5 - Arrays .filter())

## 📝 Description

Use the `.filter()` method to find students based on multiple criteria from an array of student objects.

## 🎯 Objectives

- Use `.filter()` with complex objects
- Apply multiple filtering conditions
- Work with nested object properties

## 📋 Requirements

1. Create an array called `students` with these objects:

   ```javascript
   [
     {name: "Alice", grade: 85, age: 20, major: "Computer Science"},
     {name: "Bob", grade: 92, age: 19, major: "Mathematics"},
     {name: "Charlie", grade: 78, age: 21, major: "Computer Science"},
     {name: "Diana", grade: 88, age: 20, major: "Physics"},
     {name: "Eve", grade: 95, age: 22, major: "Computer Science"}
   ]
   ```

2. Create three filtered arrays:
   - `highGradeStudents`: Students with grade >= 90
   - `csStudents`: Students majoring in "Computer Science"
   - `youngHighAchievers`: Students aged <= 20 AND grade >= 85

3. Display all filtered results with counts

## 💡 Example Output

```javascript
High Grade Students (>=90): [Bob, Eve] (2 students)
CS Students: [Alice, Charlie, Eve] (3 students)  
Young High Achievers (<=20 & >=85): [Alice, Diana] (2 students)
```

## 🚀 Bonus

- Combine all conditions in one filter
- Filter by grade range (80-90)
- Create a search function by name

## ✅ Expected Topics Used

- `.filter()` method with objects
- Logical operators (&&, ||)
- Object property access
- Multiple filtering conditions
