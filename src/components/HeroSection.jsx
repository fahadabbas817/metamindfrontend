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
import { ArrowRight, Sparkles, Zap, Users, Star } from "lucide-react";

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
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Creative Images",
      icon: <FaRegImage size={30} />,
      desc: "Generate stunning visuals with AI creativity.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Memes",
      icon: <GiPartyPopper size={30} />,
      desc: "Light up your socials with viral meme generation.",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Videos",
      icon: <MdOutlineVideoSettings size={30} />,
      desc: "Produce captivating videos for your audience.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "10K+", label: "Content Generated" },
    { number: "500+", label: "Happy Users" },
    { number: "4.9", label: "User Rating" },
    { number: "24/7", label: "AI Availability" },
  ];

  return (
    <div className="homepage text-white min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Powered by Advanced AI</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Unlock the Power of <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent relative">
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

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up delay-200">
            MetaMindAI is your <span className="text-cyan-400 font-semibold">one-stop AI assistant</span> for generating engaging
            social posts, memes, videos, and creative images — tailored to your unique needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-300">
            <button
              onClick={() => handleRedirection("/text")}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Try MetaMindAI Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-slate-600 hover:border-cyan-500 rounded-xl font-semibold text-lg hover:bg-slate-800/50 transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-400">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Can <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">MetaMindAI</span> Do?
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
              Discover the powerful AI capabilities that will transform your content creation workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 lg:p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`mb-4 p-3 bg-gradient-to-br ${feature.color} rounded-xl w-fit`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
              Get started with MetaMindAI in just three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "1",
                title: "Enter Prompt",
                desc: "Tell MetaMindAI what you need — text, images, memes, or videos.",
                icon: "✨"
              },
              {
                step: "2", 
                title: "AI Creates",
                desc: "Our AI generates content instantly, personalized to your request.",
                icon: "🤖"
              },
              {
                step: "3",
                title: "Share & Shine", 
                desc: "Download, copy, or share your AI-generated content anywhere.",
                icon: "🚀"
              }
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8 hover:border-slate-600 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 -right-6 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Sponsors</h2>
            <p className="text-lg sm:text-xl text-slate-400">
              Trusted by industry leaders and innovative companies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 place-items-center">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-20 h-20 lg:w-24 lg:h-24 object-contain rounded-xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Contributors</h2>
            <p className="text-lg sm:text-xl text-slate-400">
              Meet the talented team behind MetaMindAI
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className="group text-center hover:scale-105 transition-all duration-300"
              >
                <a
                  href={contributor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative mb-4">
                    <img
                      src={contributor.image}
                      alt={contributor.name}
                      className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-lg lg:text-xl font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {contributor.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-8 lg:p-16 text-center shadow-2xl">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Join Thousands of Creators</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Ready to Elevate Your Creativity?
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of creators using MetaMindAI to supercharge their content and unlock unlimited creative potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => handleRedirection("/text")}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-110 transition-all duration-300 flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Start Creating Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-2 text-slate-400">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Free to get started</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
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
