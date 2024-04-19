import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children, showNavbar }) => {
  const location = useLocation();

  return (
    <div>
      {showNavbar && !['/', '/signin', '/signup'].includes(location.pathname) && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;