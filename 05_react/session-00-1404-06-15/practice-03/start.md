# Practice 03: Spread Operator with Props

## Objective
Master the spread operator (`...`) for passing props efficiently.

## Task
Create a user management system that demonstrates different ways to pass props using the spread operator.

## Requirements
1. Create a `UserProfile` component that accepts:
   - `id` (number)
   - `name` (string)
   - `email` (string)
   - `avatar` (string, URL)
   - `role` (string)
   - `isActive` (boolean)

2. Create a `UserList` component that:
   - Receives an array of user objects
   - Maps through users and renders `UserProfile` components
   - Uses spread operator to pass all user properties as props

3. Demonstrate three different ways to pass props:
   - Individual prop passing: `<UserProfile name={user.name} email={user.email} .../>`
   - Object prop passing: `<UserProfile user={user} />`
   - Spread operator: `<UserProfile {...user} />`

## Starter Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice 03: Spread Operator with Props</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        // Sample user data
        const users = [
            {
                id: 1,
                name: "Alice Johnson",
                email: "alice@example.com",
                avatar: "https://via.placeholder.com/100x100?text=A",
                role: "Admin",
                isActive: true
            },
            {
                id: 2,
                name: "Bob Smith",
                email: "bob@example.com",
                avatar: "https://via.placeholder.com/100x100?text=B",
                role: "User",
                isActive: false
            },
            {
                id: 3,
                name: "Carol Williams",
                email: "carol@example.com",
                avatar: "https://via.placeholder.com/100x100?text=C",
                role: "Moderator",
                isActive: true
            }
        ];

        // Method 1: Individual props
        function UserProfileMethod1({ name, email, avatar, role, isActive }) {
            return (
                <div style={{
                    border: '2px solid #007bff',
                    borderRadius: '10px',
                    padding: '15px',
                    margin: '10px',
                    backgroundColor: isActive ? '#f0f8ff' : '#f5f5f5'
                }}>
                    <h3>Method 1: Individual Props</h3>
                    {/* Implement user profile display */}
                </div>
            );
        }

        // Method 2: Object prop
        function UserProfileMethod2({ user }) {
            return (
                <div style={{
                    border: '2px solid #28a745',
                    borderRadius: '10px',
                    padding: '15px',
                    margin: '10px',
                    backgroundColor: user.isActive ? '#f0fff0' : '#f5f5f5'
                }}>
                    <h3>Method 2: Object Prop</h3>
                    {/* Implement user profile display using user.property */}
                </div>
            );
        }

        // Method 3: Spread operator
        function UserProfileMethod3({ id, name, email, avatar, role, isActive }) {
            return (
                <div style={{
                    border: '2px solid #dc3545',
                    borderRadius: '10px',
                    padding: '15px',
                    margin: '10px',
                    backgroundColor: isActive ? '#fff0f0' : '#f5f5f5'
                }}>
                    <h3>Method 3: Spread Operator</h3>
                    {/* Implement user profile display */}
                </div>
            );
        }

        function App() {
            return (
                <div style={{ padding: '20px' }}>
                    <h1>User Management - Props Passing Methods</h1>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {/* Method 1: Map and pass individual props */}
                        {users.map(user => (
                            <UserProfileMethod1 
                                key={`method1-${user.id}`}
                                // Pass individual props here
                            />
                        ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {/* Method 2: Map and pass entire user object */}
                        {users.map(user => (
                            <UserProfileMethod2 
                                key={`method2-${user.id}`}
                                // Pass user object here
                            />
                        ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {/* Method 3: Map and use spread operator */}
                        {users.map(user => (
                            <UserProfileMethod3 
                                key={`method3-${user.id}`}
                                // Use spread operator here
                            />
                        ))}
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

## Learning Goals
- Understanding different ways to pass props
- Mastering the spread operator (`...`) syntax
- Comparing pros and cons of each method
- Working with arrays of objects

## Discussion Points
After completing this exercise, think about:
1. Which method is most readable?
2. Which method is most maintainable?
3. When would you use each approach?
