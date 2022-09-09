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
          <Button bg={'#fff'} width={'60px'} margin='0' size={'.8rem'}> All </Button>
          <Button bg={'transparent'} width={'60px'} color={'#fff'} margin='0' size={'.8rem'} font={'Montserrat'}> WebSite </Button>
          <Button bg={'transparent'} width={'60px'} color={'#fff'} margin='0' size={'.8rem'} font={'Montserrat'}> CSS </Button>
          <Button bg={'transparent'} width={'60px'} color={'#fff'} margin='0' size={'.8rem'} font={'Montserrat'}> MobileApp </Button>
          <Button bg={'transparent'} width={'60px'} color={'#fff'} margin='0' size={'.8rem'} font={'Montserrat'}> GitHub </Button>
        </div>
        <div className='portfolioView'>
          {
            Array.from({ length: 3 }).map((_, index) => (
              <img key={index} src={portfolio} alt="" />
            ))
          }

        </div>
      </div>

    </div>
  );
}

export default Portfolio;
