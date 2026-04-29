import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

/**
 * App Component - Main Blog Application
 * 
 * Root component that orchestrates the entire blog application.
 * Imports blog data and passes it as props to child components.
 * 
 * Component Structure:
 *   App (root)
 *   ├── Header (displays blog title)
 *   ├── About (displays logo and description sidebar)
 *   └── ArticleList (displays all blog posts)
 *       └── Article (individual post cards)
 * 
 * Data Flow:
 *   blogData (blog.js) → App props → child components
 * 
 * Connected Components:
 *   - Header.jsx: Receives blog name
 *   - About.jsx: Receives blog image and about text
 *   - ArticleList.jsx: Receives array of all blog posts
 * 
 * @returns {JSX.Element} Main application container with Header, About, and ArticleList
 */
function App() {
  return (
    <div className="App">
      {/* Blog site header with title */}
      <Header name={blogData.name} />
      
      {/* Sidebar with blog logo and description */}
      <About image={blogData.image} about={blogData.about} />
      
      {/* Main content area with all blog articles */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
