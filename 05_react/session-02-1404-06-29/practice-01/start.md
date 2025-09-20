# Practice 01: useState Basics - Interactive Counter & Toggle

## Objective
Learn the fundamentals of React state management using the `useState` hook to create interactive components.

## Task
Create an interactive component that demonstrates basic state operations:
1. A counter that can increment and decrement
2. A toggle button for show/hide functionality
3. A text input that updates state on change

## Requirements
1. **Counter Component**: 
   - Display a number starting at 0
   - Add increment (+) and decrement (-) buttons
   - Add a reset button to set counter back to 0

2. **Toggle Component**:
   - Button that toggles between "Show" and "Hide"
   - Display/hide a message based on toggle state
   - Change button text based on current state

3. **Text Input Component**:
   - Input field that updates state on every keystroke
   - Display the current input value below the input
   - Show character count
   - Add a clear button

## Learning Goals
- Understanding `useState` hook syntax
- State initialization with different data types (number, boolean, string)
- State updates and re-rendering
- Event handling with state changes
- Functional state updates

## Starter Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice 01: useState Basics</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px; 
        }
        .component-section {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            background-color: #f9f9f9;
        }
        .button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 8px 16px;
            margin: 4px;
            border-radius: 4px;
            cursor: pointer;
        }
        .button:hover {
            background-color: #0056b3;
        }
        .button.secondary {
            background-color: #6c757d;
        }
        .button.danger {
            background-color: #dc3545;
        }
        .input-field {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin: 4px;
        }
        .display-text {
            margin: 10px 0;
            padding: 10px;
            background-color: #e9ecef;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        // Import useState from React
        const { useState } = React;

        // 1. Counter Component
        function Counter() {
            // TODO: Add state for counter value (start with 0)
            
            // TODO: Create functions for increment, decrement, and reset
            
            return (
                <div className="component-section">
                    <h3>Counter Component</h3>
                    <div className="display-text">
                        <strong>Count: {/* Display counter value here */}</strong>
                    </div>
                    <div>
                        <button 
                            className="button"
                            onClick={/* Add increment function */}
                        >
                            + Increment
                        </button>
                        <button 
                            className="button secondary"
                            onClick={/* Add decrement function */}
                        >
                            - Decrement
                        </button>
                        <button 
                            className="button danger"
                            onClick={/* Add reset function */}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            );
        }

        // 2. Toggle Component
        function Toggle() {
            // TODO: Add state for toggle (start with false)
            
            // TODO: Create function to toggle state
            
            return (
                <div className="component-section">
                    <h3>Toggle Component</h3>
                    <button 
                        className="button"
                        onClick={/* Add toggle function */}
                    >
                        {/* Display "Show" or "Hide" based on state */}
                    </button>
                    
                    {/* TODO: Conditionally render message based on state */}
                    {/* Use: isVisible && <div>...</div> */}
                </div>
            );
        }

        // 3. Text Input Component
        function TextInput() {
            // TODO: Add state for text input (start with empty string)
            
            // TODO: Create function to handle input changes
            
            // TODO: Create function to clear input
            
            return (
                <div className="component-section">
                    <h3>Text Input Component</h3>
                    <div>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Type something..."
                            value={/* Bind to state */}
                            onChange={/* Add change handler */}
                        />
                        <button 
                            className="button danger"
                            onClick={/* Add clear function */}
                        >
                            Clear
                        </button>
                    </div>
                    
                    <div className="display-text">
                        <p><strong>Current text:</strong> {/* Display current text */}</p>
                        <p><strong>Character count:</strong> {/* Display text length */}</p>
                    </div>
                </div>
            );
        }

        // Main App Component
        function App() {
            return (
                <div>
                    <h1>React useState Practice</h1>
                    <p>Learn state management by completing the three components below:</p>
                    
                    <Counter />
                    <Toggle />
                    <TextInput />
                </div>
            );
        }

        // Render the app
        const root = ReactDOM.createRoot(document.getElementById('app'));
        root.render(<App />);
    </script>
</body>
</html>
```

## Implementation Steps
1. **Start with Counter**:
   - Add `const [count, setCount] = useState(0);`
   - Create increment: `() => setCount(count + 1)`
   - Create decrement: `() => setCount(count - 1)`
   - Create reset: `() => setCount(0)`

2. **Continue with Toggle**:
   - Add `const [isVisible, setIsVisible] = useState(false);`
   - Create toggle: `() => setIsVisible(!isVisible)`
   - Use conditional rendering for the message

3. **Finish with TextInput**:
   - Add `const [text, setText] = useState('');`
   - Handle input change: `(e) => setText(e.target.value)`
   - Clear function: `() => setText('')`

## Expected Behavior
- **Counter**: Buttons should increase/decrease the number and reset it to 0
- **Toggle**: Button should switch between "Show"/"Hide" and display/hide a message
- **TextInput**: Typing should update the display in real-time with character count

## Challenges (Optional)
1. Add a step size option to the counter (increment/decrement by 2, 5, etc.)
2. Add validation to prevent counter from going below 0
3. Add a maximum character limit to the text input
4. Style the components to make them look more polished

## Key Concepts to Learn
- `useState` hook syntax and usage
- State initialization with different data types
- Event handlers and state updates
- Conditional rendering with state
- Controlled components (input with value/onChange)