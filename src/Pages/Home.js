import React from "react";
import { Link } from "react-router-dom";
import SocialMediaHome from "../Components/SocialMediaHome";
import Card from "../Components/UI/Card";
const Home = () => {
  return (
    <div className="flex-col w-full h-full min-h-screen md:justify-center md:flex md:items-center">
      <SocialMediaHome />
      <div>Hello</div>
      <Link to="/project">
        {/* <button className="px-16 py-4 mt-2 text-xl bg-yellow-600 rounded-lg active:bg-violet-700">
          Project
        </button> */}
        <Card>
          <div>Project</div>
        </Card>
      </Link>
    </div>
  );
};

export default Home;
