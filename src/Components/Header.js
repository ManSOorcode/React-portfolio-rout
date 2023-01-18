import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Components/Resources/logo.png";

const Header = () => {
  return (
    <header className="w-full h-1/2 bg-slate-600 md:h-24 md:flex md:justify-end ">
      <div className="w-[40%] flex justify-start items-center ml-16">
        <img src={Logo} alt="logo" className="h-12 rounded-full w-17" />
        <h1 className="ml-4">Mansoor Khan</h1>
      </div>
      <nav className="flex justify-end w-[60%]">
        <ul className="w-[60%] h-full text-xl md:flex md:items-center md:justify-between md:mr-16">
          <li>
            <NavLink activeClassName="text-white" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="text-white" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="text-white" to="/project">
              Project
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="text-white" to="/contacts">
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
