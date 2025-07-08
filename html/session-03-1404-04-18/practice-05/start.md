<!-- markdownlint-disable -->

# Practice 05: Linking External CSS and JavaScript Files

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- How to link external CSS stylesheets to HTML documents
- How to include external JavaScript files in HTML
- Understanding the difference between inline, internal, and external resources
- Proper placement of `<link>` and `<script>` tags
- Setting up a basic project structure for web development
- Best practices for organizing HTML, CSS, and JavaScript files

## 📋 Exercise Description

Create a multi-file web project that demonstrates proper linking of external CSS and JavaScript files. You'll build a simple interactive webpage that uses external stylesheets and scripts to separate concerns and improve maintainability.

## 🔧 Project Structure

Create the following file structure:
```
project-folder/
├── index.html
├── css/
│   ├── styles.css
│   └── responsive.css
└── js/
    ├── main.js
    └── utils.js
```

## 📁 File Requirements

### index.html
Create an HTML document with:
- Proper DOCTYPE and document structure
- Links to both CSS files
- References to both JavaScript files
- Content sections for testing styles and scripts

### css/styles.css
Create a stylesheet with:
- Basic styling for the page layout
- Color scheme and typography
- Button and form styling
- Hover effects and transitions

### css/responsive.css
Create a responsive stylesheet with:
- Media queries for mobile devices
- Responsive layout adjustments
- Mobile-friendly navigation

### js/main.js
Create a JavaScript file with:
- Interactive functionality for the page
- Event listeners for user interactions
- DOM manipulation examples

### js/utils.js
Create a utility JavaScript file with:
- Helper functions
- Reusable code snippets
- Utility methods

## 🔧 HTML Template

Start with this basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External Files Demo</title>
    
    <!-- Link CSS files here -->
    
</head>
<body>
    <header>
        <nav>
            <h1>My Website</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h2>Welcome</h2>
            <p>This page demonstrates external CSS and JavaScript linking.</p>
            <button id="color-button">Change Background Color</button>
        </section>

        <section id="about">
            <h2>About</h2>
            <p>This section contains information about the project.</p>
            <div class="card">
                <h3>Feature 1</h3>
                <p>Description of feature 1</p>
            </div>
            <div class="card">
                <h3>Feature 2</h3>
                <p>Description of feature 2</p>
            </div>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <form id="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" required>
                
                <label for="message">Message:</label>
                <textarea id="message" required></textarea>
                
                <button type="submit">Send Message</button>
            </form>
            <div id="form-feedback"></div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>

    <!-- Link JavaScript files here -->
    
</body>
</html>
```

## 🎨 CSS Requirements

### styles.css Example Content
```css
/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Typography */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Layout */
header {
    background-color: #2c3e50;
    color: white;
    padding: 1rem 0;
}

nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Add more styles for sections, cards, forms, etc. */
```

### responsive.css Example Content
```css
/* Mobile-first responsive design */
@media (max-width: 768px) {
    nav {
        flex-direction: column;
        text-align: center;
    }
    
    nav ul {
        margin-top: 1rem;
    }
    
    /* Add more mobile styles */
}
```

## 💻 JavaScript Requirements

### main.js Example Content
```javascript
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Color changing functionality
    const colorButton = document.getElementById('color-button');
    const colors = ['#f39c12', '#e74c3c', '#9b59b6', '#3498db', '#2ecc71'];
    let currentColorIndex = 0;
    
    colorButton.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[currentColorIndex];
    });
    
    // Form handling
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Use utility function from utils.js
        const formData = getFormData(contactForm);
        displayMessage('Thank you for your message!', 'success');
    });
});
```

### utils.js Example Content
```javascript
// Utility functions

function getFormData(form) {
    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    return data;
}

function displayMessage(message, type = 'info') {
    const feedback = document.getElementById('form-feedback');
    feedback.innerHTML = `<div class="message ${type}">${message}</div>`;
    
    // Clear message after 3 seconds
    setTimeout(() => {
        feedback.innerHTML = '';
    }, 3000);
}

// Add more utility functions as needed
```

## ✅ Success Criteria

Your project should:
- [ ] Have proper file organization with separate folders for CSS and JS
- [ ] Link external CSS files correctly in the `<head>` section
- [ ] Link external JavaScript files correctly before closing `</body>` tag
- [ ] Have working styles applied from external CSS files
- [ ] Have working JavaScript functionality from external JS files
- [ ] Demonstrate separation of concerns (HTML structure, CSS presentation, JS behavior)
- [ ] Include responsive design with media queries
- [ ] Show interactive elements working properly
- [ ] Use utility functions from separate JS files
- [ ] Have clean, organized, and commented code

## 🔗 Linking Best Practices

### CSS Linking
```html
<!-- In the <head> section -->
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/responsive.css">
```

### JavaScript Linking
```html
<!-- Before closing </body> tag -->
<script src="js/utils.js"></script>
<script src="js/main.js"></script>
```

### Order Matters
- CSS files should be linked in the `<head>` for proper rendering
- JavaScript files should be linked before `</body>` or use `defer` attribute
- Load utility files before files that depend on them

## 🚀 Bonus Challenges

If you finish early, try these enhancements:
- Add a third CSS file for print styles (`@media print`)
- Create additional JavaScript modules for different functionalities
- Implement a dark mode toggle that affects multiple CSS files
- Add CSS custom properties (variables) and use them across files
- Create a build process using simple concatenation
- Add CSS and JavaScript minification examples

## 💡 Benefits of External Files

### Advantages
- **Separation of Concerns**: HTML for structure, CSS for presentation, JS for behavior
- **Reusability**: Same stylesheet can be used across multiple pages
- **Maintainability**: Easier to update and manage code
- **Caching**: External files can be cached by browsers
- **Collaboration**: Different team members can work on different files
- **Organization**: Cleaner, more organized project structure

### Performance Considerations
- External files require additional HTTP requests
- Can be mitigated with proper caching headers
- Minification and compression reduce file sizes
- HTTP/2 makes multiple requests more efficient

## 📚 Helpful Resources

- [MDN: CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [MDN: JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [MDN: Link Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
- [MDN: Script Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

---

**Time Estimate:** 45-60 minutes  
**Difficulty:** Beginner to Intermediate  
**Stage:** 7 - Getting Ready for CSS and JavaScript
