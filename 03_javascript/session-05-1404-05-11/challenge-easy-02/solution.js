// Challenge Easy 02: To-Do List Manager
// Create a simple to-do list manager using arrays

// 1. Create an empty array called todoList
const todoList = [];
console.log('Initial todo list:', todoList);

// 2. Add tasks using .push()
todoList.push("Buy groceries");
todoList.push("Walk the dog");
todoList.push("Study JavaScript");
console.log('After adding tasks:', todoList);

// 3. Display all tasks with their index numbers
console.log('Tasks with index:');
for (let i = 0; i < todoList.length; i++) {
  console.log(`${i}: ${todoList[i]}`);
}

// 4. Find the index of "Walk the dog"
const dogWalkIndex = todoList.indexOf("Walk the dog");
console.log('Index of "Walk the dog":', dogWalkIndex);

// 5. Remove "Walk the dog" using .splice()
todoList.splice(dogWalkIndex, 1);
console.log('After removing "Walk the dog":', todoList);

// 6. Add a new task at the beginning
todoList.unshift("Call mom");
console.log('After adding "Call mom" at beginning:', todoList);

// 7. Display final results
console.log('Final todo list length:', todoList.length);

// Bonus: Try more operations
// todoList.splice(1, 2); // Remove 2 items starting from index 1
// const todoListCopy = todoList.slice(); // Create a copy
