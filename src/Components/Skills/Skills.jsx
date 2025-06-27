import React from "react";

const Skills = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-5xl font-bold mb-3 text-center">My Specialty</h2>
        <div className="w-24 h-1 bg-primary rounded-full mb-6 mx-auto "></div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {/* frontend */}

        <div className="bg-secondary text-gray-950 rounded-md cursor-pointer transition duration-500 hover:scale-105  p-6">
          <div className="mb-5">
            <h1 className="text-2xl mb-2">Front End</h1>
            <div className="w-full h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* skill icons with names */}
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center text-center">
            <div>
              <img
                src="https://skillicons.dev/icons?i=html"
                alt="HTML"
                className="w-12 mx-auto"
              />
              <p className="mt-2 text-sm">HTML</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=css"
                alt="CSS"
                className="w-12 mx-auto"
              />
              <p className="mt-2 text-sm">CSS</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=js"
                alt="JavaScript"
                className="w-12 mx-auto"
              />
              <p className="mt-2 text-sm">JavaScript</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=react"
                alt="React"
                className="w-12 mx-auto"
              />
              <p className="mt-2 text-sm">React</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=nextjs"
                alt="Next.js"
                className="w-12 mx-auto bg-white rounded-full p-1"
              />
              <p className="mt-2 text-sm">Next.js</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=tailwind"
                alt="Tailwind"
                className="w-12 mx-auto"
              />
              <p className="mt-2 text-sm">Tailwind</p>
            </div>
          </div>
        </div>
        {/* backend */}
        <div className="bg-secondary text-gray-950 rounded-md cursor-pointer transition duration-500 hover:scale-105 p-6">
          <div className="mb-5">
            <h1 className="text-2xl text-left mb-2">Back End</h1>
            <div className="w-full h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* skill icons with names */}
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center text-center">
            <div>
              <img
                src="https://skillicons.dev/icons?i=nodejs"
                alt="Node.js"
                className="w-12 mx-auto"
              />
              <p className="mt-2 text-sm">Node.js</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=express"
                alt="Express.js"
                className="w-12 mx-auto bg-white rounded-full p-1"
              />
              <p className="mt-2 text-sm">Express.js</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=mongodb"
                alt="MongoDB"
                className="w-12 mx-auto"
              />
              <p className="mt-2 text-sm">MongoDB</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=firebase"
                alt="Firebase"
                className="w-12 mx-auto"
              />
              <p className="mt-2 text-sm">Firebase</p>
            </div>
          </div>
        </div>
        {/* tools */}
        <div className="bg-secondary text-gray-950 rounded-md cursor-pointer transition duration-500 hover:scale-105  p-6">
          <div className="mb-5">
            <h1 className="text-2xl text-left mb-2">Tools</h1>
            <div className="w-full h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* skill icons with names */}
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center text-center">
            <div>
              <img
                src="https://skillicons.dev/icons?i=git"
                alt="Git"
                className="w-12 mx-auto"
              />
              <p className="mt-2 text-sm">Git</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="GitHub"
                className="w-12 mx-auto"
              />
              <p className="mt-2 text-sm">GitHub</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=vercel"
                alt="Vercel"
                className="w-12 mx-auto"
              />
              <p className="mt-2 text-sm">Vercel</p>
            </div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=vscode"
                alt="VS Code"
                className="w-12 mx-auto"
              />
              <p className="mt-2 text-sm">VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
