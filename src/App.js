import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import CustomCursor from './components/CustomCursor';
import DarkModeToggle from './components/DarkMode';
import './App.css';

const LazyProjects = lazy(() => import('./components/Projects'));

const Contact = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = [
    { icon: <FaEnvelope />, href: "mailto:ayannayyer@gmail.com", label: "Email" },
    { icon: <FaGithub />, href: "https://github.com/ayannayyer", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ayannayyer/", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com/ayannayyer", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://instagram.com/ayannayyer", label: "Instagram" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/ayannayyer", label: "Facebook" },
  ];

  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="contact-links">
        {contactInfo.map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
            {item.icon}
          </a>
        ))}
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

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
  });

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
      <header>
        <div className="mode-toggle">
          <img 
            src={isDarkMode ? '/favicon-dark.ico' : '/favicon-light.ico'} 
            alt={isDarkMode ? 'Dark Mode' : 'Light Mode'} 
            className="mode-icon"
          />
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </header>

      <main>
      <section className="landing-page">
  <div className="landing-content">
    <h1 className="name-title modak-regular">
      Ayan<br />Nayyer
    </h1>
    <p className="subtitle rubik-puddles-regular">Data Science | Web Dev | Literature</p>
  </div>
</section>

        <animated.section style={springProps} ref={ref}>
          <h3>Hey Welcome to my Passion Project. </h3>
        </animated.section>

        <motion.section
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS3 & HTML5</li>
            <li>Node.js</li>
          </ul>
        </motion.section>

        <Suspense fallback={<div>Loading projects...</div>}>
          <LazyProjects />
        </Suspense>

        <Contact />
      </main>
    </div>
  );
};

export default App;
