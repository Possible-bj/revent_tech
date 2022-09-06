import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>

        <li className='linkText'>
          <a href='#about' className="active">About Us</a>
        </li>

        <li className='linkText'>
          <a href='#portfolio'>Portfolio</a>
        </li>

        <li className='linkText'>
          <a href='#experience'>Exprience</a>
        </li>

        <li className='linkText'>
          <a href='#contact'>Contact</a>
        </li>

      </ul>
    </nav>
  );
}
export default Navbar;