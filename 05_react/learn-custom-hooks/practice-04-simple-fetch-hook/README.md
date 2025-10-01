# Practice 04: Simple useFetch Hook

## 🎯 Goal
Learn to create a `useFetch` hook to get data from the internet easily.

## 🤔 What You'll Learn
- How to get data from websites (APIs)
- How to show loading messages while waiting
- How to handle errors when things go wrong
- How to make fetching data reusable

## 📖 Simple Explanation

Fetching data means asking for information from the internet, like asking for a list of jokes or weather information.

**Without Custom Hook:**
```javascript
// You'd have to write this every time:
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// Plus all the fetch logic...
```

**With useFetch Hook:**
```javascript
// Much simpler!
const { data, loading, error } = useFetch('https://api.example.com/jokes');
```

## 🚀 Try It
1. Open `index.html` in your browser
2. Click different buttons to fetch different types of data
3. Watch the loading messages
4. See how the same hook works for different data sources

## 💡 Key Points
- Fetching data takes time, so we show "loading..."
- Sometimes things go wrong (no internet, server down)
- The same hook can get different types of data
- Data comes from URLs (web addresses)