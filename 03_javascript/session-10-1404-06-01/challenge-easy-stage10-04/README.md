# 🎯 Challenge Easy Stage 10-04: Simple Blog Search (Stage 10 - Fetch API and JSON)

## 📝 Description

Build a blog post search application that fetches posts from JSONPlaceholder API and implements client-side filtering and search functionality. Learn to work with larger datasets and implement search features.

## 🎯 Objectives

- Fetch multiple records from an API endpoint
- Implement client-side search and filtering
- Handle large JSON datasets efficiently
- Create responsive search results layout
- Practice array methods with fetched data

## 📋 Requirements

1. API Endpoints to use:

   ```javascript
   const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
   const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
   
   // Fetch both posts and users to display author names
   ```

2. Implement these functions:
   - Fetch all blog posts and users
   - Search posts by title and content
   - Filter posts by author
   - Display paginated results
   - Show post details in expandable cards

3. Search features to include:
   - Real-time search as user types
   - Filter by author dropdown
   - Sort by date or title
   - Reset filters functionality
   - Results counter

## 💡 Example Implementation

```javascript
// Blog search application
class BlogSearchApp {
  constructor() {
    this.posts = [];
    this.users = [];
    this.filteredPosts = [];
    this.currentPage = 1;
    this.postsPerPage = 10;
  }
  
  async initialize() {
    try {
      await this.fetchData();
      this.setupEventListeners();
      this.displayPosts();
    } catch (error) {
      this.showError('Failed to load blog data');
    }
  }
  
  async fetchData() {
    try {
      this.showLoading(true);
      
      // Fetch posts and users simultaneously
      const [postsResponse, usersResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/users')
      ]);
      
      if (!postsResponse.ok || !usersResponse.ok) {
        throw new Error('Failed to fetch data');
      }
      
      this.posts = await postsResponse.json();
      this.users = await usersResponse.json();
      
      // Combine posts with author information
      this.posts = this.posts.map(post => ({
        ...post,
        author: this.users.find(user => user.id === post.userId)
      }));
      
      this.filteredPosts = [...this.posts];
      this.populateAuthorFilter();
      
    } catch (error) {
      throw error;
    } finally {
      this.showLoading(false);
    }
  }
  
  populateAuthorFilter() {
    const authorSelect = document.getElementById('author-filter');
    const authors = [...new Set(this.users.map(user => user.name))];
    
    // Clear existing options except "All Authors"
    authorSelect.innerHTML = '<option value="">All Authors</option>';
    
    authors.forEach(author => {
      const option = document.createElement('option');
      option.value = author;
      option.textContent = author;
      authorSelect.appendChild(option);
    });
  }
  
  searchPosts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const authorFilter = document.getElementById('author-filter').value;
    const sortBy = document.getElementById('sort-select').value;
    
    // Filter posts based on search term and author
    this.filteredPosts = this.posts.filter(post => {
      const matchesSearch = !searchTerm || 
        post.title.toLowerCase().includes(searchTerm) ||
        post.body.toLowerCase().includes(searchTerm);
      
      const matchesAuthor = !authorFilter || 
        post.author.name === authorFilter;
      
      return matchesSearch && matchesAuthor;
    });
    
    // Sort posts
    this.sortPosts(sortBy);
    
    // Reset to first page and display
    this.currentPage = 1;
    this.displayPosts();
    this.updateResultsCounter();
  }
  
  sortPosts(sortBy) {
    switch (sortBy) {
      case 'title':
        this.filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'author':
        this.filteredPosts.sort((a, b) => a.author.name.localeCompare(b.author.name));
        break;
      case 'id':
      default:
        this.filteredPosts.sort((a, b) => a.id - b.id);
        break;
    }
  }
  
  displayPosts() {
    const container = document.getElementById('posts-container');
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    const postsToShow = this.filteredPosts.slice(startIndex, endIndex);
    
    if (postsToShow.length === 0) {
      container.innerHTML = '<div class="no-results">No posts found matching your criteria.</div>';
      return;
    }
    
    container.innerHTML = '';
    
    postsToShow.forEach(post => {
      const postElement = this.createPostElement(post);
      container.appendChild(postElement);
    });
    
    this.updatePagination();
  }
  
  createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post-card';
    
    postDiv.innerHTML = `
      <div class="post-header">
        <h3 class="post-title">${post.title}</h3>
        <span class="post-author">by ${post.author.name}</span>
      </div>
      <div class="post-preview">
        ${post.body.substring(0, 150)}${post.body.length > 150 ? '...' : ''}
      </div>
      <div class="post-actions">
        <button onclick="blogApp.togglePostExpansion(${post.id})" 
                class="read-more-btn">
          Read More
        </button>
        <span class="post-id">Post #${post.id}</span>
      </div>
      <div class="post-full-content" id="content-${post.id}" style="display: none;">
        <div class="full-text">${post.body}</div>
        <div class="author-info">
          <strong>Author Details:</strong><br>
          Email: ${post.author.email}<br>
          Website: ${post.author.website}
        </div>
      </div>
    `;
    
    return postDiv;
  }
  
  togglePostExpansion(postId) {
    const contentDiv = document.getElementById(`content-${postId}`);
    const isHidden = contentDiv.style.display === 'none';
    
    contentDiv.style.display = isHidden ? 'block' : 'none';
    
    // Update button text
    const button = contentDiv.previousElementSibling.querySelector('.read-more-btn');
    button.textContent = isHidden ? 'Read Less' : 'Read More';
  }
  
  updateResultsCounter() {
    const counter = document.getElementById('results-counter');
    const total = this.filteredPosts.length;
    const showing = Math.min(this.postsPerPage, total - (this.currentPage - 1) * this.postsPerPage);
    
    counter.textContent = `Showing ${showing} of ${total} posts`;
  }
  
  updatePagination() {
    const totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
    const pagination = document.getElementById('pagination');
    
    if (totalPages <= 1) {
      pagination.innerHTML = '';
      return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    if (this.currentPage > 1) {
      paginationHTML += `<button onclick="blogApp.changePage(${this.currentPage - 1})">Previous</button>`;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      const activeClass = i === this.currentPage ? 'active' : '';
      paginationHTML += `<button class="${activeClass}" onclick="blogApp.changePage(${i})">${i}</button>`;
    }
    
    // Next button
    if (this.currentPage < totalPages) {
      paginationHTML += `<button onclick="blogApp.changePage(${this.currentPage + 1})">Next</button>`;
    }
    
    pagination.innerHTML = paginationHTML;
  }
  
  changePage(page) {
    this.currentPage = page;
    this.displayPosts();
  }
  
  resetFilters() {
    document.getElementById('search-input').value = '';
    document.getElementById('author-filter').value = '';
    document.getElementById('sort-select').value = 'id';
    this.searchPosts();
  }
  
  setupEventListeners() {
    // Search input with debounce
    let searchTimeout;
    document.getElementById('search-input').addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => this.searchPosts(), 300);
    });
    
    // Filter and sort controls
    document.getElementById('author-filter').addEventListener('change', () => this.searchPosts());
    document.getElementById('sort-select').addEventListener('change', () => this.searchPosts());
    document.getElementById('reset-btn').addEventListener('click', () => this.resetFilters());
  }
  
  showLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
  }
  
  showError(message) {
    document.getElementById('error-message').textContent = message;
    document.getElementById('error-message').style.display = 'block';
  }
}

// Initialize the app
const blogApp = new BlogSearchApp();
window.addEventListener('load', () => {
  blogApp.initialize();
});
```

## 🚀 Expected Features

1. **Search and Filter Interface**:
   - Real-time search input
   - Author filter dropdown
   - Sort options (title, author, ID)
   - Reset filters button

2. **Post Display**:
   - Card-based layout for posts
   - Expandable post content
   - Author information display
   - Pagination for large result sets

3. **User Experience**:
   - Loading states during data fetch
   - Results counter
   - No results message
   - Responsive design

## 🎨 Suggested HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Search</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>📝 Blog Search</h1>
            <p>Search through blog posts and filter by author</p>
        </header>
        
        <div class="search-controls">
            <div class="search-bar">
                <input type="text" id="search-input" placeholder="Search posts by title or content...">
            </div>
            
            <div class="filters">
                <select id="author-filter">
                    <option value="">All Authors</option>
                </select>
                
                <select id="sort-select">
                    <option value="id">Sort by ID</option>
                    <option value="title">Sort by Title</option>
                    <option value="author">Sort by Author</option>
                </select>
                
                <button id="reset-btn">Reset Filters</button>
            </div>
        </div>
        
        <div class="results-info">
            <span id="results-counter"></span>
        </div>
        
        <div id="loading" class="loading">Loading blog posts...</div>
        <div id="error-message" class="error"></div>
        
        <div id="posts-container" class="posts-grid"></div>
        
        <div id="pagination" class="pagination"></div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

## 💡 Helpful Tips

- Use `Promise.all()` to fetch multiple endpoints simultaneously
- Implement debouncing for search input to reduce API calls
- Use array methods like `filter()`, `map()`, and `sort()` effectively
- Consider performance with large datasets
- Provide good user feedback for all states (loading, empty, error)

## 🔧 Bonus Features

- Advanced search with multiple criteria
- Tag-based filtering system
- Bookmark favorite posts
- Export search results to JSON
- Dark/light theme toggle
- Infinite scroll instead of pagination

## 📚 Learning Resources

- [Promise.all() Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [Array Methods in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Debouncing in JavaScript](https://davidwalsh.name/javascript-debounce-function)
