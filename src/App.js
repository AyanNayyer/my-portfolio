import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import DarkModeToggle from './components/DarkMode';
import Home from './components/Home';
import Blog from './components/Blogs';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  
  return (
    <header>
      <div className="nav-controls">
        <div className="mode-toggle">
          <Link to={location.pathname === '/projects' ? '/' : '/projects'} className="nav-link">
            {location.pathname === '/projects' ? 'Home' : 'Projects'}
          </Link>
          <Link to={location.pathname === '/blogs' ? '/' : '/blogs'} className="nav-link">
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

const AppContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Changed to true for default dark mode
  const location = useLocation();

  useEffect(() => {
    // Add dark-mode class by default
    document.body.classList.add('dark-mode');
    updateFavicon(true);
  }, []);

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
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <CustomCursor isDarkMode={isDarkMode} />
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className={`page-container ${location.pathname === '/' ? 'home-page' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/*" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
