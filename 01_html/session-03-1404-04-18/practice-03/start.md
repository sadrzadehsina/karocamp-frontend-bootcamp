<!-- markdownlint-disable -->

# Practice 03: Refactor a Blog Article with Semantic HTML

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- How to use semantic HTML5 elements effectively
- Converting non-semantic HTML to semantic structure
- Understanding the purpose and placement of semantic elements
- Improving accessibility through proper HTML structure
- Creating meaningful document outlines
- Best practices for semantic web development

## 📋 Exercise Description

You will be given a basic HTML blog article that uses only generic `<div>` and `<span>` elements. Your task is to refactor it using proper semantic HTML5 elements to make it more meaningful and accessible.

## 🔧 Starting Code

Here's the non-semantic HTML you need to refactor:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Article</title>
</head>
<body>
    <div class="top-section">
        <div class="logo">TechBlog</div>
        <div class="menu">
            <div><a href="#home">Home</a></div>
            <div><a href="#about">About</a></div>
            <div><a href="#contact">Contact</a></div>
        </div>
    </div>
    
    <div class="content-area">
        <div class="main-content">
            <div class="post">
                <div class="post-title">The Future of Web Development</div>
                <div class="post-info">
                    <span>By John Doe</span>
                    <span>Published on March 15, 2024</span>
                </div>
                
                <div class="post-content">
                    <p>Web development is evolving rapidly with new technologies and frameworks emerging constantly.</p>
                    
                    <div class="section-title">HTML5 and Semantic Web</div>
                    <p>HTML5 introduced many semantic elements that help create more meaningful web documents.</p>
                    
                    <div class="section-title">CSS Grid and Flexbox</div>
                    <p>Modern CSS layout techniques are making responsive design easier than ever.</p>
                    
                    <div class="section-title">JavaScript Frameworks</div>
                    <p>Frameworks like React, Vue, and Angular continue to shape modern web development.</p>
                </div>
                
                <div class="tags">
                    <span>Tags: HTML5, CSS, JavaScript, Web Development</span>
                </div>
            </div>
        </div>
        
        <div class="sidebar">
            <div class="widget">
                <div class="widget-title">Recent Posts</div>
                <div class="widget-content">
                    <div><a href="#">Understanding CSS Grid</a></div>
                    <div><a href="#">JavaScript ES6 Features</a></div>
                    <div><a href="#">Responsive Design Tips</a></div>
                </div>
            </div>
            
            <div class="widget">
                <div class="widget-title">About the Author</div>
                <div class="widget-content">
                    <p>John Doe is a senior web developer with 10 years of experience in frontend technologies.</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="bottom-section">
        <p>&copy; 2024 TechBlog. All rights reserved.</p>
    </div>
</body>
</html>
```

## 🎯 Refactoring Requirements

Replace the generic elements with these semantic HTML5 elements:

### Structure Elements
- `<header>` - For the top section with logo and navigation
- `<nav>` - For the navigation menu
- `<main>` - For the main content area
- `<article>` - For the blog post content
- `<section>` - For distinct sections within the article
- `<aside>` - For the sidebar content
- `<footer>` - For the bottom section

### Content Elements
- `<h1>`, `<h2>`, `<h3>` - For proper heading hierarchy
- `<time>` - For publication date
- `<address>` - For author information (in sidebar)

### Additional Improvements
- Add proper heading hierarchy (h1 for main title, h2 for sections)
- Use `datetime` attribute for the `<time>` element
- Add `role` attributes where helpful for accessibility
- Include proper `alt` attributes if you add any images
- Ensure proper document outline structure

## ✅ Success Criteria

Your refactored HTML should:
- [ ] Use `<header>` for the top section
- [ ] Use `<nav>` for navigation menu
- [ ] Use `<main>` for the main content wrapper
- [ ] Use `<article>` for the blog post
- [ ] Use `<section>` elements for article sections
- [ ] Use proper heading hierarchy (h1, h2, h3)
- [ ] Use `<time>` element with datetime attribute
- [ ] Use `<aside>` for sidebar content
- [ ] Use `<footer>` for bottom section
- [ ] Maintain all original content and functionality
- [ ] Follow proper semantic HTML5 standards

## 🎨 Enhanced Features

### Accessibility Improvements
- Add `aria-label` attributes where helpful
- Ensure proper heading hierarchy
- Use semantic elements consistently
- Add `role="banner"`, `role="main"`, `role="contentinfo"` if needed

### SEO Benefits
- Proper heading structure helps search engines understand content hierarchy
- Semantic elements provide better context for web crawlers
- Article structure helps with featured snippets

## 📝 Example Output Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Article</title>
</head>
<body>
    <header>
        <!-- Header content with logo and navigation -->
    </header>
    
    <main>
        <article>
            <header>
                <h1>Article Title</h1>
                <!-- Article metadata -->
            </header>
            
            <section>
                <h2>Section Title</h2>
                <!-- Section content -->
            </section>
            
            <!-- More sections -->
            
            <footer>
                <!-- Article footer with tags -->
            </footer>
        </article>
        
        <aside>
            <!-- Sidebar content -->
        </aside>
    </main>
    
    <footer>
        <!-- Site footer -->
    </footer>
</body>
</html>
```

## 🚀 Bonus Challenges

If you finish early, try these additional improvements:
- Add `<figure>` and `<figcaption>` elements for any images
- Use `<mark>` to highlight important text
- Add `<blockquote>` for any quotes
- Include `<cite>` elements for references
- Add breadcrumb navigation using `<nav>` and proper markup
- Create a table of contents using nested lists

## 💡 Semantic HTML Best Practices

- Use semantic elements for their intended purpose
- Maintain proper heading hierarchy (don't skip levels)
- Each page should have only one `<h1>` element
- Use `<article>` for standalone, reusable content
- Use `<section>` for thematic groupings within articles
- Place navigation in `<nav>` elements
- Use `<aside>` for supplementary content

## 📚 Helpful Resources

- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [Using HTML sections and outlines](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#usage_notes)
- [ARIA Landmarks](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role)

---

**Time Estimate:** 30-45 minutes  
**Difficulty:** Beginner to Intermediate  
**Stage:** 6 - Semantic HTML and Accessibility
