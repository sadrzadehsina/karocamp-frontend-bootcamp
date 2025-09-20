# Practice 04: Conditional Rendering with Props

## Objective
Learn to use props for conditional rendering and dynamic content display.

## Task
Create a notification system that renders different types of notifications based on props.

## Requirements
1. Create a `Notification` component that accepts:
   - `type` (string: "success", "warning", "error", "info")
   - `message` (string)
   - `title` (string, optional)
   - `showIcon` (boolean, default: true)
   - `dismissible` (boolean, default: false)
   - `autoHide` (boolean, default: false)

2. Implement conditional rendering for:
   - Different colors and icons based on notification type
   - Optional title display
   - Optional dismiss button
   - Different styling for auto-hide notifications

3. Create a notification list showing all types

## Expected Features
- Different background colors for each type
- Icons that match the notification type (use text icons like ✓, ⚠, ✗, ℹ)
- Conditional title display
- Optional close button (×)
- Different border styles for auto-hide notifications

## Starter Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice 04: Conditional Rendering with Props</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        function Notification({ 
            type, 
            message, 
            title = null, 
            showIcon = true, 
            dismissible = false, 
            autoHide = false 
        }) {
            // Define notification styles and icons based on type
            const notificationStyles = {
                success: {
                    backgroundColor: '#d4edda',
                    borderColor: '#c3e6cb',
                    color: '#155724',
                    icon: '✓'
                },
                warning: {
                    backgroundColor: '#fff3cd',
                    borderColor: '#ffeaa7',
                    color: '#856404',
                    icon: '⚠'
                },
                error: {
                    backgroundColor: '#f8d7da',
                    borderColor: '#f5c6cb',
                    color: '#721c24',
                    icon: '✗'
                },
                info: {
                    backgroundColor: '#d1ecf1',
                    borderColor: '#bee5eb',
                    color: '#0c5460',
                    icon: 'ℹ'
                }
            };

            // Get current notification style
            const currentStyle = notificationStyles[type] || notificationStyles.info;

            // Base notification style
            const baseStyle = {
                border: `1px solid ${currentStyle.borderColor}`,
                borderRadius: '4px',
                padding: '12px 16px',
                margin: '8px 0',
                backgroundColor: currentStyle.backgroundColor,
                color: currentStyle.color,
                position: 'relative',
                borderLeft: autoHide ? `4px solid ${currentStyle.borderColor}` : undefined
            };

            return (
                <div style={baseStyle}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            {/* Conditionally render icon */}
                            {showIcon && (
                                <span style={{ marginRight: '8px', fontSize: '16px' }}>
                                    {currentStyle.icon}
                                </span>
                            )}
                            
                            <div>
                                {/* Conditionally render title */}
                                {title && (
                                    <div style={{ 
                                        fontWeight: 'bold', 
                                        marginBottom: '4px',
                                        fontSize: '14px'
                                    }}>
                                        {/* Render title here */}
                                    </div>
                                )}
                                
                                <div style={{ fontSize: '14px' }}>
                                    {/* Render message here */}
                                </div>
                            </div>
                        </div>

                        {/* Conditionally render dismiss button */}
                        {dismissible && (
                            <button 
                                style={{ 
                                    background: 'none', 
                                    border: 'none', 
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    color: currentStyle.color,
                                    padding: '0',
                                    marginLeft: '8px'
                                }}
                                onClick={() => alert('Notification dismissed!')}
                            >
                                ×
                            </button>
                        )}
                    </div>
                    
                    {/* Conditionally show auto-hide indicator */}
                    {autoHide && (
                        <div style={{ 
                            fontSize: '11px', 
                            marginTop: '4px', 
                            opacity: 0.7,
                            fontStyle: 'italic'
                        }}>
                            {/* Show auto-hide message */}
                        </div>
                    )}
                </div>
            );
        }

        function App() {
            const notifications = [
                {
                    type: "success",
                    title: "Success!",
                    message: "Your changes have been saved successfully.",
                    dismissible: true
                },
                {
                    type: "warning",
                    message: "Please check your internet connection.",
                    showIcon: true,
                    autoHide: true
                },
                {
                    type: "error",
                    title: "Error",
                    message: "Failed to upload file. Please try again.",
                    dismissible: true,
                    showIcon: true
                },
                {
                    type: "info",
                    message: "New features are available in the latest update.",
                    autoHide: true
                },
                {
                    type: "success",
                    message: "Operation completed without any title.",
                    showIcon: false,
                    dismissible: true
                }
            ];

            return (
                <div style={{ 
                    padding: '20px', 
                    maxWidth: '600px', 
                    margin: '0 auto',
                    fontFamily: 'Arial, sans-serif'
                }}>
                    <h1>Notification System</h1>
                    <p>Different notification types with conditional rendering:</p>
                    
                    {/* Render all notifications */}
                    {notifications.map((notification, index) => (
                        <Notification 
                            key={index}
                            {...notification}
                        />
                    ))}
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('app'));
        root.render(<App />);
    </script>
</body>
</html>
```

## Your Tasks
1. Complete the conditional rendering for the title
2. Render the message properly
3. Add the auto-hide indicator text
4. Test with different prop combinations

## Learning Goals
- Using props for conditional rendering with `&&` operator
- Using ternary operator for conditional values
- Setting up default prop values
- Creating reusable components with flexible behavior

## Challenge
Add a `size` prop with values "small", "medium", "large" that changes the notification's padding and font size!
