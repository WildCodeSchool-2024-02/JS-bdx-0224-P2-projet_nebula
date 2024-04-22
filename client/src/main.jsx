import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import Planet from "./pages/Planet";
import OurDestination from "./pages/OurDestination";
import Booking from "./pages/Booking";
import TrafficInfo from "./pages/TrafficInfo";
import YourTrip from "./pages/YourTrip";
import Contact from "./pages/Contact";
import ErrorPage404 from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/planet",
        element: <Planet />,
      },
      {
        path: "/ourDestinations",
        element: <OurDestination />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/trafficInfo",
        element: <TrafficInfo />,
      },
      {
        path: "/yourTrip",
        element: <YourTrip />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <ErrorPage404 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
