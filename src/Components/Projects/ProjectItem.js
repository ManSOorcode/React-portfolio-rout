import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  return (
    <li className="grid justify-center py-4 ml-2 bg-blue-500 rounded-lg">
      <div className="flex justify-center text-5xl text-white">
        {props.logo}
      </div>
      <Link to={`/project/${props.id}`} className="focus:text-white">
        {props.name}
      </Link>
    </li>
  );
};

export default ProjectItem;
