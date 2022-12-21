import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app">
        <Routes>
          <Route element={<Layout />}>
              {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
              <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;