import React, { Suspense, useContext, lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Map from "./Pages/Map/Map";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

/* import { AuthProviders, AuthContext } from "./contexts/auth.jsx";
 */
export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mapa" element={<Map />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
