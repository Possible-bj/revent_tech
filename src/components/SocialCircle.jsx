import React from 'react';
import '../styles/SocialCircle.css'

const SocialCircle = ({ svg }) => {
  return (
    <div className='socialSvg'>
      <img src={svg} alt="svg" />
    </div>
  );
};


SocialCircle.defaultProps = {

};


export default SocialCircle;
