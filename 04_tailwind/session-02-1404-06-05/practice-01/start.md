# Practice 01: Flexbox Basics - Navigation Layout

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Using Flexbox utilities in Tailwind CSS
- Creating responsive navigation layouts
- Understanding justify and align properties
- Building practical UI components

## 📋 Exercise Description

Build a responsive navigation bar using Tailwind's Flexbox utilities. This exercise teaches you the fundamentals of layout with Tailwind.

## 🔧 Requirements

### HTML Structure
Create a navigation with:
- Logo or brand name
- Navigation links
- User actions (login/signup buttons)
- Responsive behavior

### Styling Tasks
1. **Flex Container**: Set up the main navigation container
2. **Space Distribution**: Distribute elements properly
3. **Alignment**: Align items vertically
4. **Responsive**: Make it work on different screen sizes
5. **Interactive**: Add hover states

## 💻 Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Navigation</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <nav class="bg-white shadow-sm">
        <div class="max-w-6xl mx-auto px-4">
            <!-- Navigation content -->
            <div>
                <!-- Logo/Brand -->
                <div>
                    <h1>MyBrand</h1>
                </div>
                
                <!-- Navigation Links -->
                <div>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
                
                <!-- User Actions -->
                <div>
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    </nav>
    
    <!-- Page content for context -->
    <main class="max-w-6xl mx-auto p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Welcome to Our Website</h1>
        <p class="text-lg text-gray-600">This is a sample page to showcase the navigation bar.</p>
    </main>
</body>
</html>
```

## ✅ Expected Result

Your navigation should have:
- Logo aligned to the left
- Navigation links centered
- Action buttons aligned to the right
- Proper vertical alignment
- Hover effects on interactive elements

## 🎯 Specific Tasks

1. **Main Navigation Container**:
   - `flex items-center justify-between py-4`

2. **Logo/Brand**:
   - `text-xl font-bold text-gray-900`

3. **Navigation Links Container**:
   - `hidden md:flex space-x-6`

4. **Individual Navigation Links**:
   - `text-gray-600 hover:text-gray-900 transition-colors duration-200`

5. **Action Buttons Container**:
   - `flex items-center space-x-3`

6. **Login Button**:
   - `text-gray-600 hover:text-gray-900`

7. **Sign Up Button**:
   - `bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200`

## 💡 Bonus Challenges

- Add a mobile menu toggle button
- Create a dropdown menu for one of the nav items
- Add icons to the navigation links
- Implement a sticky navigation bar

## 🔗 Helpful Resources

- [Flexbox](https://tailwindcss.com/docs/flex)
- [Justify Content](https://tailwindcss.com/docs/justify-content)
- [Align Items](https://tailwindcss.com/docs/align-items)
- [Space Between](https://tailwindcss.com/docs/space)
