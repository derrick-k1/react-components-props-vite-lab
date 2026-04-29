import React from "react";
import Article from "./Article";

/**
 * ArticleList Component
 * 
 * Renders the main content area displaying a list of all blog articles.
 * Maps over an array of post objects and renders an Article component for each one.
 * 
 * Component Hierarchy:
 *   ArticleList (container/main)
 *   └── Article (repeated for each post)
 * 
 * Props:
 *   - posts (array): Array of post objects with id, title, date, and preview properties
 * 
 * Connected to:
 *   - App.jsx (parent component) passes posts array from blogData.posts
 *   - Article.jsx (child component) receives individual post data
 * 
 * @param {Object} props - Component props
 * @param {Array<Object>} props.posts - Array of blog post objects
 * @param {number} props.posts[].id - Unique identifier for the post (used as key)
 * @param {string} props.posts[].title - Post title
 * @param {string} props.posts[].date - Publication date
 * @param {string} props.posts[].preview - Post preview text
 * @returns {JSX.Element} Main element containing Article components
 */
function ArticleList({ posts }) {
  return (
    <main>
      {/* Map over posts array and render an Article component for each post */}
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
