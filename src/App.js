import React from 'react';
import './App.css';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import Footer from './pages/footer/Footer.jsx';
import Header from './pages/header/Header.jsx';
import Nav from './pages/nav/Nav.jsx';
import Portfolio from './pages/portfolio/Portfolio.jsx';
import Skills from './pages/skills/Skills.jsx';


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
    
  )
}

export default App;