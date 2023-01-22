import React from "react";
import Card from "../UI/Card";

const Details = (props) => {
  return (
    <div className="h-[calc(100vh-96px)]  bg-slate-400 w-[100vw]">
      <section className="flex flex-col items-center w-full h-full justify-evenly bg-emerald-400">
        <div className="pt-[14rem] pb-[6rem] m-auto px-[6rem] flex flex-col items-center ">
          <h1 className="text-4xl font-bold text-center uppercase text-yellow-50 mb-9">
            {props.projectData.name}
          </h1>

          <p className="px-8 my-6 text-center">{props.projectData.about}</p>
          <Card>
            <a href={props.projectData.liveLink}>Live Link</a>
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
      <section className="h-full bg-zinc-500">hello</section>
    </div>
  );
};

export default Details;
