import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App"

import Home from "./pages/Home";
import Planet from "./pages/Planet";
import OurDestinations from "./pages/OurDestinations";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path : "/planet",
        element: <Planet/>
      },
      {
        path:"/ourDestinations",
        element:<OurDestinations/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
