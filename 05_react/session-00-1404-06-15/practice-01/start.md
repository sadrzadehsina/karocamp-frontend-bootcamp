# Practice 01: Basic Props

## Objective
Learn to pass and receive basic props in React components.

## Task
Create a `PersonCard` component that receives the following props:
- `name` (string)
- `age` (number)
- `city` (string)

## Requirements
1. Create a `PersonCard` component that accepts the three props mentioned above
2. Display the information in a card format with styling
3. Create at least 3 different `PersonCard` instances with different data
4. Use inline styles or style objects to make the cards visually appealing

## Expected Output
Each card should display:
```
Name: John Doe
Age: 25
City: New York
```

## Starter Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice 01: Basic Props</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        // Create your PersonCard component here
        function PersonCard(/* your props here */) {
            return (
                // Your JSX here
            );
        }

        function App() {
            return (
                <div style={{ padding: '20px' }}>
                    <h1>Person Cards</h1>
                    {/* Create 3 PersonCard instances here */}
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('app'));
        root.render(<App />);
    </script>
</body>
</html>
```

## Tips
- Remember to use curly braces `{}` to inject JavaScript expressions in JSX
- You can access props directly like `props.name` or use destructuring `{name, age, city}`
- Try both approaches to understand the difference
