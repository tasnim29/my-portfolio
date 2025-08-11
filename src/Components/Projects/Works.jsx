import React, { useState } from "react";
import DetailsModal from "./DetailsModal";

const Works = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-full">
      {" "}
      {/* Added h-full here to ensure card fills grid cell */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
        {/* Image - Fixed height */}
        <div className="w-full h-64 relative group overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 border-b border-white/10"
            src={project.image}
            alt={`${project.title} Project`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Content - Flex column with flex-grow */}
        <div className="flex flex-col flex-grow p-6">
          <div className="flex-grow">
            <h1 className="text-3xl font-bold text-primary mb-4">
              {project.title}
            </h1>
            <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base ">
              {project.des}
            </p>

            {/* Features - Limited to 3 items */}
            <h2 className="text-lg font-semibold text-white mb-3">
              Key Features
            </h2>
            <ul className="space-y-2 text-gray-400 text-sm list-disc list-inside mb-6 ">
              {project.features?.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            {/* Tech stack - Limited to 5 items */}
            <div className="flex flex-wrap gap-2">
              {project.tech?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-semibold border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons - Fixed at bottom */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary hover:bg-cyan-600 rounded-lg text-white font-medium text-sm transition"
              >
                Live Link
              </a>
            )}
            {project.clientRepo && (
              <a
                href={project.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary hover:bg-cyan-600 rounded-lg text-white font-medium text-sm transition"
              >
                Client Repo
              </a>
            )}
            {project.serverRepo && (
              <a
                href={project.serverRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary hover:bg-cyan-600 rounded-lg text-white font-medium text-sm transition"
              >
                Server Repo
              </a>
            )}
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-primary hover:bg-cyan-600 rounded-lg text-white font-medium text-sm transition cursor-pointer"
            >
              Details
            </button>
          </div>
        </div>
      </div>
      {/* Modal - Kept in place */}
      <DetailsModal
        showModal={showModal}
        setShowModal={setShowModal}
        project={project}
      />
    </div>
  );
};

export default Works;
