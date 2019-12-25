import React from 'react';

const ProjectsItemMain = ({ id, title, imgUrl, caption }) => {
  return (
    <div className="projects-item__main">
      {/* <div className="image" style={{ backgroundImage: `url(${imgUrl})` }} /> */}
      <figure className="projects-item__main-effect">
        <img
          className="projects-item__main-image"
          src={imgUrl}
          alt="Main Projects"
        ></img>
        <figcaption className="projects-item__main-caption">
          {caption}
        </figcaption>
      </figure>
    </div>
  );
};

export default ProjectsItemMain;
