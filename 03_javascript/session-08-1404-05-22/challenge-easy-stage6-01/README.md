# 🎯 Challenge Easy Stage 6-01: Contact Form Validator (Stage 6 - Events and Interaction)

## 📝 Description

Create an interactive contact form that validates user input in real-time and provides feedback.

## 🎯 Objectives

- Practice event handlers (`oninput`, `onchange`, `onclick`)
- Use `addEventListener()` method
- Work with event object and `e.target`
- Implement form validation with `e.preventDefault()`

## 📋 Requirements

1. Create a contact form with these fields:
   - Name (required, minimum 2 characters)
   - Email (required, valid email format)
   - Phone (required, numbers only)
   - Message (required, minimum 10 characters)

2. Implement real-time validation:
   - Show error messages below each field as user types
   - Change border color to red for invalid fields, green for valid
   - Use `oninput` event for real-time feedback

3. Form submission:
   - Use `addEventListener()` for submit event
   - Use `e.preventDefault()` to prevent default submission
   - Display success message if all fields are valid
   - Show error summary if any field is invalid

## 💡 Example HTML Structure

```html
<form id="contactForm">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" required>
    <span class="error" id="nameError"></span>
  </div>
  <!-- Similar structure for other fields -->
  <button type="submit">Send Message</button>
</form>
<div id="successMessage" style="display: none;"></div>
```

## 🚀 Expected Behavior

- Real-time validation messages appear as user types
- Submit button should be disabled until all fields are valid
- Success message appears after successful submission
- Form should reset after successful submission

## ✅ Expected Topics Used

- `addEventListener('input', function)`
- `addEventListener('submit', function)`
- `e.preventDefault()`
- `e.target.value`
- Form validation techniques
- Dynamic CSS class manipulation

## 🌟 Bonus

- Add a character counter for the message field
- Implement phone number formatting (xxx-xxx-xxxx)
- Add a confirmation dialog before submission
