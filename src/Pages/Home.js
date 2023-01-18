import React from "react";
import { Link } from "react-router-dom";
import SocialMediaHome from "../Components/SocialMediaHome";
const Home = () => {
  return (
    <div className="flex-col w-full h-full bg-green-700 md:justify-center md:flex md:items-center">
      <SocialMediaHome />
      <div>Hello</div>
      <Link to="/project">
        <button className="px-4 py-2 mt-2 bg-yellow-600 rounded-lg active:bg-violet-700">
          Project
        </button>
      </Link>
    </div>
  );
};

export default Home;
