# Practice 02: Basic Utilities - Simple Card Component

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Creating card-like components with Tailwind
- Working with borders and shadows
- Combining multiple utility classes
- Understanding spacing and layout basics

## 📋 Exercise Description

Build a simple profile card component using Tailwind utility classes. This exercise helps you practice combining different utilities to create a cohesive design element.

## 🔧 Requirements

### HTML Structure
Create a card with:
- A container with proper styling
- Profile image placeholder
- Name and title
- Brief description
- Basic border and shadow

### Styling Tasks
1. **Card Container**: Create a card with border, shadow, and padding
2. **Image**: Style a placeholder for profile image
3. **Typography**: Implement text hierarchy
4. **Spacing**: Use proper spacing between elements
5. **Colors**: Apply a cohesive color scheme

## 💻 Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Card Component</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8">
    <div class="max-w-sm mx-auto">
        <!-- Your card component goes here -->
        <div>
            <!-- Profile image placeholder -->
            <div>📷</div>
            
            <!-- Name -->
            <h2>John Doe</h2>
            
            <!-- Title -->
            <p>Frontend Developer</p>
            
            <!-- Description -->
            <p>Passionate about creating beautiful and functional web experiences with modern technologies.</p>
        </div>
    </div>
</body>
</html>
```

## ✅ Expected Result

Your card should have:
- White background with rounded corners
- Subtle shadow for depth
- Proper padding and spacing
- Clear text hierarchy
- Centered image placeholder
- Professional, clean appearance

## 🎯 Specific Tasks

1. Style the card container with:
   - `bg-white` for white background
   - `rounded-lg` for rounded corners
   - `shadow-md` for subtle shadow
   - `p-6` for padding

2. Style the image placeholder:
   - Center it with `text-center`
   - Make it larger with `text-4xl`
   - Add bottom margin with `mb-4`

3. Style the name:
   - `text-xl font-bold` for prominence
   - `text-gray-900` for dark color
   - `mb-1` for spacing

4. Style the title:
   - `text-gray-600` for muted color
   - `mb-3` for spacing

5. Style the description:
   - `text-gray-700` for readable color
   - `text-sm` for smaller size
   - `leading-relaxed` for better line height

## 💡 Bonus Challenges

- Add hover effects with `hover:shadow-lg`
- Try different color schemes
- Experiment with different border styles
- Add rounded corners to the image placeholder

## 🔗 Helpful Resources

- [Border Radius](https://tailwindcss.com/docs/border-radius)
- [Box Shadow](https://tailwindcss.com/docs/box-shadow)
- [Font Size](https://tailwindcss.com/docs/font-size)
- [Font Weight](https://tailwindcss.com/docs/font-weight)
