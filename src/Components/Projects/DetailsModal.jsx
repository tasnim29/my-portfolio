import React from "react";

const DetailsModal = ({ showModal, setShowModal, project }) => {
  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg relative overflow-y-auto max-h-[90vh] p-6">
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-4 text-3xl font-bold text-red-600 hover:text-red-800 transition"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Title */}
        <h2
          id="modal-title"
          className={`text-3xl font-bold mb-5 text-center ${
            project.titleColor || "text-primary"
          }`}
        >
          {project.titleEmoji ? project.titleEmoji + " " : ""}
          {project.title}
        </h2>

        {/* Image */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="mx-auto rounded mb-6 max-h-64 object-cover"
          />
        )}

        {/* Tech Stack */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            🚀 Main Technology Stack
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {project.techStack?.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </section>

        {/* Description */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            📄 Project Description
          </h3>
          <p className="text-gray-700">{project.description}</p>
        </section>

        {/* Features */}
        {project.features && (
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ⭐ Key Features
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Links */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            🔗 Live & Code
          </h3>
          {project.links?.liveSite && (
            <p className="text-blue-600 mb-1">
              🌐 Live Site:{" "}
              <a
                href={project.links.liveSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                {project.links.liveSite.label}
              </a>
            </p>
          )}
          {project.links?.clientRepo && (
            <p className="text-blue-600 mb-1">
              💻 GitHub Repo (Client):{" "}
              <a
                href={project.links.clientRepo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                {project.links.clientRepo.label}
              </a>
            </p>
          )}
          {project.links?.serverRepo && (
            <p className="text-blue-600">
              🖥️ GitHub Repo (Server):{" "}
              <a
                href={project.links.serverRepo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                {project.links.serverRepo.label}
              </a>
            </p>
          )}
        </section>

        {/* Challenges */}
        {project.challenges && (
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ⚠️ Challenges Faced
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {project.challenges.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Future Plans */}
        {project.futurePlans && (
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🔮 Future Improvements
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {project.futurePlans.map((plan, idx) => (
                <li key={idx}>{plan}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default DetailsModal;
