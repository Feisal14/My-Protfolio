import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

import GitHubIcon from "@mui/icons-material/GitHub";

import "../styles/ProjectDisplay.css";
import { Button } from "@mui/material";

const ProjectDisplay: React.FC = () => {
  interface RouteParams {
    id: string;
    [key: string]: string | undefined;
  }

  const { id } = useParams<RouteParams>();
  const projectIndex = parseInt(id ?? "0", 10);
  const project = ProjectList[projectIndex];

  if (!project) {
    return <div>Project not found.</div>;
  }
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        {" "}
        <b>Skills: {project.skills}</b>
      </p>

      <a target="_blank">
        <Button variant="contained" href={project.url}>
          WebSite
        </Button>
      </a>

      <GitHubIcon />
    </div>
  );
};

export default ProjectDisplay;
