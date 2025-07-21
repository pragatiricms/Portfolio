import React from "react";
import AboutImage from "../assets/pragati.jpg";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

const About = () => {
  return (
    <div
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-20 px-4 sm:px-6 md:px-16 lg:px-24"
      id="about"
    >
      {/* Blurred background blobs */}
      <div className="absolute top-10 left-0 w-40 h-40 sm:w-60 sm:h-60 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 sm:w-72 sm:h-72 bg-teal-500 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
          About Me
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 items-center md:items-start" data-aos="fade-up">
          {/* Profile Image */}
          <div className="md:col-span-4 flex justify-center md:justify-start" data-aos="fade-right">
            <img
              src={AboutImage}
              alt="About me"
              className="w-44 h-56 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded object-cover shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text & Tech Stack */}
          <div className="md:col-span-8 text-gray-300 w-full" data-aos="fade-left">
            <p className="text-sm sm:text-base md:text-lg mb-8 leading-relaxed text-center md:text-left px-2 sm:px-0">
              I’m a full-stack developer who crafts user-centric web apps that blend stunning design with functional logic.
              My strength lies in bridging the gap between frontend beauty and backend performance. From responsive UIs
              to REST APIs, I deliver clean, scalable, and efficient solutions.
            </p>

            {/* Tech Stack */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 text-center md:text-left">
                My Tech Stack
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-6 gap-x-6 justify-items-center md:justify-items-start text-2xl sm:text-3xl md:text-4xl">
                <SiHtml5 title="HTML5" className="hover:text-orange-500 transition duration-300" />
                <SiCss3 title="CSS3" className="hover:text-blue-500 transition duration-300" />
                <SiJavascript title="JavaScript" className="hover:text-yellow-400 transition duration-300" />
                <SiReact title="React" className="hover:text-cyan-400 transition duration-300" />
                <SiNodedotjs title="Node.js" className="hover:text-green-500 transition duration-300" />
                <SiExpress title="Express.js" className="hover:text-gray-400 transition duration-300" />
                <SiMongodb title="MongoDB" className="hover:text-green-600 transition duration-300" />
                <SiTailwindcss title="Tailwind CSS" className="hover:text-teal-400 transition duration-300" />
                <SiGithub title="GitHub" className="hover:text-gray-300 transition duration-300" />
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="md:col-span-12 mt-12 w-full bg-gradient-to-r from-green-400/30 via-purple-400/30 to-teal-500/30 p-6 rounded-2xl shadow-xl text-center">
            <h4 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-purple-400 to-teal-300">
              “Innovation is my mindset.”
            </h4>
            <p className="text-sm sm:text-base text-gray-200 mt-3">
              I constantly explore modern technologies to deliver sleek,
              optimized, and future-ready solutions that align with user
              needs and industry trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
