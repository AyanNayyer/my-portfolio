import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
/*import { Link } from 'react-router-dom';*/
import './Project.css';

const projects = [
    {
      id: 1,
      title: "Crime Category Prediction ML Model",
      description: "A machine learning model that predicts crime categories based on comprehensive incident data including location, time, victim demographics, and other key attributes.",
      tech: ["Python", "Machine Learning", "Data Analysis", "Predictive Modeling"],
      highlights: [
        "Developed predictive models for law enforcement strategy enhancement",
        "Analyzed complex dataset with multiple variables",
        "Implemented crime category classification system"
      ],
      features: [
        "Location-based crime analysis",
        "Temporal pattern recognition",
        "Demographic data integration",
        "Multi-variable prediction model"
      ],
      githubLink: "https://github.com/AyanNayyer/crime-prediction"
    },
    {
      id: 2,
      title: "PlayIT - Music Streaming Service",
      description: "A full-stack music streaming web application built with VueJS and Flask, featuring real-time functionality and automated background tasks.",
      tech: ["VueJS", "Flask", "Redis", "Celery", "Webhooks"],
      highlights: [
        "Implemented Redis caching for improved performance",
        "Developed automated batch jobs for scheduled emails",
        "Integrated Google Space messages via Webhooks"
      ],
      features: [
        "Music streaming functionality",
        "Real-time caching with Redis",
        "Automated email notifications",
        "Google Space integration",
        "RESTful API implementation"
      ],
      githubLink: "https://github.com/AyanNayyer/PlayIT"
    },
    {
      id: 3,
      title: "BasketIT - Grocery Store Web App",
      description: "A Flask-based grocery store web application with comprehensive product management and shopping cart functionality.",
      tech: ["Flask", "Python", "SQLAlchemy", "RESTful APIs", "HTML/CSS"],
      highlights: [
        "Implemented complete CRUD operations",
        "Developed shopping cart system",
        "Created RESTful APIs for data management"
      ],
      features: [
        "Product management system",
        "Section-wise categorization",
        "Interactive shopping cart",
        "User purchase tracking",
        "Dynamic product display"
      ],
      githubLink: "https://github.com/AyanNayyer/BasketIt"
    },
    {
      id: 4,
      title: "Bharat Kirana Store - Data Analysis Project",
      description: "A comprehensive business data management project analyzing operational efficiency through data analysis for a local grocery store, implementing demand forecasting and inventory optimization.",
      tech: ["Python", "Data Analysis", "Statistical Modeling", "EOQ Model", "Regression Analysis"],
      highlights: [
        "Implemented EOQ (Economic Order Quantity) model for inventory optimization",
        "Developed demand forecasting models with 81% accuracy (R² score of 0.81)",
        "Conducted Pareto analysis identifying key revenue-generating products",
        "Created seasonal trend analysis for festival periods"
      ],
      features: [
        "Data cleaning and exploratory analysis",
        "Sales trend visualization and forecasting",
        "Inventory optimization strategies",
        "Product segmentation analysis",
        "Cost sensitivity analysis"
      ],
      githubLink: "https://github.com/AyanNayyer/bdm"
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description: "A minimalist portfolio website built with React, featuring dark mode, blog functionality, and smooth animations.",
      tech: ["React", "React Router", "Framer Motion", "CSS3", "JavaScript"],
      highlights: [
        "Implemented dark/light mode theming",
        "Created responsive blog system with category filtering",
        "Built projects showcase with detailed cards",
        "Designed minimalist UI with smooth transitions"
      ],
      features: [
        "Custom cursor implementation",
        "Dynamic navigation system",
        "Responsive design",
        "Blog with categorized posts",
        "Animated page transitions"
      ],
      githubLink: "https://github.com/AyanNayyer/my-portfolio"
    },
    {
      id: 6,
      title: "Cyclistic Bike-Share Analytics",
      description: "A comprehensive data analysis case study for a Chicago-based bike-sharing company, focusing on converting casual riders to annual members through data-driven insights.",
      tech: ["R", "SQL", "Data Analysis", "Data Visualization", "Statistical Analysis", "ggplot2", "dplyr", "tidyverse"],
      highlights: [
        "Analyzed ride patterns between annual members and casual riders",
        "Created data visualizations using R and ggplot2",
        "Developed actionable marketing recommendations",
        "Processed and cleaned large-scale trip data"
      ],
      features: [
        "Ride length analysis and comparisons",
        "User behavior pattern identification",
        "Statistical calculations and summaries",
        "Data-driven marketing strategy recommendations",
        "Interactive visualizations"
      ],
      githubLink: "https://github.com/AyanNayyer/google-data-analytic"
    }

];

const Projects = () => {
  return (
    <div className="projects-container">
  <div className="projects-header">
    <h1 className="projects-title modak-regular">Projects</h1>
    <a 
      href="/Resume_Latest.pdf" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="resume-link"
    >
      Resume
    </a>
  </div>

      <motion.section
  className="skills-section"
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
  <h2>Skills</h2>
  <ul>
    {/* Frontend */}
    <li>React</li>
    <li>NodeJS</li>
    <li>VueJS</li>
    <li>JavaScript</li>
    <li>HTML5 & CSS3</li>
    <li>Framer Motion</li>

    {/* Backend */}
    <li>Flask</li>
    <li>Redis</li>
    <li>Celery</li>
    <li>RESTful APIs</li>

    {/* Data Science & Analytics */}
    <li>Python</li>
    <li>R Programming</li>
    <li>SQL</li>
    <li>Machine Learning</li>
    <li>Data Analysis</li>
    <li>Statistical Modeling</li>
    <li>Data Visualization</li>

    {/* Tools & Libraries */}
    <li>ggplot2</li>
    <li>dplyr</li>
    <li>tidyverse</li>
    <li>SQLAlchemy</li>
    <li>Git</li>
    <li>Webhooks</li>
  </ul>
</motion.section>

      <motion.div 
        className="projects-grid"
        layout
      >
        <AnimatePresence>
          {projects.map(project => (
            <motion.article 
              key={project.id}
              className="project-card"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-features">
                {project.features.map((feature, index) => (
                  <span key={index} className="feature-item">• {feature}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
