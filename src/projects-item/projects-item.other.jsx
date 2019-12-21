import React from 'react';
import { ReactComponent as Folder } from '../assets/SVG/folder.svg';
import { ReactComponent as Github } from '../assets/SVG/github.svg';
import { ReactComponent as External } from '../assets/SVG/new-tab.svg';

const ProjectsItemOther = ({ id, title, description }) => {
  return (
    <div className="projects-item__other u-margin-bottom-big">
      {/* <div className="image" style={{ backgroundImage: `url(${imgUrl})` }} /> */}
      <div className="projects-item__other--header u-margin-bottom-medium">
        <Folder className="projects-item__other--logo" />
        <div className="projects-item__other--options">
          <Github className="projects-item__other--options-option" />
          <External className="projects-item__other--options-option" />
        </div>
      </div>

      <div className="projects-item__other--text">
        <div className="projects-item__other--title u-margin-bottom-small">
          {title}
        </div>
        <div className="projects-item__other--description">{description}</div>
      </div>

      {/* <img className="image" src={imgUrl} alt="Main Projects"></img> */}
    </div>
  );
};

export default ProjectsItemOther;
