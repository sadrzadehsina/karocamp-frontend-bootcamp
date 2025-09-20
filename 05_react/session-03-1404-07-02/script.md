# React Frontend Bootcamp - Session 3

## 🎯 Stage 1: useEffect Hook & Side Effects

### 💡 Topics

- **Understanding Side Effects**:
  - What are side effects in React
  - Pure vs impure functions
  - When to use useEffect
- **useEffect Basics**:
  - Basic syntax and usage
  - Effect cleanup and dependencies
  - Effect dependency array
- **Common useEffect Patterns**:
  - Component mount/unmount
  - Data fetching
  - Setting up subscriptions
  - Timer and intervals

### 🛠 Practice Ideas

Implement components that fetch data, set up timers, or interact with browser APIs.

#### 📁 Practice Exercises
- **Practice 01**: [useEffect Basics - Document Title Updater](practice-01/start.md)
- **Practice 02**: [Data Fetching - User Profile Loader](practice-02/start.md)

---

## 🌐 Stage 2: API Integration & Data Fetching

### 💡 Topics

- **Fetch API in React**:
  - Making HTTP requests
  - Handling promises and async/await
  - Error handling in API calls
- **Loading States**:
  - Managing loading, success, and error states
  - Loading indicators and spinners
  - User feedback during data fetching
- **Data Management**:
  - Storing fetched data in state
  - Updating and refreshing data
  - Caching strategies (basic)

### 🛠 Practice Ideas

Build components that fetch and display data from APIs with proper loading and error handling.

#### 📁 Practice Exercises
- **Practice 03**: [API Integration - Weather App](practice-03/start.md)
- **Practice 04**: [Error Handling - News Feed Component](practice-04/start.md)

---

## 🔗 Stage 3: Component Communication

### 💡 Topics

- **Lifting State Up**:
  - Sharing state between components
  - Moving state to common parent
  - Props drilling and its limitations
- **Parent-Child Communication**:
  - Passing data down with props
  - Passing functions up to parents
  - Event bubbling patterns
- **Sibling Communication**:
  - Communication through common parent
  - Callback patterns
  - State management strategies

### 🛠 Practice Ideas

Create applications with multiple components that need to share and synchronize data.

#### 📁 Practice Exercises
- **Practice 05**: [Lifting State Up - Shopping Cart App](practice-05/start.md)
- **Practice 06**: [Component Communication - Chat Interface](practice-06/start.md)

---

## 🧩 Stage 4: Custom Hooks

### 💡 Topics

- **What are Custom Hooks**:
  - Extracting component logic
  - Reusing stateful logic
  - Hook naming conventions
- **Creating Custom Hooks**:
  - Building your first custom hook
  - Returning values and functions
  - Using hooks inside custom hooks
- **Common Custom Hook Patterns**:
  - Data fetching hooks
  - Local storage hooks
  - Window size hooks
  - Form handling hooks

### 🛠 Practice Ideas

Extract common logic into reusable custom hooks for better code organization.

#### 📁 Practice Exercises
- **Practice 07**: [Custom Hooks - useLocalStorage](practice-07/start.md)
- **Practice 08**: [Advanced Custom Hooks - useFetch](practice-08/start.md)

---

## 📚 Session Summary

In this third session, you've learned:
- Managing side effects with useEffect hook
- Fetching data from APIs and handling async operations
- Component communication patterns and lifting state up
- Creating custom hooks for reusable logic
- Advanced state management techniques

## 🏠 Homework

Build a "Movie Search Application" that includes:
- Search input to find movies by title
- Display search results in a grid layout
- Show loading states during API calls
- Handle errors gracefully with user feedback
- Save favorite movies to local storage
- Use custom hooks for data fetching and local storage

## 🔗 Useful Resources

- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
