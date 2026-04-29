import React from "react";

/**
 * Article Component
 * 
 * Renders a single blog post/article card displaying:
 * - Post title
 * - Publication date
 * - Preview/summary text
 * 
 * Each article is typically wrapped in its own <article> semantic HTML tag.
 * This component is designed to be reused for multiple blog posts.
 * 
 * Props:
 *   - title (string): The title of the blog post
 *   - date (string): Publication date. Defaults to "January 1, 1970" if not provided
 *   - preview (string): Brief preview/summary of the article content
 * 
 * Connected to:
 *   - ArticleList.jsx (parent component) maps over posts array and passes individual post data
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Article title
 * @param {string} [props.date="January 1, 1970"] - Publication date
 * @param {string} props.preview - Article preview text
 * @returns {JSX.Element} Article element with title, date, and preview
 */
function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      {/* Article title */}
      <h3>{title}</h3>
      {/* Publication date in smaller text */}
      <small>{date}</small>
      {/* Brief preview/summary of the article */}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
