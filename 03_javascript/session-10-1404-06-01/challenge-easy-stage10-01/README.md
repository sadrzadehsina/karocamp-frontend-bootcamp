# 🎯 Challenge Easy Stage 10-01: User Profile Fetcher (Stage 10 - Fetch API and JSON)

## 📝 Description

Create a simple user profile viewer that fetches and displays user data from JSONPlaceholder API. Learn the basics of fetch(), JSON parsing, and displaying API data in the DOM.

## 🎯 Objectives

- Use `fetch()` to get data from an API
- Parse JSON responses with `JSON.parse()` (built into fetch)
- Handle promises with `.then()` and `.catch()`
- Display fetched data in the DOM
- Practice basic error handling

## 📋 Requirements

1. API Endpoint to use:
   ```javascript
   const API_URL = 'https://jsonplaceholder.typicode.com/users';
   ```

2. Implement these functions:
   - Fetch user data from the API
   - Display user information in cards
   - Handle loading states
   - Show error messages if fetch fails
   - Add a refresh button to reload data

3. User card should display:
   - Name and username
   - Email and phone
   - Address (city and zipcode)
   - Company name

## 💡 Example Implementation

```javascript
// Basic fetch function
async function fetchUsers() {
  try {
    showLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const users = await response.json();
    displayUsers(users);
    showLoading(false);
  } catch (error) {
    console.error('Error fetching users:', error);
    showError('Failed to load users. Please try again.');
    showLoading(false);
  }
}

// Display users in the DOM
function displayUsers(users) {
  const container = document.getElementById('users-container');
  container.innerHTML = '';
  
  users.forEach(user => {
    const userCard = createUserCard(user);
    container.appendChild(userCard);
  });
}

// Create user card element
function createUserCard(user) {
  const card = document.createElement('div');
  card.className = 'user-card';
  
  card.innerHTML = `
    <h3>${user.name} (@${user.username})</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>City:</strong> ${user.address.city}</p>
    <p><strong>Company:</strong> ${user.company.name}</p>
  `;
  
  return card;
}

// Show/hide loading indicator
function showLoading(isLoading) {
  const loadingEl = document.getElementById('loading');
  const container = document.getElementById('users-container');
  
  if (isLoading) {
    loadingEl.style.display = 'block';
    container.style.display = 'none';
  } else {
    loadingEl.style.display = 'none';
    container.style.display = 'block';
  }
}

// Show error message
function showError(message) {
  const errorEl = document.getElementById('error-message');
  errorEl.textContent = message;
  errorEl.style.display = 'block';
  
  // Hide error after 5 seconds
  setTimeout(() => {
    errorEl.style.display = 'none';
  }, 5000);
}
```

## 🚀 Expected Features

1. **User List Display**: 
   - Grid of user cards showing profile information
   - Clean, readable layout

2. **Loading States**: 
   - Loading indicator while fetching data
   - Proper error handling and display

3. **Interactive Elements**: 
   - Refresh button to reload users
   - Responsive design for different screen sizes

## 🎨 Suggested HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile Fetcher</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>User Profiles</h1>
            <button id="refresh-btn">Refresh Users</button>
        </header>
        
        <div id="loading" class="loading">Loading users...</div>
        <div id="error-message" class="error"></div>
        <div id="users-container" class="users-grid"></div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

## 💡 Helpful Tips

- Start with a simple fetch request
- Test your API call in the browser console first
- Always handle both success and error cases
- Use async/await for cleaner code
- Remember to check `response.ok` before parsing JSON

## 🔧 Bonus Features

- Add a search filter for users
- Sort users by name or email
- Add pagination if displaying many users
- Implement a "favorite users" feature
- Add user details modal on card click

## 📚 Learning Resources

- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [Promises in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
