# Practice 03: Responsive Design - Mobile-First Layout

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Mobile-first responsive design approach
- Using Tailwind's responsive breakpoints
- Creating layouts that adapt to different screen sizes
- Understanding responsive utility patterns

## 📋 Exercise Description

Build a responsive feature section that displays differently on mobile and desktop devices. This exercise teaches you how to think mobile-first and progressively enhance for larger screens.

## 🔧 Requirements

### HTML Structure
Create a features section with:
- Main heading and description
- Three feature cards
- Icons or placeholders for each feature
- Responsive grid layout

### Styling Tasks
1. **Mobile Layout**: Stack cards vertically on mobile
2. **Tablet Layout**: Show cards in a 2+1 layout on tablets
3. **Desktop Layout**: Display all cards in a row on desktop
4. **Typography**: Responsive text sizes
5. **Spacing**: Adaptive spacing for different screens

## 💻 Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Features</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <section class="py-12">
        <div class="max-w-6xl mx-auto px-4">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2>Our Features</h2>
                <p>Discover what makes our platform special</p>
            </div>
            
            <!-- Features Grid -->
            <div>
                <!-- Feature 1 -->
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <div class="text-4xl mb-4">⚡</div>
                    <h3>Fast Performance</h3>
                    <p>Lightning-fast loading times and optimized performance for the best user experience.</p>
                </div>
                
                <!-- Feature 2 -->
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <div class="text-4xl mb-4">🔒</div>
                    <h3>Secure & Reliable</h3>
                    <p>Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.</p>
                </div>
                
                <!-- Feature 3 -->
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <div class="text-4xl mb-4">🚀</div>
                    <h3>Easy to Use</h3>
                    <p>Intuitive interface designed for users of all skill levels. Get started in minutes.</p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
```

## ✅ Expected Result

Your responsive layout should:
- Stack cards vertically on mobile (< 768px)
- Show 2 cards on top, 1 below on tablets (768px - 1024px)
- Display all 3 cards in a row on desktop (> 1024px)
- Have appropriate text sizes for each breakpoint
- Maintain proper spacing and readability

## 🎯 Specific Tasks

1. **Section Header**:
   - Heading: `text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4`
   - Description: `text-base md:text-lg text-gray-600 max-w-2xl mx-auto`

2. **Features Grid Container**:
   - `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`

3. **Feature Card Spacing**:
   - Update padding: `p-6 md:p-8`

4. **Feature Titles**:
   - `text-lg md:text-xl font-semibold text-gray-900 mb-3`

5. **Feature Descriptions**:
   - `text-sm md:text-base text-gray-600 leading-relaxed`

6. **Section Padding**:
   - Update to: `py-12 md:py-16 lg:py-20`

## 💡 Responsive Design Tips

- **Mobile First**: Start with mobile styles, then add larger breakpoints
- **Breakpoint Logic**: 
  - `sm:` 640px and up
  - `md:` 768px and up  
  - `lg:` 1024px and up
  - `xl:` 1280px and up
- **Test on Different Sizes**: Use browser dev tools to test responsiveness

## 🏆 Bonus Challenges

- Add hover effects that work well on both touch and mouse devices
- Implement different spacing patterns for mobile vs desktop
- Try creating a 4-column layout on extra large screens (`xl:grid-cols-4`)
- Add responsive images or icons

## 🔗 Helpful Resources

- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Grid Template Columns](https://tailwindcss.com/docs/grid-template-columns)
- [Gap](https://tailwindcss.com/docs/gap)
- [Breakpoint Reference](https://tailwindcss.com/docs/responsive-design#overview)
