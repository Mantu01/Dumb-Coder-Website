import React from "react";
import {NavLink, useParams} from "react-router-dom";

const Semester = () => {
  let {courseSem} = useParams();
  return <div className="bg-blue-200 grow">Semester : {courseSem}</div>;
};

export default Semester;
