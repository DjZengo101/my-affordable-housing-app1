import React from 'react';
import './Footer.css'; // Make sure the CSS file is in the same directory

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="copyright">© {year} Affordable Housing Listings</p>
    </footer>
  );
};

export default Footer;
