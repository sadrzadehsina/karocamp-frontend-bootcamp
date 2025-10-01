# Practice 01: What is a Custom Hook?

## 🎯 Goal
Understand what a custom hook is by creating a simple `useCounter` hook.

## 🤔 What You'll Learn
- What a custom hook is
- How to create your first custom hook
- How to use the same hook in multiple places
- Why custom hooks are helpful

## 📖 Simple Explanation

A custom hook is like a recipe that you can use over and over again!

**Before Custom Hook:**
```javascript
// You have to write this code in every component that needs a counter
const [count, setCount] = useState(0);
const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);
```

**After Custom Hook:**
```javascript
// You write the recipe once
function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
}

// Then use it anywhere!
const { count, increment, decrement } = useCounter();
```

## 🚀 Try It
1. Open `index.html` in your browser
2. See how the same `useCounter` hook is used in different components
3. Click the buttons and watch both counters work independently

## 💡 Key Points
- Custom hooks start with "use"
- They're just normal JavaScript functions
- Multiple components can use the same hook
- Each component gets its own "copy" of the hook