import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { AiOutlineProject } from 'react-icons/ai'
import { MdOutlineContactPage } from 'react-icons/md'

const Nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome /></a>
      <a href='#about'><BsInfoCircle /></a>
      <a href='#skills'><GiSkills /></a>
      <a href='#portfolio'><AiOutlineProject /></a>
      <a href='#contact'><MdOutlineContactPage /></a>
    </nav>
  )
}

export default Nav