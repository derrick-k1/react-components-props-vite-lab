# Personal Blog Site - React Components & Props Lab

A personal blog application built with React, demonstrating component composition, prop passing, and state management through data flow.

> **Project Inspiration:** Based on [Dan Abramov's Overreacted](https://overreacted.io/)

## 🎯 Learning Goals

- ✅ Create reusable React components that return JSX
- ✅ Use props to make components dynamic and data-driven
- ✅ Transform arrays of data into lists of components
- ✅ Build a multi-component application with proper data flow
- ✅ Test components to ensure they render correctly with various props

---

## 📋 Project Overview

This project builds a **static personal blog site** called "Underreacted" with the following features:

- **Header Section:** Displays the blog's title
- **About Sidebar:** Shows blog logo and description
- **Article List:** Displays all blog posts in a feed
- **Individual Articles:** Each post shows title, date, and preview

### Component Hierarchy

```
App (root)
├── Header
│   └── h1 (blog name)
├── About
│   ├── img (logo)
│   └── p (description)
└── ArticleList
    └── Article (repeated for each post)
        ├── h3 (title)
        ├── small (date)
        └── p (preview)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone or navigate to the repository:**
   ```bash
   cd react-components-props-vite-lab
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

**Development Server (with hot reload):**
```bash
npm run dev
```
This starts a local development server at `http://localhost:5173`

**Build for Production:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm run preview
```

**Run Tests:**
```bash
npm test
```
All 14 tests verify component rendering and prop handling.

---

## 📦 Project Structure

```
react-components-props-vite-lab/
├── src/
│   ├── components/
│   │   ├── App.jsx              # Root component orchestrating the blog
│   │   ├── Header.jsx           # Blog title header
│   │   ├── About.jsx            # Blog info sidebar
│   │   ├── ArticleList.jsx      # Container for all articles
│   │   └── Article.jsx          # Individual article card
│   ├── data/
│   │   └── blog.js              # Blog data (title, description, posts)
│   ├── __tests__/
│   │   ├── App.test.jsx
│   │   ├── Header.test.jsx
│   │   ├── About.test.jsx
│   │   ├── Article.test.jsx
│   │   └── ArticleList.test.jsx
│   ├── assets/
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

---

## 📝 Component Documentation

### **App.jsx** (Root Component)
**Purpose:** Main application container that manages all blog data and orchestrates child components.

**Props Passed:**
- `Header` receives: `name` (blog title)
- `About` receives: `image` (logo URL), `about` (description)
- `ArticleList` receives: `posts` (array of all blog posts)

**Data Source:** `blogData` from `src/data/blog.js`

**Connected Components:** Header, About, ArticleList

---

### **Header.jsx**
**Purpose:** Displays the blog's main title in the page header.

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | Yes | The title/name of the blog |

**Renders:**
```html
<header>
  <h1>{name}</h1>
</header>
```

**Test Coverage:**
- ✅ Renders `<header>` element
- ✅ Displays blog name in `<h1>` tag

---

### **About.jsx**
**Purpose:** Displays blog information in a sidebar, including logo and description.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | string | "https://via.placeholder.com/215" | Logo/image URL |
| `about` | string | Required | Blog description text |

**Key Features:**
- Responsive image with placeholder default
- Accessible alt text for screen readers
- Sidebar layout with logo above description

**Renders:**
```html
<aside>
  <img src={image} alt="blog logo" />
  <p>{about}</p>
</aside>
```

**Test Coverage:**
- ✅ Renders `<aside>` element
- ✅ Displays image with alt text
- ✅ Uses placeholder when no image provided
- ✅ Displays description paragraph

---

### **ArticleList.jsx**
**Purpose:** Container component that renders all blog articles as a list.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `posts` | array | Array of post objects with id, title, date, preview |

**Key Features:**
- Maps over posts array using `.map()`
- Assigns unique `key` prop to each Article (required by React)
- Renders Article component for each post

**Renders:**
```html
<main>
  {posts.map(post => 
    <Article 
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  )}
</main>
```

**Connected Child Component:** Article

**Test Coverage:**
- ✅ Renders `<main>` element
- ✅ Renders one Article per post in array

---

### **Article.jsx**
**Purpose:** Individual article/post card displaying title, date, and preview.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | Required | Article title |
| `date` | string | "January 1, 1970" | Publication date |
| `preview` | string | Required | Article preview/summary |

**Key Features:**
- Reusable for displaying multiple articles
- Reasonable default for missing dates
- Semantic HTML structure (`<article>` tag)

**Renders:**
```html
<article>
  <h3>{title}</h3>
  <small>{date}</small>
  <p>{preview}</p>
</article>
```

**Parent Component:** ArticleList

**Test Coverage:**
- ✅ Renders `<article>` element
- ✅ Displays title in `<h3>` tag
- ✅ Displays date in `<small>` tag (with default handling)
- ✅ Displays preview text in `<p>` tag

---

## 🧪 Testing

### Test Suite Overview

**Test Files:** 5  
**Total Tests:** 14  
**Status:** ✅ All Passing

```
✓ src/__tests__/App.test.jsx (1 test)
✓ src/__tests__/Header.test.jsx (2 tests)
✓ src/__tests__/About.test.jsx (4 tests)
✓ src/__tests__/Article.test.jsx (5 tests)
✓ src/__tests__/ArticleList.test.jsx (2 tests)
```

### Running Tests

**Run all tests:**
```bash
npm test
```

**Run tests in watch mode:**
```bash
npm test -- --watch
```

**Exit test runner:**
Press `q` to quit the test watcher

### What's Being Tested

1. **Component Rendering:** All components render correct HTML elements
2. **Props Handling:** Components correctly receive and display props
3. **Default Props:** Components use sensible defaults when props are missing
4. **Array Rendering:** ArticleList correctly maps and renders Article components
5. **Accessibility:** Images have alt text for screen readers

---

## 📊 Data Structure

### Blog Data (`src/data/blog.js`)

```javascript
const blogData = {
  name: "Underreacted",              // Blog title
  image: logo,                       // Logo image
  about: "A blog about learning React", // Blog description
  posts: [                           // Array of blog posts
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    // ... more posts
  ]
};
```

### Blog Post Object Structure

```javascript
{
  id: number,              // Unique post identifier
  title: string,           // Post title
  date: string,            // Publication date
  preview: string,         // Preview/summary text
  minutes: number          // Reading time estimate
}
```

---

## ✅ Manual Testing Checklist

### Desktop View
- [ ] Header displays correctly at the top
- [ ] Blog title "Underreacted" is visible
- [ ] Sidebar shows logo and description
- [ ] All 3 articles display in the main area
- [ ] Each article shows title, date, and preview text

### Responsive Design
- [ ] Layout is centered and readable on mobile
- [ ] Logo scales appropriately
- [ ] Text is not too small on smaller screens

### Dynamic Content Testing
- [ ] Changing blog name in data updates the header
- [ ] Modifying article content updates display
- [ ] Adding new posts to the data array displays them

---

## 🔧 Development Notes

### Technologies Used
- **React** 18.3.1 - UI library
- **Vite** 6.0.5 - Build tool and dev server
- **Vitest** 2.0.5 - Testing framework
- **@testing-library/react** 16.2.0 - Component testing utilities

### Key Learning Points

1. **Component Composition:** Breaking UI into small, reusable pieces
2. **Props Drilling:** Passing data from parent to child components
3. **Prop Defaults:** Using sensible defaults for optional props
4. **Array Rendering:** Using `.map()` to render lists of components
5. **Testing:** Verifying component behavior with unit tests

---

## 🎨 Bonus Features (Future Enhancement Ideas)

- Add 'minutes to read' indicators (coffee cups ☕ for <30 min, bento boxes 🍱 for 30+ min)
- Add CSS styling for a polished look
- Implement filtering/search for articles
- Add sorting by date
- Create an individual post detail page
- Add comments section

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Vitest Documentation](https://vitest.dev)
- [React Testing Library](https://testing-library.com/react)
- [Overreacted Blog](https://overreacted.io/) - Inspiration for this project

---

## 📄 License

This project is open source and available for educational purposes.

---

## ✨ Summary

This project demonstrates the fundamentals of React component development:
- Building small, focused components with single responsibilities
- Using props to create flexible, reusable components  
- Managing data flow through component hierarchy
- Testing components to ensure reliable rendering
- Writing clear documentation for maintainability

All components are fully tested and ready for production use!

There aren't tests for this feature, so you'll have to rely on running the code
in the browser to see if your implementation works!
