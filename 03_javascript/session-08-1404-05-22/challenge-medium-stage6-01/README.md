# 🎯 Challenge Medium Stage 6-01: Interactive Quiz Application (Stage 6 - Events and Interaction)

## 📝 Description

Build a complete quiz application with multiple question types, timer, scoring, and progress tracking.

## 🎯 Objectives

- Combine multiple event handling techniques
- Manage complex user interactions
- Implement timer functionality
- Handle form submission and validation
- Create dynamic user feedback

## 📋 Requirements

1. Quiz structure:
   - 5 questions with different types:
     - Multiple choice (radio buttons)
     - True/False
     - Multiple select (checkboxes)
     - Fill in the blank (text input)
   - Progress bar showing completion percentage
   - Question counter (e.g., "Question 3 of 5")
   - Timer for the entire quiz (5 minutes)

2. Navigation and interaction:
   - "Previous" and "Next" buttons
   - "Submit Quiz" button (only on last question)
   - Auto-save answers as user progresses
   - Prevent submission if required questions are unanswered
   - Confirmation dialog before final submission

3. Event handling requirements:
   - Use `addEventListener()` for all interactions
   - Handle different input types (`onchange`, `oninput`, `onclick`)
   - Use `e.preventDefault()` for form submission
   - Timer countdown with `setInterval()`

4. Results page:
   - Show score (percentage and fraction)
   - Display correct/incorrect answers for each question
   - Time taken to complete
   - "Restart Quiz" option

## 💡 Example Question Data

```javascript
const quizQuestions = [
  {
    id: 1,
    type: "multiple-choice",
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 2,
    type: "true-false",
    question: "JavaScript is the same as Java.",
    correctAnswer: false
  },
  {
    id: 3,
    type: "multiple-select",
    question: "Which are programming languages? (Select all)",
    options: ["Python", "HTML", "JavaScript", "CSS"],
    correctAnswer: ["Python", "JavaScript"]
  },
  // More questions...
];
```

## 🚀 Expected Features

- Smooth navigation between questions
- Real-time progress updates
- Timer warning when < 1 minute remains
- Auto-submit when timer reaches zero
- Answer validation before allowing next question
- Responsive design for mobile/desktop

## ✅ Expected Topics Used

- Complex event handling with `addEventListener()`
- Form validation and `e.preventDefault()`
- `e.target` for identifying form elements
- Timer management with `setInterval()`
- Dynamic DOM manipulation
- Local storage for answer persistence

## 🌟 Bonus

- Add sound effects for correct/incorrect answers
- Implement keyboard shortcuts (Enter for next, Esc for quit)
- Add difficulty levels with different time limits
- Export results as PDF
- Implement question randomization
