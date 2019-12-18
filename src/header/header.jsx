import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">{`<RA>`}</div>
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div className="options">
        <a href="#" className="option">
          ABOUT
        </a>
        <a href="#" className="option">
          PROJECTS
        </a>
        <a href="#" className="option">
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default Header;
