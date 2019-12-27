import React, { useState } from 'react';
import ProjectsItemMain from '../projects-item/projects-item.main';
import ProjectsItemOther from '../projects-item/projects-item.other';
import { PROJECTS_DATA, OTHER_PROJECTS_DATA } from './projects.data.js';

const Projects = () => {
  const [data] = useState(PROJECTS_DATA);
  const [moreData] = useState(OTHER_PROJECTS_DATA);

  return (
    <div className="projects">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Projects</h2>
      </div>
      <div className="main-items u-margin-bottom-medium">
        {data.map(({ id, ...otherProps }) => (
          <ProjectsItemMain key={id} id={id} {...otherProps} />
        ))}
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Other Projects</h2>
      </div>
      <div className="more-items">
        {moreData.map(({ id, ...otherProps }) => (
          <ProjectsItemOther key={id} id={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
