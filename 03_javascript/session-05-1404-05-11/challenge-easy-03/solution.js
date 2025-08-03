// Challenge Easy 03: Student Grades
// Create a grade management system using arrays

// 1. Create an array with initial grades
const grades = [85, 92, 78, 96, 88];
console.log('Initial grades:', grades);

// 2. Add two more grades
grades.push(91);
grades.push(84);
console.log('After adding new grades:', grades);

// 3. Display all grades using .forEach()
console.log('All grades:');
grades.forEach((grade, index) => {
  console.log(`Grade ${index + 1}: ${grade}`);
});

// 4. Create a copy of the first 3 grades
const firstThreeGrades = grades.slice(0, 3);
console.log('First 3 grades:', firstThreeGrades);

// 5. Check if grade 96 exists
const hasGrade96 = grades.includes(96);
console.log('Does grade 96 exist?', hasGrade96);

// 6. Count students with grades above 90
let countAbove90 = 0;
grades.forEach(grade => {
  if (grade > 90) {
    countAbove90++;
  }
});
console.log('Students with grades above 90:', countAbove90);

// 7. Display total number of grades
console.log('Total number of grades:', grades.length);

// Bonus: Calculate average
// const sum = grades.reduce((total, grade) => total + grade, 0);
// const average = sum / grades.length;
// console.log('Average grade:', average.toFixed(2));

// Bonus: Find highest and lowest
// const highest = Math.max(...grades);
// const lowest = Math.min(...grades);
// console.log('Highest grade:', highest);
// console.log('Lowest grade:', lowest);
