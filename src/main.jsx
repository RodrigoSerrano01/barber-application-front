// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import App from './pages/Home/Index.jsx'
// import Register from './pages/Register/index.jsx'
// import Login from "./pages/Login/index.jsx"
// import AppAux from "./services/App.jsx";


// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <Login/>
// //   </StrictMode>,
// // )
// ReactDOM.createRoot(document.getElementById("root")).render(

//   <StrictMode>

//     <Login />

//   </StrictMode>

// );

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Register from "./pages/Register/index.jsx";
import Home from "./pages/Home/index.jsx";
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
      </Routes>
      </BrowserRouter>
  </StrictMode>
);