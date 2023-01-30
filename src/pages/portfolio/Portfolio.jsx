import React from 'react';
import './portfolio.css';
import IMG1 from '../../../public/assets/portfolio1.jpeg';
import IMG2 from '../../../public/assets/portfolio2.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={ IMG1 } alt="The first project"/>
          </div>
          <h3>Shelter project</h3>
          <div className="portfolio-item-btn">
            <a href="https://github.com/puzik83/shelter" className="btn" target="_blank">GitHub</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
          <img src={ IMG2 } alt="The second project"/>
          </div>
          <h3>Portfolio project</h3>
          <div className="portfolio-item-btn">
            <a href="https://github.com/puzik83/portfolio-react" className="btn" target="_blank">GitHub</a>
          </div>
        </article>
      </div>
    </section>
    
  )
}

export default Portfolio