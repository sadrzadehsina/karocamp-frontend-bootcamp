# Practice 03: Typography Playground - Article Styling

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Typography hierarchy with Tailwind
- Text color and weight combinations
- Line height and spacing for readability
- Creating visually appealing text layouts

## 📋 Exercise Description

Style a simple blog article using Tailwind's typography utilities. Focus on creating a clear hierarchy and good readability.

## 🔧 Requirements

### HTML Structure
Create an article with:
- Article title (main heading)
- Subtitle or meta information
- Multiple paragraphs of content
- A quote or highlight section
- Proper text hierarchy

### Styling Tasks
1. **Heading Hierarchy**: Create clear visual hierarchy
2. **Body Text**: Ensure good readability
3. **Special Elements**: Style quotes or highlights
4. **Spacing**: Proper vertical rhythm
5. **Colors**: Use text colors effectively

## 💻 Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typography Playground</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white">
    <article class="max-w-2xl mx-auto p-8">
        <!-- Article title -->
        <h1>Getting Started with Tailwind CSS</h1>
        
        <!-- Meta info -->
        <p>Published on June 1, 2024 • 5 min read</p>
        
        <!-- Introduction -->
        <p>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.</p>
        
        <!-- Main content -->
        <p>Unlike traditional CSS frameworks like Bootstrap or Foundation, Tailwind doesn't provide pre-designed components. Instead, it gives you the building blocks to create your own unique designs.</p>
        
        <!-- Quote -->
        <blockquote>
            "The best way to learn Tailwind is to start building with it. Don't worry about memorizing all the classes - just start experimenting!"
        </blockquote>
        
        <!-- More content -->
        <h2>Why Choose Tailwind?</h2>
        <p>Tailwind offers several advantages over traditional CSS approaches:</p>
        
        <p>First, it's incredibly flexible. You can create any design you can imagine without being constrained by pre-built components.</p>
        
        <!-- Conclusion -->
        <p>Ready to get started? The best way to learn is by doing. Start with simple components and gradually work your way up to more complex layouts.</p>
    </article>
</body>
</html>
```

## ✅ Expected Result

Your article should have:
- Clear visual hierarchy with different heading sizes
- Readable body text with proper spacing
- Styled meta information
- Emphasized quote section
- Good overall typography rhythm

## 🎯 Specific Tasks

1. **Main Title (h1)**:
   - `text-4xl font-bold text-gray-900 mb-2`

2. **Meta Information**:
   - `text-sm text-gray-500 mb-6`

3. **Body Paragraphs**:
   - `text-lg text-gray-700 leading-relaxed mb-4`

4. **Blockquote**:
   - `text-xl italic text-blue-600 border-l-4 border-blue-500 pl-4 my-6`

5. **Subheading (h2)**:
   - `text-2xl font-semibold text-gray-800 mt-8 mb-4`

6. **Article Container**:
   - Consider adding `leading-7` for better line spacing

## 💡 Bonus Challenges

- Add a subtle background color to the quote
- Experiment with different font weights
- Try adding text decoration to links
- Use different shades for better contrast

## 🔗 Helpful Resources

- [Font Size](https://tailwindcss.com/docs/font-size)
- [Line Height](https://tailwindcss.com/docs/line-height)
- [Text Color](https://tailwindcss.com/docs/text-color)
- [Border Width](https://tailwindcss.com/docs/border-width)
