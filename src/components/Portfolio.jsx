import React from 'react';
import SubHeader from './SubHeader';
import portfolio from '../svgs/portfolio.svg';
import Button from './Button';
import '../styles/Portfolio.css'

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <SubHeader> Portfolio </SubHeader>
      <div className='portfolioFrame'>
        <div className='portfolioTabs'>
          <Button bg={'#fff'} width={'60px'} margin='0' size={'.9rem'}> All </Button>
          <Button bg={'transparent'} width={'60px'} color={'#fff'} margin='0' size={'.9rem'}> WebSite </Button>
          <Button bg={'transparent'} width={'60px'} color={'#fff'} margin='0' size={'.9rem'}> CSS </Button>
          <Button bg={'transparent'} width={'60px'} color={'#fff'} margin='0' size={'.9rem'}> MobileApp </Button>
          <Button bg={'transparent'} width={'60px'} color={'#fff'} margin='0' size={'.9rem'}> GitHub </Button>
        </div>
        <div className='portfolioView'>
          {
            Array.from({ length: 3 }).map((_) => (
              <img src={portfolio} alt="" />
            ))
          }

        </div>
      </div>

    </div>
  );
}

export default Portfolio;
