import React, { useContext, useState } from "react";
import { GeminiContext } from "./Context/GeminiContext";
import { CiMenuFries } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";
import {X} from "lucide-react"
import ReactMarkdown from "react-markdown";

const Sidebar = () => {
  const {
    newChatbtn,
    summaryResult,
    extend,
    setExtend,
  } = useContext(GeminiContext);

  const [mobileOpen, setMobileOpen] = useState(false);

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
        className={`hidden md:flex flex-col bg-gradient-to-b from-slate-700/90 to-slate-600/90 backdrop-blur-lg transition-all duration-300
        ${extend ? "w-80" : "w-16"} h-screen fixed left-0 top-0 z-20 shadow-xl`}
      >
        {/* Toggle */}
        
        <CiMenuFries
          className="text-3xl mt-6 cursor-pointer mx-auto text-slate-200  transition"
          onClick={() => setExtend(!extend)}
        />
       

        {/* New Summary */}
        <div
          onClick={newChatbtn}
          className="flex cursor-pointer mt-6 items-center gap-2 bg-slate-400/60 hover:bg-slate-500/80 rounded-lg px-3 py-2 justify-center transition w-10/12 mx-auto"
        >
          <IoAddSharp className="text-2xl text-white" />
          {extend && <p className="text-sm text-white">New Summary</p>}
        </div>

        {/* Content */}
        {extend && <div className="px-4">{renderSummaryContent()}</div>}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-30 bg-slate-800/70 backdrop-blur-md p-2 rounded-md text-white"
      >
        <CiMenuFries size={24} />
      </button>

      {/* Mobile Sidebar Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="bg-gradient-to-b from-slate-900/95 to-slate-700/95 backdrop-blur-xl w-72 p-5 text-white shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="mb-4 p-2 bg-white/10 rounded-md"
            >
              <X size={22} />
            </button>

            {/* New Summary */}
            <div
              onClick={() => {
                newChatbtn();
                setMobileOpen(false);
              }}
              className="flex cursor-pointer mb-6 items-center gap-2 bg-slate-600/60 hover:bg-slate-500/80 rounded-lg px-3 py-2 transition"
            >
              <IoAddSharp className="text-2xl text-white" />
              <p className="text-sm text-white">New Summary</p>
            </div>

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
