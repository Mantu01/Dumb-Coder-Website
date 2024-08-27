import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Bca from "./components/BCA/Bca.jsx";
import Cs from "./components/CS/Cs.jsx";
import It from "./components/IT/It.jsx";
import Semester from "./components/Semester/Semester.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="bca" element={<Bca />}>
        <Route path="sem/:courseSem" element={<Semester />} />
      </Route>
      <Route path="it" element={<It />} />
      <Route path="cs" element={<Cs />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
