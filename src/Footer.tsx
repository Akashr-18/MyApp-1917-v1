// src/Footer.tsx
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        Developed and maintained by Akash&nbsp;
        <a href="mailto:akash.ravichandran18@gmail.com" className="email-link">
          akash.ravichandran18@gmail.com
        </a>
        &nbsp;♥
      </p>
    </footer>
  );
}

export default Footer;
