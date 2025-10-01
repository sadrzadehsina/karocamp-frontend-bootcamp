# Practice 05: useTimer Hook

## 🎯 Goal
Learn to create a `useTimer` hook for countdown timers and stopwatches.

## 🤔 What You'll Learn
- How to create time-based functionality
- How to manage intervals and cleanup
- How to create flexible timer logic
- How the same hook can work for different timer needs

## 📖 Simple Explanation

A timer hook helps you work with time - like counting down from 10 to 0, or counting up like a stopwatch.

**Without Custom Hook:**
```javascript
// You'd need all this code every time:
const [seconds, setSeconds] = useState(60);
const [isRunning, setIsRunning] = useState(false);
// Plus interval setup, cleanup, pause/resume logic...
```

**With useTimer Hook:**
```javascript
// Much simpler!
const { seconds, start, pause, reset, isRunning } = useTimer(60);
```

## 🚀 Try It
1. Open `index.html` in your browser
2. Try the different timers:
   - Pomodoro timer (25 minutes)
   - Quick break timer (5 minutes)
   - Stopwatch (counts up)
3. Start, pause, and reset each timer
4. See how the same hook works for different purposes

## 💡 Key Points
- Timers need to start, stop, pause, and reset
- useEffect is used to handle the ticking
- Cleanup prevents memory leaks
- Same hook logic can count up or down