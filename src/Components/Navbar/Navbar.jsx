import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import nameLogo from "../../assets/nameLogo.png";
import { HiBars3, HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = (
    <>
      <li>
        <AnchorLink href="#home" offset="50" onClick={() => setIsOpen(false)}>
          Home
        </AnchorLink>
      </li>
      <li>
        <AnchorLink href="#about" offset="50" onClick={() => setIsOpen(false)}>
          About Me
        </AnchorLink>
      </li>
      <li>
        <AnchorLink href="#skills" offset="50" onClick={() => setIsOpen(false)}>
          Skills
        </AnchorLink>
      </li>
      <li>
        <AnchorLink
          href="#education"
          offset="50"
          onClick={() => setIsOpen(false)}
        >
          Education
        </AnchorLink>
      </li>
      <li>
        <AnchorLink
          href="#projects"
          offset="50"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </AnchorLink>
      </li>
      <li>
        <AnchorLink
          href="#contact"
          offset="50"
          onClick={() => setIsOpen(false)}
        >
          Contact Me
        </AnchorLink>
      </li>
    </>
  );

  return (
    <div className="w-full fixed top-0 z-50">
      <div className="max-w-7xl  mx-auto px-4 py-6 flex justify-between items-center bg-black/30 backdrop-blur-xl">
        <img className="w-12" src={nameLogo} alt="" />

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-lg items-center">
          {navItems}
        </ul>
        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1W-yCh8t-oDw9AJRYtcRGfyg4s-4ksPTq/view?usp=sharing" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-cyan-700 text-white px-4 py-1 rounded-full text-lg font-semibold transition duration-300 hidden md:block"
        >
          View Resume
        </a>

        {/* Mobile icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-3/4 h-full bg-accent shadow-lg z-50 p-6 md:hidden">
          <ul className="space-y-4 text-lg">{navItems}</ul>
          <a
            href="https://drive.google.com/file/d/1W-yCh8t-oDw9AJRYtcRGfyg4s-4ksPTq/view?usp=sharing" // Replace with actual link
            target="_blank"
            onClick={() => setIsOpen(false)}
            rel="noopener noreferrer"
            className=" mt-6 btn btn-primary text-white w-full "
          >
            View Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
