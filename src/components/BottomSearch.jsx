import React from "react";
import { assets } from "../assets/assets";
import { IoIosSend } from "react-icons/io";
import { useContext } from "react";
import { GeminiContext } from "./Context/GeminiContext";
import { useLocation } from "react-router-dom";
import { Mic, Image, Paperclip } from "lucide-react";


const BottomSearch = () => {
  const {  onSent, loading, prompt, setPrompt, handleInputSubmit  } =
  useContext(GeminiContext);
  
const location = useLocation();
const currentPage = location.pathname.replace("/", ""); // e.g., "text", "image", "video", "meme"

const getPlaceholder = () => {
  switch(currentPage) {
    case "text": return "Create a LinkedIn post about AI trends...";
    case "images": return "Generate a futuristic cityscape image...";
    case "memes": return "Create a funny meme about coding...";
    case "videos": return "Generate a promotional video script...";
    default: return "What would you like to generate?";
  }
};

  return (
    <div className="sticky bottom-0 bg-gradient-to-t from-slate-900/95 to-transparent backdrop-blur-xl p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative flex items-center gap-3 bg-slate-800/80 backdrop-blur-md border border-slate-600/50 rounded-2xl p-4 shadow-2xl hover:border-slate-500/70 transition-all duration-300 focus-within:border-cyan-500/50 focus-within:shadow-cyan-500/20"
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleInputSubmit(prompt, currentPage)}
        >
          {/* Input */}
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={loading}
            type="text"
            placeholder={getPlaceholder()}
            className="flex-1 bg-transparent text-white placeholder-slate-400 border-none outline-none text-base sm:text-lg"
          />
          
          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Attachment Button */}
            <button
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-200"
              title="Attach file"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            
            {/* Voice Input Button */}
            <button
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-200"
              title="Voice input"
            >
              <Mic className="w-5 h-5" />
            </button>
            
            {/* Send Button */}
            {prompt.trim() && (
              <button
                onClick={() => handleInputSubmit(prompt, currentPage)}
                disabled={loading}
                className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
                title="Send message"
              >
                <IoIosSend className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
        
        {/* Bottom Text */}
        <p className="text-center text-xs sm:text-sm text-slate-500 mt-3">
          Please crosscheck the information from cited links • AI can make mistakes
        </p>
      </div>
    </div>
  );
};

export default BottomSearch;
      <div
        className="search"
        onKeyDown={(e) => e.key === "Enter" &&  handleInputSubmit(prompt,currentPage)}
      >
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled = {loading}
          type="text"
          placeholder="What would you like to generate"
        />
        <div className="searchbar-image">
          {/* <img src={assets.Add_Record} alt="" />
          <img src={assets.Add_Image} alt="" /> */}
          {prompt && (
            <span className="cursor-pointer" onClick={() => handleInputSubmit(prompt,currentPage)}>
              <IoIosSend className=" text-xl md:text-3xl mr-4 text-white hover:text-cyan-400 transition-all ease-in"/>
            </span>
          )}
        </div>
      </div>
      <p className="bottomtext text-white">
        Please crosscheck the information from cited links
      </p>
    </div>
  );
};

export default BottomSearch;
