import React from "react";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <div className="social-icons">
        <a href="mailto:ayannayyer@gmail.com" aria-label="Email"><FaEnvelope /></a>
        <a href="https://github.com/ayannayyer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/ayannayyer/" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://twitter.com/ayannayyer" aria-label="Twitter"><FaTwitter /></a>
        <a href="https://instagram.com/ayannayyer" aria-label="Instagram"><FaInstagram /></a>
      </div>
    </>
  );
};


export default Contact;
