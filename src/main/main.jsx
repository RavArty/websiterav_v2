import React from 'react';
import profile_pic from '../assets/profile_pic.jpg';

const Main = () => {
  return (
    <div className="main">
      <div className="main__text-box">
        <h1 className="main-primary">
          <span className="main-primary--main">Ravshan Artykov</span>
          <span className="main-primary--sub">
            Software Developer
            <br />
            Web Developer
            <br />
            Front End Developer
          </span>
        </h1>
      </div>
      <div className="profile">
        <img className="profile--pic" src={profile_pic} alt="Profile"></img>
      </div>
    </div>
  );
};

export default Main;
