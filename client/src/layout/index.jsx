import React from "react";
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
        <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>

        <div
          className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4"
        ></div>
      </div>
      <FooterDashboard />
    </main>
      
    </div>
  );
};

export default Layout;