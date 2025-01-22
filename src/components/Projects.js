import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'A React-based web application' },
    { id: 2, title: 'Project 2', description: 'An e-commerce platform' },
    { id: 3, title: 'Project 3', description: 'A mobile app built with React Native' },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
