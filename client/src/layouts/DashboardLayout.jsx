import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import NavbarDashboard from '../components/NavbarDashboard';
import FooterDashboard from '../components/FooterDashboard';
import SidebarDashboard from '../components/SidebarDashboard';
import { selectCurrentUser, selectCurrentToken } from '../features/auth/authSlice';
import { useSelector } from "react-redux";

const Layout = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return (
    token ? (
    <div className="flex min-h-screen bg-100">
    <SidebarDashboard />

    <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in">
      <NavbarDashboard user={user} />
      <div className="main-content flex flex-col flex-grow p-4">
          <div className="flex flex-col flex-grow bg-white rounded mt-2">
              <Outlet />
          </div>
      </div>
      <FooterDashboard />
    </main>
      
    </div>
    ) : <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default Layout;