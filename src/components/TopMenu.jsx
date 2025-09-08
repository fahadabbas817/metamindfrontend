import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const TopMenu = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Text',
      link: '/text'
    },
    {
      name: 'Images',
      link: '/images'
    },
    {
      name: 'Memes',
      link: '/memes'
    },
    {
      name: 'Videos',
      link: '/videos'
    }
  ];

  return (
    <div className="sticky top-0 z-20 bg-gradient-to-r from-slate-900/95 to-slate-700/95 backdrop-blur-xl border-b border-slate-600/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Hidden on mobile when sidebar is present */}
          <div className="hidden md:block">
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MetaMindAI
            </h1>
          </div>
          
          {/* Mobile Logo - Only show when sidebar is closed */}
          <div className="md:hidden">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-16">
              MetaMindAI
            </h1>
          </div>

          {/* Navigation Pills */}
          <div className="hidden sm:flex bg-slate-800/50 backdrop-blur-md border border-slate-600/30 rounded-full p-1 gap-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.link}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out hover:scale-105 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Navigation Dropdown */}
          <div className="sm:hidden">
            <select 
              className="bg-slate-800/80 border border-slate-600/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              onChange={(e) => window.location.href = e.target.value}
              defaultValue={window.location.pathname}
            >
              {navLinks.map((link, index) => (
                <option key={index} value={link.link} className="bg-slate-800">
                  {link.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
