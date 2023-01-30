import React from 'react';
import './header.css';
import CNT from '../../components/CNT.js';
import Photo from '../../../public/assets/Photo.png';

const Header = () => {
  return (
    <header className='container header-container'>
      <h1>Tatiana Zakharova</h1>
      <h2 className='light'>Junior Front-end Developer</h2>
      <CNT />
      <div className='photo'>
      <img src={ Photo } alt="photo" />
      </div>
    </header>
  )
}

export default Header