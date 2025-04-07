import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
/*import './App.css';*/

function App() {
  // Sample data - in a real app, this would typically come from an API or CMS
  const blogData = {
    name: "My Personal Blog",
    image: "/blog-logo.png",
    about: "Welcome to my blog where I share my thoughts on web development, programming, and technology.",
    posts: [
      {
        id: 1,
        title: "Getting Started with React",
        date: "April 7, 2025",
        preview: "React is a powerful library for building user interfaces. In this article, we'll explore the basics of creating components."
      },
      {
        id: 2,
        title: "Understanding JSX",
        date: "April 5, 2025",
        preview: "JSX allows us to write HTML-like code in our JavaScript. Let's dive into how it works and why it's so useful."
      },
      {
        id: 3,
        title: "Component Composition in React",
        date: "April 3, 2025",
        preview: "Learn how to build complex UIs by composing smaller, reusable components together."
      }
    ]
  };

  return (
    <div className="App">
      <Header name={blogData.name} />
      <div className="content-wrapper">
        <About image={blogData.image} about={blogData.about} />
        <ArticleList posts={blogData.posts} />
      </div>
    </div>
  );
}

export default App;