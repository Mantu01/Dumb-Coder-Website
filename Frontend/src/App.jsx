import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
