import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { FaRegImage } from "react-icons/fa6";
import { MdOutlineVideoSettings } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import { Typewriter } from "react-simple-typewriter";
import { useContext } from "react";
import { GeminiContext } from "./Context/GeminiContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const HeroSection = () => {
  const { handleInputSubmit } = useContext(GeminiContext);
  const navigate = useNavigate();
  const handleRedirection = (route) => {
    navigate(route);
  };

  const herotexts = ["Social Posts", "Creative Images", "Memes", "Videos"];

  const contributors = [
    {
      name: "Fahad Abbas",
      linkedin: "https://www.linkedin.com/in/fahadabbas-3042b0212/",
      image: assets.fahad,
    },
    {
      name: "Rahul",
      linkedin: "https://www.linkedin.com/in/rahulsinghds/",
      image: assets.rahul,
    },
    {
      name: "Sanket",
      linkedin:
        "https://www.linkedin.com/in/sanket-bodake-166a56294/?utm_source=share",
      image: assets.sanket,
    },
  ];

  const sponsors = [
    { name: "Groq", logo: assets.groq },
    { name: "IM", logo: assets.im },
    { name: "Vectara", logo: assets.vectara },
    { name: "BuildWithAi", logo: assets.buildWithAi },
  ];

  const features = [
    {
      title: "Social Posts",
      icon: <TfiWrite size={30} />,
      desc: "Craft engaging posts tailored for LinkedIn, Twitter, and more.",
    },
    {
      title: "Creative Images",
      icon: <FaRegImage size={30} />,
      desc: "Generate stunning visuals with AI creativity.",
    },
    {
      title: "Memes",
      icon: <GiPartyPopper size={30} />,
      desc: "Light up your socials with viral meme generation.",
    },
    {
      title: "Videos",
      icon: <MdOutlineVideoSettings size={30} />,
      desc: "Produce captivating videos for your audience.",
    },
  ];

  return (
    <div className="homepage text-white">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Unlock the Power of <br />
          <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5547] bg-clip-text text-transparent">
            <Typewriter
              words={herotexts}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          MetaMindAI is your one-stop AI assistant for generating engaging
          social posts, memes, videos, and creative images — tailored to your
          unique needs.
        </p>
        <button
          onClick={() => handleRedirection("/chat")}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#4b90ff] to-[#ff5547] shadow-lg hover:scale-105 transition-transform font-semibold"
        >
          ✨ Try MetaMindAI Now
        </button>
      </section>

      {/* Features */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-14">
          What Can MetaMindAI Do?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg text-center hover:scale-105 transition-transform"
            >
              <div className="mb-4 flex justify-center text-cyan-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-14">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-white/5 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">1. Enter Prompt</h3>
            <p className="text-gray-300 text-sm">
              Tell MetaMindAI what you need — text, images, memes, or videos.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">2. AI Creates</h3>
            <p className="text-gray-300 text-sm">
              Our AI generates content instantly, personalized to your request.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">3. Share & Shine</h3>
            <p className="text-gray-300 text-sm">
              Download, copy, or share your AI-generated content anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-14">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-28 h-28 object-contain rounded-xl hover:scale-110 transition-transform"
            />
          ))}
        </div>
      </section>

      {/* Contributors */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-14">Our Contributors</h2>
        <div className="flex flex-wrap justify-center gap-16">
          {contributors.map((contributor, index) => (
            <div
              key={index}
              className="text-center hover:scale-105 transition-transform"
            >
              <a
                href={contributor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={contributor.image}
                  alt={contributor.name}
                  className="w-28 h-28 rounded-full border-4 border-cyan-500 shadow-lg"
                />
              </a>
              <p className="mt-3 text-lg font-medium">{contributor.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center px-6 bg-gradient-to-r from-slate-500 to-gray-700 rounded-3xl mx-6 mb-20">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Elevate Your Creativity?
        </h2>
        <p className="text-lg text-white/90 mb-10">
          Join thousands of creators using MetaMindAI to supercharge their
          content.
        </p>
        <button
          onClick={() => handleRedirection("/chat")}
          className="px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:scale-110 transition-transform"
        >
          🚀 Start Creating Now
        </button>
      </section>
    </div>
  );
};

export default HeroSection;
