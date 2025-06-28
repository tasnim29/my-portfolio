import React from "react";

const DetailsModal3 = ({ showModal, setShowModal }) => {
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

            {/* Modal Title */}
            <h2 className="text-3xl font-bold mb-4 text-center text-indigo-700">
              🎉 Event Mania
            </h2>

            {/* Tech Stack */}
            <section className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                🚀 Main Technology Stack
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>React, React Router DOM</li>
                <li>Firebase Authentication</li>
                <li>Tailwind CSS, DaisyUI</li>
                <li>React Toastify / SweetAlert</li>
                <li>Swiper Slider / AOS Animation</li>
              </ul>
            </section>

            {/* Project Description */}
            <section className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                📄 Project Description
              </h3>
              <p className="text-gray-700">
                Event Explorer is a responsive single-page application for
                discovering local events. Users can browse upcoming events, view
                detailed info, and reserve seats after logging in. The platform
                includes protected routes, user authentication, a feedback
                system, dynamic user profile editing, and a vibrant urban-themed
                UI.
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
                  href="https://assignment-9-bc372.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  https://assignment-9-bc372.web.app
                </a>
              </p>
              <p className="text-blue-600">
                💻 GitHub Repo:{" "}
                <a
                  href="https://github.com/tasnim29/event-mania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  https://github.com/tasnim29/event-mania
                </a>
              </p>
            </section>

            {/* Challenges */}
            <section className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                ⚠️ Challenges Faced
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  Implementing Firebase `updateProfile` for live profile updates
                </li>
                <li>Making sure private routes stay intact on page reload</li>
                <li>
                  Handling forgot password flow with auto-filled email redirect
                </li>
                <li>Form validation with show/hide password toggle</li>
                <li>Animating page sections smoothly using AOS/Swiper</li>
              </ul>
            </section>

            {/* Future Plans */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800">
                🔮 Potential Improvements
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Add user dashboard to track reserved events</li>
                <li>
                  Enable real-time seat availability using Firebase Firestore
                </li>
                <li>
                  Allow users to rate or comment on events post-attendance
                </li>
                <li>Add categories and tag filtering for better UX</li>
                <li>
                  Store reservation data and enable cancel/edit functionality
                </li>
              </ul>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsModal3;
