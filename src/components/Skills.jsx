import React from "react";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCloudUploadAlt,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Crafting responsive and interactive user interfaces using React, HTML5, and Tailwind CSS.",
    icon: <FaHtml5 className="text-2xl sm:text-3xl text-teal-400" />,
    animation: "fade-right",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Building efficient backend APIs with Node.js and Express for robust web applications.",
    icon: <FaNodeJs className="text-2xl sm:text-3xl text-teal-400" />,
    animation: "fade-left",
  },
  {
    id: 3,
    title: "Version Control (Git)",
    description:
      "Efficient collaboration and code management using Git and GitHub.",
    icon: <FaGitAlt className="text-2xl sm:text-3xl text-teal-400" />,
    animation: "zoom-in",
  },
  {
    id: 4,
    title: "Deployment",
    description:
      "Deploying projects to platforms like Vercel, Netlify, and Render with CI/CD.",
    icon: <FaCloudUploadAlt className="text-2xl sm:text-3xl text-teal-400" />,
    animation: "zoom-in",
  },
  {
    id: 5,
    title: "Full-Stack Project Development",
    description:
      "Building end-to-end applications with seamless frontend and backend integration.",
    icon: <FaReact className="text-2xl sm:text-3xl text-teal-400" />,
    animation: "flip-up",
  },
];

const Skills = () => {
  return (
    <div
      className="relative overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-20 px-4 sm:px-6 md:px-16 lg:px-24"
      id="skills"
    >
      {/* Floating decorative elements */}
      <div className="absolute top-16 left-[-10%] w-56 h-56 sm:w-72 sm:h-72 bg-teal-500 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-[-10%] w-64 h-64 sm:w-96 sm:h-96 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-purple-400 text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos={service.animation}
              data-aos-duration="1000"
              className={`relative group bg-[#1e1e2f] rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl 
                hover:-translate-y-2 transition-all duration-500 border border-gray-700/30 
                ${index === 4 ? "sm:col-span-2 mx-auto w-full sm:w-4/5 md:w-2/3" : ""}`}
            >
              {/* Glow border effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl border-2 border-gradient-to-br from-purple-500 to-teal-400 animate-pulse pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  {service.icon}
                  <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-teal-400 to-purple-400 text-transparent bg-clip-text">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
