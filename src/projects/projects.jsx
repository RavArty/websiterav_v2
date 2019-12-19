import React, { useState, useEffect } from 'react';
import ProjectsItemMain from '../projects-item/projects-item.main';
import PROJECTS_DATA from './projects.data.js';

const Projects = () => {
  const [data, setData] = useState(PROJECTS_DATA);

  return (
    <div className="projects">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Projects</h2>
      </div>
      <div className="items">
        {data.map(({ id, ...otherProps }) => (
          <ProjectsItemMain key={id} id={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
