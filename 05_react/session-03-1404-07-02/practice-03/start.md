# Practice 03: Object State vs Primitive State - User Profile Form

## Objective
Learn the benefits of using objects as state instead of multiple primitive state variables when managing related data.

## Problem Statement
When building forms or managing related data, you might be tempted to create separate state variables for each field. This practice will show you why using an object state is often better.

## Task
Build a user profile form in two different ways to compare approaches:
1. **Bad Approach**: Using separate primitive state variables for each form field
2. **Good Approach**: Using a single object state to manage all related data

## Benefits of Object State
- **Related data stays together**: Logical grouping of related information
- **Easier to pass around**: Single object vs multiple variables
- **Simpler updates**: One setState call vs multiple
- **Better for forms**: Natural fit for form data structure
- **Less re-renders**: Updating object properties efficiently
- **Easier validation**: Validate entire object at once

## Starter Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice 03: Object State vs Primitive State</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 20px; 
            background-color: #f5f5f5;
        }
        .comparison-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
        }
        .approach-section {
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .bad-approach {
            border-left: 4px solid #dc3545;
        }
        .good-approach {
            border-left: 4px solid #28a745;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .form-group input, .form-group select, .form-group textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
        }
        .button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 10px;
        }
        .button:hover {
            background-color: #0056b3;
        }
        .button.danger {
            background-color: #dc3545;
        }
        .button.success {
            background-color: #28a745;
        }
        .preview-card {
            margin-top: 20px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 4px;
            border: 1px solid #dee2e6;
        }
        .state-display {
            margin-top: 15px;
            padding: 10px;
            background-color: #e9ecef;
            border-radius: 4px;
            font-family: monospace;
            font-size: 12px;
            max-height: 200px;
            overflow-y: auto;
        }
        .pros-cons {
            margin-top: 15px;
            padding: 10px;
            border-radius: 4px;
        }
        .pros {
            background-color: #d4edda;
            border: 1px solid #c3e6cb;
        }
        .cons {
            background-color: #f8d7da;
            border: 1px solid #f5c6cb;
        }
    </style>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        const { useState } = React;

        // 🚨 BAD APPROACH: Multiple primitive state variables
        function BadApproach() {
            // TODO: Create separate state variables for each field
            const [firstName, setFirstName] = useState('');
            const [lastName, setLastName] = useState('');
            const [email, setEmail] = useState('');
            const [age, setAge] = useState('');
            const [city, setCity] = useState('');
            const [country, setCountry] = useState('');
            const [bio, setBio] = useState('');
            const [occupation, setOccupation] = useState('');

            // Reset function - notice how many setters we need!
            const handleReset = () => {
                setFirstName('');
                setLastName('');
                setEmail('');
                setAge('');
                setCity('');
                setCountry('');
                setBio('');
                setOccupation('');
            };

            // Submit function - notice how many variables we need to handle
            const handleSubmit = () => {
                const userData = {
                    firstName,
                    lastName,
                    email,
                    age,
                    city,
                    country,
                    bio,
                    occupation
                };
                console.log('Bad Approach - Submitted data:', userData);
                alert('Check console for submitted data');
            };

            return (
                <div className="approach-section bad-approach">
                    <h2>❌ Bad Approach: Multiple Primitive States</h2>
                    
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter first name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter last name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Age:</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Enter age"
                        />
                    </div>

                    <div className="form-group">
                        <label>City:</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter city"
                        />
                    </div>

                    <div className="form-group">
                        <label>Country:</label>
                        <select value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option value="">Select country</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">UK</option>
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Occupation:</label>
                        <input
                            type="text"
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                            placeholder="Enter occupation"
                        />
                    </div>

                    <div className="form-group">
                        <label>Bio:</label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Tell us about yourself..."
                            rows="3"
                        />
                    </div>

                    <button className="button danger" onClick={handleReset}>
                        Reset Form
                    </button>
                    <button className="button" onClick={handleSubmit}>
                        Submit
                    </button>

                    <div className="preview-card">
                        <h4>Preview:</h4>
                        <p><strong>Name:</strong> {firstName} {lastName}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Age:</strong> {age}</p>
                        <p><strong>Location:</strong> {city}, {country}</p>
                        <p><strong>Occupation:</strong> {occupation}</p>
                        <p><strong>Bio:</strong> {bio}</p>
                    </div>

                    <div className="state-display">
                        <strong>Current State Variables:</strong><br/>
                        firstName: "{firstName}"<br/>
                        lastName: "{lastName}"<br/>
                        email: "{email}"<br/>
                        age: "{age}"<br/>
                        city: "{city}"<br/>
                        country: "{country}"<br/>
                        occupation: "{occupation}"<br/>
                        bio: "{bio}"
                    </div>

                    <div className="pros-cons cons">
                        <h4>❌ Problems with this approach:</h4>
                        <ul>
                            <li>8 separate state variables to manage</li>
                            <li>8 separate setter functions</li>
                            <li>Reset function requires 8 function calls</li>
                            <li>Hard to pass data to other components</li>
                            <li>Validation becomes complex</li>
                            <li>Code becomes verbose and repetitive</li>
                        </ul>
                    </div>
                </div>
            );
        }

        // ✅ GOOD APPROACH: Single object state
        function GoodApproach() {
            // TODO: Create a single state object for all related data
            const [user, setUser] = useState({
                firstName: '',
                lastName: '',
                email: '',
                age: '',
                city: '',
                country: '',
                bio: '',
                occupation: ''
            });

            // Generic handler for all form fields
            const handleInputChange = (field, value) => {
                setUser(prevUser => ({
                    ...prevUser,
                    [field]: value
                }));
            };

            // Reset function - single call!
            const handleReset = () => {
                setUser({
                    firstName: '',
                    lastName: '',
                    email: '',
                    age: '',
                    city: '',
                    country: '',
                    bio: '',
                    occupation: ''
                });
            };

            // Submit function - clean and simple
            const handleSubmit = () => {
                console.log('Good Approach - Submitted data:', user);
                alert('Check console for submitted data');
            };

            // Validation function - easy with object state
            const isFormValid = () => {
                return user.firstName.trim() && 
                       user.lastName.trim() && 
                       user.email.trim() && 
                       user.age;
            };

            // Load sample data function
            const loadSampleData = () => {
                setUser({
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    age: '28',
                    city: 'New York',
                    country: 'USA',
                    bio: 'Software developer passionate about React and modern web technologies.',
                    occupation: 'Software Engineer'
                });
            };

            return (
                <div className="approach-section good-approach">
                    <h2>✅ Good Approach: Single Object State</h2>
                    
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            value={user.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder="Enter first name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            value={user.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Enter last name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={user.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Age:</label>
                        <input
                            type="number"
                            value={user.age}
                            onChange={(e) => handleInputChange('age', e.target.value)}
                            placeholder="Enter age"
                        />
                    </div>

                    <div className="form-group">
                        <label>City:</label>
                        <input
                            type="text"
                            value={user.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            placeholder="Enter city"
                        />
                    </div>

                    <div className="form-group">
                        <label>Country:</label>
                        <select 
                            value={user.country} 
                            onChange={(e) => handleInputChange('country', e.target.value)}
                        >
                            <option value="">Select country</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">UK</option>
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Occupation:</label>
                        <input
                            type="text"
                            value={user.occupation}
                            onChange={(e) => handleInputChange('occupation', e.target.value)}
                            placeholder="Enter occupation"
                        />
                    </div>

                    <div className="form-group">
                        <label>Bio:</label>
                        <textarea
                            value={user.bio}
                            onChange={(e) => handleInputChange('bio', e.target.value)}
                            placeholder="Tell us about yourself..."
                            rows="3"
                        />
                    </div>

                    <button className="button danger" onClick={handleReset}>
                        Reset Form
                    </button>
                    <button className="button success" onClick={loadSampleData}>
                        Load Sample
                    </button>
                    <button 
                        className="button" 
                        onClick={handleSubmit}
                        disabled={!isFormValid()}
                        style={{ 
                            opacity: isFormValid() ? 1 : 0.6,
                            cursor: isFormValid() ? 'pointer' : 'not-allowed'
                        }}
                    >
                        Submit
                    </button>

                    <div className="preview-card">
                        <h4>Preview:</h4>
                        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Age:</strong> {user.age}</p>
                        <p><strong>Location:</strong> {user.city}, {user.country}</p>
                        <p><strong>Occupation:</strong> {user.occupation}</p>
                        <p><strong>Bio:</strong> {user.bio}</p>
                    </div>

                    <div className="state-display">
                        <strong>Current State Object:</strong><br/>
                        {JSON.stringify(user, null, 2)}
                    </div>

                    <div className="pros-cons pros">
                        <h4>✅ Benefits of this approach:</h4>
                        <ul>
                            <li>Single state object - easier to manage</li>
                            <li>Generic input handler - less repetition</li>
                            <li>Easy to reset with one function call</li>
                            <li>Simple to pass entire user object to other components</li>
                            <li>Easy validation of entire form</li>
                            <li>Can easily add/remove fields</li>
                            <li>Better for APIs - matches JSON structure</li>
                        </ul>
                    </div>
                </div>
            );
        }

        // Main App Component
        function App() {
            return (
                <div>
                    <h1>Object State vs Primitive State Comparison</h1>
                    <p>
                        This practice demonstrates why using object state is often better than 
                        multiple primitive state variables when managing related data.
                    </p>

                    <div className="comparison-container">
                        <BadApproach />
                        <GoodApproach />
                    </div>

                    <div style={{ 
                        marginTop: '30px', 
                        padding: '20px', 
                        backgroundColor: '#e9ecef', 
                        borderRadius: '8px' 
                    }}>
                        <h3>🎯 Key Takeaways</h3>
                        <ul>
                            <li><strong>Logical Grouping:</strong> Related data belongs together in an object</li>
                            <li><strong>Easier Updates:</strong> Use spread operator to update object properties</li>
                            <li><strong>Better Performance:</strong> Fewer state variables = fewer potential re-renders</li>
                            <li><strong>Simpler Code:</strong> Generic handlers work with dynamic property names</li>
                            <li><strong>API Ready:</strong> Object state matches JSON structure for API calls</li>
                            <li><strong>Validation:</strong> Easier to validate entire form at once</li>
                        </ul>
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

## Your Tasks

### 1. Compare the Approaches
- Fill out both forms and observe the differences
- Check the state displays to see how data is stored
- Notice the code complexity differences

### 2. Experiment with Updates
- Try the "Load Sample" button in the good approach
- Compare how reset functions work in both approaches
- See how validation is implemented differently

### 3. Add New Fields
- Try adding a "Phone Number" field to both approaches
- Count how many places you need to modify in each approach
- Notice which approach is more maintainable

## Discussion Questions

1. **Maintainability**: Which approach would be easier to maintain in a large application?

2. **Reusability**: Which approach makes it easier to pass user data to other components?

3. **Performance**: Which approach might have better performance characteristics?

4. **API Integration**: Which approach works better with REST APIs that expect JSON objects?

5. **Validation**: Which approach makes form validation easier to implement?

## When to Use Each Approach

### Use Primitive State When:
- Values are completely unrelated
- You need very fine-grained control over re-renders
- Working with simple toggles or counters

### Use Object State When:
- Managing form data
- Related properties that change together  
- Data that represents a real-world entity
- Preparing data for API calls
- Need to pass related data to child components

## Next Steps
Practice implementing object state updates with nested objects and arrays to handle more complex data structures!