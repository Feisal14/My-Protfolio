import React from "react";
import { useNavigate } from "react-router-dom";

interface ProjectItemProps {
  image: string;
  name: string;
  id: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ image, name, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h3>{name}</h3>
    </div>
  );
};

export default ProjectItem;
