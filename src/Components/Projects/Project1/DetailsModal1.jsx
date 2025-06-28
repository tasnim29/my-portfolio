import React from "react";

const DetailsModal1 = ({ showModal, setShowModal }) => {
  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
          <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg relative overflow-y-auto max-h-[90vh] p-6">
            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-2xl font-bold text-red-500"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 className="text-3xl font-bold mb-4 text-center text-green-700">
              🌿 Green Circle
            </h2>

            {/* Tech Stack */}
            <section className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                🚀 Main Technology Stack
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>React, Tailwind CSS, DaisyUI</li>
                <li>Firebase Authentication</li>
                <li>Node.js, Express.js</li>
                <li>MongoDB (CRUD operations)</li>
                <li>React Router, Lottie, and more</li>
              </ul>
            </section>

            {/* Description */}
            <section className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                📝 Project Description
              </h3>
              <p className="text-gray-700">
                Green Circle is a full-stack gardening community web application
                built for gardening enthusiasts. Users can share garden tips,
                explore top gardeners, participate in events, and connect over
                composting, plant care, and more. It features secure login,
                private routes, CRUD, trending sections, and dynamic user
                engagement tools.
              </p>
            </section>

            {/* Links */}
            <section className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                🔗 Live & Code
              </h3>
              <p className="text-blue-600">
                🌐 Live Site:{" "}
                <a
                  href="https://green-circle-client.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  green-circle-client.web.app
                </a>
              </p>
              <p className="text-blue-600">
                💻 GitHub Repo (Client):{" "}
                <a
                  href="https://github.com/tasnim29/green-circle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  github.com/tasnim29/green-circle
                </a>
              </p>
            </section>

            {/* Challenges */}
            <section className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                ⚠️ Challenges Faced
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Ensuring private routes persist after reload</li>
                <li>State management across authentication and routing</li>
                <li>Efficiently handling likes and DB updates</li>
                <li>Integrating Lottie and custom animations seamlessly</li>
                <li>Responsive design for all device sizes</li>
              </ul>
            </section>

            {/* Future Plans */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800">
                🔮 Future Improvements
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Add user messaging/chat between gardeners</li>
                <li>Allow users to join live gardening events</li>
                <li>Profile customization & gardening badges</li>
                <li>Use Redux or Zustand for better state control</li>
                <li>Enable image uploads instead of URL input</li>
              </ul>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsModal1;
