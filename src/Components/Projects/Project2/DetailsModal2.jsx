import React from "react";

const DetailsModal2 = ({ showModal, setShowModal }) => {
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
            <h2 className="text-3xl font-bold mb-4 text-center text-purple-700">
              📝 Echo Journal
            </h2>

            {/* Tech Stack */}
            <section className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                🚀 Main Technology Stack
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>React, Tailwind CSS</li>
                <li>Firebase Authentication & JWT</li>
                <li>Node.js, Express.js, MongoDB</li>
                <li>Framer Motion, TanStack Table, React Toastify</li>
                <li>React Router DOM, React-Hook-Form</li>
              </ul>
            </section>

            {/* Description */}
            <section className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                📄 Project Description
              </h3>
              <p className="text-gray-700">
                BlogVerse is a fully responsive blog-sharing platform designed
                for both readers and writers. Users can add, edit, or delete
                blogs, comment, add blogs to their wishlist, and filter or sort
                content by category, popularity, or title. It supports JWT-based
                private routing, blog analytics, and user-specific content
                control. Built with clean code and seamless animations to
                impress modern recruiters.
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
                  href="https://assignment-11-f3a27.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  https://assignment-11-f3a27.web.app/
                </a>
              </p>
              <p className="text-blue-600">
                💻 GitHub Repo (Client):{" "}
                <a
                  href="https://github.com/tasnim29/echo-journal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  https://github.com/tasnim29/echo-journal
                </a>
              </p>
            </section>

            {/* Challenges */}
            <section className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                ⚠️ Challenges Faced
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Setting up JWT and maintaining secure protected routes</li>
                <li>
                  Implementing category-based filtering + MongoDB text search
                </li>
                <li>
                  Ensuring reloads don’t redirect logged-in users to login page
                </li>
                <li>Dynamic comment system with conditional rendering</li>
                <li>
                  Integrating Framer Motion and TanStack Table efficiently
                </li>
              </ul>
            </section>

            {/* Future Plans */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800">
                🔮 Future Improvements
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Allow image uploads instead of image URLs</li>
                <li>Enable blog bookmarking & read-later features</li>
                <li>Advanced analytics dashboard for blog writers</li>
                <li>Theme customization (color picker + font selector)</li>
                <li>Add social sharing and comment upvotes</li>
              </ul>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsModal2;
