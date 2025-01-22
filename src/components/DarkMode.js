import React from 'react';
import './DarkMode.css';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
      <span className="slider round">
        <svg className="sun" viewBox="0 0 24 24">
          <path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0-2c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3c0 .28.22.5.5.5zm0 14c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5s.5-.22.5-.5v-3c0-.28-.22-.5-.5-.5zm7-7c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5h3c.28 0 .5-.22.5-.5zm-11 0c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5h3c.28 0 .5-.22.5-.5z"/>
        </svg>
        <svg className="moon" viewBox="0 0 24 24">
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
        </svg>
      </span>
    </label>
  );
};

export default DarkModeToggle;
