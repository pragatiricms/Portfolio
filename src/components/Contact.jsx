import React, { useRef, useEffect, useCallback } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

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
      className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-24 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden"
      id="contact"
    >
      <ToastContainer />

      {/* Particles Background */}
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

      {/* Gradient Glow Effects */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-400 rounded-full opacity-20 blur-[100px] -z-10 animate-ping"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Contact Form */}
        <div className="flex-1 w-full" data-aos="fade-up">
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
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-teal-400 transition-all"
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
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-teal-400 transition-all"
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
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-teal-400 transition-all"
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

        {/* Contact Info */}
        <div
          className="flex-1 w-full text-center lg:text-left"
          data-aos="fade-left"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
            Let's Connect
          </h3>
          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
            I'm open to freelance opportunities, project collaborations, and
            full-time roles. Feel free to reach out!
          </p>
          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <FaEnvelope className="text-teal-400" />
              <a
                href="mailto:pragati.nahak8658@gmail.com"
                className="hover:underline break-all"
              >
                pragati.nahak8658@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <FaPhone className="text-teal-400" />
              <span>+91 78150 51298</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <FaMapMarkedAlt className="text-teal-400" />
              <span>Bhubaneswar, Odisha, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
