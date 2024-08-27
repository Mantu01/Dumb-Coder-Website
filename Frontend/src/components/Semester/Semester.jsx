import React from "react";
import {NavLink, useParams} from "react-router-dom";

const Semester = () => {
  let {courseSem} = useParams();
  return <div>{courseSem}</div>;
};

export default Semester;
