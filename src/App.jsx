import React from "react";
import background from "./assets/background.png";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";

const App = () => {
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
      </div>
    </div>
  );
};

export default App;
