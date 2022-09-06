import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import ReventLogo from '../components/ReventLogo';
import Top from '../components/Top';
import Contact from '../components/Contact';
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <ReventLogo />
        <Top />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
