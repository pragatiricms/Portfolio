import React, { useCallback } from "react";
import groceryAppImage from "../assets/grocery.png";
import figmaDesignImage from "../assets/figma.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

const projects = [
  {
    id: 1,
    name: "Grocery Shopping App",
    technologies: "React, Tailwind CSS, localStorage, Responsive",
    image: groceryAppImage,
    url: "https://qlith-blikint-clone.vercel.app/",
  },
  {
    id: 2,
    name: "Zeno UI (Figma Design)",
    technologies: "Figma UI Design, HTML/CSS Implementation",
    image: figmaDesignImage,
    url: "https://jocular-medovik-bb39b3.netlify.app/",
  },
];

const Projects = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
      id="project"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles-projects"
        init={particlesInit}
        className="absolute inset-0 -z-10 pointer-events-none"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.15 },
            size: { value: { min: 1, max: 3 } },
            links: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              outMode: "bounce",
            },
          },
        }}
      />

      {/* Glowing Bubbles */}
      <div className="absolute top-16 left-[-30px] w-48 h-48 sm:w-60 sm:h-60 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-8 right-[-30px] w-48 h-48 sm:w-60 sm:h-60 bg-teal-400 opacity-20 rounded-full blur-3xl animate-ping -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-teal-400 to-purple-400 text-transparent bg-clip-text">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Tilt
              key={project.id}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              scale={1.03}
              transitionSpeed={1000}
              className="bg-[#1e1e2f] rounded-xl overflow-hidden shadow-lg border border-gray-700/30 hover:border-teal-400/40 transition-all duration-300 relative group"
            >
              {/* Glow hover border */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 border border-teal-400/30 blur-sm animate-pulse pointer-events-none"></div>

              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Project Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 text-teal-300">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3">
                  {project.technologies}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm sm:text-base text-purple-400 hover:text-purple-300 transition"
                >
                  View Live <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
