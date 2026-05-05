import React from 'react';
import Contact from './contact';

const Home = () => {
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
