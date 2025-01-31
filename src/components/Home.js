// src/components/Home.js
import React, { Suspense } from 'react'; // Add Suspense to the import
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Contact from './contact';  // If Contact is a separate component

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
  });

  return (
    <main>
      <section className="landing-page">
        <div className="landing-content">
          <h1 className="name-title modak-regular">
            Ayan<br />Nayyer
          </h1>
          <p className="subtitle">Data Science | Web Dev | Literature</p>
        </div>
      </section>
      <div className="content-wrapper">

        <Contact />
      </div>
    </main>
  );
};

export default Home;
