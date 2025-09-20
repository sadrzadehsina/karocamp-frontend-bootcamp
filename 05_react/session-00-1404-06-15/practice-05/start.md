# Practice 05: Nested Components & Props Drilling

## Objective
Understand how props flow through nested components and practice "props drilling".

## Task
Create a blog system with nested components where data flows from parent to deeply nested children.

## Requirements
1. Create a component hierarchy:
   - `BlogApp` (root)
   - `BlogList` (receives array of posts)
   - `BlogPost` (receives individual post data)
   - `PostHeader` (receives post title, author, date)
   - `PostContent` (receives post content, tags)
   - `PostFooter` (receives like count, comment count)

2. Demonstrate props drilling where blog data passes through multiple levels
3. Each component should only receive the props it actually needs

## Component Structure
```
BlogApp
  └── BlogList
      └── BlogPost (multiple)
          ├── PostHeader
          ├── PostContent  
          └── PostFooter
```

## Starter Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice 05: Nested Components & Props Drilling</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        // Sample blog data
        const blogPosts = [
            {
                id: 1,
                title: "Getting Started with React",
                author: "Jane Doe",
                date: "2024-01-15",
                content: "React is a powerful library for building user interfaces. In this post, we'll explore the basics of React components and how they work together to create dynamic web applications.",
                tags: ["React", "JavaScript", "Frontend"],
                likes: 42,
                comments: 8
            },
            {
                id: 2,
                title: "Understanding Props in React",
                author: "John Smith",
                date: "2024-01-18",
                content: "Props are the way we pass data between React components. They allow us to create reusable components that can display different data based on what we pass to them.",
                tags: ["React", "Props", "Components"],
                likes: 38,
                comments: 12
            },
            {
                id: 3,
                title: "CSS Styling in React Applications",
                author: "Alice Johnson",
                date: "2024-01-20",
                content: "There are many ways to style React components. From inline styles to CSS modules, each approach has its own benefits and use cases. Let's explore the most popular methods.",
                tags: ["React", "CSS", "Styling"],
                likes: 29,
                comments: 5
            }
        ];

        // Nested component 4: PostHeader
        function PostHeader({ title, author, date }) {
            return (
                <div style={{
                    borderBottom: '1px solid #eee',
                    paddingBottom: '10px',
                    marginBottom: '15px'
                }}>
                    <h2 style={{ 
                        margin: '0 0 8px 0', 
                        color: '#333',
                        fontSize: '24px'
                    }}>
                        {/* Render title here */}
                    </h2>
                    <div style={{ 
                        color: '#666', 
                        fontSize: '14px',
                        display: 'flex',
                        gap: '15px'
                    }}>
                        <span>By {/* Render author here */}</span>
                        <span>{/* Render date here */}</span>
                    </div>
                </div>
            );
        }

        // Nested component 5: PostContent
        function PostContent({ content, tags }) {
            return (
                <div style={{ marginBottom: '15px' }}>
                    <p style={{ 
                        lineHeight: '1.6', 
                        color: '#444',
                        marginBottom: '15px'
                    }}>
                        {/* Render content here */}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {/* Map through tags and render each one */}
                        {tags.map(tag => (
                            <span 
                                key={tag}
                                style={{
                                    backgroundColor: '#e3f2fd',
                                    color: '#1976d2',
                                    padding: '4px 8px',
                                    borderRadius: '12px',
                                    fontSize: '12px'
                                }}
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            );
        }

        // Nested component 6: PostFooter
        function PostFooter({ likes, comments }) {
            return (
                <div style={{
                    borderTop: '1px solid #eee',
                    paddingTop: '10px',
                    display: 'flex',
                    gap: '20px',
                    color: '#666',
                    fontSize: '14px'
                }}>
                    <span>👍 {/* Render likes here */} likes</span>
                    <span>💬 {/* Render comments here */} comments</span>
                </div>
            );
        }

        // Nested component 3: BlogPost
        function BlogPost({ post }) {
            return (
                <article style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '20px',
                    margin: '20px 0',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    {/* Pass appropriate props to PostHeader */}
                    <PostHeader 
                        // Add props here
                    />
                    
                    {/* Pass appropriate props to PostContent */}
                    <PostContent 
                        // Add props here
                    />
                    
                    {/* Pass appropriate props to PostFooter */}
                    <PostFooter 
                        // Add props here
                    />
                </article>
            );
        }

        // Nested component 2: BlogList
        function BlogList({ posts }) {
            return (
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {/* Map through posts and render BlogPost components */}
                    {posts.map(post => (
                        <BlogPost 
                            key={post.id}
                            // Pass post data here
                        />
                    ))}
                </div>
            );
        }

        // Root component 1: BlogApp
        function BlogApp() {
            return (
                <div style={{ 
                    padding: '20px',
                    backgroundColor: '#f5f5f5',
                    minHeight: '100vh',
                    fontFamily: 'Arial, sans-serif'
                }}>
                    <header style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h1 style={{ 
                            color: '#333', 
                            fontSize: '36px',
                            margin: '0 0 10px 0'
                        }}>
                            My Tech Blog
                        </h1>
                        <p style={{ color: '#666', fontSize: '18px' }}>
                            Latest posts about web development
                        </p>
                    </header>
                    
                    {/* Pass blog posts to BlogList */}
                    <BlogList 
                        // Pass posts data here
                    />
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('app'));
        root.render(<BlogApp />);
    </script>
</body>
</html>
```

## Your Tasks
1. Complete the prop passing in each component
2. Render the data in PostHeader, PostContent, and PostFooter
3. Make sure data flows properly through all component levels
4. Test that all blog posts display correctly

## Learning Goals
- Understanding component composition
- Practicing props drilling (passing props through multiple levels)
- Creating a clear component hierarchy
- Separating concerns between components

## Discussion Questions
1. What are the advantages of breaking components into smaller pieces?
2. What are the potential problems with props drilling?
3. How would you modify this structure if you needed to add more nested levels?

## Challenge
Add a `BlogStats` component that shows total posts, total likes, and total comments. It should be a sibling to `BlogList` in the `BlogApp` component.
