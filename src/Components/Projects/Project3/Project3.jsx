import React from "react";
import project1 from "../../../assets/projects/project1.png";

const Project3 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 border-3 border-primary p-6 rounded-md mb-5">
      {/* image */}
      <div className="flex-1 ">
        <img
          className="rounded-md w-full h-full object-cover"
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
        <div className="mt-5 space-x-2">
          <button className="btn btn-secondary text-black font-bold">
            Live Link
          </button>
          <button className="btn btn-secondary text-black font-bold">
            Client Side Repo
          </button>
          <button className="btn btn-secondary text-black font-bold">
            Server Side Repo
          </button>
          <button className="btn btn-secondary text-black font-bold">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project3;
