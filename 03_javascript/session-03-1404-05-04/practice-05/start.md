<!-- markdownlint-disable -->

# Practice 05: Advanced Student Grade Management System

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Complex conditional logic with nested `if`/`else` statements
- Advanced `switch` statement usage with fall-through cases
- Implementing multiple loop types for different scenarios
- Using `break` and `continue` strategically in nested loops
- Combining control flow structures for complex logic
- Working with arrays and control flow together
- Building comprehensive data processing systems

## 📋 Exercise Description

Create a comprehensive student grade management system that processes multiple students' grades, calculates statistics, assigns letter grades, and generates detailed reports. This challenging exercise combines all Stage 3 control flow concepts in a real-world scenario.

## 🔧 Requirements

### Basic Requirements:
1. Process multiple students with multiple subjects each
2. Calculate individual student averages and overall class statistics
3. Assign letter grades using complex conditional logic
4. Use different loop types for different processing tasks
5. Implement grade validation with `continue` statements
6. Use `break` to handle special cases and early exits

### Advanced Requirements:
1. Create a comprehensive grading scale with plus/minus grades
2. Implement weighted grades for different assignment types
3. Add statistical analysis (median, mode, standard deviation)
4. Create honor roll and warning lists based on multiple criteria
5. Generate detailed progress reports with conditional formatting
6. Handle edge cases and data validation

## 💻 Example Code Structure

```javascript
// Student data structure
const students = [
    {
        name: "Alice Johnson",
        id: "ST001",
        grades: {
            math: [85, 92, 78, 88, 95],
            science: [90, 87, 92, 85, 89],
            english: [88, 91, 85, 87, 90],
            history: [92, 88, 90, 85, 87]
        }
    },
    {
        name: "Bob Smith",
        id: "ST002", 
        grades: {
            math: [78, 82, 75, 80, 85],
            science: [85, 88, 82, 90, 87],
            english: [82, 85, 88, 84, 86],
            history: [90, 92, 88, 85, 89]
        }
    },
    {
        name: "Carol Davis",
        id: "ST003",
        grades: {
            math: [95, 98, 92, 96, 94],
            science: [96, 94, 98, 95, 97],
            english: [94, 96, 92, 98, 95],
            history: [98, 95, 96, 94, 97]
        }
    },
    {
        name: "David Wilson",
        id: "ST004",
        grades: {
            math: [65, 70, 68, 72, 75],
            science: [72, 75, 70, 78, 74],
            english: [75, 78, 72, 76, 80],
            history: [80, 82, 78, 75, 77]
        }
    },
    {
        name: "Eva Brown",
        id: "ST005",
        grades: {
            math: [88, 85, 90, 87, 92],
            science: [85, 90, 88, 92, 89],
            english: [90, 92, 88, 89, 91],
            history: [87, 89, 85, 90, 88]
        }
    }
];

console.log("🎓 ADVANCED STUDENT GRADE MANAGEMENT SYSTEM");
console.log("=" .repeat(50));

// Step 1: Process each student's grades
console.log("\\n📊 INDIVIDUAL STUDENT ANALYSIS:");
console.log("-".repeat(40));

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`\\n👤 Student: ${student.name} (ID: ${student.id})`);
    
    let totalPoints = 0;
    let totalGrades = 0;
    let subjectAverages = {};
    
    // Process each subject using for...in loop
    for (let subject in student.grades) {
        let subjectTotal = 0;
        let validGrades = 0;
        
        // Validate and sum grades for this subject
        for (let j = 0; j < student.grades[subject].length; j++) {
            let grade = student.grades[subject][j];
            
            // Skip invalid grades (continue statement)
            if (grade < 0 || grade > 100) {
                console.log(`   ⚠️  Invalid grade ${grade} skipped for ${subject}`);
                continue;
            }
            
            subjectTotal += grade;
            validGrades++;
        }
        
        // Calculate subject average
        if (validGrades > 0) {
            const subjectAverage = subjectTotal / validGrades;
            subjectAverages[subject] = subjectAverage;
            totalPoints += subjectTotal;
            totalGrades += validGrades;
            
            console.log(`   📚 ${subject.charAt(0).toUpperCase() + subject.slice(1)}: ${subjectAverage.toFixed(1)}% (${validGrades} grades)`);
        }
    }
    
    // Calculate overall average
    const overallAverage = totalGrades > 0 ? totalPoints / totalGrades : 0;
    console.log(`   🎯 Overall Average: ${overallAverage.toFixed(1)}%`);
    
    // Assign letter grade using complex conditional logic
    let letterGrade;
    let gradeStatus;
    
    if (overallAverage >= 97) {
        letterGrade = "A+";
        gradeStatus = "Outstanding";
    } else if (overallAverage >= 93) {
        letterGrade = "A";
        gradeStatus = "Excellent";
    } else if (overallAverage >= 90) {
        letterGrade = "A-";
        gradeStatus = "Very Good";
    } else if (overallAverage >= 87) {
        letterGrade = "B+";
        gradeStatus = "Good";
    } else if (overallAverage >= 83) {
        letterGrade = "B";
        gradeStatus = "Above Average";
    } else if (overallAverage >= 80) {
        letterGrade = "B-";
        gradeStatus = "Satisfactory";
    } else if (overallAverage >= 77) {
        letterGrade = "C+";
        gradeStatus = "Fair";
    } else if (overallAverage >= 73) {
        letterGrade = "C";
        gradeStatus = "Passing";
    } else if (overallAverage >= 70) {
        letterGrade = "C-";
        gradeStatus = "Below Average";
    } else if (overallAverage >= 60) {
        letterGrade = "D";
        gradeStatus = "Poor";
    } else {
        letterGrade = "F";
        gradeStatus = "Failing";
    }
    
    console.log(`   📝 Letter Grade: ${letterGrade} (${gradeStatus})`);
    
    // Add student summary to processing
    student.overallAverage = overallAverage;
    student.letterGrade = letterGrade;
    student.gradeStatus = gradeStatus;
    student.subjectAverages = subjectAverages;
}

// Step 2: Class-wide statistics using different loop types
console.log("\\n\\n📈 CLASS-WIDE STATISTICS:");
console.log("-".repeat(40));

let classTotal = 0;
let highestAverage = 0;
let lowestAverage = 100;
let topStudent = "";
let strugglingStudent = "";
let honorRollStudents = [];
let warningListStudents = [];

// Use while loop for class statistics
let studentIndex = 0;
while (studentIndex < students.length) {
    const student = students[studentIndex];
    const average = student.overallAverage;
    
    classTotal += average;
    
    // Track highest and lowest performers
    if (average > highestAverage) {
        highestAverage = average;
        topStudent = student.name;
    }
    
    if (average < lowestAverage) {
        lowestAverage = average;
        strugglingStudent = student.name;
    }
    
    // Categorize students based on performance
    if (average >= 90) {
        honorRollStudents.push(student.name);
    } else if (average < 75) {
        warningListStudents.push(student.name);
    }
    
    studentIndex++;
}

const classAverage = classTotal / students.length;

console.log(`📊 Class Average: ${classAverage.toFixed(1)}%`);
console.log(`🏆 Top Performer: ${topStudent} (${highestAverage.toFixed(1)}%)`);
console.log(`📉 Needs Support: ${strugglingStudent} (${lowestAverage.toFixed(1)}%)`);
console.log(`🎖️  Honor Roll Students: ${honorRollStudents.length}`);
console.log(`⚠️  Students on Warning: ${warningListStudents.length}`);

// Step 3: Generate detailed reports using switch statements
console.log("\\n\\n📋 DETAILED PERFORMANCE REPORTS:");
console.log("-".repeat(50));

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`\\n📄 REPORT CARD: ${student.name}`);
    console.log("=".repeat(30));
    
    // Performance category using switch with fall-through
    let performanceCategory;
    let recommendedActions = [];
    
    switch(true) {
        case (student.overallAverage >= 95):
            performanceCategory = "EXCEPTIONAL";
            recommendedActions.push("🌟 Consider advanced placement courses");
            recommendedActions.push("🎯 Explore leadership opportunities");
            // Fall through to next case
        case (student.overallAverage >= 90):
            if (performanceCategory !== "EXCEPTIONAL") {
                performanceCategory = "EXCELLENT";
            }
            recommendedActions.push("📚 Maintain current study habits");
            break;
            
        case (student.overallAverage >= 85):
            performanceCategory = "VERY GOOD";
            recommendedActions.push("📈 Focus on consistency across subjects");
            recommendedActions.push("🎯 Set higher goals for next term");
            break;
            
        case (student.overallAverage >= 80):
            performanceCategory = "GOOD";
            recommendedActions.push("📖 Review study strategies");
            recommendedActions.push("👥 Consider study groups");
            break;
            
        case (student.overallAverage >= 75):
            performanceCategory = "SATISFACTORY";
            recommendedActions.push("⏰ Improve time management");
            recommendedActions.push("📝 Seek additional practice materials");
            break;
            
        case (student.overallAverage >= 70):
            performanceCategory = "NEEDS IMPROVEMENT";
            recommendedActions.push("👨‍🏫 Schedule teacher conferences");
            recommendedActions.push("📚 Consider tutoring assistance");
            break;
            
        default:
            performanceCategory = "REQUIRES IMMEDIATE ATTENTION";
            recommendedActions.push("🚨 Mandatory academic support");
            recommendedActions.push("👪 Parent-teacher meeting required");
            recommendedActions.push("📋 Develop improvement plan");
            break;
    }
    
    console.log(`Performance Level: ${performanceCategory}`);
    console.log(`Overall Grade: ${student.letterGrade} (${student.overallAverage.toFixed(1)}%)`);
    
    // Subject breakdown
    console.log("\\nSubject Performance:");
    for (let subject in student.subjectAverages) {
        const avg = student.subjectAverages[subject];
        let trend = "";
        
        // Determine trend using nested conditionals
        if (avg >= 90) {
            trend = "🔥 Excelling";
        } else if (avg >= 80) {
            trend = "✅ Strong";
        } else if (avg >= 70) {
            trend = "📊 Average";
        } else {
            trend = "❗ Needs Focus";
        }
        
        console.log(`  ${subject.charAt(0).toUpperCase() + subject.slice(1)}: ${avg.toFixed(1)}% ${trend}`);
    }
    
    // Recommendations
    console.log("\\nRecommended Actions:");
    for (let j = 0; j < recommendedActions.length; j++) {
        console.log(`  ${j + 1}. ${recommendedActions[j]}`);
    }
}

// Step 4: Special recognitions and alerts
console.log("\\n\\n🏅 SPECIAL RECOGNITIONS & ALERTS:");
console.log("-".repeat(45));

// Honor Roll (using for...of loop)
if (honorRollStudents.length > 0) {
    console.log("\\n🎖️  HONOR ROLL STUDENTS:");
    let honorIndex = 1;
    for (const studentName of honorRollStudents) {
        console.log(`  ${honorIndex}. ${studentName}`);
        honorIndex++;
    }
}

// Warning List
if (warningListStudents.length > 0) {
    console.log("\\n⚠️  ACADEMIC WARNING LIST:");
    let warningIndex = 1;
    for (const studentName of warningListStudents) {
        console.log(`  ${warningIndex}. ${studentName}`);
        warningIndex++;
    }
}

// Perfect Attendance Awards (simulated)
console.log("\\n🏆 ADDITIONAL ACHIEVEMENTS:");
const perfectAttendanceStudents = ["Alice Johnson", "Eva Brown"];
let achievementCount = 0;

do {
    if (achievementCount < perfectAttendanceStudents.length) {
        console.log(`  📅 Perfect Attendance: ${perfectAttendanceStudents[achievementCount]}`);
    }
    achievementCount++;
} while (achievementCount < perfectAttendanceStudents.length);

// Final summary
console.log("\\n\\n📊 FINAL SUMMARY:");
console.log("=".repeat(25));
console.log(`Total Students Processed: ${students.length}`);
console.log(`Class Average: ${classAverage.toFixed(1)}%`);
console.log(`Students Above Average: ${students.filter(s => s.overallAverage > classAverage).length}`);
console.log(`Students Below Average: ${students.filter(s => s.overallAverage < classAverage).length}`);
console.log("\\n✅ Grade processing complete!");
```

## 🚀 Bonus Challenges

If you finish early, try these enhancements:

1. **Advanced Statistics**: Calculate median, mode, and standard deviation for the class
2. **Weighted Grades**: Implement different weights for different assignment types (tests 40%, homework 30%, projects 30%)
3. **Grade Trends**: Track improvement or decline by comparing with previous term data
4. **Subject Analysis**: Identify which subjects the class struggles with most
5. **Parent Notifications**: Generate automated messages for parents based on student performance
6. **Grade Curve**: Implement a curve system that adjusts grades based on class performance
7. **Attendance Impact**: Factor in attendance when calculating final grades
8. **Extra Credit**: Handle extra credit assignments that can boost grades above 100%

## ✅ Success Criteria

Your grade management system should:

- [ ] Process all student data without errors
- [ ] Use at least 3 different types of loops (`for`, `while`, `do...while`, `for...in`, `for...of`)
- [ ] Implement complex conditional logic with nested `if`/`else` statements
- [ ] Use `switch` statements with fall-through cases
- [ ] Properly use `break` and `continue` statements
- [ ] Calculate accurate averages and statistics
- [ ] Assign correct letter grades based on comprehensive criteria
- [ ] Generate detailed, formatted reports for each student
- [ ] Handle edge cases and invalid data gracefully
- [ ] Provide meaningful recommendations based on performance

## 🎓 Key Learning Outcomes

After completing this exercise, you will have:

- Mastered complex control flow logic in real-world scenarios
- Experience with nested loops and conditional statements
- Understanding of data validation and error handling
- Skills in processing and analyzing structured data
- Knowledge of educational grading systems and statistical analysis
- Confidence in building comprehensive data processing applications

---

**Time Estimate:** 45-60 minutes  
**Difficulty:** Advanced  
**Focus:** Complex control flow, data processing, conditional logic
