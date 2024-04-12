import React from "react";
import ProjectItem from "../components/ProjectItem";
import Proj1 from "../assets/no-image.png";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, id) => {
          return (
            <ProjectItem id={id} image={project.image} name={project.name} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
