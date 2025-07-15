import React, { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubscribe = (e) => {
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
          toast.success("Subscribed successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to subscribe. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <footer className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white pt-12 pb-6 px-4 sm:px-6 md:px-16 lg:px-24">
      <ToastContainer />
      
      {/* Main Footer Content */}
      <div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10"
        data-aos="fade-up"
      >
        {/* Left: About */}
        <div className="text-center lg:text-left flex-1">
          <h3 className="text-2xl font-bold mb-2 text-gradient bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
            Pragati
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
            Full-Stack Developer specializing in modern web applications. Passionate about building user-first digital experiences.
          </p>
        </div>

        {/* Center: Subscription Form */}
        <div className="flex-1 w-full">
          <form
            ref={form}
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg mx-auto"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-teal-400"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-2 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-600 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Pragati. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-5 text-xl justify-center">
          <a
            href="https://github.com/pragatiricms/MERN02M002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pragati-nahak-26a6352a1?"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/pragati09._?igsh=dnVxdXZsd3d4Mm14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
