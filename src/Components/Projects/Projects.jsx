import React from "react";
import underLine from "../../assets/under.png";
import Project1 from "./Project1/Project1";
import Project2 from "./Project2/Project2";
import Project3 from "./Project3/Project3";

const Projects = () => {
  return (
    <div id="projects" className="py-20 max-w-7xl mx-auto">
      {/* Title */}
      <div className="mb-12 flex justify-center">
        <div className="relative inline-block text-center">
          <h2 className="text-6xl font-bold text-white mb-0 z-10 relative">
            My latest works
          </h2>
          <img
            src={underLine}
            alt="Underline"
            className="absolute right-0 -bottom-2 w-32 z-0"
          />
        </div>
      </div>
      {/* body */}
      <div>
        <Project1></Project1>
        <Project2></Project2>
        <Project3></Project3>
      </div>
    </div>
  );
};

export default Projects;
