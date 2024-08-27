import React from "react";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className=" bg-red-400 text-4xl p-10 flex flex-col gap-5 ">
        <li className="bg-blue-300 border-2 p-4 border-black rounded">
          <NavLink to="sem/1">sem 1</NavLink>
        </li>
        <li className="bg-blue-300 border-2 p-4 border-black rounded">
          <NavLink to="sem/2">sem 2</NavLink>
        </li>
        <li className="bg-blue-300 border-2 p-4 border-black rounded">
          <NavLink to="sem/3">sem 3</NavLink>
        </li>
        <li className="bg-blue-300 border-2 p-4 border-black rounded">
          <NavLink to="sem/4">sem 4</NavLink>
        </li>
        <li className="bg-blue-300 border-2 p-4 border-black rounded">
          <NavLink to="sem/5">sem 5</NavLink>
        </li>
        <li className="bg-blue-300 border-2 p-4 border-black rounded">
          <NavLink to="sem/6">sem 6</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
