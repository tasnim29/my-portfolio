import React from "react";
import underLine from "../../assets/under.png";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5df14003-5384-43ad-99b8-26ae2cb2ef08");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Successfully send the message to the owner");
      event.target.reset();
      // console.log("Success", res);
    }
  };
  return (
    <div data-aos="fade-up" id="contact" className="py-20 max-w-7xl mx-auto">
      {/* Title */}
      <div className="mb-12 flex justify-center">
        <div className="relative inline-block text-center">
          <h2 className="text-6xl font-bold text-white mb-0 ">Get In Touch</h2>
          <img
            src={underLine}
            alt="Underline"
            className="absolute right-0 -bottom-2 w-32 "
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
        {/* left div */}
        <div className="space-y-5 text-left w-full md:w-1/2">
          <h1 className="text-primary text-5xl font-bold mb-5">Let's talk</h1>
          <p className="text-secondary">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you'd like me to work on. You can
            contact me anytime.
          </p>

          <div className="flex items-center gap-3 text-gray-700">
            <MdEmail className="text-xl text-secondary" />
            <span className="text-secondary">tasnimmahmudnjr@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <MdPhone className="text-xl text-secondary" />
            <span className="text-secondary">+8801302947269</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <MdLocationOn className="text-xl text-secondary" />
            <span className="text-secondary">Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* right div */}
        <div className="w-full md:w-1/2  p-6 rounded-lg shadow-md">
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              placeholder="Write your message..."
              name="textarea"
              rows="5"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary text-white font-semibold px-6 py-2 rounded-md"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
