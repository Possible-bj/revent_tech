import React from 'react';
import reventLogo from '../svgs/reventLogo.svg'
import reventLogoText from '../svgs/reventLogoText.svg'
import '../styles/ReventLogo.css'

const ReventLogo = () => {
  return (
    <div className='logoFrame'>
      <img src={reventLogo} className="logo" alt="revent_logo" />
      <img src={reventLogoText} className="logoText" alt="revent_logo_text" />
      <div className='text'>DIGITAL</div>
    </div>
  );
}

export default ReventLogo;
