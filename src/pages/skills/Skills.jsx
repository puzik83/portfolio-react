import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id="skills">
    <h2>Skills and Background</h2>
      <div className="container skills-container">
        <div className="skills-item background">
           <div className="skills-developer">
            <h3>Skills</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Git, GitHub</li>
                <li>Javascript</li>
                <li>React</li>
              </ul>
            </div>
            <div className="languages">
              <h3>Languages</h3>
              <ul>
                  <li>English B2</li>
                  <li>German A2</li>
                  <li>Russian C2(native)</li>
                </ul>
              </div>
        </div>
        <div className="skills-item education">
          <h3>Education</h3>
          <ul>
                    <li>Volgograd State Pedagogical University,
                Bachelor's Degree in Teaching English and German as Foreign Languages, 2001-2006</li>
                    <li>Learn Epam, IT Fundamentals, 2022</li>
                    <li>RSS School, UpSkill Me Front-End, 2022- in progress</li>
                    <li>Maxima School, Front-End and React Basics, 2022 - in progress</li>
                 </ul>
        </div>
      </div>        
    </section>
   
  )
}

export default Skills