# 🎯 Challenge Easy Stage 8-01: Modern User Profile Manager (Stage 8 - ES6+ Modern JavaScript)

## 📝 Description

Refactor a traditional user profile system using modern ES6+ features including destructuring, spread operators, and modern variable declarations.

## 🎯 Objectives

- Practice `let` and `const` with block scope
- Use destructuring for objects and arrays
- Apply spread and rest operators
- Implement default parameters
- Use template literals and modern syntax

## 📋 Requirements

1. User profile data structure:
   ```javascript
   const userData = {
     personal: {
       firstName: 'John',
       lastName: 'Doe',
       age: 28,
       email: 'john@example.com'
     },
     preferences: {
       theme: 'dark',
       language: 'en',
       notifications: true
     },
     social: {
       twitter: '@johndoe',
       linkedin: 'john-doe'
     }
   };
   ```

2. Implement these functions using modern syntax:
   - Extract user information using destructuring
   - Update profile with spread operator
   - Merge multiple profile objects
   - Create user display cards with template literals
   - Handle missing data with default parameters

3. Requirements for modern syntax:
   - Use `const` for immutable references, `let` for reassignments
   - Destructure nested objects and arrays
   - Use spread operator for object/array copying and merging
   - Implement default parameters for optional data
   - Use template literals for string formatting

## 💡 Example Functions to Implement

```javascript
// Destructuring and default parameters
function createUserCard(user, template = 'basic') {
  // Extract data using destructuring
  const { 
    personal: { firstName, lastName, email }, 
    preferences: { theme = 'light' } = {},
    social = {}
  } = user;
  
  // Use template literals
  return `
    <div class="user-card theme-${theme}">
      <h2>${firstName} ${lastName}</h2>
      <p>Email: ${email}</p>
      ${social.twitter ? `<p>Twitter: ${social.twitter}</p>` : ''}
    </div>
  `;
}

// Spread operator for updates
function updateUserProfile(currentUser, updates) {
  return {
    ...currentUser,
    personal: {
      ...currentUser.personal,
      ...updates.personal
    },
    preferences: {
      ...currentUser.preferences,
      ...updates.preferences
    }
  };
}

// Rest parameters
function mergeUserProfiles(mainProfile, ...additionalProfiles) {
  return additionalProfiles.reduce((merged, profile) => ({
    ...merged,
    ...profile
  }), mainProfile);
}
```

## 🚀 Expected Features

1. **Profile Display**: 
   - Extract and display user info with destructuring
   - Handle missing social media links gracefully
   - Use default theme if not specified

2. **Profile Updates**:
   - Update specific sections without mutating original
   - Merge multiple update objects
   - Preserve existing data when updating

3. **Bulk Operations**:
   - Process multiple users with array destructuring
   - Extract common data patterns
   - Generate reports with template literals

## ✅ Expected Modern Syntax Usage

- `const` and `let` with proper block scoping
- Object destructuring: `const { name, email } = user`
- Array destructuring: `const [first, second] = users`
- Nested destructuring: `const { personal: { firstName } } = user`
- Spread operator: `{ ...user, age: 30 }`
- Rest parameters: `function merge(main, ...others)`
- Default parameters: `function display(user, theme = 'light')`
- Template literals: `` `Hello ${name}` ``

## 🌟 Bonus

- Implement object shorthand property syntax
- Use computed property names
- Add array methods with arrow functions
- Implement property value shorthand
- Use Symbol for private properties
