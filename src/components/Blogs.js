import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams, Routes, Route, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

// Individual Blog Post Component
const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) return <div>Post not found</div>;
  const contentWithoutTitle = post.content.replace(/<h2>.*<\/h2>/, '');

  return (
    <motion.div 
      className="blog-post"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button 
        className="back-button"
        onClick={() => navigate('/blogs')}
      >
        ← Back to Posts
      </button>
      <article>
        <h1 className="post-title">{post.title}</h1>
        <div 
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </motion.div>
  );
};

// Blog List Component
const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'philosophical', name: 'Philosophical' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'technical', name: 'Technical' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-container">
      <h1 className="blog-title modak-regular">Blog</h1>
      
      <div className="category-filters">
        <button 
          className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <motion.div 
        className="blog-grid"
        layout
      >
        <AnimatePresence>
          {filteredPosts.map(post => (
            <motion.article 
              key={post.id}
              className="blog-card"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => navigate(`/blogs/${post.id}`)}
            >
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span className="post-date">{post.date}</span>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// Main Blogs Component
const Blogs = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/:id" element={<BlogPost />} />
    </Routes>
  );
};

export default Blogs;
