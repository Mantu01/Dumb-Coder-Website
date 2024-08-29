import React from "react";
import Semester from "../Semester/Semester";
import {NavLink, Outlet} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Bca = () => {
  return (
    <div className="flex grow">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Bca;
