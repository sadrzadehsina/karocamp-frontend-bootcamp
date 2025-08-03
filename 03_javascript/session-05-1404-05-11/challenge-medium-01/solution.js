// Challenge Medium 01: Library Book System
// Create a comprehensive library book management system

// 1. Create initial arrays
const availableBooks = ["JavaScript Guide", "Python Basics", "HTML/CSS Fundamentals", "React Tutorial", "Node.js Essentials"];
const borrowedBooks = [];
const waitingList = [];

console.log('Initial available books:', availableBooks);

// 4. Borrow the first 2 books
const book1 = availableBooks.shift();
const book2 = availableBooks.shift();
borrowedBooks.push(book1, book2);

console.log('After borrowing 2 books:');
console.log('  Available:', availableBooks);
console.log('  Borrowed:', borrowedBooks);

// 5. Add books to waiting list
waitingList.push("Vue.js Guide");
waitingList.push("Angular Basics");
console.log('Waiting list:', waitingList);

// 6. Return "Python Basics" 
const pythonBasicsIndex = borrowedBooks.indexOf("Python Basics");
if (pythonBasicsIndex !== -1) {
  const returnedBook = borrowedBooks.splice(pythonBasicsIndex, 1)[0];
  availableBooks.push(returnedBook);
}

console.log('After returning "Python Basics":');
console.log('  Available:', availableBooks);
console.log('  Borrowed:', borrowedBooks);

// 7. Process waiting list - add first waiting book to available
const firstWaitingBook = waitingList.shift();
availableBooks.push(firstWaitingBook);

console.log('After processing waiting list:');
console.log('  Available:', availableBooks);
console.log('  Waiting:', waitingList);

// 8. Find position of "React Tutorial"
let reactPosition = -1;
let reactLocation = '';
if (availableBooks.includes("React Tutorial")) {
  reactPosition = availableBooks.indexOf("React Tutorial");
  reactLocation = 'available books';
} else if (borrowedBooks.includes("React Tutorial")) {
  reactPosition = borrowedBooks.indexOf("React Tutorial");
  reactLocation = 'borrowed books';
} else if (waitingList.includes("React Tutorial")) {
  reactPosition = waitingList.indexOf("React Tutorial");
  reactLocation = 'waiting list';
}

if (reactPosition !== -1) {
  console.log(`Position of "React Tutorial": Found in ${reactLocation} at index ${reactPosition}`);
} else {
  console.log('Position of "React Tutorial": Not found');
}

// 9. Create allBooks array (without duplicates)
const allBooks = [...availableBooks, ...borrowedBooks, ...waitingList];
console.log('All books in system:', allBooks);

// 10. Display statistics
console.log('Statistics:');
console.log('  Total books in system:', allBooks.length);
console.log('  Available:', availableBooks.length);
console.log('  Borrowed:', borrowedBooks.length);
console.log('  Waiting:', waitingList.length);

// Bonus: Search function
function findBook(title) {
  if (availableBooks.includes(title)) return { location: 'available', index: availableBooks.indexOf(title) };
  if (borrowedBooks.includes(title)) return { location: 'borrowed', index: borrowedBooks.indexOf(title) };
  if (waitingList.includes(title)) return { location: 'waiting', index: waitingList.indexOf(title) };
  return { location: 'not found', index: -1 };
}

// Example usage of search function:
// console.log('Search for "Python Basics":', findBook("Python Basics"));
