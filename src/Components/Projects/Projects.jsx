import React, { useEffect, useState } from "react";
import Works from "./Works";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("/projects.json").then((res) => res.json()),
      fetch("/projectDetails.json").then((res) => res.json()),
    ])
      .then(([projectsData, detailsData]) => {
        const merged = projectsData.map((proj) => {
          const detail = detailsData.find((d) => d.id === proj.id) || {};
          return { ...proj, ...detail }; // merge detail properties into project
        });
        setProjects(merged);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-20" id="projects" data-aos="fade-up">
      <div className="mb-12 flex justify-center">
        <div className="relative inline-block text-center">
          <h2 className="text-6xl font-bold text-white mb-0 relative">
            My latest works
          </h2>
          <svg
            className="absolute left-0 -bottom-3 w-full h-4 z-0"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 5 Q 25 0, 50 5 T 100 5"
              stroke="#06b6d4"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Works key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
