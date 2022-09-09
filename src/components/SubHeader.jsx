import React from 'react';
import triRect from '../svgs/triRect.svg'

const SubHeader = ({ children }) => {
  return (
    <div style={{ color: '#fff', display: 'flex', flexDirection: 'column', margin: '30px auto', width: '110px', fontWeight: '900', textAlign: 'center' }}>
      {children}
      <img src={triRect} alt="" />
    </div>
  );
}

export default SubHeader;
