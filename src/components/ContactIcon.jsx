import React from 'react';
import '../styles/ContactIcon.css'

const ContactIcon = ({ icon, link, info }) => {
  return (
    <div className='contactIconFrame'>
      <img src={icon} className="icon" alt="icon" />
      <div className='contactInfo'>{info}</div>
      <div className='contactLink'>{link}</div>
    </div>
  );
}

export default ContactIcon;
