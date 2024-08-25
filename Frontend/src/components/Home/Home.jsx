import React from "react";
import {Link, NavLink} from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="flex gap-5">
        <NavLink to="bca">
          <button className="bg-black text-white p-1 rounded">BCA</button>
        </NavLink>
        <NavLink to="it">
          <button className="bg-black text-white p-1 rounded">IT</button>
        </NavLink>
        <NavLink to="cs">
          <button className="bg-black text-white p-1 rounded">CS</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
