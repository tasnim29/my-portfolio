import React, { useState } from "react";
import project2 from "../../../assets/projects/project2.png";

import DetailsModal2 from "./DetailsModal2";

const Project2 = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col md:flex-row gap-8 border-3 border-primary p-6 rounded-md mb-5">
      {/* image */}
      <div className="flex-1 ">
        <img
          className="rounded-md w-full h-full object-cover border-2 border-secondary"
          src={project2}
          alt=""
        />
      </div>
      {/* content */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold ">Echo Journal</h1>
        <p className="text-secondary mb-5">
          Features include responsive design, dynamic blog creation and updates,
          category filtering and search, wishlist management, detailed blog
          pages with comments, featured blogs with sortable data tables,
          newsletter subscription, and smooth animations with Framer Motion.
        </p>
        <h2 className="text-xl font-bold"> Key Features</h2>
        <p className="text-secondary">
          📝 Blog creation, update, and category filtering
        </p>
        <p className="text-secondary">💬 Blog comments (except on own blog)</p>
        <p className="text-secondary">❤️ Wishlist add/remove per user</p>
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
            href="https://assignment-11-f3a27.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-black font-bold"
          >
            Live Link
          </a>
          <a
            href="https://github.com/tasnim29/echo-journal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-black font-bold"
          >
            Client Side Repo
          </a>
          <a
            href="https://github.com/tasnim29/echo-journal-server"
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
          <DetailsModal2
            showModal={showModal}
            setShowModal={setShowModal}
          ></DetailsModal2>
        </div>
      </div>
    </div>
  );
};

export default Project2;
