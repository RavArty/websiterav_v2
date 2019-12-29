import React from 'react';
import profile_pic from '../assets/profile_pic.jpg';
//import logo from '../assets/logo.png';

const About = () => {
  return (
    <div className="about">
      <div className="u-center-text u-margin-bottom-medium">
        <h2 className="heading-secondary">About</h2>
      </div>
      <div className="about__description">
        <div className="about__description--text">
          <p className="paragraph u-margin-bottom-big">
            I'm a software developer. I develop websites and web apps. I have a
            bachelor degree from Moscow Engineering & Physics Institute in
            Computer Science and Applied Mathematics. I also graduated from UCLA
            Extension with a certificate in Systems Analysis. Technologies I am
            working with:
          </p>

          <ul className="list">
            <li className="list__item">JavaScript</li>
            <li className="list__item">React</li>
            <li className="list__item">NodeJS</li>
            <li className="list__item">HTML & SCSS</li>
            <li className="list__item">TypeScript</li>
            <li className="list__item">Express</li>
          </ul>
        </div>

        {/* <div
          className="profile-pic"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        /> */}
        <img className="profile-pic" src={profile_pic} alt="Profile"></img>
      </div>
    </div>
  );
};

export default About;
