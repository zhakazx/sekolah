import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Berita from "./pages/Dashboard/Berita";
import BeritaCreate from "./pages/Dashboard/Berita/CreateBerita";
import UpdateBerita from "./pages/Dashboard/Berita/UpdateBerita";
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
                <Route path="/master/berita/create" element={<BeritaCreate />} />
                <Route path="/master/berita/edit/:id" element={<UpdateBerita />} />
            {/* </Route> */}
          </Route>
        </Routes>
    </div>
  );
}

export default App;