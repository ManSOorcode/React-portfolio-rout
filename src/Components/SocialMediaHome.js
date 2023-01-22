import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const SocialMediaHome = () => {
  // const media = [{link:}]
  return (
    <div className="absolute left-0 w-20 h-60 bg-gray">
      <ul className="flex flex-col w-full h-full justify-evenly ">
        <li className="flex items-center justify-center border-4 border-b-0 aspect-square ">
          <Link className="my-auto" to={"#"}>
            {<FaLinkedinIn className="w-8 h-8 text-yellow-50" />}
          </Link>
          {/* {<FaLinkedinIn />} */}
        </li>
        <li className="flex items-center justify-center border-4 border-b-0 aspect-square">
          <Link
            className="my-auto"
            to={"home/https://github.com/ManSOorcode?tab=repositories"}
          >
            {<SiGithub className="w-8 h-8 text-yellow-50" />}
          </Link>
        </li>
        <li className="flex items-center justify-center border-4 aspect-square">
          <Link className="my-auto" to={"#"}>
            {<SiGmail className="w-8 h-8 text-yellow-50" />}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaHome;
