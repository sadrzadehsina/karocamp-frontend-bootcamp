# 🎯 Challenge Medium Stage 10-01: Advanced API Data Manager (Stage 10 - Fetch API and JSON)

## 📝 Description

Build a comprehensive data management application that combines multiple APIs, implements advanced error handling, request caching, and provides real-time data synchronization. This challenge focuses on production-ready API integration patterns.

## 🎯 Objectives

- Master complex API integration with multiple endpoints
- Implement advanced promise handling with async/await and Promise combinators
- Create robust error handling and retry mechanisms
- Build caching systems for API responses
- Handle concurrent requests and race conditions
- Implement data validation and transformation

## 📋 Requirements

1. Multi-API Integration:

   ```javascript
   const APIs = {
     users: 'https://jsonplaceholder.typicode.com/users',
     posts: 'https://jsonplaceholder.typicode.com/posts',
     comments: 'https://jsonplaceholder.typicode.com/comments',
     albums: 'https://jsonplaceholder.typicode.com/albums',
     photos: 'https://jsonplaceholder.typicode.com/photos'
   };
   
   // Weather API (requires API key)
   const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather';
   
   // News API example (requires API key)
   const NEWS_API = 'https://newsapi.org/v2/top-headlines';
   ```

2. Advanced Features:
   - Concurrent data fetching with dependency management
   - Request caching with TTL (Time To Live)
   - Automatic retry on failure with exponential backoff
   - Request queuing and rate limiting
   - Real-time data updates with polling
   - Data transformation and validation pipelines
   - Offline mode with cached data

3. Complex Data Operations:
   - Cross-reference data from multiple APIs
   - Generate comprehensive reports
   - Handle partial failures gracefully
   - Implement data synchronization patterns

## 💡 Advanced Implementation Examples

```javascript
// Advanced API Manager with caching and retry logic
class AdvancedAPIManager {
  constructor() {
    this.cache = new Map();
    this.requestQueue = [];
    this.isProcessingQueue = false;
    this.retryDelays = [1000, 2000, 4000, 8000]; // Exponential backoff
    this.rateLimitDelay = 100; // ms between requests
  }
  
  // Cache with TTL implementation
  setCache(key, data, ttlMs = 300000) { // 5 minutes default
    const expiry = Date.now() + ttlMs;
    this.cache.set(key, { data, expiry });
  }
  
  getCache(key) {
    const cached = this.cache.get(key);
    if (!cached) return null;
    
    if (Date.now() > cached.expiry) {
      this.cache.delete(key);
      return null;
    }
    
    return cached.data;
  }
  
  // Advanced fetch with retry and caching
  async fetchWithRetry(url, options = {}, useCache = true, cacheKey = null) {
    const key = cacheKey || url;
    
    // Check cache first
    if (useCache) {
      const cached = this.getCache(key);
      if (cached) {
        console.log(`Cache hit for ${key}`);
        return cached;
      }
    }
    
    let lastError;
    
    for (let attempt = 0; attempt <= this.retryDelays.length; attempt++) {
      try {
        const response = await fetch(url, {
          ...options,
          signal: AbortSignal.timeout(10000) // 10 second timeout
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Cache successful response
        if (useCache) {
          this.setCache(key, data);
        }
        
        return data;
        
      } catch (error) {
        lastError = error;
        
        if (attempt < this.retryDelays.length) {
          const delay = this.retryDelays[attempt];
          console.log(`Attempt ${attempt + 1} failed, retrying in ${delay}ms...`);
          await this.sleep(delay);
        }
      }
    }
    
    throw new Error(`Failed after ${this.retryDelays.length + 1} attempts: ${lastError.message}`);
  }
  
  // Queue system for rate limiting
  async queueRequest(requestFn) {
    return new Promise((resolve, reject) => {
      this.requestQueue.push({ requestFn, resolve, reject });
      this.processQueue();
    });
  }
  
  async processQueue() {
    if (this.isProcessingQueue || this.requestQueue.length === 0) {
      return;
    }
    
    this.isProcessingQueue = true;
    
    while (this.requestQueue.length > 0) {
      const { requestFn, resolve, reject } = this.requestQueue.shift();
      
      try {
        const result = await requestFn();
        resolve(result);
      } catch (error) {
        reject(error);
      }
      
      // Rate limiting delay
      if (this.requestQueue.length > 0) {
        await this.sleep(this.rateLimitDelay);
      }
    }
    
    this.isProcessingQueue = false;
  }
  
  // Complex data aggregation from multiple APIs
  async fetchUserProfileComplete(userId) {
    try {
      // Fetch related data concurrently
      const [user, posts, albums] = await Promise.allSettled([
        this.fetchWithRetry(`https://jsonplaceholder.typicode.com/users/${userId}`),
        this.fetchWithRetry(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
        this.fetchWithRetry(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      ]);
      
      // Handle partial failures
      const userData = user.status === 'fulfilled' ? user.value : null;
      const postsData = posts.status === 'fulfilled' ? posts.value : [];
      const albumsData = albums.status === 'fulfilled' ? albums.value : [];
      
      if (!userData) {
        throw new Error('Failed to fetch user data');
      }
      
      // Fetch additional data based on posts
      const postIds = postsData.slice(0, 5).map(post => post.id); // Limit for performance
      const commentsPromises = postIds.map(postId =>
        this.queueRequest(() => 
          this.fetchWithRetry(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        )
      );
      
      const commentsResults = await Promise.allSettled(commentsPromises);
      
      // Aggregate all data
      const profile = {
        user: userData,
        posts: postsData.map((post, index) => ({
          ...post,
          comments: commentsResults[index]?.status === 'fulfilled' ? 
            commentsResults[index].value : []
        })),
        albums: albumsData,
        statistics: {
          totalPosts: postsData.length,
          totalAlbums: albumsData.length,
          totalComments: commentsResults.reduce((total, result) => 
            total + (result.status === 'fulfilled' ? result.value.length : 0), 0
          ),
          avgCommentsPerPost: postsData.length > 0 ? 
            commentsResults.reduce((total, result) => 
              total + (result.status === 'fulfilled' ? result.value.length : 0), 0
            ) / postsData.length : 0
        }
      };
      
      return profile;
      
    } catch (error) {
      throw new Error(`Failed to fetch complete user profile: ${error.message}`);
    }
  }
  
  // Real-time data synchronization
  async startDataSync(endpoints, intervalMs = 30000) {
    const syncData = async () => {
      try {
        const results = await Promise.allSettled(
          endpoints.map(endpoint => 
            this.fetchWithRetry(endpoint.url, {}, false) // Force fresh data
          )
        );
        
        const syncResults = {
          timestamp: new Date().toISOString(),
          successful: results.filter(r => r.status === 'fulfilled').length,
          failed: results.filter(r => r.status === 'rejected').length,
          data: results.map((result, index) => ({
            endpoint: endpoints[index].name,
            status: result.status,
            data: result.status === 'fulfilled' ? result.value : null,
            error: result.status === 'rejected' ? result.reason.message : null
          }))
        };
        
        // Emit custom event for subscribers
        window.dispatchEvent(new CustomEvent('dataSync', { detail: syncResults }));
        
      } catch (error) {
        console.error('Sync error:', error);
      }
    };
    
    // Initial sync
    await syncData();
    
    // Set up interval
    return setInterval(syncData, intervalMs);
  }
  
  // Advanced data transformation pipeline
  transformData(data, transformations) {
    return transformations.reduce((currentData, transform) => {
      try {
        return transform(currentData);
      } catch (error) {
        console.warn(`Transformation failed: ${error.message}`);
        return currentData;
      }
    }, data);
  }
  
  // Data validation with custom rules
  validateData(data, schema) {
    const errors = [];
    
    for (const [field, rules] of Object.entries(schema)) {
      const value = data[field];
      
      for (const rule of rules) {
        if (!rule.validate(value)) {
          errors.push({
            field,
            message: rule.message,
            value
          });
        }
      }
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
  
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Usage example with comprehensive dashboard
class ComprehensiveDashboard {
  constructor() {
    this.apiManager = new AdvancedAPIManager();
    this.currentData = {};
    this.syncInterval = null;
  }
  
  async initialize() {
    try {
      await this.loadInitialData();
      this.setupEventListeners();
      this.startRealTimeSync();
    } catch (error) {
      this.showError(`Failed to initialize dashboard: ${error.message}`);
    }
  }
  
  async loadInitialData() {
    const endpoints = [
      { name: 'users', url: 'https://jsonplaceholder.typicode.com/users' },
      { name: 'posts', url: 'https://jsonplaceholder.typicode.com/posts' },
      { name: 'albums', url: 'https://jsonplaceholder.typicode.com/albums' }
    ];
    
    this.showLoading(true);
    
    try {
      const results = await Promise.allSettled(
        endpoints.map(endpoint => 
          this.apiManager.fetchWithRetry(endpoint.url)
        )
      );
      
      // Process results
      endpoints.forEach((endpoint, index) => {
        if (results[index].status === 'fulfilled') {
          this.currentData[endpoint.name] = results[index].value;
        } else {
          console.error(`Failed to load ${endpoint.name}:`, results[index].reason);
        }
      });
      
      this.renderDashboard();
      
    } finally {
      this.showLoading(false);
    }
  }
  
  generateAdvancedReport() {
    const { users = [], posts = [], albums = [] } = this.currentData;
    
    // Complex data analysis
    const userStats = users.map(user => {
      const userPosts = posts.filter(post => post.userId === user.id);
      const userAlbums = albums.filter(album => album.userId === user.id);
      
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        domain: user.email.split('@')[1],
        postsCount: userPosts.length,
        albumsCount: userAlbums.length,
        avgPostLength: userPosts.length > 0 ? 
          userPosts.reduce((sum, post) => sum + post.body.length, 0) / userPosts.length : 0,
        productivity: userPosts.length + userAlbums.length
      };
    });
    
    // Generate insights
    const insights = {
      totalUsers: users.length,
      totalPosts: posts.length,
      totalAlbums: albums.length,
      avgPostsPerUser: posts.length / users.length,
      mostProductiveUser: userStats.reduce((max, user) => 
        user.productivity > max.productivity ? user : max, userStats[0] || {}),
      domainDistribution: this.getDomainDistribution(users),
      contentAnalysis: this.analyzeContent(posts)
    };
    
    return { userStats, insights };
  }
}

// Initialize the advanced dashboard
const dashboard = new ComprehensiveDashboard();
window.addEventListener('load', () => {
  dashboard.initialize();
});
```

## 🚀 Expected Features

1. **Advanced API Integration**:
   - Multiple concurrent API calls with dependency management
   - Intelligent caching with TTL
   - Retry mechanisms with exponential backoff
   - Rate limiting and request queuing

2. **Data Management**:
   - Real-time synchronization
   - Data validation and transformation pipelines
   - Cross-API data correlation
   - Comprehensive error handling

3. **Dashboard Interface**:
   - Live data updates
   - Performance metrics
   - Cache statistics
   - Error logs and retry information

## 💡 Helpful Tips

- Use `Promise.allSettled()` for handling partial failures
- Implement proper error boundaries for different failure scenarios
- Consider memory management for long-running applications
- Use `AbortController` for request cancellation
- Monitor and log API performance metrics

## 🔧 Bonus Features

- GraphQL integration for complex data fetching
- WebSocket connections for real-time updates
- Service Worker for offline capability
- Data export in multiple formats (JSON, CSV, XML)
- API response mocking for development
- Performance profiling and optimization tools

## 📚 Learning Resources

- [Promise Combinators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [AbortController and Cancellation](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache)
