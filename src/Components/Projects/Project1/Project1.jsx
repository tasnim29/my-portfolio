import React, { useState } from "react";
import project1 from "../../../assets/projects/project1.png";

import DetailsModal1 from "./DetailsModal1";

const Project1 = () => {
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
        <h1 className="text-3xl font-bold ">Green Circle</h1>
        <p className="text-secondary mb-5">
          A vibrant gardening community platform where users can share tips,
          explore gardener profiles, and join plant care discussions. Built with
          React, Firebase, MongoDB, and Node.js.
        </p>
        <h2 className="text-xl font-bold"> Key Features</h2>
        <p className="text-secondary">
          📊 Tips Table with Filtering by Difficulty (Easy/Medium/Hard)
        </p>
        <p className="text-secondary">
          🏆 Top Trending Tips section with Like count update functionality
        </p>
        <p className="text-secondary">🧑‍🌾 Featured Gardeners showcase</p>
        {/* tech */}
        <div className="space-x-2 mt-5">
          <span className="badge badge-primary">React</span>
          <span className="badge badge-primary">Node Js</span>
          <span className="badge badge-primary">Express</span>
          <span className="badge badge-primary">Firebase</span>
          <span className="badge badge-primary">Mongo DB</span>
        </div>
        {/* buttons */}
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href="https://green-circle-client.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-black font-bold"
          >
            Live Link
          </a>
          <a
            href=" https://github.com/tasnim29/green-circle"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-black font-bold"
          >
            Client Side Repo
          </a>
          <a
            href="https://github.com/tasnim29/green-circle-server"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-black font-bold"
          >
            Server Side Repo
          </a>

          <button
            onClick={() => setShowModal(true)}
            className="btn btn-secondary text-black font-bold"
          >
            Details
          </button>
          <DetailsModal1
            showModal={showModal}
            setShowModal={setShowModal}
          ></DetailsModal1>
        </div>
      </div>
    </div>
  );
};

export default Project1;
