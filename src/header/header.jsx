import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import resume from '../assets/RavshanArtykovResume.pdf';
//import logo from '../assets/logo.png';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto float-right">
          <li className="nav-item mr-5">
            <Link
              className="nav-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth="easeInOutQuint"
              offset={-40}
              duration={1000}
              delay={100}
            >
              ABOUT
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link
              className="nav-link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth="easeInOutQuint"
              offset={-40}
              duration={1000}
              delay={100}
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link
              className="nav-link"
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
          </li>
          <li className="nav-item mr-5">
            <a
              href={resume}
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
