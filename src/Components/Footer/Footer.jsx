import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import nameLogo from "../../assets/nameLogo.png";

const Footer = () => {
  return (
    <div className="bg-black/30 backdrop-blur-sm text-neutral-content">
      <footer className="flex flex-col items-center gap-4 max-w-7xl mx-auto py-6 px-4 text-center">
        {/* Logo and Text */}
        <div className="flex flex-col items-center gap-2">
          <img className="w-12" src={nameLogo} alt="Tasnim Mahmud Logo" />
          <p className="text-sm">
            © {new Date().getFullYear()} Tasnim Mahmud — All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-3xl text-primary">
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
      </footer>
    </div>
  );
};

export default Footer;
