import React from "react";

/**
 * Header Component
 * 
 * Displays the main blog title at the top of the page.
 * This component is the first visual element users see when visiting the blog.
 * 
 * Props:
 *   - name (string): The title/name of the blog to display in the <h1> tag
 * 
 * Connected to:
 *   - App.jsx (parent component) passes blog name from blogData
 * 
 * @param {Object} props - Component props
 * @param {string} props.name - The blog name/title
 * @returns {JSX.Element} Header element with blog title
 */
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
