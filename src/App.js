import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import DarkModeToggle from './components/DarkMode';
import Home from './components/Home';
import Blog from './components/Blogs';
import './App.css';

// Header component with useLocation
const Header = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  
  return (
    <header>
      <div className="nav-controls">
        <div className="mode-toggle">
          <Link to={location.pathname === '/blogs' ? '/' : '/blogs'} className="blog-link">
            {location.pathname === '/blogs' ? 'Home' : 'Blog'}
          </Link>
          <img 
            src={isDarkMode ? '/favicon-dark.ico' : '/favicon-light.ico'} 
            alt={isDarkMode ? 'Dark Mode' : 'Light Mode'} 
            className="mode-icon"
          />
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </header>
  );
};

// Main App component without useLocation
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
    updateFavicon(!isDarkMode);
  };
  
  const updateFavicon = (dark) => {
    const favicon = document.getElementById('favicon');
    if (favicon) {
      favicon.href = dark ? '/favicon-dark.ico' : '/favicon-light.ico';
    }
  };

  useEffect(() => {
    updateFavicon(isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
        <CustomCursor isDarkMode={isDarkMode} />
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
