# Practice 02: Understanding Prop Drilling Issues

## Objective
Learn about prop drilling problems in React applications by building a nested component structure where state needs to be shared across multiple levels.

## What is Prop Drilling?
Prop drilling occurs when you need to pass props through multiple layers of components, even when intermediate components don't need those props. This creates maintenance issues and makes code harder to understand.

## Task
Build a user management application with nested components that demonstrates prop drilling:

```
App (has user data & theme state)
  └── Dashboard (doesn't need user data, just passes it down)
      └── UserSection (doesn't need user data, just passes it down)
          └── ProfileCard (needs user data)
          └── SettingsPanel (needs user data + theme)
              └── ThemeToggle (needs theme state)
```

## Requirements
1. **App Component**: 
   - Manages user data state (name, email, role, preferences)
   - Manages theme state (light/dark)
   - Contains the entire component tree

2. **Dashboard Component**:
   - Wrapper component that doesn't use user data
   - Just passes props down to UserSection
   - Has its own layout and styling

3. **UserSection Component**:
   - Another wrapper that doesn't use user data directly
   - Passes props to ProfileCard and SettingsPanel
   - Shows the section title

4. **ProfileCard Component**:
   - Finally uses the user data to display profile info
   - Shows name, email, role

5. **SettingsPanel Component**:
   - Uses user data for personalization
   - Passes theme state to ThemeToggle
   - Has user preference controls

6. **ThemeToggle Component**:
   - Deep nested component that needs theme state
   - Toggles between light and dark themes

## Learning Goals
- Experience the pain of prop drilling
- Understand how props flow through component hierarchies
- See how intermediate components become cluttered with unused props
- Recognize when prop drilling becomes a problem

## Starter Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice 02: Prop Drilling Problems</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        .app-light {
            background-color: #ffffff;
            color: #333333;
            min-height: 100vh;
            transition: all 0.3s ease;
        }
        .app-dark {
            background-color: #1a1a1a;
            color: #ffffff;
            min-height: 100vh;
            transition: all 0.3s ease;
        }
        .dashboard {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .user-section {
            border: 2px solid #007bff;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .profile-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            margin: 10px 0;
            background-color: var(--card-bg);
        }
        .settings-panel {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            margin: 10px 0;
        }
        .theme-toggle {
            margin-top: 15px;
            padding: 10px;
            border: 2px dashed #ffc107;
            border-radius: 4px;
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
        .prop-path {
            font-size: 12px;
            color: #666;
            font-family: monospace;
            margin-bottom: 10px;
            padding: 4px;
            background-color: #f8f9fa;
            border-radius: 3px;
        }
        .dark .prop-path {
            background-color: #2d2d2d;
            color: #ccc;
        }
    </style>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        const { useState } = React;

        // Level 5: ThemeToggle (deeply nested, needs theme state)
        function ThemeToggle({ theme, onThemeChange }) {
            return (
                <div className="theme-toggle">
                    <div className="prop-path">
                        Props Path: App → Dashboard → UserSection → SettingsPanel → ThemeToggle
                    </div>
                    <h4>🎨 Theme Controls</h4>
                    <p>Current theme: <strong>{theme}</strong></p>
                    <button 
                        className="button"
                        onClick={onThemeChange}
                    >
                        Switch to {theme === 'light' ? 'dark' : 'light'} theme
                    </button>
                    <p><em>💡 This component is 4 levels deep but needs theme state from App!</em></p>
                </div>
            );
        }

        // Level 4: SettingsPanel (needs user data + theme)
        function SettingsPanel({ user, theme, onThemeChange, onUserUpdate }) {
            return (
                <div className="settings-panel">
                    <div className="prop-path">
                        Props Path: App → Dashboard → UserSection → SettingsPanel
                    </div>
                    <h3>⚙️ Settings for {user.name}</h3>
                    
                    <div>
                        <h4>User Preferences</h4>
                        <p>Email notifications: {user.preferences.emailNotifications ? '✅ On' : '❌ Off'}</p>
                        <button 
                            className="button"
                            onClick={() => onUserUpdate({
                                ...user,
                                preferences: {
                                    ...user.preferences,
                                    emailNotifications: !user.preferences.emailNotifications
                                }
                            })}
                        >
                            Toggle Email Notifications
                        </button>
                    </div>

                    {/* 🚨 PROP DRILLING ALERT: Passing theme props down again! */}
                    <ThemeToggle 
                        theme={theme}
                        onThemeChange={onThemeChange}
                    />
                </div>
            );
        }

        // Level 3: ProfileCard (finally uses user data)
        function ProfileCard({ user }) {
            return (
                <div className="profile-card">
                    <div className="prop-path">
                        Props Path: App → Dashboard → UserSection → ProfileCard
                    </div>
                    <h3>👤 User Profile</h3>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                    <p><em>💭 Finally! This component actually uses the user data.</em></p>
                </div>
            );
        }

        // Level 2: UserSection (doesn't need user data, just passes it down)
        function UserSection({ user, theme, onThemeChange, onUserUpdate }) {
            console.log('🔄 UserSection re-rendered (but why? It doesn\'t use these props!)');
            
            return (
                <div className="user-section">
                    <div className="prop-path">
                        Props Path: App → Dashboard → UserSection
                    </div>
                    <h2>📂 User Management Section</h2>
                    <p><em>🤔 This component doesn't need user data, but has to pass it down...</em></p>
                    
                    {/* 🚨 PROP DRILLING: Just passing props through */}
                    <ProfileCard user={user} />
                    
                    <SettingsPanel 
                        user={user}
                        theme={theme}
                        onThemeChange={onThemeChange}
                        onUserUpdate={onUserUpdate}
                    />
                </div>
            );
        }

        // Level 1: Dashboard (doesn't need user data, just passes it down)
        function Dashboard({ user, theme, onThemeChange, onUserUpdate }) {
            console.log('🔄 Dashboard re-rendered (but it doesn\'t even use these props!)');
            
            return (
                <div className="dashboard">
                    <div className="prop-path">
                        Props Path: App → Dashboard
                    </div>
                    <h1>🏢 Admin Dashboard</h1>
                    <p><em>😅 This is just a layout component, but look at all these props!</em></p>
                    
                    {/* 🚨 PROP DRILLING: Dashboard doesn't need these props but must pass them */}
                    <UserSection 
                        user={user}
                        theme={theme}
                        onThemeChange={onThemeChange}
                        onUserUpdate={onUserUpdate}
                    />
                </div>
            );
        }

        // Level 0: App (has the state, starts the prop drilling)
        function App() {
            const [user, setUser] = useState({
                name: 'Sarah Johnson',
                email: 'sarah@example.com',
                role: 'Administrator',
                preferences: {
                    emailNotifications: true,
                    darkMode: false
                }
            });

            const [theme, setTheme] = useState('light');

            const handleThemeChange = () => {
                setTheme(theme === 'light' ? 'dark' : 'light');
            };

            const handleUserUpdate = (updatedUser) => {
                setUser(updatedUser);
            };

            return (
                <div className={`app-${theme}`}>
                    <div style={{ padding: '20px', borderBottom: '2px solid #007bff' }}>
                        <h1>🚨 Prop Drilling Demonstration</h1>
                        <p><strong>Problem:</strong> User data and theme state need to travel through 4+ component levels!</p>
                        <p><strong>Issues:</strong></p>
                        <ul>
                            <li>❌ Intermediate components become cluttered with unused props</li>
                            <li>❌ Hard to maintain - changing props requires updating multiple files</li>
                            <li>❌ Components re-render unnecessarily when props change</li>
                            <li>❌ Component signatures become complex and confusing</li>
                        </ul>
                    </div>

                    {/* 🚨 PROP DRILLING STARTS HERE */}
                    <Dashboard 
                        user={user}
                        theme={theme}
                        onThemeChange={handleThemeChange}
                        onUserUpdate={handleUserUpdate}
                    />
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('app'));
        root.render(<App />);
    </script>
</body>
</html>
```

## Issues Demonstrated

### 1. **Unnecessary Prop Passing**
- `Dashboard` and `UserSection` don't use the props but must pass them down
- This makes their component signatures complex and confusing

### 2. **Maintenance Nightmare**
- Adding a new prop requires updating 4+ components
- Removing a prop requires checking every level
- Refactoring becomes error-prone

### 3. **Unnecessary Re-renders**
- Check the console: intermediate components re-render when state changes
- Even though they don't use the props!

### 4. **Code Coupling**
- Components that shouldn't know about user data are now coupled to it
- Hard to reuse components in different contexts

## Your Tasks
1. **Observe the Issues**: 
   - Click buttons and watch console logs
   - See how many components re-render
   - Notice the complex prop signatures

2. **Try Adding a New Prop**:
   - Add a `lastLogin` field to user state
   - See how many files you need to modify to display it in ProfileCard

3. **Count the Problems**:
   - How many components handle props they don't use?
   - How many levels deep is the prop drilling?
   - What happens when you add more nested components?

## Discussion Questions
1. What happens if you need to add another deeply nested component that needs theme data?
2. How would you test `Dashboard` component in isolation when it has so many props?
3. What if `UserSection` was used in other parts of the app that don't have user data?
4. How does this affect code readability and developer experience?

## Next Steps
In the next practice, we'll learn how React Context API can solve these prop drilling issues! 🎯

## Key Takeaways
- Prop drilling makes code harder to maintain
- Intermediate components become cluttered
- Components become tightly coupled
- Alternative solutions (Context API, state management libraries) are needed for complex apps