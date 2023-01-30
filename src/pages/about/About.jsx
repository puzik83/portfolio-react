import React from 'react'
import './about.css'
import Me from '../../../public/assets/Me.png'
import CNT from '../../components/CNT'

const About = () => {
  return (
    <section id='about'>
      <h2>About me</h2>
        <div className="container about-container">
          <div className="about-me">
            <div className="about-me-image">
              <img src={ Me } alt="About image" />
            </div>
          </div>
          <div className="about-content">
          I succesfully changed several spheres during my career.
          I am curious for knowledge and not afraid of trying new paths.
          The decision to beecome a front-end Developer is measured and logical.
          I am good at planning, attentive to details, open-minded and great at teamwork.
          My current career goal is to become a valuable software development team member within a year.
          <CNT />
        </div>
        </div>
    </section>
  )
}

export default About