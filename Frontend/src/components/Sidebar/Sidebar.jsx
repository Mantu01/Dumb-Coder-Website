import React from "react";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="flex flex-col justify-between bg-pink-200 p-4">
      <button className="bg-blue-300 border-2 p-4 border-black rounded">
        <NavLink to="sem/1">sem 1</NavLink>
      </button>
      <button className="bg-blue-300 border-2 p-4 border-black rounded">
        <NavLink to="sem/2">sem 2</NavLink>
      </button>
      <button className="bg-blue-300 border-2 p-4 border-black rounded">
        <NavLink to="sem/3">sem 3</NavLink>
      </button>
      <button className="bg-blue-300 border-2 p-4 border-black rounded">
        <NavLink to="sem/4">sem 4</NavLink>
      </button>
      <button className="bg-blue-300 border-2 p-4 border-black rounded">
        <NavLink to="sem/5">sem 5</NavLink>
      </button>
      <button className="bg-blue-300 border-2 p-4 border-black rounded">
        <NavLink to="sem/6">sem 6</NavLink>
      </button>
    </ul>
  );
};

export default Sidebar;
