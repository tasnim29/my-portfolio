import React, { useEffect } from "react";
import background from "./assets/background.png";
import contactBg from "./assets/contactMe.png";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 300,
    });
  }, []);
  return (
    <div className=" text-white outfit">
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Content above the background */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0f172a] via-[#0a2540] to-[#020617]">
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Education></Education>
        <Projects></Projects>
      </div>
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="relative z-10">
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;
