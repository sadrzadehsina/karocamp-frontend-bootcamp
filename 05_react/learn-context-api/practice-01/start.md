# Practice 04: Context API Basics - Theme Provider

## Objective
Learn the fundamentals of React Context API by creating a theme system that solves prop drilling issues.

## What is Context API?
Context API is React's built-in solution for sharing data across multiple components without prop drilling. It's perfect for global data like themes, user authentication, or language preferences.

## Real-World Scenario
You're building a website that needs light/dark theme switching. The theme needs to be accessed by components at different nesting levels without passing props through every component.

## Task
Create a theme system using Context API:
1. **ThemeContext**: Stores theme state and toggle function
2. **ThemeProvider**: Wraps the app and provides theme context
3. **Components**: Use theme context without prop drilling

## Learning Goals
- Understand Context API concepts (Provider, Consumer, useContext)
- Learn how to create and use custom contexts
- See how Context API solves prop drilling
- Practice real-world theme switching implementation

## Starter Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice 04: Context API - Theme Provider</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        .app-light {
            background-color: #ffffff;
            color: #333333;
            min-height: 100vh;
            transition: all 0.3s ease;
            font-family: Arial, sans-serif;
        }
        .app-dark {
            background-color: #1a1a1a;
            color: #ffffff;
            min-height: 100vh;
            transition: all 0.3s ease;
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            padding: 20px;
            border-bottom: 2px solid;
            margin-bottom: 30px;
        }
        .app-light .header {
            border-color: #007bff;
            background-color: #f8f9fa;
        }
        .app-dark .header {
            border-color: #ffc107;
            background-color: #2d2d2d;
        }
        .card {
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            border: 1px solid;
        }
        .app-light .card {
            background-color: #f8f9fa;
            border-color: #dee2e6;
        }
        .app-dark .card {
            background-color: #2d2d2d;
            border-color: #495057;
        }
        .theme-toggle {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }
        .theme-toggle:hover {
            background-color: #0056b3;
        }
        .app-dark .theme-toggle {
            background-color: #ffc107;
            color: #000;
        }
        .app-dark .theme-toggle:hover {
            background-color: #e0a800;
        }
        .context-info {
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
            font-family: monospace;
            font-size: 14px;
        }
        .app-light .context-info {
            background-color: #e3f2fd;
            border: 1px solid #1976d2;
        }
        .app-dark .context-info {
            background-color: #263238;
            border: 1px solid #607d8b;
        }
    </style>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        const { useState, createContext, useContext } = React;

        // Step 1: Create Theme Context
        // TODO: Create ThemeContext using createContext()
        const ThemeContext = createContext();

        // Step 2: Create Theme Provider Component
        function ThemeProvider({ children }) {
            // TODO: Add state for current theme (start with 'light')
            const [theme, setTheme] = useState('light');

            // TODO: Create toggle function
            const toggleTheme = () => {
                setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
            };

            // TODO: Create context value object
            const contextValue = {
                theme,
                toggleTheme
            };

            // TODO: Return ThemeContext.Provider with value and children
            return (
                <ThemeContext.Provider value={contextValue}>
                    {children}
                </ThemeContext.Provider>
            );
        }

        // Step 3: Create custom hook for easier context usage
        function useTheme() {
            // TODO: Use useContext to get theme context
            const context = useContext(ThemeContext);
            
            // TODO: Add error handling for context usage outside provider
            if (!context) {
                throw new Error('useTheme must be used within a ThemeProvider');
            }
            
            return context;
        }

        // Components that use theme context
        function Header() {
            // TODO: Use useTheme hook to get theme and toggleTheme
            const { theme, toggleTheme } = useTheme();

            return (
                <div className="header">
                    <h1>🎨 Theme Context Demo</h1>
                    <p>Current theme: <strong>{theme}</strong></p>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                    </button>
                    
                    <div className="context-info">
                        💡 This component gets theme data from Context API, no props needed!
                    </div>
                </div>
            );
        }

        function WelcomeCard() {
            // TODO: Use useTheme hook to get theme
            const { theme } = useTheme();

            return (
                <div className="card">
                    <h2>Welcome to Our App!</h2>
                    <p>
                        This card component also uses the theme context to style itself 
                        according to the current theme setting.
                    </p>
                    <p>
                        <strong>Current theme:</strong> {theme}
                    </p>
                    
                    <div className="context-info">
                        🚀 No prop drilling needed! This component is deeply nested but 
                        can access theme context directly.
                    </div>
                </div>
            );
        }

        function UserProfile() {
            // TODO: Use useTheme hook to get theme
            const { theme } = useTheme();

            return (
                <div className="card">
                    <h3>👤 User Profile</h3>
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Email:</strong> john@example.com</p>
                    <p><strong>Theme Preference:</strong> {theme}</p>
                    
                    <div className="context-info">
                        ✨ Another component accessing theme context without props!
                    </div>
                </div>
            );
        }

        function NestedComponent() {
            return (
                <div className="card">
                    <h3>📦 Nested Component</h3>
                    <p>This component contains other components that need theme data.</p>
                    
                    {/* Deeply nested component */}
                    <DeeplyNestedComponent />
                </div>
            );
        }

        function DeeplyNestedComponent() {
            // TODO: Use useTheme hook even in deeply nested component
            const { theme, toggleTheme } = useTheme();

            return (
                <div style={{ 
                    padding: '15px', 
                    margin: '10px 0',
                    border: `2px dashed ${theme === 'light' ? '#007bff' : '#ffc107'}`,
                    borderRadius: '6px'
                }}>
                    <h4>🔗 Deeply Nested Component</h4>
                    <p>
                        I'm nested several levels deep, but I can still access 
                        the theme context directly!
                    </p>
                    <p><strong>Theme:</strong> {theme}</p>
                    
                    <button 
                        className="theme-toggle" 
                        onClick={toggleTheme}
                        style={{ fontSize: '14px', padding: '8px 16px' }}
                    >
                        Toggle from deep component
                    </button>
                    
                    <div className="context-info">
                        🎯 Compare this to prop drilling - no intermediate components 
                        needed to pass theme data down!
                    </div>
                </div>
            );
        }

        function ContextVisualization() {
            const { theme } = useTheme();
            
            return (
                <div className="card">
                    <h3>🔍 Context Visualization</h3>
                    <p>Here's how Context API works:</p>
                    
                    <div className="context-info">
                        <strong>Context Flow:</strong><br/>
                        1. ThemeProvider creates context with theme state<br/>
                        2. All child components can access context with useContext<br/>
                        3. No prop drilling through intermediate components<br/>
                        4. Theme updates automatically re-render consuming components
                    </div>
                    
                    <h4>Benefits over Prop Drilling:</h4>
                    <ul>
                        <li>✅ No props in intermediate components</li>
                        <li>✅ Cleaner component interfaces</li>
                        <li>✅ Easier to add new consuming components</li>
                        <li>✅ Better separation of concerns</li>
                        <li>✅ Global state management</li>
                    </ul>
                </div>
            );
        }

        // Main App Component
        function App() {
            return (
                // TODO: Wrap app with ThemeProvider
                <ThemeProvider>
                    <AppContent />
                </ThemeProvider>
            );
        }

        function AppContent() {
            // TODO: Use useTheme hook to get theme for styling
            const { theme } = useTheme();

            return (
                <div className={`app-${theme}`}>
                    <div className="container">
                        <Header />
                        <WelcomeCard />
                        <UserProfile />
                        <NestedComponent />
                        <ContextVisualization />
                    </div>
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('app'));
        root.render(<App />);
    </script>
</body>
</html>
```

## Implementation Steps

### Step 1: Create Context
```javascript
const ThemeContext = createContext();
```

### Step 2: Create Provider
```javascript
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
```

### Step 3: Use Context in Components
```javascript
function MyComponent() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    // Use theme data...
}
```

## Your Tasks

1. **Complete the TODOs**: Fill in the missing Context API code
2. **Test the Theme Toggle**: Click buttons to switch themes
3. **Observe the Benefits**: Notice how all components update without prop drilling
4. **Experiment**: Try adding a new component that uses theme context

## Key Concepts to Learn

- **createContext()**: Creates a new context
- **Provider**: Supplies context value to child components
- **useContext()**: Hook to consume context in functional components
- **Custom Hook**: Create reusable hook for context consumption
- **Context Value**: Object containing state and functions to share

## Common Patterns

1. **Error Boundaries**: Always check if context is used within provider
2. **Custom Hooks**: Create `useTheme()` for easier context consumption
3. **Value Object**: Group related state and functions in context value
4. **Provider Wrapper**: Separate AppContent from Provider for cleaner structure

## What You'll Learn

- How Context API eliminates prop drilling
- When to use Context vs props
- Best practices for context structure
- How to create reusable context providers

This practice provides a solid foundation for understanding Context API with a practical, real-world example!