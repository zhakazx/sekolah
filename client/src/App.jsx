import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Berita from "./pages/Dashboard/Berita";

function App() {
  return (
    <div className="app">
        <Routes>
          <Route element={<DashboardLayout />}>
              {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/master/berita" element={<Berita />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;