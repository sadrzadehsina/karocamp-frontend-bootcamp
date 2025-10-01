# Practice 02: useToggle Hook

## 🎯 Goal
Learn to create a `useToggle` hook for show/hide functionality.

## 🤔 What You'll Learn
- How to create a toggle (on/off) custom hook
- How the same hook can be used for different purposes
- How to pass initial values to custom hooks

## 📖 Simple Explanation

A toggle is like a light switch - it can be ON or OFF, and you can flip between them.

**Common Pattern:**
```javascript
// You often need this pattern:
const [isVisible, setIsVisible] = useState(false);
const toggle = () => setIsVisible(!isVisible);
```

**With Custom Hook:**
```javascript
// Much simpler!
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(!value);
  return [value, toggle];
}

// Use it anywhere:
const [isVisible, toggleVisible] = useToggle(false);
```

## 🚀 Try It
1. Open `index.html` in your browser
2. Click different toggle buttons
3. See how the same hook works for different things:
   - Show/hide menu
   - Light/dark mode
   - Sound on/off

## 💡 Key Points
- Toggle means switch between two states (true/false)
- Same hook can be used for many different toggles
- You can set what the starting value should be