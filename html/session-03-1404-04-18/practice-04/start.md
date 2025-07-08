<!-- markdownlint-disable -->

# Practice 04: Build an Accessible Portfolio Website

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Creating accessible web content from scratch using semantic HTML
- Implementing proper heading hierarchy and document structure
- Understanding ARIA attributes and accessibility best practices
- Building navigation that works with screen readers
- Creating meaningful alt text and descriptions
- Designing for keyboard navigation and assistive technologies

## 📋 Exercise Description

Build a personal portfolio website that showcases web accessibility best practices. This exercise focuses on creating a fully accessible site structure using semantic HTML5 elements and ARIA attributes.

## 🔧 Requirements

### Page Structure
Create a single-page portfolio with these sections:
- Header with navigation
- Hero/Introduction section
- About section
- Skills section
- Projects section
- Contact section
- Footer

### Semantic HTML Requirements
- Use `<header>` for the site header
- Use `<nav>` for navigation with proper list structure
- Use `<main>` for the main content area
- Use `<section>` for each major content area
- Use `<article>` for individual projects
- Use `<aside>` for supplementary information (if any)
- Use `<footer>` for site footer

### Accessibility Features
- Proper heading hierarchy (only one h1, logical h2-h6 progression)
- Skip navigation link for keyboard users
- Alt text for all images
- ARIA labels for navigation and sections
- Proper form labels and descriptions
- Focus indicators for interactive elements
- Semantic markup for lists and content structure

### Content Requirements

#### Header Section
- Site title/logo
- Navigation menu with these items: About, Skills, Projects, Contact
- Skip to content link (visually hidden but accessible)

#### Hero Section
- Your name as the main h1
- Professional tagline or brief description
- Call-to-action button

#### About Section
- h2 heading: "About Me"
- Professional bio (2-3 paragraphs)
- Professional photo with meaningful alt text

#### Skills Section
- h2 heading: "Skills"
- List of technical skills organized by category
- Use proper list markup (`<ul>`, `<ol>`, `<dl>`)

#### Projects Section
- h2 heading: "Projects"
- At least 3 project cards, each containing:
  - h3 project title
  - Project description
  - Technologies used
  - Links to live demo and source code (if applicable)

#### Contact Section
- h2 heading: "Contact"
- Contact form with proper labels and validation
- Alternative contact information

#### Footer
- Copyright information
- Social media links with proper labels
- Additional navigation if needed

## 🎨 Accessibility Specifications

### ARIA Implementation
```html
<!-- Navigation example -->
<nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a href="#about" role="menuitem">About</a>
    </li>
  </ul>
</nav>

<!-- Section example -->
<section aria-labelledby="about-heading">
  <h2 id="about-heading">About Me</h2>
  <!-- content -->
</section>
```

### Skip Link Implementation
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### Image Accessibility
- Decorative images: `alt=""`
- Informative images: descriptive alt text
- Complex images: consider `longdesc` or detailed descriptions

### Form Accessibility
- Labels associated with form controls
- Required field indicators
- Error message associations
- Fieldsets for grouped inputs

## ✅ Success Criteria

Your portfolio should:
- [ ] Pass HTML5 validation
- [ ] Have logical heading hierarchy (h1 → h2 → h3, no skipping)
- [ ] Include skip navigation functionality
- [ ] Use semantic HTML5 elements correctly
- [ ] Have proper ARIA labels and roles
- [ ] Include meaningful alt text for all images
- [ ] Work with keyboard navigation only
- [ ] Have accessible form labels and validation
- [ ] Use proper list markup for skills and navigation
- [ ] Include focus indicators for interactive elements

## 🔧 Technical Requirements

### HTML Structure Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Web Developer Portfolio</title>
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <header role="banner">
        <nav aria-label="Main navigation">
            <!-- Navigation content -->
        </nav>
    </header>
    
    <main id="main-content" role="main">
        <section aria-labelledby="hero-heading">
            <h1 id="hero-heading">Your Name</h1>
            <!-- Hero content -->
        </section>
        
        <!-- Other sections -->
    </main>
    
    <footer role="contentinfo">
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Required Meta Information
- Descriptive page title
- Language attribute on html element
- Viewport meta tag for responsive design
- Character encoding declaration

## 🚀 Bonus Challenges

If you finish early, add these accessibility enhancements:
- Dark mode toggle with proper ARIA states
- Reduced motion preferences support
- High contrast mode considerations
- Multiple language support (lang attributes)
- Live regions for dynamic content updates
- Breadcrumb navigation
- Print stylesheet considerations

## 🧪 Testing Your Accessibility

### Manual Testing
- Navigate using only the keyboard (Tab, Shift+Tab, Enter, Space)
- Test with screen reader (try NVDA, JAWS, or VoiceOver)
- Validate HTML markup
- Check color contrast ratios
- Test with zoom up to 200%

### Automated Testing Tools
- Use browser developer tools accessibility panel
- Run axe-core or Lighthouse accessibility audit
- Validate HTML with W3C validator

## 💡 Accessibility Best Practices

- Write code for people, not just machines
- Test with real users when possible
- Consider cognitive accessibility, not just screen readers
- Use progressive enhancement principles
- Provide multiple ways to access information
- Be consistent with your interaction patterns
- Don't rely solely on color to convey information

## 📚 Helpful Resources

- [WebAIM Accessibility Guidelines](https://webaim.org/intro/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Time Estimate:** 60-90 minutes  
**Difficulty:** Intermediate  
**Stage:** 6 - Semantic HTML and Accessibility
