<!-- markdownlint-disable -->

# Practice 02: Build a Registration Form

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Advanced form elements and input types
- Working with radio buttons, checkboxes, and select dropdowns
- Form validation attributes and user experience
- Organizing complex forms with fieldsets
- Understanding different button types
- Creating forms with multiple input methods

## 📋 Exercise Description

Create a user registration form for a website or application. This exercise builds on Practice 01 and introduces more complex form elements and validation techniques.

## 🔧 Requirements

### Basic Structure
- Create a proper HTML document structure
- Include a meaningful title for your registration page
- Use semantic headings and organization

### Personal Information Section
- First Name (text input, required)
- Last Name (text input, required)
- Email Address (email input, required)
- Password (password input, required)
- Confirm Password (password input, required)
- Date of Birth (date input)
- Phone Number (tel input)

### Preferences Section
- Gender (radio buttons: Male, Female, Other, Prefer not to say)
- Country (select dropdown with at least 5 countries)
- Newsletter subscription (checkbox)
- Terms and conditions agreement (checkbox, required)

### Account Type Section
- Account Type (radio buttons: Personal, Business, Student)
- How did you hear about us? (select dropdown)

### Form Controls
- Submit button (type="submit")
- Reset button (type="reset")
- Cancel button (type="button")

### Form Features
- Use `<fieldset>` and `<legend>` to group related fields
- Implement proper labels for all form controls
- Add appropriate validation attributes (required, minlength, etc.)
- Include helpful placeholder text and descriptions
- Set the form method to "POST" and action to "#"

## 🎨 Enhanced Features

### Validation Requirements
- Email field must be valid email format
- Password must be at least 8 characters
- Phone number should use tel input type
- Terms checkbox must be checked before submission

### User Experience
- Group related fields using fieldsets
- Provide clear instructions for each section
- Add help text where needed

## 📝 Example Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Account</title>
</head>
<body>
    <h1>Create Your Account</h1>
    <p>Join us today! Please fill out all required fields.</p>
    
    <form action="#" method="POST">
        <fieldset>
            <legend>Personal Information</legend>
            <!-- Personal info fields -->
        </fieldset>
        
        <fieldset>
            <legend>Preferences</legend>
            <!-- Preference fields -->
        </fieldset>
        
        <fieldset>
            <legend>Account Details</legend>
            <!-- Account type fields -->
        </fieldset>
        
        <!-- Form buttons -->
    </form>
</body>
</html>
```

## ✅ Success Criteria

Your registration form should:
- [ ] Have three distinct sections using fieldsets
- [ ] Include all required input types (text, email, password, date, tel, radio, checkbox, select)
- [ ] Use proper labels and fieldset legends
- [ ] Implement appropriate validation attributes
- [ ] Have at least one required checkbox (terms)
- [ ] Include multiple button types (submit, reset, button)
- [ ] Use semantic HTML structure
- [ ] Have meaningful placeholder text and help content
- [ ] Group related radio buttons with the same name attribute

## 🚀 Bonus Challenges

If you finish early, try these additional features:
- Add a profile picture upload field (file input)
- Create a multi-step form appearance using CSS styling
- Add a "Show/Hide Password" instruction note
- Include additional validation attributes (pattern, min, max)
- Add a textarea for "About Me" section
- Create dependent dropdowns (e.g., State based on Country)

## 💡 Form Best Practices

- Always associate labels with form controls
- Use fieldsets to group related information
- Provide clear error messaging instructions
- Make required fields obvious to users
- Use appropriate input types for better mobile experience
- Test your form with keyboard navigation

## 📚 Helpful Resources

- [HTML Form Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#forms)
- [Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Fieldset and Legend](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)

---

**Time Estimate:** 45-60 minutes  
**Difficulty:** Beginner to Intermediate  
**Stage:** 5 - Forms and User Input
