import React, { useContext, useState } from "react";
import { GeminiContext } from "./Context/GeminiContext";
import { CiMenuFries } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";
import { X, Home, Type, Image, Smile, Video } from "lucide-react";
import { NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Sidebar = () => {
  const {
    newChatbtn,
    summaryResult,
    extend,
    setExtend,
  } = useContext(GeminiContext);

  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Text", path: "/text", icon: Type },
    { name: "Images", path: "/images", icon: Image },
    { name: "Memes", path: "/memes", icon: Smile },
    { name: "Videos", path: "/videos", icon: Video },
  ];

  const renderSummaryContent = () => (
    <div className="mt-6 p-2">
      <h3 className="text-lg font-bold text-white mb-3">Summary</h3>
      <div className="max-h-[30rem] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
        {summaryResult !== "" && (
          <div className="bg-white/5 backdrop-blur-md text-white rounded-xl p-4 shadow-lg">
            {/* Render Markdown summary */}
            <ReactMarkdown className="prose prose-invert prose-sm leading-relaxed mb-4">
              {summaryResult?.summary}
            </ReactMarkdown>

            {/* Render metadata */}
            {summaryResult?.metadata?.length > 0 && (
              <div>
                <h4 className="text-md font-semibold mb-3">Related Articles</h4>
                <ul className="space-y-3">
                  {summaryResult?.metadata.map((item, index) => (
                    <li
                      key={index}
                      className="bg-slate-700/60 p-3 rounded-lg hover:bg-slate-600/80 transition-colors"
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline font-medium block mb-1"
                      >
                        {item.title}
                      </a>
                      <p className="text-sm text-gray-300">{item.snippet}</p>
                      <p className="text-xs text-gray-400 mt-1">{item.source}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`hidden md:flex flex-col bg-gradient-to-b from-slate-800/95 to-slate-700/95 backdrop-blur-xl border-r border-slate-600/50 transition-all duration-300 ease-in-out
        ${extend ? "w-80" : "w-16 lg:w-20"} h-screen fixed left-0 top-0 z-30 shadow-2xl`}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-600/30">
          <div className="flex items-center justify-center">
            <button
              onClick={() => setExtend(!extend)}
              className="p-2 rounded-lg hover:bg-slate-600/50 transition-colors"
            >
              <CiMenuFries className="text-2xl text-slate-200" />
            </button>
          </div>
          {extend && (
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MetaMindAI
              </h2>
            </div>
          )}
        </div>

        {/* New Summary */}
        <div
          onClick={newChatbtn}
          className={`flex cursor-pointer mt-4 mx-4 items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 rounded-xl px-3 py-3 transition-all duration-200 hover:scale-105 ${
            !extend ? "justify-center" : ""
          }`}
        >
          <IoAddSharp className="text-xl text-cyan-400" />
          {extend && <p className="text-sm font-medium text-white">New Summary</p>}
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-2 space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 hover:bg-slate-600/50 group ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400"
                      : "text-slate-300 hover:text-white"
                  } ${!extend ? "justify-center" : ""}`
                }
              >
                <IconComponent className="text-xl flex-shrink-0" />
                {extend && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </NavLink>
            );
          })}
        </nav>
        {/* Content */}
        {extend && <div className="px-4 flex-1 overflow-hidden">{renderSummaryContent()}</div>}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-40 bg-slate-800/90 backdrop-blur-md p-3 rounded-xl text-white shadow-lg hover:bg-slate-700/90 transition-colors"
      >
        <CiMenuFries size={24} />
      </button>

      {/* Mobile Sidebar Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="bg-gradient-to-b from-slate-900/98 to-slate-700/98 backdrop-blur-xl w-80 p-6 text-white shadow-2xl border-r border-slate-600/50">
            {/* Close Button */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MetaMindAI
              </h2>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* New Summary */}
            <div
              onClick={() => {
                newChatbtn();
                setMobileOpen(false);
              }}
              className="flex cursor-pointer mb-6 items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 rounded-xl px-4 py-3 transition-all duration-200"
            >
              <IoAddSharp className="text-xl text-cyan-400" />
              <p className="text-sm font-medium text-white">New Summary</p>
            </div>

            {/* Mobile Navigation */}
            <nav className="mb-6 space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-slate-600/50 ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400"
                          : "text-slate-300 hover:text-white"
                      }`
                    }
                  >
                    <IconComponent className="text-xl" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </NavLink>
                );
              })}
            </nav>

            {/* Content */}
            {renderSummaryContent()}
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
