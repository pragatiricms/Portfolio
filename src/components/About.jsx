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
      {/* Floating background blobs */}
      <div className="absolute top-10 left-0 w-40 h-40 sm:w-60 sm:h-60 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 sm:w-72 sm:h-72 bg-teal-500 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10" data-aos="fade-up">
          {/* Profile Image */}
          <div className="flex-shrink-0" data-aos="fade-right">
            <img
              src={AboutImage}
              alt="About me"
              className="w-44 h-56 sm:w-60 sm:h-72 md:w-64 md:h-80 rounded object-cover shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text & Tech Stack */}
          <div className="flex-1 text-gray-300" data-aos="fade-left">
            <p className="text-sm sm:text-base md:text-lg mb-8 leading-relaxed text-center md:text-left">
              I’m a full-stack developer who crafts user-centric web apps that blend stunning design with functional logic.
              My strength lies in bridging the gap between frontend beauty and backend performance. From responsive UIs
              to REST APIs, I deliver clean, scalable, and efficient solutions.
            </p>

            {/* Tech Stack */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 text-center md:text-left">
                My Tech Stack
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center md:justify-start text-2xl sm:text-3xl md:text-4xl">
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

            {/* Highlight Box */}
            <div className="mt-10 bg-gradient-to-r from-purple-600/20 via-teal-500/10 to-blue-600/20 p-4 sm:p-6 rounded-xl shadow-lg text-center md:text-left">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                Innovation is my mindset
              </h4>
              <p className="text-gray-300 text-sm sm:text-base">
                I constantly explore modern technologies to deliver sleek,
                optimized, and future-ready solutions that align with user
                needs and industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
