<!-- markdownlint-disable -->

# Practice 04: Build a Student Course Schedule and Grade Tracker

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Creating complex table structures for scheduling data
- Using table headers with proper scope attributes
- Building organized lists for course information
- Combining tables and lists for comprehensive data presentation
- Understanding table accessibility best practices
- Working with nested data structures in HTML

## 📋 Exercise Description

Create a comprehensive student portal that includes course schedules, grade tracking, assignment lists, and academic planning tools. This exercise focuses on mastering HTML tables and lists for organizing academic information.

## 🔧 Requirements

Your student portal should include:

1. **Main Dashboard (index.html)**
   - Student information summary
   - Current semester overview
   - Quick links to all sections
   - Upcoming assignments list (ordered by due date)

2. **Weekly Schedule Page (schedule.html)**
   - Complete weekly class schedule table
   - Time slots and course information
   - Room numbers and instructor details
   - Color-coded by subject or difficulty

3. **Grades Tracker Page (grades.html)**
   - Semester grades table with all courses
   - Individual assignment grades for each course
   - GPA calculation table
   - Grade statistics and trends

4. **Assignments Page (assignments.html)**
   - Current assignments organized by course
   - Completed assignments archive
   - Assignment priority lists
   - Study group coordination lists

5. **Course Catalog Page (catalog.html)**
   - Available courses by department
   - Course prerequisites (definition lists)
   - Credit requirements tables
   - Course description lists

## 🔧 Technical Requirements

### File Structure:
```
student-portal/
├── index.html
├── schedule.html
├── grades.html
├── assignments.html
├── catalog.html
└── styles/
    └── basic-layout.css (optional)
```

### HTML Elements to Use:
- `<table>`, `<thead>`, `<tbody>`, `<tfoot>` for structured data
- `<th>` with `scope` attributes (row/col/rowgroup/colgroup)
- `<caption>` for table descriptions
- `<ul>`, `<ol>`, `<li>` for course and assignment lists
- `<dl>`, `<dt>`, `<dd>` for course prerequisites and definitions

## 📝 Step-by-Step Instructions

1. **Create Main Dashboard**
   
   **Student Info Summary:**
   ```html
   <section>
     <h2>Student Information</h2>
     <dl>
       <dt>Name</dt>
       <dd>Alex Johnson</dd>
       
       <dt>Student ID</dt>
       <dd>ST2024001</dd>
       
       <dt>Major</dt>
       <dd>Computer Science</dd>
       
       <dt>Current GPA</dt>
       <dd>3.75</dd>
     </dl>
   </section>
   ```

   **Upcoming Assignments (Ordered List):**
   ```html
   <section>
     <h3>Upcoming Assignments</h3>
     <ol>
       <li>Math 201 - Problem Set 5 (Due: March 15)</li>
       <li>CS 150 - Programming Project (Due: March 17)</li>
       <li>English 101 - Essay Draft (Due: March 20)</li>
       <li>History 120 - Research Paper (Due: March 22)</li>
     </ol>
   </section>
   ```

2. **Build Weekly Schedule Table**
   
   ```html
   <table>
     <caption>Spring 2024 Class Schedule</caption>
     <thead>
       <tr>
         <th scope="col">Time</th>
         <th scope="col">Monday</th>
         <th scope="col">Tuesday</th>
         <th scope="col">Wednesday</th>
         <th scope="col">Thursday</th>
         <th scope="col">Friday</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">9:00 - 10:30</th>
         <td>CS 150<br>Room 201<br>Prof. Smith</td>
         <td></td>
         <td>CS 150<br>Room 201<br>Prof. Smith</td>
         <td></td>
         <td>CS 150 Lab<br>Room 205<br>TA Wilson</td>
       </tr>
       <tr>
         <th scope="row">11:00 - 12:30</th>
         <td>Math 201<br>Room 105<br>Prof. Davis</td>
         <td>Math 201<br>Room 105<br>Prof. Davis</td>
         <td>Math 201<br>Room 105<br>Prof. Davis</td>
         <td>Math 201<br>Room 105<br>Prof. Davis</td>
         <td></td>
       </tr>
       <!-- More time slots -->
     </tbody>
   </table>
   ```

3. **Create Grades Tracker Tables**
   
   **Semester Overview Table:**
   ```html
   <table>
     <caption>Spring 2024 Grades Summary</caption>
     <thead>
       <tr>
         <th scope="col">Course</th>
         <th scope="col">Credits</th>
         <th scope="col">Current Grade</th>
         <th scope="col">Letter Grade</th>
         <th scope="col">Quality Points</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">CS 150 - Intro to Programming</th>
         <td>4</td>
         <td>92%</td>
         <td>A-</td>
         <td>14.8</td>
       </tr>
       <tr>
         <th scope="row">Math 201 - Calculus II</th>
         <td>4</td>
         <td>87%</td>
         <td>B+</td>
         <td>13.2</td>
       </tr>
       <!-- More courses -->
     </tbody>
     <tfoot>
       <tr>
         <th scope="row">Total/Average</th>
         <td>16</td>
         <td>89%</td>
         <td>B+</td>
         <td>3.75 GPA</td>
       </tr>
     </tfoot>
   </table>
   ```

   **Individual Course Grades:**
   ```html
   <h4>CS 150 - Assignment Breakdown</h4>
   <table>
     <thead>
       <tr>
         <th scope="col">Assignment</th>
         <th scope="col">Points Earned</th>
         <th scope="col">Total Points</th>
         <th scope="col">Percentage</th>
         <th scope="col">Date Submitted</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">Project 1 - Calculator</th>
         <td>95</td>
         <td>100</td>
         <td>95%</td>
         <td>Feb 15, 2024</td>
       </tr>
       <!-- More assignments -->
     </tbody>
   </table>
   ```

4. **Build Assignments Organization Page**
   
   **Current Assignments by Course:**
   ```html
   <section>
     <h3>Current Assignments</h3>
     
     <h4>Computer Science 150</h4>
     <ul>
       <li>Programming Project 2 - Due March 17
         <ul>
           <li>Implement sorting algorithms</li>
           <li>Write test cases</li>
           <li>Submit documentation</li>
         </ul>
       </li>
       <li>Quiz 3 - March 19 (Chapters 5-6)</li>
     </ul>
     
     <h4>Mathematics 201</h4>
     <ul>
       <li>Problem Set 5 - Due March 15</li>
       <li>Midterm Exam - March 25</li>
     </ul>
   </section>
   ```

   **Study Priority List:**
   ```html
   <section>
     <h3>Study Priority (High to Low)</h3>
     <ol>
       <li>Math 201 - Midterm preparation (March 25)</li>
       <li>CS 150 - Programming project completion</li>
       <li>English 101 - Essay outline</li>
       <li>History 120 - Reading assignments</li>
     </ol>
   </section>
   ```

5. **Create Course Catalog with Prerequisites**
   
   ```html
   <section>
     <h3>Computer Science Courses</h3>
     
     <h4>CS 150 - Introduction to Programming</h4>
     <dl>
       <dt>Credits</dt>
       <dd>4 credit hours</dd>
       
       <dt>Prerequisites</dt>
       <dd>Math 110 or placement exam</dd>
       
       <dt>Description</dt>
       <dd>Introduction to computer programming using Python. Covers basic programming concepts, data structures, and problem-solving techniques.</dd>
       
       <dt>Learning Outcomes</dt>
       <dd>
         <ul>
           <li>Write basic programs using Python</li>
           <li>Understand fundamental programming concepts</li>
           <li>Apply problem-solving strategies</li>
         </ul>
       </dd>
     </dl>
   </section>
   ```

## 💡 Pro Tips

- Use `<caption>` elements to describe table content
- Include `scope` attributes for all table headers
- Use `<thead>`, `<tbody>`, and `<tfoot>` for complex tables
- Group related information logically in lists
- Consider using `<details>` and `<summary>` for expandable sections

## 🚀 Bonus Challenges

1. **Add Degree Progress Tracker**
   - Create tables showing degree requirements
   - Track completed vs. required courses
   - Calculate percentage toward graduation

2. **Include Financial Information**
   - Tuition and fees breakdown table
   - Financial aid summary
   - Payment schedule tables

3. **Build Social Features**
   - Study group member lists
   - Class project team assignments
   - Contact information tables

4. **Add Academic Calendar**
   - Important dates table
   - Exam schedule
   - Holiday and break information

## 📚 Sample Course Data

**Courses to Include:**
- CS 150 - Introduction to Programming (4 credits)
- Math 201 - Calculus II (4 credits)
- English 101 - Composition (3 credits)
- History 120 - World History (3 credits)
- Biology 101 - General Biology (4 credits)

**Sample Grades:**
- Mix of A's, B's, and C's for realistic GPA
- Various assignment types (exams, projects, quizzes)
- Different point values and percentages

## ✅ Completion Checklist

- [ ] Created main dashboard with student info
- [ ] Built weekly schedule table with proper structure
- [ ] Added comprehensive grades tracking tables
- [ ] Organized assignments by course and priority
- [ ] Created course catalog with prerequisites
- [ ] Used proper table headers with scope attributes
- [ ] Included table captions where appropriate
- [ ] Used lists for hierarchical information
- [ ] Added definition lists for course details
- [ ] Implemented consistent navigation
- [ ] Tested all tables for accessibility
- [ ] Organized data logically and clearly

## 🎨 Data Organization Tips

- Keep table data consistent and aligned
- Use meaningful row and column headers
- Group related courses and assignments
- Maintain consistent date and time formats
- Use clear, descriptive labels throughout

This exercise provides comprehensive practice with HTML tables and lists while creating a practical student management system!
