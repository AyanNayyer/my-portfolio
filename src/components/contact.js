import React from "react";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="contact-links">
        <a href="mailto:ayannayyer@gmail.com" aria-label="Email"><FaEnvelope /></a>
        <a href="https://github.com/ayannayyer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/ayannayyer/" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://twitter.com/ayannayyer" aria-label="Twitter"><FaTwitter /></a>
        <a href="https://instagram.com/ayannayyer" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://www.facebook.com/ayannayyer" aria-label="Facebook"><FaFacebook /></a>
      </div>
      <div className="phone">
        <FaPhone /> <span>+91 7979978998</span>
      </div>
      <div className="copyright">
        © {currentYear} Ayan Nayyer
      </div>
    </section>
  );
};

export default Contact;
