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
    },
    {
      id: 7,
      title: "Resume Chatbot",
      description: "An advanced AI-powered chatbot that intelligently answers questions from a resume using cutting-edge NLP techniques.",
      tech: [
        "LangChain",
        "LangChain-Community",
        "LangChain-Google-GenAI",
        "ChromaDB",
        "PyPDF",
        "Sentence-Transformers",
        "PyPDF2",
        "Python-Dotenv",
        "Pydantic",
        "Google Generative AI (Gemini Model)"
      ],
      highlights: [
        "Used LangChain framework for conversational retrieval workflows",
        "Integrated Google Generative AI (Gemini 2.0) for factual responses",
        "Processed and chunked resumes using PyPDF and RecursiveCharacterTextSplitter",
        "Implemented vector database using ChromaDB for semantic search and retrieval",
        "Built prompt engineering for accurate resume-based Q&A",
        "Utilized Conversation Buffer Memory to store and manage chat history efficiently"
      ],
      features: [
        "Resume-based Q&A chatbot powered by AI",
        "Dynamic interaction with Google Generative AI",
        "Semantic search for retrieving relevant resume sections",
        "Professional formatting and concise responses",
        "Highly customizable prompt template"
      ],
      githubLink: "https://github.com/AyanNayyer/resume-chatbot"
    },
    {
      id: 8,
      title: " AI-Powered Learning Platform",
      description: "A web app tailored for students, instructors, and administrators, featuring AI insights, chatbot support, and course management tools.",
      tech: [
        "Vue.js",
        "Vite",
        "Flask",
        "Flask-SQLAlchemy",
        "LangChain",
        "Google Generative AI",
        "YouTube Transcript API",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Python-Dotenv"
      ],
      highlights: [
        "Built a modern frontend with Vue.js and Vite for a responsive and interactive user experience",
        "Developed robust backend APIs using Flask and Flask-SQLAlchemy",
        "Integrated AI insights for personalized feedback to students and instructors",
        "Implemented a chatbot for real-time student queries during lectures",
        "Enhanced learning through automated video summarization using NLP and AI",
        "Created role-based interfaces for students, instructors, and administrators"
      ],
      features: [
        "AI-powered tutor chatbot for student assistance",
        "Real-time course and deadline management system",
        "Video summarization using YouTube Transcript API and NLP",
        "Personalized feedback for students and instructors",
        "Role-based access for administrators, instructors, and students",
        "Fully customizable environment with modern tools and frameworks"
      ],
      githubLink: "https://github.com/AyanNayyer/academia"
    },
    {
      id: 9,
      title: " Salary Optimization for Employee Retention - Industry 4.0",
      description: "A data-driven Industry 4.0 case study that analyzes employee performance, salary, and retention data to design a fair, performance-aligned compensation model.",
      tech: [
        "Python",
        "Pandas",
        "Seaborn",
        "scikit-learn",
        "Data Analysis",
        "Regression Modeling",
        "Statistical Analysis",
        "HR Analytics"],
        highlights: [
          "Performed regression analysis to identify salary inconsistencies",
          "Built a salary optimization model aligned with employee performance",
          "Identified 36,000+ underpaid high performers at risk of resignation",
          "Derived strategic recommendations to improve retention and morale"
        ],
        features: [
          "Performance vs. salary correlation analysis",
          "Resignation trend analysis by salary band",
          "Regression modeling using scikit-learn",
          "Chi-square testing for statistical validation",
          "Predictive insights for structured salary adjustments"
        ],
        githubLink: "https://github.com/AyanNayyer/Industry4.0_project"
      },
        {
          id: 10,
          title: "Decentralized Escrow & Service Marketplace (Hedera/Ethereum EVM)",
          description: "A full-stack dApp enabling secure, trustless service transactions with on-chain escrow, decentralized identity, and multi-network (ETH/Hedera) support. Clients can request services, deposit funds in escrow, and providers can accept/reject work-all governed by smart contracts.",
          tech: [
            "Solidity",
            "React.js",
            "ethers.js",
            "Hedera Hashgraph",
            "Ethereum Sepolia",
            "MetaMask",
            "Smart Contracts",
            "Web3",
            "LocalStorage"
          ],
          highlights: [
            "Designed and deployed EVM-compatible escrow smart contracts for secure, conditional fund release",
            "Integrated React frontend with MetaMask wallet for seamless blockchain interaction",
            "Enabled cross-network support: works on both Ethereum (Sepolia) and Hedera Testnet/Mainnet",
            "Implemented decentralized identity (mocked DID) and profile management",
            "Built creator dashboard with real-time project status and action flows",
            "Persisted user profiles and services using localStorage for demo purposes"
          ],
          features: [
            "Client-initiated service requests with on-chain escrow deposit",
            "Provider dashboard for accepting/rejecting projects and marking completion",
            "Automatic fund release or refund based on smart contract logic",
            "Network-aware UI: detects and formats ETH/HBAR balances and transactions",
            "Profile and service management with local persistence",
            "MetaMask wallet connection and network switching (ETH/Hedera)",
            "Error handling and user feedback for all blockchain operations"
          ],
          githubLink: "https://github.com/AyanNayyer/dist-trust"
        
      },
      {
        id: 11,
        title: "Task Manager (React + Flask Fullstack App)",
        description: "A modern, full-stack task management web application where users can register, log in, and manage their personal tasks with priorities, completion status, and filtering. Designed for usability, security, and scalability, it provides a seamless experience for everyday task organization.",
        tech: [
          "React.js",
          "React Router",
          "React Query",
          "Axios",
          "Flask",
          "Flask-SQLAlchemy",
          "Flask-JWT-Extended",
          "Flask-CORS",
          "Flask-Bcrypt",
          "SQLite",
          "Python-dotenv",
          "Modern CSS"
        ],
        highlights: [
          "JWT-secured authentication system for user registration and login",
          "RESTful API with Flask, handling all task and user operations",
          "React frontend with protected routes, form validation, and responsive design",
          "Real-time task updates and UI sync using React Query",
          "Robust CORS handling for seamless local development",
          "Persistent storage using SQLAlchemy ORM and SQLite (easily swappable for PostgreSQL/MySQL)",
          "Seed script for demo users and tasks, enabling instant testing"
        ],
        features: [
          "User registration and login with secure password hashing",
          "Add, view, complete, and delete personal tasks",
          "Set task priority (Low, Medium, High) and filter by status (All, Active, Completed)",
          "Dashboard UI with real-time feedback and intuitive controls",
          "Logout and session management",
          "Responsive, mobile-friendly design",
          "Clear error handling and user feedback on all operations"
        ],
        githubLink: "https://github.com/AyanNayyer/task-management-app"
      },
      {
        id: 12,
        title: "Karwaan-e-Swarojgar NGO Website",
        description: "Developed and deployed a modern, responsive website for Karwaan-e-Swarojgar, an NGO focused on community empowerment and social welfare. The site features animated hero sections, mobile-first design, and integrated contact/donation forms to enhance community engagement.",
        tech: [
          "React.js",
          "Framer Motion",
          "React Scroll",
          "Google Forms",
          "CSS3",
          "Vite"
        ],
        highlights: [
          "Fully responsive, mobile-friendly design tailored for accessibility",
          "Animated hero and section transitions using Framer Motion",
          "Smooth scroll navigation with react-scroll",
          "Integrated Google Forms for contact and volunteer sign-up",
          "Direct collaboration with NGO leadership for requirements and feedback",
          "Optimized for SEO and fast load times"
        ],
        features: [
          "Engaging landing page with animated hero section",
          "About, Services, Impact, and Contact sections with clear calls to action",
          "Integrated donation and contact forms for easy outreach",
          "Sticky header with smooth navigation",
          "Consistent branding and color scheme reflecting NGO identity"
        ],
        githubLink: "https://github.com/AyanNayyer/NGO",
        liveDemo: "https://ngo-five-kappa.vercel.app/"
      }

];

const Projects = () => {
  return (
    <div className="projects-container">
  <div className="projects-header">
    <h1 className="projects-title modak-regular">Projects</h1>
    <a 
      href="/Resume.pdf" 
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
