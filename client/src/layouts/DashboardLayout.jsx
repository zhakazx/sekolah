import React from "react";
import { Outlet } from "react-router-dom";
import NavbarDashboard from '../components/NavbarDashboard';
import FooterDashboard from '../components/FooterDashboard';
import SidebarDashboard from '../components/SidebarDashboard';

const Layout = () => {
  return (
    <div className="flex min-h-screen">
    <SidebarDashboard />

    <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in">
      <NavbarDashboard />
      <div className="main-content flex flex-col flex-grow p-4">
          <div className="flex flex-col flex-grow bg-white rounded mt-2">
              <Outlet />
          </div>
      </div>
      <FooterDashboard />
    </main>
      
    </div>
  );
};

export default Layout;