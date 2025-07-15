// src/Components/Hero/Hero.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImage from "../../assets/profileImg.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = ({ color }) => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center text-center px-6 pb-16 pt-32"
    >
      {/* Profile Image */}
      <img
        src={profileImage}
        alt="Tasnim Mahmud"
        className="w-40 h-40 object-cover rounded-full border-4 border-cyan-500 shadow-lg"
      />

      {/* Name & Typewriter */}
      <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
        <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
          <Typewriter
            words={["I’m Tasnim Mahmud,"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1200}
          />
        </span>
        <br />
        <span className="text-white">Web developer based in Bangladesh.</span>
      </h1>

      <p className="text-gray-300 text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
        I’m passionate about building clean, interactive, and responsive web
        applications. Currently growing my skills in React, JavaScript, and
        modern tech stacks. Ready for meaningful challenges.
      </p>

      {/* Social Links */}
      <div className="flex gap-6 text-3xl text-cyan-400 mt-6">
        <a
          href="https://github.com/tasnim29"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-white transition duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/tasnim-mahmud-9102b3294/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-white transition duration-300" />
        </a>
        <a
          href="https://x.com/Tashparker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="hover:text-white transition duration-300" />
        </a>
      </div>

      {/* Resume Button */}
      <motion.a
        href="https://drive.google.com/file/d/1vIvtqo-hZlJ6WoI214JLy58qYJb4gpGH/view"
        target="_blank"
        rel="noopener noreferrer"
        initial={false}
        whileHover={{
          scale: 1.06,
          boxShadow: `0 0 25px ${color.get()}`,
          backgroundColor: color.get(),
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        whileTap={{ scale: 0.94 }}
        animate={{
          boxShadow: [`0 0 8px ${color.get()}`, `0 0 16px ${color.get()}`],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          border: `1px solid ${color.get()}`,
        }}
        className="mt-8 px-6 py-2 rounded-full text-white font-semibold backdrop-blur-md transition duration-300"
      >
        View Resume
      </motion.a>
    </div>
  );
};

export default Hero;
