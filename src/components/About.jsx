import React from 'react';
import SubHeader from './SubHeader';
import '../styles/About.css'
import image from '../svgs/image.svg'
import Button from './Button';

const About = () => {
  return (
    <div id='about'>
      <SubHeader> About Us </SubHeader>
      <div className='aboutFrame'>
        <div className='aboutImg'>
          <img src={image} alt="" />
        </div>
        <div className='aboutText'>
          <h2>We focus on value and excellence</h2>
          <br />
          <p>We are focused on providing products which deliver demonstrably good value for our clients and end-customers – be that a specific return, outperforming an index or achieving returns at lower risk.
            <br />
            Through achieving value for the clients whose assets we manage, efficiently controlling costs, effectiveness and efficiency, we deliver value to our shareholders and wider stakeholders​</p>
          <Button> Work with Us </Button>
        </div>
      </div>

    </div>
  );
}

export default About;
