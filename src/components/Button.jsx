import React from 'react';

const Button = ({ children, color, bg, width, height, borderRadius, font, size, fontWeight, margin, type, border, outline }) => {
  const styles = {
    color,
    borderRadius,
    backgroundColor: bg,
    width,
    height,
    fontFamily: font,
    fontSize: size,
    fontWeight,
    margin,
    outline,
    border,
  }

  return (
    <button type={type} style={styles}>
      {children}
    </button>
  );
};


Button.defaultProps = {
  color: '#000',
  borderRadius: '10px',
  bg: '#FCE82F',
  width: '205px',
  height: '50px',
  size: '20px',
  font: 'Poppins',
  fontWeight: '700',
  margin: '10px auto',
  type: 'button',
  outline: 'none',
  border: 'none',
};


export default Button;
