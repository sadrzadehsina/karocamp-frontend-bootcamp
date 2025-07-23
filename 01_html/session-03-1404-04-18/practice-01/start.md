<!-- markdownlint-disable -->

# Practice 01: Build a Contact Form

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- How to create basic forms using `<form>` element
- Working with different input types (`text`, `email`, `textarea`)
- Using labels properly for accessibility
- Understanding form structure and organization
- Implementing basic form validation attributes
- Creating user-friendly form layouts

## 📋 Exercise Description

Create a contact form for a personal website or business. This exercise will help you practice the form elements and input types covered in Stage 5 of Session 3.

## 🔧 Requirements

### Basic Structure
- Create a proper HTML document with DOCTYPE, html, head, and body tags
- Include a meaningful title for your contact form page
- Use semantic structure with appropriate headings

### Form Elements
- Create a form with the following fields:
  - Full Name (text input)
  - Email Address (email input)
  - Phone Number (text input)
  - Subject (text input)
  - Message (textarea)
  - Submit button

### Form Features
- Use proper `<label>` elements for each input field
- Set appropriate `name` and `id` attributes for all form controls
- Add `placeholder` text to guide users
- Make email field required using the `required` attribute
- Set the form's `method` to "POST" and `action` to "#" (placeholder)

### Content Guidelines
- Add a heading above the form explaining its purpose
- Include brief instructions for users
- Add some descriptive text about when they can expect a response

## 🎨 Styling Notes (Optional)
While we haven't covered CSS yet, you can add basic styling using inline styles if you want to make it look better.

## 📝 Example Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
</head>
<body>
    <h1>Contact Us</h1>
    <p>We'd love to hear from you! Please fill out the form below.</p>
    
    <form action="#" method="POST">
        <!-- Your form fields go here -->
    </form>
</body>
</html>
```

## ✅ Success Criteria

Your contact form should:
- [ ] Have all required input fields with proper labels
- [ ] Use appropriate input types for each field
- [ ] Include proper form attributes (action, method)
- [ ] Have accessible labels linked to their inputs
- [ ] Include a functional submit button
- [ ] Use semantic HTML structure
- [ ] Have meaningful placeholder text
- [ ] Include basic validation (required email field)

## 🚀 Bonus Challenges

If you finish early, try these additional features:
- Add a dropdown menu for "How did you hear about us?"
- Include radio buttons for preferred contact method
- Add a checkbox for newsletter subscription
- Create a file upload field for attachments

## 💡 Helpful Resources

- [MDN Form Guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [HTML Input Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [Form Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms)

---

**Time Estimate:** 30-45 minutes  
**Difficulty:** Beginner  
**Stage:** 5 - Forms and User Input
