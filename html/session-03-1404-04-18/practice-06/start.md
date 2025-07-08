<!-- markdownlint-disable -->

# Practice 06: Understanding Inline vs Internal vs External Code

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- The differences between inline, internal, and external CSS and JavaScript
- When to use each approach and their pros/cons
- How to convert between different implementation methods
- Best practices for organizing code in web development
- Performance implications of each approach
- Maintenance and scalability considerations

## 📋 Exercise Description

Create three versions of the same webpage to demonstrate inline, internal, and external approaches for both CSS and JavaScript. You'll build a simple interactive page and implement it using all three methods to understand their differences and use cases.

## 🔧 Project Structure

Create these files:
```
comparison-project/
├── inline-version.html
├── internal-version.html
├── external-version.html
├── styles.css (for external version)
└── script.js (for external version)
```

## 📄 Base Content for All Versions

All three HTML files should contain the same basic content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[VERSION] - Code Implementation Demo</title>
    <!-- CSS implementation will vary by version -->
</head>
<body>
    <div class="container">
        <header class="header">
            <h1 class="title">Code Implementation Comparison</h1>
            <p class="subtitle">This is the [VERSION] version</p>
        </header>

        <main class="main-content">
            <section class="demo-section">
                <h2>Interactive Demo</h2>
                <p>Click the buttons below to see JavaScript in action:</p>
                
                <div class="button-group">
                    <button id="color-btn" class="btn primary">Change Background</button>
                    <button id="text-btn" class="btn secondary">Change Text</button>
                    <button id="hide-btn" class="btn danger">Toggle Visibility</button>
                </div>
                
                <div id="demo-box" class="demo-box">
                    <p id="demo-text">This text will change when you click the button!</p>
                </div>
            </section>

            <section class="info-section">
                <h2>Method Information</h2>
                <div class="info-card">
                    <h3>Current Method: [VERSION]</h3>
                    <p id="method-description">Description will be updated by JavaScript</p>
                    <ul id="method-pros">
                        <!-- Pros will be added by JavaScript -->
                    </ul>
                    <ul id="method-cons">
                        <!-- Cons will be added by JavaScript -->
                    </ul>
                </div>
            </section>
        </main>

        <footer class="footer">
            <p>&copy; 2024 Code Implementation Demo</p>
        </footer>
    </div>

    <!-- JavaScript implementation will vary by version -->
</body>
</html>
```

## 🎨 CSS Styles (to be implemented differently in each version)

```css
/* Base styles to be implemented */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.header {
    text-align: center;
    margin-bottom: 2rem;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 10px;
}

.title {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
}

.main-content {
    display: grid;
    gap: 2rem;
}

.demo-section, .info-section {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button-group {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    flex-wrap: wrap;
}

.btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.primary {
    background-color: #3498db;
    color: white;
}

.secondary {
    background-color: #95a5a6;
    color: white;
}

.danger {
    background-color: #e74c3c;
    color: white;
}

.demo-box {
    margin-top: 1rem;
    padding: 1.5rem;
    background-color: #ecf0f1;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.info-card {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 5px;
    margin-top: 1rem;
}

.footer {
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    background-color: #34495e;
    color: white;
    border-radius: 5px;
}

.hidden {
    display: none;
}

/* Responsive design */
@media (max-width: 768px) {
    .title {
        font-size: 2rem;
    }
    
    .button-group {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
    }
}
```

## 💻 JavaScript Functionality (to be implemented differently in each version)

```javascript
// JavaScript code to be implemented
document.addEventListener('DOMContentLoaded', function() {
    // Color changing functionality
    const colorBtn = document.getElementById('color-btn');
    const demoBox = document.getElementById('demo-box');
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
    let colorIndex = 0;

    colorBtn.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        demoBox.style.backgroundColor = colors[colorIndex];
    });

    // Text changing functionality
    const textBtn = document.getElementById('text-btn');
    const demoText = document.getElementById('demo-text');
    const texts = [
        'This text will change when you click the button!',
        'JavaScript is working perfectly!',
        'CSS and JavaScript can work together!',
        'This demonstrates dynamic content!',
        'Back to the original text!'
    ];
    let textIndex = 0;

    textBtn.addEventListener('click', function() {
        textIndex = (textIndex + 1) % texts.length;
        demoText.textContent = texts[textIndex];
    });

    // Visibility toggle functionality
    const hideBtn = document.getElementById('hide-btn');
    hideBtn.addEventListener('click', function() {
        demoBox.classList.toggle('hidden');
        hideBtn.textContent = demoBox.classList.contains('hidden') ? 'Show Demo' : 'Toggle Visibility';
    });

    // Update method information based on the current version
    updateMethodInfo();
});

function updateMethodInfo() {
    const description = document.getElementById('method-description');
    const prosList = document.getElementById('method-pros');
    const consList = document.getElementById('method-cons');
    
    // This will be different for each version
    const currentMethod = getCurrentMethod(); // This function will be implemented differently
    
    description.textContent = currentMethod.description;
    
    // Clear existing lists
    prosList.innerHTML = '';
    consList.innerHTML = '';
    
    // Add pros
    currentMethod.pros.forEach(pro => {
        const li = document.createElement('li');
        li.textContent = '✅ ' + pro;
        li.style.color = '#27ae60';
        li.style.marginBottom = '0.5rem';
        prosList.appendChild(li);
    });
    
    // Add cons
    currentMethod.cons.forEach(con => {
        const li = document.createElement('li');
        li.textContent = '❌ ' + con;
        li.style.color = '#e74c3c';
        li.style.marginBottom = '0.5rem';
        consList.appendChild(li);
    });
}

// Different implementations of getCurrentMethod() for each version will be provided
```

## 📁 File Implementations

### 1. inline-version.html
Implement all CSS using `style` attributes and all JavaScript using inline event handlers and `<script>` tags with embedded code.

### 2. internal-version.html
Implement CSS using `<style>` tags in the `<head>` and JavaScript using `<script>` tags in the document.

### 3. external-version.html
Link to external `styles.css` and `script.js` files.

## ✅ Success Criteria

Your project should demonstrate:

### Inline Version
- [ ] CSS styles applied using `style` attributes on elements
- [ ] JavaScript functionality using inline event handlers (onclick, etc.)
- [ ] Embedded JavaScript code within `<script>` tags
- [ ] Working interactive functionality
- [ ] Method information showing "Inline" approach

### Internal Version
- [ ] CSS styles defined in `<style>` tags within `<head>`
- [ ] JavaScript code within `<script>` tags in the document
- [ ] Event listeners attached in JavaScript (not inline)
- [ ] Working interactive functionality
- [ ] Method information showing "Internal" approach

### External Version
- [ ] CSS linked from external `styles.css` file
- [ ] JavaScript linked from external `script.js` file
- [ ] Clean HTML structure without embedded styles or scripts
- [ ] Working interactive functionality
- [ ] Method information showing "External" approach

## 📊 Comparison Analysis

For each version, implement the `getCurrentMethod()` function to return appropriate information:

### Inline Method Info
```javascript
function getCurrentMethod() {
    return {
        description: "CSS and JavaScript are embedded directly in HTML attributes and elements.",
        pros: [
            "Quick to implement for small changes",
            "No additional HTTP requests",
            "Immediate loading",
            "Good for email templates"
        ],
        cons: [
            "Hard to maintain and update",
            "Not reusable across pages",
            "Mixing concerns (HTML, CSS, JS)",
            "Larger HTML file sizes",
            "No caching benefits"
        ]
    };
}
```

### Internal Method Info
```javascript
function getCurrentMethod() {
    return {
        description: "CSS and JavaScript are defined within the HTML document in <style> and <script> tags.",
        pros: [
            "Better organization than inline",
            "No additional HTTP requests",
            "Can use CSS selectors and JavaScript functions",
            "Faster loading than external files"
        ],
        cons: [
            "Not reusable across multiple pages",
            "Larger HTML files",
            "Hard to maintain across multiple pages",
            "No caching benefits for CSS/JS"
        ]
    };
}
```

### External Method Info
```javascript
function getCurrentMethod() {
    return {
        description: "CSS and JavaScript are stored in separate files and linked to the HTML document.",
        pros: [
            "Reusable across multiple pages",
            "Better organization and maintainability",
            "Separation of concerns",
            "Browser caching benefits",
            "Easier collaboration",
            "Smaller HTML files"
        ],
        cons: [
            "Additional HTTP requests",
            "Slight delay in loading",
            "Need to manage multiple files",
            "Potential for broken links"
        ]
    };
}
```

## 🚀 Bonus Challenges

If you finish early, try these enhancements:
- Add performance analysis comparing load times
- Create a hybrid version mixing different approaches strategically
- Implement a build process that converts between methods
- Add accessibility features and see how they work with each approach
- Create a comparison table showing file sizes
- Add CSS animations and see how they behave in each version

## 💡 When to Use Each Approach

### Use Inline:
- Quick prototyping and testing
- Email templates
- Very small style overrides
- One-off event handlers

### Use Internal:
- Single-page applications
- Page-specific styles or scripts
- When external file management is not feasible
- Reducing HTTP requests for small sites

### Use External:
- Multi-page websites
- Maintaining consistent styles across pages
- Team development environments
- Production websites
- When caching and performance matter

## 📚 Helpful Resources

- [MDN: CSS - How CSS Works](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works)
- [MDN: JavaScript - Where to put your JavaScript](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_JavaScript_within_a_webpage)
- [Web Performance Best Practices](https://developer.mozilla.org/en-US/docs/Web/Performance)

---

**Time Estimate:** 60-90 minutes  
**Difficulty:** Intermediate  
**Stage:** 7 - Getting Ready for CSS and JavaScript
