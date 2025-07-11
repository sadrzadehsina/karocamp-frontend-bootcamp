# Practice 02: CSS Selectors & Combinators - Interactive Navigation Menu

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Advanced selector combinations and specificity
- Complex pseudo-class implementations
- Attribute selector variations
- Creating interactive navigation components
- Understanding selector performance

## 📋 Exercise Description

Build an interactive multi-level navigation menu using advanced CSS selectors and combinators. This exercise focuses on creating dynamic user interactions without JavaScript.

## 🔧 Requirements

### HTML Structure

Create an HTML file with:
- A main navigation bar with multiple menu items
- Dropdown submenus (at least 2 levels deep)
- Different menu item types (regular links, buttons, disabled items)
- Search input within the navigation
- Social media icons section

### CSS Styling Tasks

1. **Complex Combinators**: Use `nav > ul > li > a` for direct targeting
2. **Pseudo-class Chains**: Combine `:hover:not(.disabled)` for interactive items
3. **Attribute Selectors**: Style `[href^="https"]` external links differently
4. **State Selectors**: Implement `:active`, `:visited`, `:focus-visible` states
5. **Structural Pseudo-classes**: Use `:first-of-type`, `:last-of-type`, `:nth-child(odd)`
6. **Advanced Combinations**: Create `li:hover > ul` for dropdown functionality

## 🎨 Design Guidelines

- Implement smooth hover transitions
- Create accessible focus indicators
- Use consistent spacing and typography
- Ensure mobile-friendly touch targets
- Add visual feedback for all interactive states

## 🚀 Bonus Challenges

- Create a "mega menu" with complex layouts
- Implement breadcrumb styling with `:before` pseudo-elements
- Style a tabbed interface using `:checked` pseudo-class
- Add keyboard navigation indicators

## 📝 Expected Output

A fully interactive navigation menu demonstrating advanced CSS selector mastery with smooth user experience and accessibility features.
