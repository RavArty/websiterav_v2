import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h2>Logo</h2>
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
