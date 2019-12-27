import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
//import logo from '../assets/logo.png';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">{`<RA>`}</div>
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div className="options">
        <Link
          className="option"
          activeClass="active"
          to="about"
          spy={true}
          smooth="easeInOutQuint"
          offset={20}
          duration={1000}
          delay={100}
        >
          ABOUT
        </Link>
        <Link
          className="option"
          activeClass="active"
          to="projects"
          spy={true}
          smooth="easeInOutQuint"
          offset={20}
          duration={1000}
          delay={100}
        >
          PROJECTS
        </Link>
        <Link
          className="option"
          activeClass="active"
          to="contact"
          spy={true}
          smooth="easeInOutQuint"
          offset={20}
          duration={1500}
          delay={100}
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
