import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Made with 💝 by Piyush</p>
    </footer>
  );
};

export default Footer;
