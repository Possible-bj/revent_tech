import React from 'react';
import Button from './Button';
import BeSocial from '../svgs/be.svg'
import FBSocial from '../svgs/fb.svg'
import BallSocial from '../svgs/ball.svg'
import SocialCircle from './SocialCircle';
import SkyScrapper from '../svgs/skyscrapper.svg';
import Blob from '../svgs/blob.svg';

import '../styles/Top.css'

const socials = [
  {
    svg: BeSocial
  },
  {
    svg: BallSocial
  },
  {
    svg: FBSocial
  },
]

const Top = () => {
  return (
    <div className='topFrame'>
      <div className='topText'>
        <h2>Innovative Solution Taliored to your Business need</h2>
        <br />
        <p>We can partner with your business to provide a symbiotic relationship and synergy to help you or your business achieve more business growth through strategic financial advisory, investment business and human resource planning and management.​</p>
        <Button> Get in touch </Button>
        <div className='socialFrame'>

          {
            socials.map(({ svg }, index) => (
              <SocialCircle key={index} svg={svg} />
            ))
          }
        </div>
      </div>
      <div className='topImg'>
        <img className='blob' src={Blob} alt="" />
        <img className='sky-scrapper' src={SkyScrapper} alt="" />
      </div>
    </div>
  );
}

export default Top;