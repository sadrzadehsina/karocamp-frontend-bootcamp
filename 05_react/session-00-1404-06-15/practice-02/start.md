# Practice 02: Props Destructuring & Default Values

## Objective
Learn to use destructuring with default values for props.

## Task
Create a `ProductCard` component that showcases different ways to handle props with destructuring and default values.

## Requirements
1. Create a `ProductCard` component with the following props:
   - `name` (string, required)
   - `price` (number, required)
   - `discount` (number, default: 0)
   - `currency` (string, default: "USD")
   - `inStock` (boolean, default: true)

2. Use destructuring to extract props
3. Implement default values for optional props
4. Show original price and discounted price when discount > 0
5. Display availability status
6. Create multiple product cards with different prop combinations

## Expected Features
- Show "On Sale!" badge when discount > 0
- Display "Out of Stock" when inStock is false
- Calculate and show discounted price
- Use different currencies

## Starter Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice 02: Props Destructuring & Default Values</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        // Create your ProductCard component here
        function ProductCard({ /* destructure props with defaults here */ }) {
            // Calculate discounted price
            const discountedPrice = // your calculation here
            
            return (
                <div style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '16px',
                    margin: '10px',
                    width: '250px',
                    display: 'inline-block'
                }}>
                    {/* Your JSX here */}
                </div>
            );
        }

        function App() {
            return (
                <div style={{ padding: '20px' }}>
                    <h1>Product Store</h1>
                    {/* Create different product cards:
                        1. Basic product (only name and price)
                        2. Product with discount
                        3. Product with different currency
                        4. Out of stock product
                        5. Product with all props
                    */}
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
- Understanding destructuring assignment in function parameters
- Setting default values for props
- Conditional rendering based on prop values
- Performing calculations with props
