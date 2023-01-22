import React, { Fragment } from "react";
// import { FaReact } from "react-icons/fa";
// import { IoLogoHtml5 } from "react-icons/io";
// import { SiCss3 } from "react-icons/si";
// import { TbBrandJavascript } from "react-icons/tb";
import { Link, Route, useParams } from "react-router-dom";
import Card from "./UI/Card";
// import ProjectLinkStr from "./ProjectLinkStr";
// import ProjectDesciption from "./Projects/ProjectDesciption";

const ProjectDetails = (props) => {
  const { projectId } = useParams();

  // const projectsData = [
  //   { id: "html", name: "Html", logo: <IoLogoHtml5 /> },
  //   { id: "css", name: "Css", logo: <SiCss3 /> },
  //   {
  //     id: "javaScript",
  //     name: "JavaScript",
  //     logo: <TbBrandJavascript />,
  //   },
  //   { id: "react", name: "React", logo: <FaReact /> },
  // ];
  // const project = projectsData.find(
  //   (project) => project.id === projectId
  // );
  // console.log(projectId);

  // const ProjectButton = (
  //   <div className="px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500">
  //     {props.children}
  //   </div>
  // );

  const projectsLinksData_HTML = [
    { id: "h1", name: "HtmlCloude" },
    { id: "h2", name: "HtmlInterface" },
    { id: "h3", name: "HtmlSkeleton" },
    { id: "h4", name: "HtmlInterface" },
  ];

  const projectsLinksData_CSS = [
    { id: "c1", name: "button" },
    { id: "c2", name: "card" },
    { id: "c3", name: "product design" },
    { id: "c4", name: "grid" },
  ];

  const projectsLinksData_Script = [
    { id: "s1", name: "Clock" },
    { id: "s2", name: "product" },
    { id: "s3", name: " Counter" },
    { id: "s4", name: "random-color" },
  ];

  const projectsLinksData_React = [
    { id: "r1", name: "React project" },
    { id: "r2", name: "youtub clone" },
    { id: "r3", name: "todolist" },
    { id: "r4", name: "contactApp" },
  ];

  let linkList;

  if (projectId === "html") {
    linkList = projectsLinksData_HTML.map((link) => (
      <li>
        <div className="px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500">
          <Link to={`/project/${projectId}/${link.id}`}>{link.name}</Link>
        </div>
      </li>
    ));
  }
  if (projectId === "css") {
    linkList = projectsLinksData_CSS.map((link) => (
      <li>
        <div className="px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500">
          <Link to={`/project/${projectId}/${link.id}`}>{link.name}</Link>
        </div>
      </li>
    ));
  }

  if (projectId === "javaScript") {
    linkList = projectsLinksData_Script.map((link) => (
      <li>
        <div className="px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500">
          <Link to={`/project/${projectId}/${link.id}`}>{link.name}</Link>
        </div>
      </li>
    ));
  }
  if (projectId === "react") {
    linkList = projectsLinksData_React.map((link) => (
      <li>
        {/* <img></img>
        <h3></h3> */}
        <div className="px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500">
          <Link to={`/project/:projectId/${link.id}`}>{link.name}</Link>
        </div>
      </li>
    ));
  }
  // {console.log(project)}
  return (
    <Fragment>
      <section className="flex items-center justify-center w-full mt-8 ">
        <ul className="grid h-20 grid-cols-4 gap-4 text-center ">{linkList}</ul>
        {/* <p>hello dear</p>
      <div>{projectId}</div> */}
      </section>
    </Fragment>

    // </section>
  );
};

export default ProjectDetails;
