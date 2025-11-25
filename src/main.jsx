import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Register from "./pages/Register/index.jsx";
import Home from "./pages/Home/index.jsx";
import HomeEmployee from "./pages/EmployeeHomePage/employee-home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/index.jsx"; // <<-- Seu App principal
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee-home" element={<HomeEmployee />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);