import React, { useCallback } from "react";
import groceryAppImage from "../assets/grocery.png";
import figmaDesignImage from "../assets/figma.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

const projects = [
  {
    id: 1,
    name: "Grocery Shopping App",
    technologies: "React, Tailwind CSS, localStorage, Responsive",
    description:
      "Team Project completed within 4–5 days. Built a Blinkit-inspired grocery shopping platform with real-time cart, localStorage support, and responsive UI.",
    image: groceryAppImage,
    url: "https://qlith-blikint-clone.vercel.app/",
    codeUrl: "https://github.com/pragatiricms/Grocery-Blinkit-Clone",
  },
  {
    id: 2,
    name: "Zeno UI (Figma to Code)",
    technologies: "Figma UI Design, HTML/CSS Implementation",
    description:
      "Solo project finished in 2 days. Transformed a Figma UI design into a responsive website using clean HTML & Tailwind CSS.",
    image: figmaDesignImage,
    url: "https://jocular-medovik-bb39b3.netlify.app/",
    codeUrl:
      "https://github.com/pragatiricms/MERN02M002/tree/2c46131430028cedf8a8401f4b992620d36a60c1/june/week1/Assignment1",
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
      {/* Particles Background */}
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

      {/* Glowing Circles */}
      <div className="absolute top-16 left-[-30px] w-48 h-48 sm:w-60 sm:h-60 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-8 right-[-30px] w-48 h-48 sm:w-60 sm:h-60 bg-teal-400 opacity-20 rounded-full blur-3xl animate-ping -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-teal-400 to-purple-400 text-transparent bg-clip-text">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Tilt
              key={project.id}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              scale={1.03}
              transitionSpeed={1000}
              className="bg-[#1e1e2f] rounded-xl overflow-hidden shadow-xl border border-gray-700/30 hover:border-teal-400/40 transition-all duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-44 sm:h-52 object-cover"
              />

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-teal-300 mb-1">{project.name}</h3>
                  <p className="text-sm text-gray-300 mb-1">{project.technologies}</p>
                  <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition w-fit"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 transition w-fit"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="mt-20 text-center px-4">
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-green-400 via-purple-500 to-green-400 rounded-full mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-purple-400 to-green-300 animate-pulse italic">
            Every project is a new opportunity to challenge limits and build something impactful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
