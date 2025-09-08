import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopMenu from "./TopMenu";
import PopupDialog from "./PopupDialog";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
      {/* Sidebar */}
      <PopupDialog/>
      <Sidebar />
        

      <div className="flex flex-col flex-1 md:ml-16 lg:ml-20 transition-all duration-300">
        {/* Navbar */}
        <TopMenu />
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto px-2 md:px-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
