import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Make sure the CSS file is in the same directory

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/listings">Listings</Link>
      <Link to="/about">About</Link>
      {/* Add other navigation links as needed */}
    </nav>
  );
};

export default NavBar;
