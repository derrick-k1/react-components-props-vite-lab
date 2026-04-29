import React from "react";

/**
 * About Component
 * 
 * Displays the blog's sidebar information including logo and description.
 * Typically appears next to the main article list.
 * Provides context about the blog's purpose and brand identity.
 * 
 * Props:
 *   - image (string): URL of the blog logo image. Defaults to a placeholder if not provided
 *   - about (string): Brief description of the blog's purpose
 * 
 * Connected to:
 *   - App.jsx (parent component) passes image and about text from blogData
 * 
 * @param {Object} props - Component props
 * @param {string} [props.image="https://via.placeholder.com/215"] - Blog logo URL
 * @param {string} props.about - About/description text for the blog
 * @returns {JSX.Element} Aside element with blog logo and description
 */
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      {/* Blog logo image with alt text for accessibility */}
      <img src={image} alt="blog logo" />
      {/* Blog description/purpose */}
      <p>{about}</p>
    </aside>
  );
}

export default About;
