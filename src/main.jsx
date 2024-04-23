import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import AddMilk from "./components/AddMilk";
import UpdateMilk from "./components/UpdateMilk";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/milk"),
  },
  {
    path: "addMilk",
    element: <AddMilk></AddMilk>,
  },
  {
    path: "updateMilk/:id",
    element: <UpdateMilk></UpdateMilk>,
    loader: ({ params }) => fetch(`http://localhost:5000/milk/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
