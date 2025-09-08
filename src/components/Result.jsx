import { useContext, useRef, useEffect } from "react";
import { GeminiContext } from "./Context/GeminiContext";
import { assets } from "../assets/assets";
import { FaUserCircle } from "react-icons/fa";
import Loader from "./Loader";
import autoAnimate from "@formkit/auto-animate";
import TextCards from "./TextCards";
import ImageCards from "./ImageCards";
import VideoCard from "./VideoCard";
import { useLocation } from "react-router-dom";
import MemeCard from "./MemeCard";
import { User, Bot } from "lucide-react";

export const Result = () => {
  const location = useLocation();
  const currentPage = location.pathname.replace("/", "");
  const parent = useRef(null);
  const bottomRef = useRef(null);
  const { recentPrompt, result, loading, messages, prompt, handleRegenerate } =
    useContext(GeminiContext);

  // only for aut animations
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  //for scrolling bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto py-4 px-4 sm:px-6 lg:px-8" ref={parent}>
      <div className="max-w-4xl mx-auto space-y-6">
        {messages[currentPage]?.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
              <Bot className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Ready to create amazing {currentPage}?
            </h3>
            <p className="text-slate-400">
              Start by typing your request in the input below
            </p>
          </div>
        )}
        
      {messages[currentPage]?.map((message, index) => (
          <div key={index} className="message animate-fade-in-up">
            {message.role === "user" ? (
              <div className="flex gap-4 items-start justify-end">
                <div className="max-w-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 text-white p-4 rounded-2xl rounded-tr-sm shadow-lg">
                  <p className="text-sm sm:text-base">{message.text}</p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
            ) : (
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center overflow-hidden">
                  <img className="w-full h-full object-cover" src={assets.Cyber} alt="AI" />
                </div>
                {message.loading ? (
                  <div className="flex-1">
                    <Loader />
                  </div>
                ) : (
                  <div className="flex-1 max-w-3xl">
                    {currentPage === "text" && (
                      <TextCards message={message.text} />
                    )}
                    {currentPage === "images" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {message.text.image_post && (
                          <ImageCards imageUrl={message.text.image_post} />
                        )}
                      </div>
                    )}
                    {currentPage === "videos" && (
                      <VideoCard
                        videoUrl={
                          message.videoUrl ||
                          "https://www.w3schools.com/html/mov_bbb.mp4"
                        }
                        initialMessage={
                          message.text ||
                          "This feature is under development and will be available"
                        }
                      />
                    )}
                    {currentPage === "memes" &&
                      message.text.memes_url &&
                      Array.isArray(message.text.memes_url) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {message.text.memes_url.map(
                            ([url, title], memeIndex) => (
                              <MemeCard
                                key={memeIndex}
                                memeUrl={url}
                                initialMessage={
                                  title ||
                                  "This feature is under development and will be available"
                                }
                              />
                            )
                          )}
                        </div>
                      )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        <div className="scrollIndicatore" ref={bottomRef}></div>
      </div>
    </div>
  );
};
          {message.role === "user" ? (
            <div className="flex gap-4 items-start">
              <FaUserCircle className="text-white text-[2.2rem]" />
              <div className="bg-slate-100 text-black p-4 rounded-lg shadow-md">
                {message.text}
              </div>
            </div>
          ) : (
            <div className="ai-message flex gap-4 items-start">
              <img className="rounded-full h-10" src={assets.Cyber} alt="AI" />
              {message.loading ? (
                <Loader />
              ) : (
                <>
                  {currentPage === "text" && (
                    <TextCards
                      message={message.text}
                     
                    />
                  )}
                  {currentPage === "images" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* {message.text.image_post.map((imageUrl, index) => (
                        <ImageCards
                          key={index}
                          imageUrl={imageUrl} // Pass each image URL as an array
                         
                         
                        />
                      ))} */}
                      {message.text.image_post &&<ImageCards
                          imageUrl={message.text.image_post} // Pass each image URL as an array
                          />}
                    </div>
                  )}
                  {currentPage === "videos" && (
                    <VideoCard
                      videoUrl={
                        message.videoUrl ||
                        "https://www.w3schools.com/html/mov_bbb.mp4"
                      }
                      initialMessage={
                        message.text ||
                        "This feature is under development and will be available"
                      }
                     
                    />
                  )}
                  {currentPage === "memes" &&
                    message.text.memes_url &&
                    Array.isArray(message.text.memes_url) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {message.text.memes_url.map(
                          ([url, title], memeIndex) => (
                            <MemeCard
                              key={memeIndex}
                              memeUrl={url}
                              initialMessage={
                                title ||
                                "This feature is under development and will be available"
                              }
                            
                            />
                          )
                        )}
                      </div>
                    )}
                </>
              )}
            </div>
          )}
        </div>
      ))}
      <div className="scrollIndicatore" ref={bottomRef}></div>
    </div>
  );
};
