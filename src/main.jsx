import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";
import { Navbar } from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);
