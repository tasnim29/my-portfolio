import React from "react";
import myImage1 from "../../assets/myImg-1.jpg";
import myImage2 from "../../assets/myImg-2.jpg";
import myImage3 from "../../assets/profileImg.jpg";
import underLine from "../../assets/under.png";

const AboutMe = () => {
  return (
    <section className="py-20" id="about">
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* Left - Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="row-span-2">
            <img
              src={myImage1}
              alt="Grid Img 1"
              className="rounded-xl w-full h-full aspect-[3/4] object-cover shadow-lg"
            />
          </div>
          <div>
            <img
              src={myImage2}
              alt="Grid Img 2"
              className="rounded-xl w-full h-full aspect-square object-cover shadow-lg"
            />
          </div>
          <div>
            <img
              src={myImage3}
              alt="Grid Img 3"
              className="rounded-xl w-full h-full aspect-square object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Right - About Text */}
        <div>
          <div className="mb-12 flex justify-center">
            <div className="relative inline-block">
              <h2 className="text-6xl font-bold mb-0 relative ">AboutMe</h2>
              <img
                src={underLine}
                alt="Underline"
                className="absolute right-0 -bottom-2 w-32 z-0"
              />
            </div>
          </div>

          <p className="text-lg text-secondary leading-relaxed">
            Hi, I'm{" "}
            <span className="font-semibold text-primary text-xl">
              Tasnim Mahmud
            </span>
            , a curious and dedicated{" "}
            <span className="font-semibold">Frontend Web Developer</span> who
            enjoys crafting responsive and user-friendly interfaces. My journey
            began with simple HTML and CSS projects, which quickly grew into a
            passion for modern frontend technologies like{" "}
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Tailwind CSS</span>, and{" "}
            <span className="font-semibold">JavaScript</span>.
            <br />
            <br />I love turning ideas into clean, functional web experiences.
            Beyond coding, I enjoy sketching and spending time in
            nature—activities that fuel my creativity and focus. I’m always
            learning, building, and aiming to make the web a more beautiful and
            accessible place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
