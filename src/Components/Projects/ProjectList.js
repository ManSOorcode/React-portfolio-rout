import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = (props) => {
  return (
    <section>
      <ul className="grid grid-cols-4 text-4xl ">
        {props.projects.map(
          (project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              name={project.name}
              logo={project.logo}
            />
          )
          // console.log(project.logo)
        )}
      </ul>
    </section>
  );
};

export default ProjectList;
