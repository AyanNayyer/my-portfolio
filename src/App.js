import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CustomCursor from './components/CustomCursor';
import DarkModeToggle from './components/DarkMode';
import './App.css';

const LazyProjects = lazy(() => import('./components/Projects'));

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
        <h1>Ayan Nayyer</h1>
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
        <animated.section style={springProps} ref={ref}>
          <h2>About Me</h2>
          <p>I'm a passionate developer with expertise in React and modern web technologies. I love creating interactive and performant web applications.</p>
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

        <section className="contact">
          <h2>Contact</h2>
          <a href="mailto:your@email.com">ayannayyer@gmail.com</a>
        </section>
      </main>
    </div>
  );
};

export default App;
