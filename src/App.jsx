import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your sections
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
