import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/home" className='nav-link'>Home</Link>
      <Link to="/about" className='nav-link' >About</Link>
      <Link to="/contact" className='nav-link' >Contact</Link>
      <Link to="/qna" className='nav-link'>Q&A</Link>
    </nav>
  );
};

export default Navbar;