import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'philosophical', name: 'Philosophical' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'technical', name: 'Technical' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Train & Life...',
      category: 'philosophical',
      excerpt: 'Ever travelled in a chair car...?',
      date: '2024-10-28'
    },
    {
      id: 2,
      title: 'Desquamation',
      category: 'philosophical',
      excerpt: 'leaving a little mark...',
      date: '2024-10-20'
    },
    {
      id: 3,
      title: 'The House',
      category: 'philosophical',
      excerpt: 'Should you go inside an open house or not....?',
      date: '2024-10-10'
    },
    {
      id: 4,
      title: 'Why does things happen?',
      category: 'philosophical',
      excerpt: 'Start to question....',
      date: '2024-10-01'
    },
    {
      id: 5,
      title: 'The Library',
      category: 'entertainment',
      excerpt: 'boundaries of her own....',
      date: '2024-10-02'
    },
    {
      id: 6,
      title: 'The Difference',
      category: 'philosophical',
      excerpt: '9/11.....',
      date: '2024-02-20'
    },
    {
      id: 7,
      title: 'To Invest or to Not??',
      category: 'technical',
      excerpt: 'the power of investment....',
      date: '2020-05-01'
    },
    {
      id: 8,
      title: 'Top 5 Hollywood Movies',
      category: 'entertainment',
      excerpt: 'To change your perspective....?',
      date: '2020-07-10'
    },
    {
      id: 9,
      title: 'Love or Like?',
      category: 'philosophical',
      excerpt: 'Some Weird Shit....',
      date: '2020-05-02'
    },
    {
      id: 10,
      title: 'Taxonomy FY 23-24/ INDIA',
      category: 'technical',
      excerpt: 'lets learn about old and new tax regime...',
      date: '2024-02-20'
    },
    {
      id: 11,
      title: 'HIMYM - The Ending.',
      category: 'entertainment',
      excerpt: 'the ending?was it any good...',
      date: '2024-07-04'
    },
    {
      id: 1,
      title: 'Mr. Beast - The Next Big Thing?',
      category: 'entertainment',
      excerpt: 'Is he or is he not going to make it?...',
      date: '2020-03-14'
    }
    // Add more blog posts here
  ];

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
        {blogPosts
          .filter(post => activeCategory === 'all' || post.category === activeCategory)
          .map(post => (
            <motion.article 
              key={post.id}
              className="blog-card"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span className="post-date">{post.date}</span>
            </motion.article>
          ))}
      </motion.div>
    </div>
  );
};

export default Blog;
