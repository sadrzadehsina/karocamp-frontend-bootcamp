<!-- markdownlint-disable -->

# Practice 06: Build a Dynamic User Greeting System

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Creating functions with different parameter patterns
- Understanding function scope and variable accessibility
- Working with default parameters and rest parameters
- Using template literals within functions
- Creating utility functions for common tasks
- Implementing function overloading patterns
- Building interactive user experiences with functions

## 📋 Exercise Description

Create a comprehensive user greeting system that can handle different types of user information and generate personalized greetings. This exercise will reinforce function concepts from Stage 4 while building practical, reusable components.

## 🔧 Requirements

### Basic Requirements:
1. Create a basic `greetUser(name)` function
2. Build an advanced greeting function with multiple parameters
3. Implement functions with default parameters
4. Create arrow functions for simple greeting utilities
5. Use template literals for dynamic message generation
6. Demonstrate function scope with greeting preferences

### Advanced Requirements:
1. Create functions that accept objects as parameters
2. Implement greeting functions for different times of day
3. Build a greeting history system
4. Create personalized greeting based on user preferences
5. Add multilingual greeting support
6. Implement greeting validation and error handling

## 💻 Example Code Structure

```javascript
// Global greeting preferences (demonstrate global scope)
const GREETING_PREFERENCES = {
    formal: "Good [timeOfDay], [title] [name]. Welcome to our system.",
    casual: "Hey [name]! How's it going?",
    business: "Hello [name], thank you for joining us today.",
    friendly: "Hi there, [name]! Great to see you! 😊"
};

let greetingHistory = [];

// Step 1: Basic greeting function (declaration)
function greetUser(name) {
    if (!name || name.trim() === '') {
        return "Hello there! Welcome!";
    }
    return `Hello, ${name}! Welcome!`;
}

// Step 2: Advanced greeting with multiple parameters
function greetUserAdvanced(name, timeOfDay = "day", style = "casual") {
    // Local scope variables
    const timestamp = new Date().toLocaleString();
    let greeting;
    
    // Your greeting logic here
    switch (style) {
        case 'formal':
            greeting = `Good ${timeOfDay}, ${name}. It is a pleasure to meet you.`;
            break;
        case 'casual':
            greeting = `Hey ${name}! Hope you're having a great ${timeOfDay}!`;
            break;
        case 'business':
            greeting = `Hello ${name}, welcome to our business platform.`;
            break;
        default:
            greeting = greetUser(name);
    }
    
    // Store in history (demonstrate scope access)
    greetingHistory.push({
        name: name,
        greeting: greeting,
        timestamp: timestamp,
        style: style
    });
    
    return greeting;
}

// Step 3: Arrow functions for utilities
const getCurrentTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 17) return "afternoon";
    if (hour < 21) return "evening";
    return "night";
};

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Step 4: Function with object parameter
const greetUserWithProfile = (userProfile) => {
    const { 
        firstName, 
        lastName = '', 
        title = '', 
        preferredName = firstName,
        language = 'english',
        greetingStyle = 'casual' 
    } = userProfile;
    
    const timeOfDay = getCurrentTimeOfDay();
    const displayName = preferredName || firstName;
    const fullName = title ? `${title} ${firstName} ${lastName}`.trim() : `${firstName} ${lastName}`.trim();
    
    // Your personalized greeting logic here
    return greetUserAdvanced(displayName, timeOfDay, greetingStyle);
};

// Step 5: Function with rest parameters
function greetMultipleUsers(...users) {
    const greetings = [];
    
    users.forEach(user => {
        if (typeof user === 'string') {
            greetings.push(greetUser(user));
        } else if (typeof user === 'object') {
            greetings.push(greetUserWithProfile(user));
        }
    });
    
    return greetings;
}

// Test your functions
console.log("Testing User Greeting System:");
console.log("============================");

// Your test calls here
const testUser1 = "John";
const testUser2 = {
    firstName: "Sarah",
    lastName: "Johnson",
    title: "Dr.",
    preferredName: "Sarah",
    greetingStyle: "formal"
};

console.log(greetUser(testUser1));
console.log(greetUserAdvanced("Alice", "morning", "formal"));
console.log(greetUserWithProfile(testUser2));
```

## ✅ Expected Output

```
Testing User Greeting System:
============================

Basic Greeting: Hello, John! Welcome!

Advanced Greeting: Good morning, Alice. It is a pleasure to meet you.

Profile Greeting: Good afternoon, Dr. Sarah Johnson. It is a pleasure to meet you.

Multiple Users:
- Hello, Mike! Welcome!
- Good afternoon, Emma. It is a pleasure to meet you.

Utility Functions:
- Current time: afternoon
- Capitalized: John Smith
- Greeting history: 3 entries

Scope Demonstration:
- Global preferences loaded: 4 styles
- Local timestamp generated: 2024-01-15 14:30:22
- History accessible: true
```

## 🎯 Challenge Tasks

1. **Multilingual Support**: Add greeting functions for different languages
2. **Time-Sensitive Greetings**: Create greetings that change based on holidays or special dates
3. **Greeting Analytics**: Build functions to analyze greeting patterns
4. **Custom Greeting Builder**: Create a function that builds custom greeting templates
5. **Voice-Style Greetings**: Implement different personality styles (cheerful, professional, etc.)

## 📝 Advanced Implementation Ideas

```javascript
// Multilingual greeting system
const MULTILINGUAL_GREETINGS = {
    english: {
        morning: "Good morning",
        afternoon: "Good afternoon", 
        evening: "Good evening",
        casual: "Hey there"
    },
    spanish: {
        morning: "Buenos días",
        afternoon: "Buenas tardes",
        evening: "Buenas noches", 
        casual: "¡Hola"
    },
    french: {
        morning: "Bonjour",
        afternoon: "Bon après-midi",
        evening: "Bonsoir",
        casual: "Salut"
    }
};

function greetInLanguage(name, language = 'english', timeOfDay = getCurrentTimeOfDay()) {
    const greetings = MULTILINGUAL_GREETINGS[language] || MULTILINGUAL_GREETINGS.english;
    const greeting = greetings[timeOfDay] || greetings.casual;
    return `${greeting}, ${name}!`;
}

// Greeting with mood/personality
const PERSONALITY_STYLES = {
    enthusiastic: (name) => `WOW! ${name}! SO EXCITED to see you! 🎉`,
    zen: (name) => `Welcome, ${name}. May your day be peaceful. 🧘`,
    professional: (name) => `Good day, ${name}. I trust you are well.`,
    friendly: (name) => `Hi ${name}! Hope you're doing awesome today! 😊`,
    mysterious: (name) => `Ah, ${name}... we meet again... 🕵️`
};

function greetWithPersonality(name, personality = 'friendly') {
    const greetingFunction = PERSONALITY_STYLES[personality] || PERSONALITY_STYLES.friendly;
    return greetingFunction(name);
}

// Dynamic greeting based on user activity
function greetReturningUser(userProfile) {
    const { name, lastVisit, visitCount, favoriteFeature } = userProfile;
    const daysSinceLastVisit = Math.floor((Date.now() - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
    
    if (visitCount === 1) {
        return `Welcome back, ${name}! Great to see you again!`;
    } else if (daysSinceLastVisit > 30) {
        return `${name}! It's been a while! Welcome back! We've missed you! 🎊`;
    } else if (daysSinceLastVisit > 7) {
        return `Hey ${name}! Welcome back! How have you been?`;
    } else {
        return `${name}! Good to see you again today!`;
    }
}

// Function composition for complex greetings
function createCustomGreeting(name, options = {}) {
    const {
        includeTime = true,
        includeWeather = false,
        personality = 'friendly',
        language = 'english',
        includeEmoji = true
    } = options;
    
    let parts = [];
    
    // Build greeting parts
    if (includeTime) {
        parts.push(greetInLanguage(name, language, getCurrentTimeOfDay()));
    } else {
        parts.push(greetInLanguage(name, language, 'casual'));
    }
    
    if (includeWeather) {
        parts.push("Hope the weather is treating you well!");
    }
    
    // Apply personality
    if (personality !== 'standard') {
        return greetWithPersonality(name, personality);
    }
    
    let greeting = parts.join(' ');
    
    if (includeEmoji) {
        greeting += ' 😊';
    }
    
    return greeting;
}

// Validation function
function validateUserName(name) {
    if (!name) {
        throw new Error('Name is required');
    }
    if (typeof name !== 'string') {
        throw new Error('Name must be a string');
    }
    if (name.trim().length === 0) {
        throw new Error('Name cannot be empty');
    }
    if (name.length > 50) {
        throw new Error('Name is too long');
    }
    return name.trim();
}

// Safe greeting function with error handling
function safeGreetUser(name, options = {}) {
    try {
        const validName = validateUserName(name);
        return createCustomGreeting(validName, options);
    } catch (error) {
        console.warn('Greeting error:', error.message);
        return "Hello there! Welcome!";
    }
}
```

## 🔍 Key Concepts to Practice

- Function parameters and default values
- Template literals for dynamic strings
- Function scope and closure
- Arrow functions vs regular functions
- Object destructuring in parameters
- Rest parameters (...args)
- Function composition
- Error handling in functions
- Higher-order functions

## 💡 Tips

- Use descriptive parameter names that explain what the function expects
- Provide sensible default values for optional parameters
- Consider using object parameters for functions with many options
- Template literals make string interpolation much cleaner than concatenation
- Remember that arrow functions don't have their own `this` binding
- Use rest parameters when you don't know how many arguments will be passed
- Always validate inputs, especially when functions will be used by others
- Consider returning objects when you need to return multiple related values

## 🧪 Test Scenarios

```javascript
// Comprehensive test suite
const testScenarios = [
    {
        description: "Basic greeting with valid name",
        test: () => greetUser("Alice"),
        expected: "Hello, Alice! Welcome!"
    },
    {
        description: "Greeting with empty name",
        test: () => greetUser(""),
        expected: "Hello there! Welcome!"
    },
    {
        description: "Advanced greeting with all parameters",
        test: () => greetUserAdvanced("Bob", "morning", "formal"),
        expected: /Good morning.*Bob/
    },
    {
        description: "Profile greeting with title",
        test: () => greetUserWithProfile({
            firstName: "Jane",
            lastName: "Doe", 
            title: "Dr.",
            greetingStyle: "formal"
        }),
        expected: /Dr.*Jane/
    },
    {
        description: "Multiple users greeting",
        test: () => greetMultipleUsers("Alice", "Bob", "Charlie"),
        expected: Array
    }
];

function runGreetingTests() {
    console.log("\n🧪 Running Greeting Tests:");
    console.log("=========================");
    
    testScenarios.forEach((scenario, index) => {
        console.log(`\nTest ${index + 1}: ${scenario.description}`);
        try {
            const result = scenario.test();
            console.log(`Result: ${result}`);
            
            if (scenario.expected instanceof RegExp) {
                console.log(`Passed: ${scenario.expected.test(result)}`);
            } else if (scenario.expected === Array) {
                console.log(`Passed: ${Array.isArray(result)}`);
            } else {
                console.log(`Passed: ${result === scenario.expected}`);
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    });
}
```
