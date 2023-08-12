// 1396

import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);
