import React, { useRef, useEffect, useCallback } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaGlobe } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pi31fkf",
        "template_e894rmt",
        form.current,
        "uPL6UKdxxEV3WhJZR"
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🚀");
          form.current.reset();
        },
        (error) => {
          toast.error("Something went wrong. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div
      className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 overflow-hidden"
      id="contact"
    >
      <ToastContainer />

      {/* Particle Background */}
      <Particles
        id="tsparticles-contact"
        init={particlesInit}
        className="absolute inset-0 -z-10 pointer-events-none"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 25 },
            shape: { type: "circle" },
            opacity: { value: 0.15 },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 0.6 },
            links: {
              enable: true,
              distance: 120,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
          },
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-400 rounded-full opacity-20 blur-[100px] -z-10 animate-ping"></div>

      {/* 👉 Floating Animation in Marked Area */}
      <motion.div
        className="absolute bottom-[-60px] right-[-40px] w-96 h-96 -z-10"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-20"
        >
          <path
            fill="#4FD1C5"
            d="M50.5,-64.3C64.7,-55.1,75.9,-43.1,78.2,-29.9C80.5,-16.8,73.9,-2.5,69.6,13.1C65.3,28.6,63.2,45.3,53.2,55.6C43.3,66,25.5,69.9,9.4,65.7C-6.7,61.4,-13.4,49.1,-30.3,44.4C-47.2,39.7,-74.2,42.7,-79.4,34.6C-84.6,26.5,-68,7.2,-56.5,-6.7C-45,-20.6,-38.5,-29.1,-31.2,-39.5C-23.9,-49.9,-15.7,-62.2,-3.1,-65.7C9.5,-69.2,19,-64.6,50.5,-64.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-14 items-start">
        {/* Contact Form */}
        <div
          className="w-full lg:w-[58%] rounded-2xl p-[2px] bg-gradient-to-r from-teal-500 to-purple-500 shadow-xl"
          data-aos="fade-up"
        >
          <div className="bg-gray-900 rounded-[1rem] p-6 sm:p-10 border border-gray-800 backdrop-blur-md shadow-inner">
            <h2 className="text-3xl sm:text-4xl font-bold text-center lg:text-left mb-8 bg-gradient-to-r from-teal-400 to-purple-400 text-transparent bg-clip-text">
              Get in Touch
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label htmlFor="user_name" className="block mb-1 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-teal-400 transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block mb-1 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-teal-400 transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-teal-400 transition-all"
                  placeholder="Type your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div
          className="w-full lg:w-[42%] text-center lg:text-left"
          data-aos="fade-left"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
            Let's Connect
          </h3>
          <div
            className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-500 mx-auto lg:mx-0 mb-6 rounded-full"
            data-aos="zoom-in"
            data-aos-delay="200"
          ></div>
          <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
            I'm open to freelance opportunities, project collaborations, and full-time roles.
          </p>
          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
            Let's build something amazing together. Available for discussions anytime!
          </p>
          <div className="space-y-5 text-sm sm:text-base">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <FaEnvelope className="text-teal-400 text-lg" />
              <a
                href="mailto:pragati.nahak8658@gmail.com"
                className="hover:underline break-all"
              >
                pragati.nahak8658@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <FaPhone className="text-teal-400 text-lg" />
              <span>+91 78150 51298</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <FaMapMarkedAlt className="text-teal-400 text-lg" />
              <span>Bhubaneswar, Odisha, India</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <FaGlobe className="text-teal-400 text-lg" />
              <span>Languages: English, Hindi, Odia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
