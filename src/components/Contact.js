import React, { useEffect, useState } from "react";
// import astro from "/public/astronaut.js"

const ContactPage = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursor);
    return () => document.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div className="min-h-screen py-16 bg-gradient-midnight text-white flex flex-col items-center justify-center p-6 cursor-none mt-16">
      {/* Custom Cursor */}
      <div
        className="custom-cursor fixed w-4 h-4 bg-yellow-400 rounded-full pointer-events-none transition-transform transform -translate-x-1/2 -translate-y-1/2 z-50"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      ></div>

      <h1 className="text-4xl font-bold text-neonBlue mb-2 gradient-text">
        Get in <span className="text-4xl font-bold text-neonBlue mb-2 gradient-text">touch</span>
      </h1>
      <p className="text-gray-400 text-center mb-8">
        Reach out, and let's create a universe of possibilities together!
      </p>
      <div className="bg-accent p-6 md:p-10 rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
        {/* Form Section */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-lg font-semibold mb-4">Any Question or Remark</h2>
          <p className="text-gray-400 mb-4">Reach Out to Us</p>
          <form className="flex flex-col space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 bg-gray-700 rounded-md focus:outline-none cursor-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3 bg-gray-700 rounded-md focus:outline-none cursor-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="p-3 bg-gray-700 rounded-md focus:outline-none cursor-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 bg-gray-700 rounded-md focus:outline-none cursor-none"
            />
            <textarea
              placeholder="Message"
              className="p-3 bg-gray-700 rounded-md focus:outline-none h-24 cursor-none"
            ></textarea>
            <button className="bg-purple-500 p-3 rounded-md hover:bg-purple-600 transition flex items-center justify-center cursor-none">
              Send the Message <span className="ml-2">🚀</span>
            </button>
          </form>
        </div>
        {/* Image and Quote Section */}
        <div className="md:w-1/2 p-4 relative flex justify-center items-center">
          <img
            src="/astronaut.jpg"
            alt="Astronaut"
            className="rounded-lg w-full h-full opacity-50"
          />
          <div className="absolute bottom-4 text-center p-4 w-full">
            <p className="text-white text-sm font-semibold mb-2">
              "If you are not embarrassed by the first version of your product, you've launched too late."
            </p>
            <p className="text-gray-300 text-sm">- Reid Hoffman, Co-founder of LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
