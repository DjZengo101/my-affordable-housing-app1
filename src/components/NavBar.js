import React from 'react';
import { NavLink } from 'react-router-dom'; // Using NavLink for active state styling
import './NavBar.css'; // Make sure the CSS file is in the same directory

const NavBar = () => {
  const getNavLinkClass = (isActive) => {
    return isActive ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>Home</NavLink>
      <NavLink to="/listings" className={({ isActive }) => getNavLinkClass(isActive)}>Listings</NavLink>
      <NavLink to="/about" className={({ isActive }) => getNavLinkClass(isActive)}>About</NavLink>
      {/* Add other navigation links as needed */}
    </nav>
  );
};

export default NavBar;
