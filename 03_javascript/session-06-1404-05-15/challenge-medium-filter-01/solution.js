const students = [
  { name: "Alice", grade: 85, age: 20, major: "Computer Science" },
  { name: "Bob", grade: 92, age: 19, major: "Mathematics" },
  { name: "Charlie", grade: 78, age: 21, major: "Computer Science" },
  { name: "Diana", grade: 88, age: 20, major: "Physics" },
  { name: "Eve", grade: 95, age: 22, major: "Computer Science" },
  { name: "Alice 2", grade: 95, age: 22, major: "Computer Science" },
];

// full text search
function findStudentByName(name) {
  return students
    .filter((student) => student.name.includes(name))
    .map((student) => ({
        ...student,
        name: student.name.toUpperCase(),
        major: student.major.toLowerCase(),
    }));
}

const highGradeStudents = students.filter((student) => student.grade > 90);
const csStudents = students.filter(
  (student) => student.major === "Computer Science"
);
const youngHighAchievers = students.filter(
  (student) => student.age <= 20 && student.grade >= 85
);

console.log(highGradeStudents);
console.log(csStudents);
console.log(youngHighAchievers);

console.log(findStudentByName("Alice"));
