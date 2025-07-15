import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import nameLogo from "../../assets/nameLogo.png";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      {["home", "about", "skills", "education", "projects", "contact"].map(
        (item) => (
          <li key={item}>
            <AnchorLink
              href={`#${item}`}
              offset="50"
              onClick={() => setIsOpen(false)}
              className="relative group"
            >
              <span className="transition">{item.replace("-", " ")}</span>
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </AnchorLink>
          </li>
        )
      )}
    </>
  );

  return (
    <div
      className={`w-full fixed top-0 z-[60] transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-black/60 shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <img className="w-12 rounded-full shadow" src={nameLogo} alt="Logo" />

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-lg items-center font-medium tracking-wide uppercase">
          {navItems}
        </ul>

        <div className="hidden md:flex gap-4">
          <a
            href="https://github.com/tasnim29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/tasnim-mahmud-9102b3294"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-3/4 h-full bg-[#111827] text-white z-50 p-6 md:hidden transition-all shadow-2xl backdrop-blur-lg">
          <ul className="space-y-6 text-lg font-medium">{navItems}</ul>
          <a
            href="https://drive.google.com/file/d/1vIvtqo-hZlJ6WoI214JLy58qYJb4gpGH/view"
            target="_blank"
            onClick={() => setIsOpen(false)}
            rel="noopener noreferrer"
            className="mt-8 block bg-cyan-500 hover:bg-cyan-600 text-white text-center px-4 py-2 rounded-full font-semibold transition duration-300"
          >
            View Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
