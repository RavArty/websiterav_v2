import React from 'react';
import { ReactComponent as External } from '../assets/SVG/new-tab.svg';

const ProjectsItemMain = ({ id, title, imgUrl, header, caption }) => {
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
          <h3 className="projects-item__main-caption-header">{header}</h3>
          <p className="projects-item__main-caption-body">{caption}</p>
          <External className="projects-item__main-caption-link" />
        </figcaption>
      </figure>
    </div>
  );
};

export default ProjectsItemMain;
