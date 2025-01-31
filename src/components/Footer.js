// components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="copyright">
        © {currentYear} Ayan Nayyer
      </div>
    </footer>
  );
};

export default Footer;
