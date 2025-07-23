<!-- markdownlint-disable -->

# Practice 03: Create a Recipe Collection with Lists and Nutrition Tables

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- How to create and structure unordered lists (`<ul>`, `<li>`)
- Working with ordered lists (`<ol>`, `<li>`) for step-by-step instructions
- Using definition lists (`<dl>`, `<dt>`, `<dd>`) for terminology
- Building comprehensive tables (`<table>`, `<tr>`, `<td>`, `<th>`)
- Organizing complex information with proper HTML structure
- Creating accessible and semantic HTML for data presentation

## 📋 Exercise Description

Build a comprehensive recipe collection website that showcases different types of HTML lists and tables. You'll create recipe cards with ingredients lists, step-by-step instructions, nutrition facts tables, and cooking terminology definitions.

## 🔧 Requirements

Your recipe collection should include:

1. **Main Recipe Index (index.html)**
   - Website title and navigation
   - Unordered list of recipe categories
   - Featured recipes with brief descriptions
   - Links to individual recipe pages

2. **Individual Recipe Pages (minimum 3 recipes)**
   - Recipe title and description
   - **Ingredients list**: Unordered list with quantities
   - **Instructions**: Ordered list with step-by-step directions
   - **Nutrition facts table**: Complete table with nutritional information
   - **Cooking time table**: Table showing prep time, cook time, total time
   - Recipe difficulty rating and serving size

3. **Cooking Terms Glossary (glossary.html)**
   - Definition list of cooking terminology
   - Alphabetically organized cooking techniques
   - Kitchen equipment definitions

4. **Menu Planning Page (menu.html)**
   - Weekly meal plan in table format
   - Shopping list organized by categories (unordered lists)
   - Meal prep checklist (ordered list)

## 🔧 Technical Requirements

### HTML Elements to Use:
- `<ul>` and `<li>` for ingredients and categories
- `<ol>` and `<li>` for step-by-step instructions
- `<dl>`, `<dt>`, `<dd>` for cooking terminology
- `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` for nutrition and timing data
- Proper table headers with `scope` attributes
- Nested lists where appropriate

### Content Structure:
```
recipe-collection/
├── index.html
├── recipes/
│   ├── pasta-carbonara.html
│   ├── chocolate-cake.html
│   └── vegetable-stir-fry.html
├── glossary.html
├── menu.html
└── images/
    ├── recipe-photos/
    └── ingredient-photos/
```

## 📝 Step-by-Step Instructions

1. **Create the Main Index Page**
   - Add site title and navigation menu
   - Create unordered list of recipe categories:
     - Italian Dishes
     - Desserts
     - Asian Cuisine
     - Vegetarian Options
   - Add featured recipe cards with images

2. **Build Individual Recipe Pages**
   
   **For each recipe include:**
   
   **Ingredients Section (Unordered List):**
   ```html
   <h3>Ingredients</h3>
   <ul>
     <li>2 cups all-purpose flour</li>
     <li>3 large eggs</li>
     <li>1 tsp salt</li>
     <!-- more ingredients -->
   </ul>
   ```

   **Instructions Section (Ordered List):**
   ```html
   <h3>Instructions</h3>
   <ol>
     <li>Preheat oven to 350°F (175°C)</li>
     <li>Mix flour and salt in a large bowl</li>
     <li>Beat eggs and add to flour mixture</li>
     <!-- more steps -->
   </ol>
   ```

   **Nutrition Facts Table:**
   ```html
   <table>
     <thead>
       <tr>
         <th scope="col">Nutrient</th>
         <th scope="col">Amount per Serving</th>
         <th scope="col">% Daily Value</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>Calories</td>
         <td>320</td>
         <td>16%</td>
       </tr>
       <!-- more nutrition data -->
     </tbody>
   </table>
   ```

3. **Create Cooking Glossary Page**
   
   Use definition lists for cooking terms:
   ```html
   <dl>
     <dt>Sauté</dt>
     <dd>To cook quickly in a small amount of fat over high heat</dd>
     
     <dt>Braise</dt>
     <dd>To cook slowly in liquid in a covered pot</dd>
     
     <dt>Julienne</dt>
     <dd>To cut vegetables into thin, matchstick-like strips</dd>
   </dl>
   ```

4. **Build Menu Planning Page**
   
   **Weekly Menu Table:**
   ```html
   <table>
     <thead>
       <tr>
         <th scope="col">Day</th>
         <th scope="col">Breakfast</th>
         <th scope="col">Lunch</th>
         <th scope="col">Dinner</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">Monday</th>
         <td>Oatmeal with berries</td>
         <td>Garden salad</td>
         <td>Pasta carbonara</td>
       </tr>
       <!-- more days -->
     </tbody>
   </table>
   ```

   **Shopping List (Nested Lists):**
   ```html
   <h3>Shopping List</h3>
   <ul>
     <li>Dairy
       <ul>
         <li>Eggs (1 dozen)</li>
         <li>Parmesan cheese (8 oz)</li>
         <li>Heavy cream (1 pint)</li>
       </ul>
     </li>
     <li>Produce
       <ul>
         <li>Garlic (1 head)</li>
         <li>Fresh basil (1 bunch)</li>
       </ul>
     </li>
   </ul>
   ```

## 💡 Pro Tips

- Use semantic HTML elements for better accessibility
- Include `scope` attributes in table headers
- Use meaningful table captions when helpful
- Keep list items concise and scannable
- Use nested lists to show relationships between items

## 🚀 Bonus Challenges

1. **Add Recipe Rating System**
   - Create a table showing user ratings
   - Include star ratings and comments

2. **Include Cooking Equipment Lists**
   - Add required equipment as unordered lists
   - Create equipment glossary with definition lists

3. **Build Recipe Conversion Tables**
   - Create measurement conversion tables
   - Add temperature conversion charts

4. **Add Meal Prep Instructions**
   - Use ordered lists for meal prep steps
   - Create weekly prep schedule tables

## 🍳 Sample Recipe Ideas

**Main Dishes:**
- Pasta Carbonara
- Vegetable Stir-Fry
- Grilled Chicken with herbs

**Desserts:**
- Chocolate Chip Cookies
- Banana Bread
- Fruit Parfait

**Quick Meals:**
- 15-minute pasta
- Overnight oats
- Smoothie bowls

## ✅ Completion Checklist

- [ ] Created main index with recipe categories list
- [ ] Built 3+ individual recipe pages
- [ ] Used unordered lists for ingredients
- [ ] Used ordered lists for cooking instructions
- [ ] Created nutrition facts tables with proper headers
- [ ] Added cooking terms glossary with definition lists
- [ ] Built menu planning page with weekly table
- [ ] Included shopping list with nested categories
- [ ] Added meal prep checklist
- [ ] Used proper table structure with thead/tbody
- [ ] Included scope attributes for table headers
- [ ] Added meaningful navigation between pages
- [ ] Tested all lists and tables for readability

## 🎨 Content Organization Tips

- Group related list items logically
- Use consistent formatting for measurements
- Keep table data aligned and easy to read
- Use clear, descriptive headings for sections
- Include helpful cooking tips in list format

This exercise will give you comprehensive practice with HTML lists and tables while creating a practical recipe collection website!
