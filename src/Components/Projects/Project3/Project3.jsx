import React, { useState } from "react";
import project1 from "../../../assets/projects/project3.png";
import DetailsModal3 from "./DetailsModal3";

const Project3 = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col md:flex-row gap-8 border-3 border-primary p-6 rounded-md mb-5">
      {/* image */}
      <div className="flex-1 ">
        <img
          className="rounded-md w-full h-full object-cover border-2 border-secondary"
          src={project1}
          alt=""
        />
      </div>
      {/* content */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold ">Event Mania</h1>
        <p className="text-secondary mb-5">
          Discover, explore, and reserve seats for upcoming local events like
          workshops, conferences, and exhibitions. Includes user authentication,
          protected routes, dynamic routing, and Firebase integration.
        </p>
        <h2 className="text-xl font-bold"> Key Features</h2>
        <p className="text-secondary">
          📅 Upcoming Events Showcase with details
        </p>
        <p className="text-secondary">
          📝 Event Details Page with seat reservation form
        </p>
        <p className="text-secondary">
          📄 User Profile Page (edit name & photo using updateProfile())
        </p>
        {/* tech */}
        <div className="space-x-2 mt-5">
          <span className="badge badge-primary">React</span>
          <span className="badge badge-primary">Firebase</span>

          <span className="badge badge-primary">React Router</span>
          <span className="badge badge-primary">Mongo DB</span>
        </div>
        {/* buttons */}
        <div className="mt-5 space-x-2">
          <a
            href="https://assignment-9-bc372.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-black font-bold"
          >
            Live Link
          </a>
          <a
            href="https://github.com/tasnim29/event-mania"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-black font-bold"
          >
            GitHub
          </a>

          <button
            onClick={() => setShowModal(true)}
            className="btn btn-secondary text-black font-bold"
          >
            Details
          </button>
          <DetailsModal3
            showModal={showModal}
            setShowModal={setShowModal}
          ></DetailsModal3>
        </div>
      </div>
    </div>
  );
};

export default Project3;
