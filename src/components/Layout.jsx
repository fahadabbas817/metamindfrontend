import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopMenu from "./TopMenu";
import PopupDialog from "./PopupDialog";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      {/* Sidebar */}
      <PopupDialog/>
      <Sidebar />
        

      <div className="flex flex-col flex-1">
        {/* Navbar */}
<TopMenu />
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
