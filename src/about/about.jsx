import React from 'react';
import profile_pic from '../assets/profile_pic.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">About</h2>
      </div>
      <div className="about__description">
        <div>
          <p className="paragraph u-center-text u-margin-bottom-big">
            I'm a software developer. I develop websites and web apps. I
            graduated from Moscow Engineering & Physics Institute with a
            bachelor degree in Computer Science and Applied Mathematics. I also
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
          className="profiel-pic"
          style={{ backgroundImage: `url(${profile_pic})` }}
        /> */}
        <img
          className="profile-pic"
          src={profile_pic}
          alt="Photo Profile"
        ></img>
      </div>
    </div>
  );
};

export default About;
