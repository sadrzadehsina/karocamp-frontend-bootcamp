# Practice 03: useLocalStorage Hook

## 🎯 Goal
Learn to create a `useLocalStorage` hook that saves data to the browser.

## 🤔 What You'll Learn
- How to save data so it doesn't disappear when you refresh the page
- How to create a hook that remembers things
- How localStorage works in the browser

## 📖 Simple Explanation

LocalStorage is like a small notebook in your browser that remembers things even after you close the page!

**Normal useState:**
```javascript
const [name, setName] = useState(''); 
// When you refresh = data is GONE! 😢
```

**With useLocalStorage:**
```javascript
const [name, setName] = useLocalStorage('username', '');
// When you refresh = data is STILL THERE! 😎
```

## 🚀 Try It
1. Open `index.html` in your browser
2. Enter your name and favorite color
3. **Refresh the page** (F5 or Ctrl+R)
4. See how your data is still there! ✨

## 💡 Key Points
- Data stays saved even when you refresh the page
- Each piece of data needs a unique "key" (like a label)
- You can save text, numbers, and even more complex data
- Great for user preferences and settings