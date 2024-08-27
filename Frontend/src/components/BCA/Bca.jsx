import React from "react";
import Semester from "../Semester/Semester";
import {NavLink, Outlet} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Bca = () => {
  return (
    <div className="h-full flex gap-10">
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Bca;
