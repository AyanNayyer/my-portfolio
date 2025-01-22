import React from "react";
import CustomCursor from "./components/CustomCursor";
import "./App.css";

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <header>
        <h1>Your Name</h1>
      </header>
      <main>
        <section id="about">
          <p>Brief introduction about yourself and your expertise.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project">Project 1</div>
            <div className="project">Project 2</div>
            <div className="project">Project 3</div>
          </div>
        </section>
        <section id="contact">
          <a href="mailto:your@email.com">Contact Me</a>
        </section>
      </main>
    </div>
  );
}

export default App;
