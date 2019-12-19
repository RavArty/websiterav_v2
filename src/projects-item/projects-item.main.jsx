import React from 'react';

const ProjectsItemMain = ({ id, title, imgUrl }) => {
  return (
    <div className="projects-item__main">
      {/* <div className="image" style={{ backgroundImage: `url(${imgUrl})` }} /> */}
      <img className="image" src={imgUrl} alt="Main Projects"></img>
    </div>
  );
};

export default ProjectsItemMain;
