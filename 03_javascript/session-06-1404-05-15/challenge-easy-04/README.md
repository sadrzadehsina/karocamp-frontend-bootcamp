# 🎯 Challenge Easy 04: Button Click Counter (Stage 7 - Events)

## 📝 Description

Create a simple click counter that responds to button clicks and displays the count.

## 🎯 Objectives

- Practice event handling with `addEventListener()`
- Work with DOM manipulation
- Update content dynamically

## 📋 Requirements

1. Create an HTML file with:
   - A button with id "clickBtn" and text "Click Me!"
   - A paragraph with id "counter" showing "Clicks: 0"
2. In JavaScript:
   - Get references to the button and counter elements
   - Add an event listener to the button for "click" events
   - Create a counter variable starting at 0
   - When clicked, increment counter and update the display

## 💡 Example HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>Click Counter</title>
</head>
<body>
    <button id="clickBtn">Click Me!</button>
    <p id="counter">Clicks: 0</p>
    <script src="script.js"></script>
</body>
</html>
```

## 💡 Example Output

```
Initial: "Clicks: 0"
After 1 click: "Clicks: 1"
After 3 clicks: "Clicks: 3"
```

## 🚀 Bonus

- Add a reset button to set counter back to 0
- Change button color after 5 clicks
- Add different buttons with different point values

## ✅ Expected Topics Used

- `addEventListener()`
- `document.getElementById()`
- Event handling
- DOM content updates
