import React from "react";

// import ProjectDetails from "../Components/ProjectDetails";
import ProjectList from "../Components/Projects/ProjectList";

// import CssProject from "./Projects/CssProject";
// import HtmlProject from "./Projects/HtmlProject";
// import JavaScriptProject from "./Projects/JavaScriptProject";
// import ReactProject from "./Projects/ReactProject";

//icon
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { Redirect, Route, Switch, useParams } from "react-router-dom";
// import HtmlProject from "../Components/Projects/HtmlProject";
// import CssProject from "../Components/Projects/CssProject";
// import JavaScriptProject from "../Components/Projects/JavaScriptProject";
// import ReactProject from "../Components/Projects/ReactProject";
import ProjectDetails from "../Components/ProjectDetails";

const Project = () => {
  const param = useParams();
  const projectsData = [
    { id: "html", name: "Html", logo: <IoLogoHtml5 /> },
    { id: "css", name: "Css", logo: <IoLogoCss3 /> },
    { id: "javaScript", name: "JavaScript", logo: <IoLogoJavascript /> },
    { id: "react", name: "React", logo: <FaReact /> },
  ];

  const projectsLinksData_HTML = [
    { id: "p1", name: "HtmlCloude" },
    { id: "p2", name: "HtmlInterface" },
    { id: "p3", name: "HtmlSkeleton" },
    { id: "p4", name: "HtmlInterface" },
  ];

  const projectsLinksData_CSS = [
    { id: "p1", name: "CssCloude" },
    { id: "p2", name: "InteCssrface" },
    { id: "p3", name: "CssSkeleton" },
    { id: "p4", name: "CssInterface" },
  ];

  // console.log(param.projectId);
  return (
    <div className="w-full h-screen bg-slate-700 mx-[10rem]">
      <section className="text-center pt-[10rem] ">
        <h1 className="pb-4 my-8 text-6xl font-bold text-yellow-50">
          PROJECTS
        </h1>
        <p className="mb-8 text-4xl text-neutral-400">
          This is my all project You can see by Clicking below Link provided
        </p>
      </section>
      <ProjectList projects={projectsData} />
      {/* <Switch> */}
      <Route path="/project/:projectId">
        <ProjectDetails />
      </Route>
      {/* <Route path="/project/css">
          <CssProject />
        </Route>
        <Route path="/project/javaScript">
          <JavaScriptProject />
        </Route>
        <Route path="/project/react">
          <ReactProject />
        </Route> */}
      {/* </Switch> */}
    </div>
  );
};

export default Project;
