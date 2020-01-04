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
          <p className="paragraph u-margin-bottom-small">
            Hi, I'm a software developer with a bachelor degree in Computer
            Science from Moscow Engineering & Physics Institute and a
            certificate in Systems Analysis from UCLA Extension.
            <br />
            For the last 10 years, I have worked in different IT companies in
            Moscow. After, I decided to continue my education and in September
            2019 I have graduated from UCLA Extension.
            <br />
            Currently, I've registered a company and working on my own projects.
            You can find some examples below.
          </p>
          <p className="u-margin-bottom-small">
            Technologies I'm working with:
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
