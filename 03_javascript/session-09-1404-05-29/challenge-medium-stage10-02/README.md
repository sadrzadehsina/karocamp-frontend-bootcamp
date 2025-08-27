# 🎯 Challenge Medium Stage 10-02: Real-time Social Media Feed Aggregator (Stage 10 - Fetch API and JSON)

## 📝 Description

Build a sophisticated social media feed aggregator that combines multiple data sources, implements real-time updates, advanced filtering, and provides a rich interactive experience. This challenge focuses on handling complex JSON structures, implementing real-time features, and creating production-ready social media interfaces.

## 🎯 Objectives

- Master complex JSON data manipulation and transformation
- Implement real-time data polling and updates
- Build advanced filtering and search capabilities
- Handle large datasets efficiently with virtual scrolling
- Create interactive social media UI components
- Implement data persistence and offline capabilities

## 📋 Requirements

1. Multiple Data Sources Integration:

   ```javascript
   const DATA_SOURCES = {
     posts: 'https://jsonplaceholder.typicode.com/posts',
     users: 'https://jsonplaceholder.typicode.com/users',
     comments: 'https://jsonplaceholder.typicode.com/comments',
     photos: 'https://jsonplaceholder.typicode.com/photos',
     albums: 'https://jsonplaceholder.typicode.com/albums'
   };
   
   // Mock real-time updates endpoint
   const REALTIME_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
   ```

2. Advanced Social Feed Features:
   - Unified feed from multiple content types (posts, photos, albums)
   - Real-time content updates with polling
   - Advanced filtering (by user, content type, date, engagement)
   - Infinite scroll with virtual scrolling optimization
   - Rich content preview with lazy loading
   - Engagement simulation (likes, shares, comments)
   - Content moderation and flagging system

3. Complex Data Operations:
   - Content aggregation and normalization
   - Real-time engagement tracking
   - Advanced search with fuzzy matching
   - Content recommendation engine
   - Analytics and insights generation

## 💡 Advanced Implementation

```javascript
// Advanced Social Feed Aggregator
class SocialFeedAggregator {
  constructor() {
    this.feedItems = [];
    this.users = new Map();
    this.filters = {
      contentType: 'all',
      userId: null,
      dateRange: null,
      sortBy: 'recent',
      searchQuery: ''
    };
    this.engagementData = new Map();
    this.realTimeConfig = {
      enabled: false,
      interval: 10000, // 10 seconds
      intervalId: null
    };
    this.virtualScroll = {
      container: null,
      itemHeight: 200,
      visibleItems: 10,
      scrollTop: 0,
      renderBuffer: 5
    };
  }
  
  async initialize() {
    try {
      await this.loadInitialData();
      this.setupVirtualScrolling();
      this.setupEventListeners();
      this.renderFeed();
      this.startRealTimeUpdates();
    } catch (error) {
      this.handleError('Failed to initialize social feed', error);
    }
  }
  
  async loadInitialData() {
    this.showLoading(true);
    
    try {
      // Fetch all data sources concurrently
      const [usersRes, postsRes, commentsRes, photosRes, albumsRes] = await Promise.allSettled([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/comments'),
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=50'), // Limit photos for demo
        fetch('https://jsonplaceholder.typicode.com/albums')
      ]);
      
      // Process successful responses
      const users = usersRes.status === 'fulfilled' ? await usersRes.value.json() : [];
      const posts = postsRes.status === 'fulfilled' ? await postsRes.value.json() : [];
      const comments = commentsRes.status === 'fulfilled' ? await commentsRes.value.json() : [];
      const photos = photosRes.status === 'fulfilled' ? await photosRes.value.json() : [];
      const albums = albumsRes.status === 'fulfilled' ? await albumsRes.value.json() : [];
      
      // Store users for quick lookup
      users.forEach(user => this.users.set(user.id, user));
      
      // Transform and aggregate content
      this.feedItems = this.aggregateContent(posts, photos, albums, comments);
      
      // Initialize engagement data
      this.initializeEngagement();
      
      console.log(`Loaded ${this.feedItems.length} feed items from ${users.length} users`);
      
    } catch (error) {
      throw new Error(`Data loading failed: ${error.message}`);
    } finally {
      this.showLoading(false);
    }
  }
  
  aggregateContent(posts, photos, albums, comments) {
    const feedItems = [];
    
    // Transform posts into feed items
    posts.forEach(post => {
      const postComments = comments.filter(comment => comment.postId === post.id);
      
      feedItems.push({
        id: `post-${post.id}`,
        type: 'post',
        originalId: post.id,
        userId: post.userId,
        title: post.title,
        content: post.body,
        timestamp: this.generateTimestamp(),
        engagement: {
          likes: Math.floor(Math.random() * 100),
          shares: Math.floor(Math.random() * 20),
          comments: postComments.length
        },
        commentsData: postComments.slice(0, 3), // Show first 3 comments
        metadata: {
          readTime: Math.ceil(post.body.split(' ').length / 200), // Estimate reading time
          wordCount: post.body.split(' ').length
        }
      });
    });
    
    // Transform photos into feed items
    photos.forEach(photo => {
      const album = albums.find(a => a.id === photo.albumId);
      
      feedItems.push({
        id: `photo-${photo.id}`,
        type: 'photo',
        originalId: photo.id,
        userId: album ? album.userId : 1,
        title: photo.title,
        content: `Shared a photo: ${photo.title}`,
        imageUrl: photo.url,
        thumbnailUrl: photo.thumbnailUrl,
        timestamp: this.generateTimestamp(),
        engagement: {
          likes: Math.floor(Math.random() * 150),
          shares: Math.floor(Math.random() * 30),
          comments: Math.floor(Math.random() * 10)
        },
        metadata: {
          albumTitle: album ? album.title : 'Unknown Album',
          resolution: '600x600' // Mock data
        }
      });
    });
    
    // Transform albums into feed items
    albums.forEach(album => {
      const albumPhotos = photos.filter(photo => photo.albumId === album.id);
      
      feedItems.push({
        id: `album-${album.id}`,
        type: 'album',
        originalId: album.id,
        userId: album.userId,
        title: album.title,
        content: `Created a new album with ${albumPhotos.length} photos`,
        timestamp: this.generateTimestamp(),
        engagement: {
          likes: Math.floor(Math.random() * 80),
          shares: Math.floor(Math.random() * 15),
          comments: Math.floor(Math.random() * 8)
        },
        metadata: {
          photoCount: albumPhotos.length,
          previewPhotos: albumPhotos.slice(0, 4).map(p => p.thumbnailUrl)
        }
      });
    });
    
    // Sort by timestamp (newest first)
    return feedItems.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  }
  
  generateTimestamp() {
    // Generate random timestamp within last 30 days
    const now = Date.now();
    const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000);
    const randomTime = thirtyDaysAgo + Math.random() * (now - thirtyDaysAgo);
    return new Date(randomTime).toISOString();
  }
  
  initializeEngagement() {
    this.feedItems.forEach(item => {
      this.engagementData.set(item.id, {
        ...item.engagement,
        userLiked: false,
        userShared: false,
        viewCount: Math.floor(Math.random() * 500)
      });
    });
  }
  
  // Real-time updates simulation
  startRealTimeUpdates() {
    if (this.realTimeConfig.enabled) {
      this.realTimeConfig.intervalId = setInterval(() => {
        this.simulateRealTimeUpdate();
      }, this.realTimeConfig.interval);
    }
  }
  
  simulateRealTimeUpdate() {
    // Simulate new content or engagement changes
    const updateTypes = ['new_post', 'engagement_change', 'new_comment'];
    const updateType = updateTypes[Math.floor(Math.random() * updateTypes.length)];
    
    switch (updateType) {
      case 'new_post':
        this.addNewPost();
        break;
      case 'engagement_change':
        this.updateRandomEngagement();
        break;
      case 'new_comment':
        this.addNewComment();
        break;
    }
  }
  
  addNewPost() {
    const randomUser = Array.from(this.users.values())[Math.floor(Math.random() * this.users.size)];
    const newPost = {
      id: `post-new-${Date.now()}`,
      type: 'post',
      originalId: Date.now(),
      userId: randomUser.id,
      title: 'Breaking: New Update!',
      content: 'This is a simulated real-time update to demonstrate live feed functionality.',
      timestamp: new Date().toISOString(),
      engagement: {
        likes: 0,
        shares: 0,
        comments: 0
      },
      commentsData: [],
      metadata: {
        readTime: 1,
        wordCount: 12,
        isRealTime: true
      }
    };
    
    this.feedItems.unshift(newPost);
    this.engagementData.set(newPost.id, {
      ...newPost.engagement,
      userLiked: false,
      userShared: false,
      viewCount: 1
    });
    
    this.showRealTimeNotification('New post added to your feed!');
    this.renderFeed();
  }
  
  updateRandomEngagement() {
    if (this.feedItems.length === 0) return;
    
    const randomItem = this.feedItems[Math.floor(Math.random() * this.feedItems.length)];
    const engagement = this.engagementData.get(randomItem.id);
    
    if (engagement) {
      engagement.likes += Math.floor(Math.random() * 3);
      engagement.viewCount += Math.floor(Math.random() * 5);
      
      if (Math.random() > 0.8) {
        engagement.shares += 1;
      }
      
      this.updateEngagementDisplay(randomItem.id);
    }
  }
  
  // Advanced filtering and search
  applyFilters() {
    let filteredItems = [...this.feedItems];
    
    // Content type filter
    if (this.filters.contentType !== 'all') {
      filteredItems = filteredItems.filter(item => item.type === this.filters.contentType);
    }
    
    // User filter
    if (this.filters.userId) {
      filteredItems = filteredItems.filter(item => item.userId === parseInt(this.filters.userId));
    }
    
    // Search query filter
    if (this.filters.searchQuery) {
      const query = this.filters.searchQuery.toLowerCase();
      filteredItems = filteredItems.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query) ||
        this.users.get(item.userId)?.name.toLowerCase().includes(query)
      );
    }
    
    // Date range filter
    if (this.filters.dateRange) {
      const now = new Date();
      let cutoffDate;
      
      switch (this.filters.dateRange) {
        case 'today':
          cutoffDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          break;
        case 'week':
          cutoffDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          break;
        case 'month':
          cutoffDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          break;
      }
      
      if (cutoffDate) {
        filteredItems = filteredItems.filter(item => 
          new Date(item.timestamp) >= cutoffDate
        );
      }
    }
    
    // Sort
    filteredItems.sort((a, b) => {
      switch (this.filters.sortBy) {
        case 'popular':
          const aEngagement = this.engagementData.get(a.id);
          const bEngagement = this.engagementData.get(b.id);
          const aScore = (aEngagement?.likes || 0) + (aEngagement?.shares || 0) * 2;
          const bScore = (bEngagement?.likes || 0) + (bEngagement?.shares || 0) * 2;
          return bScore - aScore;
        case 'oldest':
          return new Date(a.timestamp) - new Date(b.timestamp);
        case 'recent':
        default:
          return new Date(b.timestamp) - new Date(a.timestamp);
      }
    });
    
    return filteredItems;
  }
  
  // Virtual scrolling for performance
  setupVirtualScrolling() {
    this.virtualScroll.container = document.getElementById('feed-container');
    
    this.virtualScroll.container.addEventListener('scroll', () => {
      this.virtualScroll.scrollTop = this.virtualScroll.container.scrollTop;
      this.renderVisibleItems();
    });
  }
  
  renderVisibleItems() {
    const filteredItems = this.applyFilters();
    const containerHeight = this.virtualScroll.container.clientHeight;
    const itemHeight = this.virtualScroll.itemHeight;
    
    const startIndex = Math.max(0, 
      Math.floor(this.virtualScroll.scrollTop / itemHeight) - this.virtualScroll.renderBuffer
    );
    const endIndex = Math.min(filteredItems.length,
      Math.ceil((this.virtualScroll.scrollTop + containerHeight) / itemHeight) + this.virtualScroll.renderBuffer
    );
    
    const visibleItems = filteredItems.slice(startIndex, endIndex);
    
    // Update container height to maintain scroll behavior
    const totalHeight = filteredItems.length * itemHeight;
    this.virtualScroll.container.style.height = `${totalHeight}px`;
    
    // Render only visible items
    this.renderFeedItems(visibleItems, startIndex * itemHeight);
  }
  
  renderFeedItems(items, offsetTop) {
    const container = document.getElementById('feed-items');
    container.innerHTML = '';
    container.style.transform = `translateY(${offsetTop}px)`;
    
    items.forEach(item => {
      const itemElement = this.createFeedItemElement(item);
      container.appendChild(itemElement);
    });
  }
  
  createFeedItemElement(item) {
    const user = this.users.get(item.userId);
    const engagement = this.engagementData.get(item.id);
    
    const element = document.createElement('div');
    element.className = `feed-item feed-item-${item.type}`;
    element.dataset.itemId = item.id;
    
    element.innerHTML = `
      <div class="feed-item-header">
        <div class="user-info">
          <div class="user-avatar">${user?.name.charAt(0) || '?'}</div>
          <div class="user-details">
            <h4>${user?.name || 'Unknown User'}</h4>
            <span class="timestamp">${this.formatTimestamp(item.timestamp)}</span>
          </div>
        </div>
        <div class="item-actions">
          <button class="action-btn" onclick="socialFeed.toggleItemMenu('${item.id}')">⋯</button>
        </div>
      </div>
      
      <div class="feed-item-content">
        <h3>${item.title}</h3>
        <p>${item.content}</p>
        ${item.type === 'photo' ? `
          <div class="photo-container">
            <img src="${item.thumbnailUrl}" alt="${item.title}" 
                 onclick="socialFeed.openImageModal('${item.imageUrl}')">
          </div>
        ` : ''}
        ${item.type === 'album' ? `
          <div class="album-preview">
            ${item.metadata.previewPhotos.slice(0, 4).map(url => 
              `<img src="${url}" alt="Album preview">`
            ).join('')}
            ${item.metadata.photoCount > 4 ? 
              `<div class="more-photos">+${item.metadata.photoCount - 4} more</div>` : ''
            }
          </div>
        ` : ''}
      </div>
      
      <div class="feed-item-engagement">
        <div class="engagement-stats">
          <span class="stat">👁 ${engagement?.viewCount || 0}</span>
          <span class="stat">❤ ${engagement?.likes || 0}</span>
          <span class="stat">🔄 ${engagement?.shares || 0}</span>
          <span class="stat">💬 ${engagement?.comments || 0}</span>
        </div>
        <div class="engagement-actions">
          <button class="action-btn ${engagement?.userLiked ? 'active' : ''}" 
                  onclick="socialFeed.toggleLike('${item.id}')">
            ❤ Like
          </button>
          <button class="action-btn" onclick="socialFeed.shareItem('${item.id}')">
            🔄 Share
          </button>
          <button class="action-btn" onclick="socialFeed.toggleComments('${item.id}')">
            💬 Comment
          </button>
        </div>
      </div>
      
      <div class="comments-section" id="comments-${item.id}" style="display: none;">
        ${this.renderComments(item.commentsData)}
      </div>
    `;
    
    return element;
  }
  
  // Interactive features
  toggleLike(itemId) {
    const engagement = this.engagementData.get(itemId);
    if (engagement) {
      if (engagement.userLiked) {
        engagement.likes = Math.max(0, engagement.likes - 1);
        engagement.userLiked = false;
      } else {
        engagement.likes += 1;
        engagement.userLiked = true;
      }
      
      this.updateEngagementDisplay(itemId);
      this.showEngagementFeedback(engagement.userLiked ? 'Liked!' : 'Like removed');
    }
  }
  
  shareItem(itemId) {
    const engagement = this.engagementData.get(itemId);
    if (engagement) {
      engagement.shares += 1;
      engagement.userShared = true;
      
      this.updateEngagementDisplay(itemId);
      this.showEngagementFeedback('Shared successfully!');
      
      // Simulate sharing
      if (navigator.share) {
        const item = this.feedItems.find(i => i.id === itemId);
        navigator.share({
          title: item.title,
          text: item.content,
          url: window.location.href
        });
      }
    }
  }
  
  renderFeed() {
    const filteredItems = this.applyFilters();
    this.updateFeedStats(filteredItems);
    
    if (this.virtualScroll.container) {
      this.renderVisibleItems();
    } else {
      this.renderFeedItems(filteredItems.slice(0, 20), 0); // Fallback to first 20 items
    }
  }
}

// Initialize the social feed
const socialFeed = new SocialFeedAggregator();
window.addEventListener('load', () => {
  socialFeed.initialize();
});
```

## 🚀 Expected Features

1. **Rich Feed Interface**:
   - Multiple content types (posts, photos, albums)
   - Real-time updates with notifications
   - Interactive engagement (likes, shares, comments)
   - Virtual scrolling for performance

2. **Advanced Filtering**:
   - Content type filters
   - User-based filtering
   - Date range selection
   - Search with fuzzy matching
   - Sort by popularity, date, or engagement

3. **Social Features**:
   - User profiles and avatars
   - Comment threads
   - Share functionality
   - Content moderation tools

## 💡 Helpful Tips

- Use virtual scrolling for large datasets
- Implement proper state management for real-time updates
- Consider performance when handling hundreds of feed items
- Use efficient data structures (Map, Set) for lookups
- Implement proper error boundaries for network failures

## 🔧 Bonus Features

- WebSocket integration for true real-time updates
- Content recommendation algorithm
- Advanced analytics dashboard
- Export feed data to various formats
- Offline mode with service workers
- Push notifications for new content

## 📚 Learning Resources

- [Virtual Scrolling Techniques](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Real-time Web Applications](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [Performance Optimization](https://web.dev/performance/)
