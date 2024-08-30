// src/Header.tsx
import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="AD.png" alt="Logo" className="logo-image" />
        <div className="logo-text">
          <h1>WeDu</h1>
          <p>Communicate. Collaborate. Create.</p>
        </div>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#pricing">Pricing Plans</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
