import React from 'react';
import './style/Projects.css'
import ProjectOthers from '../elements/ProjectOthers';
import ProjectsRealisations from '../elements/ProjectsRealisations';

export default function Projects() {
  return (<div className="project-container">
      <ProjectsRealisations />
      <ProjectOthers />
  </div>);
}
