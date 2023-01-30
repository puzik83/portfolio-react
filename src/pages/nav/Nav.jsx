import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { AiOutlineProject } from 'react-icons/ai'
import { MdOutlineContactPage } from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsInfoCircle /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiSkills /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineProject /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactPage /></a>
    </nav>
  )
}


export default Nav