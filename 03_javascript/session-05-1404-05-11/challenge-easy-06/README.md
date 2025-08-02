# 🎯 Challenge Easy 06: Color Changer (Stage 7 - Events)

## 📝 Description

Create buttons that change the background color of the page when clicked.

## 🎯 Objectives

- Practice multiple event listeners
- Work with CSS style changes via JavaScript
- Handle multiple similar elements

## 📋 Requirements

1. Create an HTML file with:
   - Three buttons: "Red", "Blue", "Green"
   - Give each button a class "color-btn" and unique ids
2. In JavaScript:
   - Add event listeners to each button
   - When clicked, change `document.body.style.backgroundColor`
   - Each button should change to its respective color

## 💡 Example HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>Color Changer</title>
</head>
<body>
    <button id="redBtn" class="color-btn">Red</button>
    <button id="blueBtn" class="color-btn">Blue</button>
    <button id="greenBtn" class="color-btn">Green</button>
    <script src="script.js"></script>
</body>
</html>
```

## 💡 Example Behavior

```
Click "Red" button → Background turns red
Click "Blue" button → Background turns blue
Click "Green" button → Background turns green
```

## 🚀 Bonus

- Add more colors and buttons
- Add a "Reset" button to return to white background
- Store the current color in a variable and display it

## ✅ Expected Topics Used

- Multiple `addEventListener()` calls
- `document.body.style.backgroundColor`
- Event handling with different elements
- CSS manipulation via JavaScript
