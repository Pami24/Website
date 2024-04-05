import React from 'react';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <div className="navbar">
      <a href="#home" className="navbar-link">Home</a>
      <a href="#about" className="navbar-link">About</a>
      <a href="#programs" className="navbar-link">Programs</a>
      <a href="#resources" className="navbar-link">Resources</a>

    </div>
  );
}

export default Navbar;
