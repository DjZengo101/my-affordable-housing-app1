import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="copyright">© {year} Affordable Housing Listings</p>
    </footer>
  );
};

export default Footer;
