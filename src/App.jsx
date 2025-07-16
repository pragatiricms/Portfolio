import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your sections
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans bg-black text-white overflow-x-hidden w-screen min-h-screen">
      {/* Sticky navbar on top */}
      <Navbar />

      {/* All sections in full width, no padding */}
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
