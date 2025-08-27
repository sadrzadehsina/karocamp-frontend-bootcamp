# 🎯 Challenge Easy Stage 10-02: JSON Data Converter (Stage 10 - Fetch API and JSON)

## 📝 Description

Build a tool that converts between JSON and JavaScript objects, helping you understand JSON.stringify() and JSON.parse() methods while creating a practical data conversion utility.

## 🎯 Objectives

- Master `JSON.stringify()` and `JSON.parse()` methods
- Handle JSON conversion errors gracefully
- Create an interactive JSON editor interface
- Validate JSON format and structure
- Practice working with complex nested objects

## 📋 Requirements

1. Sample data structures to work with:

   ```javascript
   const sampleData = {
     user: {
       id: 1,
       name: "John Doe",
       email: "john@example.com",
       preferences: {
         theme: "dark",
         notifications: true,
         language: "en"
       },
       hobbies: ["reading", "gaming", "cooking"]
     },
     settings: {
       privacy: "public",
       twoFactorAuth: false
     }
   };
   ```

2. Implement these functions:
   - Convert JavaScript object to formatted JSON
   - Parse JSON string back to JavaScript object
   - Validate JSON format
   - Pretty-print JSON with proper indentation
   - Handle conversion errors with user-friendly messages

3. Features to include:
   - Live preview of conversions
   - Copy to clipboard functionality
   - Import/export JSON files
   - Multiple sample data presets

## 💡 Example Implementation

```javascript
// JSON conversion functions
function objectToJson(obj, indent = 2) {
  try {
    return JSON.stringify(obj, null, indent);
  } catch (error) {
    throw new Error(`Failed to convert to JSON: ${error.message}`);
  }
}

function jsonToObject(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    throw new Error(`Invalid JSON format: ${error.message}`);
  }
}

// Validate JSON format
function isValidJson(jsonString) {
  try {
    JSON.parse(jsonString);
    return { valid: true, error: null };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}

// Pretty format JSON with validation
function formatJson(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    return JSON.stringify(parsed, null, 2);
  } catch (error) {
    throw new Error(`Cannot format invalid JSON: ${error.message}`);
  }
}

// Main conversion handler
function handleConversion(direction) {
  const objectInput = document.getElementById('object-input');
  const jsonInput = document.getElementById('json-input');
  const errorDisplay = document.getElementById('error-display');
  
  try {
    clearError();
    
    if (direction === 'to-json') {
      const objectText = objectInput.value.trim();
      if (!objectText) {
        throw new Error('Please enter JavaScript object data');
      }
      
      // Safely evaluate the object (in production, use a safer method)
      const obj = eval(`(${objectText})`);
      const jsonResult = objectToJson(obj);
      jsonInput.value = jsonResult;
      
    } else if (direction === 'to-object') {
      const jsonText = jsonInput.value.trim();
      if (!jsonText) {
        throw new Error('Please enter JSON data');
      }
      
      const obj = jsonToObject(jsonText);
      objectInput.value = formatObjectForDisplay(obj);
    }
    
  } catch (error) {
    showError(error.message);
  }
}

// Format object for display in textarea
function formatObjectForDisplay(obj) {
  return JSON.stringify(obj, null, 2)
    .replace(/"/g, '')
    .replace(/:/g, ': ')
    .replace(/,/g, ',');
}

// Error handling
function showError(message) {
  const errorDisplay = document.getElementById('error-display');
  errorDisplay.textContent = message;
  errorDisplay.className = 'error visible';
}

function clearError() {
  const errorDisplay = document.getElementById('error-display');
  errorDisplay.className = 'error';
}

// Copy to clipboard functionality
async function copyToClipboard(elementId) {
  const element = document.getElementById(elementId);
  const text = element.value;
  
  if (!text.trim()) {
    showError('Nothing to copy!');
    return;
  }
  
  try {
    await navigator.clipboard.writeText(text);
    showSuccess('Copied to clipboard!');
  } catch (error) {
    showError('Failed to copy to clipboard');
  }
}

// Load sample data
function loadSample(sampleName) {
  const samples = {
    user: {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      profile: {
        age: 28,
        city: "New York",
        interests: ["photography", "travel", "coding"]
      }
    },
    product: {
      id: "prod-123",
      name: "Wireless Headphones",
      price: 99.99,
      specifications: {
        battery: "20 hours",
        connectivity: ["Bluetooth 5.0", "USB-C"],
        colors: ["black", "white", "blue"]
      },
      inStock: true
    },
    config: {
      app: {
        name: "MyApp",
        version: "1.2.0",
        features: {
          darkMode: true,
          notifications: false,
          autoSave: true
        }
      },
      api: {
        baseUrl: "https://api.example.com",
        timeout: 5000,
        retries: 3
      }
    }
  };
  
  const objectInput = document.getElementById('object-input');
  objectInput.value = formatObjectForDisplay(samples[sampleName]);
}
```

## 🚀 Expected Features

1. **Dual Input Areas**:
   - JavaScript object input (left side)
   - JSON string input (right side)
   - Bidirectional conversion buttons

2. **Validation and Formatting**:
   - Real-time JSON validation
   - Pretty-print formatting
   - Error highlighting and messages

3. **Utility Functions**:
   - Copy to clipboard
   - Clear inputs
   - Load sample data
   - File import/export

## 🎨 Suggested HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON Data Converter</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>JSON Data Converter</h1>
            <p>Convert between JavaScript objects and JSON format</p>
        </header>
        
        <div class="converter-section">
            <div class="input-section">
                <h3>JavaScript Object</h3>
                <textarea id="object-input" placeholder="Enter JavaScript object..."></textarea>
                <div class="buttons">
                    <button onclick="handleConversion('to-json')">Convert to JSON →</button>
                    <button onclick="copyToClipboard('object-input')">Copy</button>
                </div>
            </div>
            
            <div class="input-section">
                <h3>JSON String</h3>
                <textarea id="json-input" placeholder="Enter JSON string..."></textarea>
                <div class="buttons">
                    <button onclick="handleConversion('to-object')">← Convert to Object</button>
                    <button onclick="copyToClipboard('json-input')">Copy</button>
                </div>
            </div>
        </div>
        
        <div class="samples-section">
            <h3>Sample Data</h3>
            <button onclick="loadSample('user')">User Profile</button>
            <button onclick="loadSample('product')">Product Info</button>
            <button onclick="loadSample('config')">App Config</button>
        </div>
        
        <div id="error-display" class="error"></div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

## 💡 Helpful Tips

- Use `JSON.stringify(obj, null, 2)` for pretty formatting
- Always wrap JSON operations in try-catch blocks
- Test with various data types (arrays, nested objects, null values)
- Handle edge cases like circular references
- Use `eval()` carefully or replace with safer alternatives

## 🔧 Bonus Features

- File upload/download for JSON files
- Syntax highlighting for JSON
- Minify/beautify JSON toggle
- Data type validation (check for required fields)
- JSON schema validation
- History of recent conversions

## 📚 Learning Resources

- [JSON Methods Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Working with JSON Data](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
