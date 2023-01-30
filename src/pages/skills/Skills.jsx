import React from 'react'
import './skills.css'
import { TiTickOutline } from 'react-icons/ti'

const Skills = () => {
  return (
    <section id="skills">
    <h2>Skills and Background</h2>
      <div className="container skills-container">
        <div className="skills-item background">
           <div className="skills-developer">
            <h3>Skills</h3>
              <ul>
                <li><TiTickOutline />HTML5</li>
                <li><TiTickOutline />CSS</li>
                <li><TiTickOutline />Git, GitHub</li>
                <li><TiTickOutline />Javascript</li>
                <li><TiTickOutline />React</li>
              </ul>
            </div>
            <div className="languages">
              <h3>Languages</h3>
              <ul>
                  <li><TiTickOutline />English B2</li>
                  <li><TiTickOutline />German A2</li>
                  <li><TiTickOutline />Russian C2(native)</li>
                </ul>
              </div>
        </div>
        <div className="skills-item education">
          <h3>Education</h3>
          <ul>
                    <li><TiTickOutline />Volgograd State Pedagogical University,
                Bachelor's Degree in Teaching English and German as Foreign Languages, 2001-2006</li>
                    <li><TiTickOutline />Learn Epam, IT Fundamentals, 2022</li>
                    <li><TiTickOutline />RSS School, UpSkill Me Front-End, 2022- in progress</li>
                    <li><TiTickOutline />Maxima School, Front-End and React Basics, 2022 - in progress</li>
                 </ul>
        </div>
      </div>        
    </section>
   
  )
}

export default Skills