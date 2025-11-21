import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import { UserContextProvider } from "./context/userContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
  <RouterProvider router={router} />
  </UserContextProvider>
);
