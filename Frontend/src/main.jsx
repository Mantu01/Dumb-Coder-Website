import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Bca from "./components/BCA/Bca.jsx";
import Cs from "./components/CS/Cs.jsx";
import It from "./components/IT/It.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "bca",
        element: <Bca />,
      },
      {
        path: "cs",
        element: <Cs />,
      },
      {
        path: "it",
        element: <It />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
