import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImage from "../../assets/profileImg.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center text-center px-6 pb-12 pt-32 bg-transparent"
    >
      {/* Profile Image */}
      <img
        src={profileImage}
        alt="Alex Bennett"
        className="w-40 h-40 object-cover rounded-full border-4 border-primary shadow-lg"
      />

      {/* Name and Title */}
      <h1 className="text-5xl font-bold mt-6">
        <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
          I’m Tasnim Mahmud,
        </span>
        <br />
        <span className="text-white">Web developer based in Bangladesh.</span>
      </h1>

      <p className="text-secondary text-lg max-w-2xl mt-4">
        “I’m passionate about building clean and responsive web applications.
        Currently learning and growing my skills in React, JavaScript, and
        modern web technologies. Excited to take on new challenges and
        contribute to meaningful projects.”
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 text-3xl text-primary mt-6">
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
      <a
        href="/resume.pdf" // Replace with actual link
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full text-lg font-semibold transition duration-300"
      >
        View Resume
      </a>
    </div>
  );
};

export default Hero;
