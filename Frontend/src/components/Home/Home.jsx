import React from "react";
import {Link, NavLink} from "react-router-dom";
const Home = () => {
  return (
    <div className="grow bg-red-400">
      <div className="h-full flex gap-3 justify-center items-center">
        <div>
          <NavLink to="bca">
            <button className="bg-black text-white p-4 border-white border-2 rounded text-xl">
              BCA
            </button>
          </NavLink>{" "}
        </div>
        <div>
          <NavLink to="it">
            <button className="bg-black text-white  p-4 border-white border-2 rounded">
              IT
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink to="cs">
            <button className="bg-black text-white p-4 border-white border-2  rounded">
              CS
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
