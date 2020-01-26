import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import resume from '../assets/RavshanArtykovResume.pdf';
import { ReactComponent as Menu } from '../assets/SVG/menu.svg';
//import logo from '../assets/logo.png';

const Header = () => {
  const dropDownNode = useRef();
  const [visible, setVisible] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', resizeWindow);
    window.addEventListener('mousedown', hideDropDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeWindow);
    };
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const resizeWindow = () => {
    setDropDown(false);
  };
  const hideDropDown = e => {
    //  console.log('dropdown hide: ', dropDown);
    if (!dropDownNode.current.contains(e.target)) {
      setDropDown(false);
    }
  };
  const handleScroll = () => {
    // const { prevScrollpos } = this.state;
    setDropDown(false);
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
      <div className="options">
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
          onClick={() => setDropDown(!dropDown)}
        >
          RESUME
        </a>
      </div>
    );
  };
  //console.log('dropDown: ', dropDown);
  return (
    <nav className={`header ${!visible ? 'header--hidden' : ''}`}>
      <div className="logo-container">
        <div className="logo" onClick={scrollToTop}>{`<RA>`}</div>
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div className="reg-nav">{headerElements()}</div>

      <div className="mob-wrapper" ref={dropDownNode}>
        <Menu className="mob-menu" onClick={() => setDropDown(!dropDown)} />
        {dropDown ? <div className="mob-nav">{headerElements()}</div> : null}
      </div>
    </nav>
  );
};

export default Header;
