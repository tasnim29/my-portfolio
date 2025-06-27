import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto py-6">
      <h1 className="text-xl font-bold">Tasnim M.</h1>
      <ul className="flex items-center list-none gap-5 text-lg">
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Education</li>
        <li>Contact Me</li>
      </ul>
      <button className="">Contact with me</button>
    </div>
  );
};

export default Navbar;
