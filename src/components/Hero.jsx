import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";
import HeroImage from "../assets/pragati.jpg";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadBasic(engine);
  }, []);

  return (
    <div
      className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-20 px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen flex items-center"
      id="home"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10 pointer-events-none"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 5 } },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#ffffff", distance: 100 },
          },
        }}
      />

      {/* Blurred Circles */}
      <div className="absolute top-[-3rem] left-[-3rem] w-64 h-64 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-[-4rem] right-[-3rem] w-72 h-72 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-ping -z-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={HeroImage}
            alt="Pragati Nahak"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
            I'm{" "}
            <span className="bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text animate-pulse">
              Pragati Nahak
            </span>
            , Full-Stack Developer
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            I specialize in building modern, efficient, and responsive web applications that blend elegant UI with powerful backend systems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center sm:justify-center md:justify-start">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:scale-105 transition-transform text-center"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:scale-105 transition-transform text-center"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Decorative SVG Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#0f0c29"
          fillOpacity="1"
          d="M0,64L48,101.3C96,139,192,213,288,229.3C384,245,480,203,576,192C672,181,768,203,864,218.7C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160V320H0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
