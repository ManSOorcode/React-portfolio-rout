import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Card from "../UI/Card";
import Details from "./Details";

const ProjectDesciption = () => {
  const { projectDescriptionId, projectId } = useParams();
  // const param = useParams();

  // console.log(param.projectDescriptionId);

  const projectObject = {
    css: [
      {
        id: "c1",
        name: "button hover effect",
        liveLink: "https://mansoorcode.github.io/07-css-button-hover-effect",
        repoLink:
          "https://github.com/ManSOorcode/07-css-button-hover-effect/pull/1",
        about:
          "In this project when you hover over the button you will the different color are looking behind the button quit nice right.",
      },
      {
        id: "c2",
        name: "responsive card ui design",
        liveLink: "https://mansoorcode.github.io/16-responsive-card-ui-design",
        repoLink:
          "https://github.com/ManSOorcode/16-responsive-card-ui-design/pull/1",
        about:
          "responsive card UI design best suitable for the product selling website who want to give different look to their product during purchase.",
      },
      {
        id: "c3",
        name: "product design",
        liveLink: "https://mansoorcode.github.io/13-product-design",
        repoLink: "https://github.com/ManSOorcode/13-product-design/pull/1",
        about:
          "In this product design I have make the product card which can be use for online web site who sell the product online.",
      },
      {
        id: "c4",
        name: "grid resposive layout",
        liveLink:
          "https://mansoorcode.github.io/03-css-grid-responsive-massonry-layout",
        repoLink:
          "https://github.com/ManSOorcode/03-css-grid-responsive-massonry-layout/pull/1",
        about: ``,
      },
    ],
    javaScript: [
      {
        id: "s1",
        name: "responsive Clock",
        liveLink: "https://mansoorcode.github.io/18-Small-Clock",
        repoLink: "https://github.com/ManSOorcode/18-Small-Clock/pull/1",
        about:
          "This is a real time clock which show the real time and you can see my project live link below",
      },
      {
        id: "s2",
        name: "filter product by search",
        liveLink: "https://mansoorcode.github.io/17-Filter-product-Js",
        repoLink: "https://github.com/ManSOorcode/17-Filter-product-Js/pull/1",
        about: `Idea behind from this project is that you can search any
          item from search bar here I have use javascript for work 
          which will help user to search any products from related 
          Products keywords through search bar`,
      },
      {
        id: "s3",
        name: "Vowal Counter",
        liveLink:
          "https://mansoorcode.github.io/21-Filter-vowal-from-Sentence/",
        repoLink:
          "https://github.com/ManSOorcode/21-Filter-vowal-from-Sentence/pull/1",
        about: `Here, I have create container where you can put any of your text
          and get to know how many vowel in there "Don't forgot to click 
          on  *TRY IT*"`,
      },
      {
        id: "s4",
        name: "random color generator",
        liveLink: "https://mansoorcode.github.io/19-random-color-generator-Js/",
        repoLink:
          "https://github.com/ManSOorcode/19-random-color-generator-Js/pull/1",
        about: `here I have use the Math.random() method for generating random
          number with Math.trunc() for giving integer with help of this
          here I am able to create color code`,
      },
    ],
  };

  let projectData;

  projectData = projectObject[projectId].find(
    (project) => project.id === projectDescriptionId
  );

  const pid = Object.keys(projectObject).find(
    (project) => project === projectId
  );

  console.log(projectObject[projectId][projectDescriptionId]);
  console.log(projectDescriptionId);

  // const did = projectObject[pid][projectDescriptionId];

  // console.log(did);
  // console.log(Object.keys(projectObject));
  // console.log(projects);
  // console.log(projectDescriptionId);

  return (
    <Fragment>
      <Details projectData={projectData} project />
      {/* <div className="h-[calc(100vh-96px)]  bg-slate-400 w-[100vw]">
        <section className="flex flex-col items-center w-full h-full justify-evenly bg-emerald-400">
          <div className="pt-[14rem] pb-[6rem] m-auto px-[6rem] flex flex-col items-center ">
            <h1 className="text-6xl font-bold text-center capitalize text-yellow-50 mb-9">
              {key}
            </h1>

            <p className="my-6 text-center">{key.about}</p>
            <Card>
              <a href={key.liveLink}>Live Link</a>
            </Card>
          </div>
        </section>
        <section className="grid h-full grid-cols-2 bg-white">
          <div className="border mockup-window bg-base-300 ">
            <div className="flex justify-center px-4 py-16 bg-base-200">
              Hello!
            </div>
          </div>
          <div className="mockup-phone border-primary bg-slate-600">
            <div className="bg-black camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">Hi.</div>
            </div>
          </div>
        </section>
        <section className="h-full bg-zinc-500">{projectDescriptionId}</section>
      </div> */}
    </Fragment>
  );
};

export default ProjectDesciption;
