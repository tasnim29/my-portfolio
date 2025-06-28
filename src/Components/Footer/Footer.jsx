import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import nameLogo from "../../assets/nameLogo.png";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="footer sm:footer-horizontal  text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <img className="w-12" src={nameLogo} alt="" />
          <p>
            Copyright © {new Date().getFullYear()} Tasnim Mahmud - All right
            reserved
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div className="flex gap-6 text-3xl text-primary ">
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
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
