import React from "react";

import University from "../../assets/aust.jpg";
import myAnimation from "../../assets/gradAnim.json";

import Lottie from "lottie-react";

const Education = () => {
  return (
    <div data-aos="fade-up" id="education" className="py-20 max-w-7xl mx-auto">
      {/* Title */}
      <div className="mb-12 flex justify-center">
        <div className="relative inline-block text-center">
          <h2 className="text-6xl font-bold text-white mb-0 relative">
            Education
          </h2>
          {/* underline */}
          <svg
            className="absolute left-0 -bottom-3 w-full h-4 z-0"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 5 Q 25 0, 50 5 T 100 5"
              stroke="#06b6d4" // Cyan-like color
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        </div>
      </div>

      {/* Body Grid */}
      <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
        {/* image left */}
        <div>
          <img className="rounded-md" src={University} alt="" />
        </div>
        {/* right content */}
        <div className="">
          <div className="mb-5" style={{ width: 100, height: 50 }}>
            <Lottie animationData={myAnimation} loop={true} />
          </div>
          <h3 className="text-2xl font-semibold mb-5">
            B.Sc. in Computer Science & Engineering
          </h3>

          <p className="text-lg text-gray-300 font-medium">
            Ahsanullah University of Science & Technology
          </p>

          <p className="text-md text-gray-400 mb-5">
            <span className="font-semibold text-white">CGPA:</span> 3.40
            &nbsp;|&nbsp;
            <span className="text-white">Graduation Year:</span> 2025
          </p>

          <p className="text-sm text-gray-400 leading-relaxed text-justify">
            Studying at AUST was a transformative journey. It equipped me with
            both theoretical knowledge and practical skills in programming,
            software design, and system architecture. The competitive yet
            collaborative environment pushed me to constantly improve and
            innovate through projects, group work, and coding contests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
