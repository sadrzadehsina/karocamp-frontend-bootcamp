# 🎯 Challenge Easy 05: Simple Input Display (Stage 7 - Events)

## 📝 Description

Create an input field that displays what you type in real-time below it.

## 🎯 Objectives

- Practice input event handling
- Work with `e.target.value`
- Update content dynamically as user types

## 📋 Requirements

1. Create an HTML file with:
   - An input field with id "textInput" and placeholder "Type something..."
   - A paragraph with id "display" showing "You typed: "
2. In JavaScript:
   - Get references to the input and display elements
   - Add an event listener to the input for "input" events
   - When user types, update the display paragraph with the current input value

## 💡 Example HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>Live Text Display</title>
</head>
<body>
    <input type="text" id="textInput" placeholder="Type something...">
    <p id="display">You typed: </p>
    <script src="script.js"></script>
</body>
</html>
```

## 💡 Example Output

```
When input is empty: "You typed: "
When typing "Hello": "You typed: Hello"
When typing "Hello World": "You typed: Hello World"
```

## 🚀 Bonus

- Show character count as well
- Convert text to uppercase in display
- Add a clear button to reset the input

## ✅ Expected Topics Used

- `addEventListener()` with "input" event
- `e.target.value`
- Real-time DOM updates
- Input field interaction
