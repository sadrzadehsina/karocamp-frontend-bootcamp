# 🎯 Challenge Medium Stage 7-01: API Data Manager with Error Recovery (Stage 7 - Error Handling and Debugging)

## 📝 Description

Build a comprehensive data management system that fetches data from multiple APIs, handles various error scenarios, and implements retry mechanisms and fallback strategies.

## 🎯 Objectives

- Handle complex error scenarios in API calls
- Implement error recovery strategies
- Practice advanced error handling patterns
- Create robust, production-ready error handling

## 📋 Requirements

1. Data manager features:
   - Fetch user data from multiple API endpoints
   - Display data in cards/lists
   - Refresh data functionality
   - Search and filter capabilities
   - Offline mode detection

2. Error scenarios to handle:
   - Network connectivity issues
   - API rate limiting (429 status)
   - Server errors (500, 502, 503)
   - Invalid JSON responses
   - Timeout errors
   - Authentication failures (401, 403)
   - Data validation errors

3. Error recovery strategies:
   - Automatic retry with exponential backoff
   - Fallback to cached data
   - Partial data loading (show what's available)
   - Graceful degradation of features
   - User-initiated retry options

## 💡 Example API Endpoints

```javascript
const API_ENDPOINTS = {
  users: 'https://jsonplaceholder.typicode.com/users',
  posts: 'https://jsonplaceholder.typicode.com/posts',
  comments: 'https://jsonplaceholder.typicode.com/comments'
};

// Simulate different error scenarios for testing
const ERROR_SIMULATION = {
  networkError: Math.random() < 0.1, // 10% chance
  serverError: Math.random() < 0.05, // 5% chance
  timeoutError: Math.random() < 0.03  // 3% chance
};
```

## 🚀 Expected Functions

```javascript
class APIManager {
  constructor() {
    this.retryAttempts = 3;
    this.retryDelay = 1000; // Start with 1 second
    this.cache = new Map();
  }

  async fetchWithRetry(url, options = {}) {
    let lastError;
    
    for (let attempt = 1; attempt <= this.retryAttempts; attempt++) {
      try {
        const response = await this.fetchData(url, options);
        return response;
        
      } catch (error) {
        lastError = error;
        
        if (this.shouldRetry(error, attempt)) {
          console.log(`Attempt ${attempt} failed, retrying in ${this.retryDelay}ms...`);
          await this.delay(this.retryDelay);
          this.retryDelay *= 2; // Exponential backoff
        } else {
          break;
        }
      } finally {
        this.logAttempt(url, attempt, lastError);
      }
    }
    
    // Try fallback strategies
    return this.handleFailure(url, lastError);
  }

  shouldRetry(error, attempt) {
    // Retry logic based on error type and attempt count
    if (attempt >= this.retryAttempts) return false;
    
    if (error.name === 'NetworkError') return true;
    if (error.status >= 500) return true; // Server errors
    if (error.status === 429) return true; // Rate limiting
    
    return false;
  }

  async handleFailure(url, error) {
    try {
      // Try cache first
      if (this.cache.has(url)) {
        this.showWarning('Using cached data due to network issues');
        return this.cache.get(url);
      }
      
      // Try alternative endpoint
      const fallbackData = await this.tryFallbackEndpoint(url);
      if (fallbackData) {
        this.showWarning('Using alternative data source');
        return fallbackData;
      }
      
      // Show user-friendly error
      this.displayUserError(error);
      return null;
      
    } catch (fallbackError) {
      this.displayCriticalError(fallbackError);
      return null;
    } finally {
      this.logFailure(url, error);
    }
  }
}
```

## ✅ Expected Error Handling

- **Network errors**: Retry with exponential backoff, then use cache
- **Server errors (5xx)**: Retry limited times, show maintenance message
- **Rate limiting (429)**: Wait and retry based on headers
- **Client errors (4xx)**: Don't retry, show appropriate message
- **Timeout**: Retry with longer timeout, show loading state
- **Parse errors**: Log error, show data corruption message

## ✅ Expected User Experience

- Loading states during retries
- Clear error messages for each scenario
- Retry buttons for user-initiated attempts
- Offline indicator when network is down
- Partial data display when some APIs fail
- Progress indicators for retry attempts

## ✅ Expected Topics Used

- Complex `try-catch-finally` structures
- Custom Error classes and error types
- Promise error handling
- Async/await error patterns
- Error recovery strategies
- Comprehensive error logging

## 🌟 Bonus

- Implement circuit breaker pattern
- Add error reporting to external service
- Create error analytics dashboard
- Implement smart caching strategies
- Add performance monitoring with error tracking
