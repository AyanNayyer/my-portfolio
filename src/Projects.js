import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title modak-regular">Projects</h1>
      <motion.div 
        className="projects-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Your projects will go here */}
      </motion.div>
    </div>
  );
};

export default Projects;
