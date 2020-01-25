import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import resume from '../assets/RavshanArtykovResume.pdf';
//import logo from '../assets/logo.png';

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    // const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    setPrevScrollpos(currentScrollPos);
    setVisible(visible);
    // this.setState({
    //   prevScrollpos: currentScrollPos,
    //   visible
    // });
  };

  const headerElements = () => {
    return (
      <>
        <Link
          className="option"
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
        <Link
          className="option"
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
        <a
          href={resume}
          className="option"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </>
    );
  };

  return (
    <nav className={`header ${!visible ? 'header--hidden' : ''}`}>
      <div className="logo-container">
        <div className="logo" onClick={scrollToTop}>{`<RA>`}</div>
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div className="options">{headerElements()}</div>

      <div className="mob-wrapper">
        <div className="mob-nav">{headerElements()}</div>
      </div>
    </nav>
  );
};

export default Header;
