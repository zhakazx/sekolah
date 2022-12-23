import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Berita from "./pages/Dashboard/Berita";
import Login from "./pages/Login";
import RequireAuth from "./middlewares/requireAuth";

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<DashboardLayout />}>
            {/* <Route element={<RequireAuth />}> */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/master/berita" element={<Berita />} />
            {/* </Route> */}
          </Route>
        </Routes>
    </div>
  );
}

export default App;