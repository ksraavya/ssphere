import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [linePosition, setLinePosition] = useState(0);

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursor);
    return () => document.removeEventListener("mousemove", updateCursor);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLinePosition((prev) => (prev < 100 ? prev + 1 : 0));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen py-16 bg-gradient-midnight text-white flex flex-col items-center justify-center p-6 relative cursor-none mt-16">
      {/* Custom Cursor */}
      <div
        className="custom-cursor fixed w-4 h-4 bg-yellow-400 rounded-full pointer-events-none transition-transform transform -translate-x-1/2 -translate-y-1/2 z-50"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      ></div>

      <h1 className="text-4xl font-bold text-neonBlue mb-2 gradient-text">About Us</h1>
      <p className="text-gray-400 text-center mb-8">
        Explore the Startup Ecosystem, empowering students, innovators, and entrepreneurs through various initiatives.
      </p>

      {/* Image Scroll Section */}
      <div className="overflow-x-auto w-full max-w-5xl flex scrollbar-hide">
        <div className="flex space-x-4">
          {[...Array(10)].map((_, i) => (
            <img key={i} src={`/about${(i % 5) + 1}.avif`} alt={`img${i + 1}`} className="rounded-lg object-cover h-60" />
          ))}
        </div>
      </div>

      {/* Missions Section */}
      <div className="flex justify-center items-center space-x-16 w-full max-w-5xl mt-14 mb-12">
        {[
          {
            title: "Learn, Build, Launch",
            text: "From workshops to hackathons, we offer hands-on learning experiences. Gain industry insights, develop skills, and build a strong startup mindset.",
            position: "translate-y-24"
          },
          {
            title: "Empowering Students",
            text: "Startup Sphere MAIT is a vibrant community that nurtures innovation and fuels entrepreneurial ambitions. We provide guidance, mentorship, and resources.",
          },
          {
            title: "Connecting Innovators",
            text: "Network with passionate entrepreneurs, mentors, and industry leaders. Share ideas, collaborate, and grow within an inspiring ecosystem.",
            position: "translate-y-24"
          },
        ].map((mission, index) => (
            <div key={index} className={`w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 aspect-square bg-gray-700 rounded-full flex flex-col justify-center items-center text-center p-6 shadow-lg transition-transform transform hover:scale-110 hover:border-4 hover:border-neonBlue ${mission.position}`}>
            <h3 className="text-xl font-semibold text-neonBlue">{mission.title}</h3>
            <p className="text-gray-400 text-base">{mission.text}</p>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="mt-28 w-full max-w-5xl relative">
        <h2 className="text-3xl font-bold text-neonBlue text-center">Our Story So Far</h2>
        <div className="relative mt-16">
          <div
            className="absolute top-1/2 left-0 w-full h-1 bg-neonBlue shadow-lg transition-all animate-pulse"
            style={{ transform: `translateY(${linePosition}%)` }}
          ></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative">
            {[
              { number: "500+", text: "Startups Supported" },
              { number: "5+ Cr", text: "Funding Raised" },
              { number: "100+", text: "Startup Mentors" },
              { number: "20K+", text: "Community Members" },
            ].map((stat, index) => (
              <div key={index} className={`bg-gray-800 p-10 rounded-lg text-center transition-all text-xl ${linePosition > index * 25 && linePosition < (index + 1) * 25 ? "bg-neonBlue text-black shadow-xl" : "text-white"}`}>
                <h2 className="text-4xl font-bold">{stat.number}</h2>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-16 w-full max-w-5xl bg-accent p-6 md:p-10 rounded-xl shadow-lg">
        {[
          { title: "Our Mission", text: "We are on a mission to support startup founders, fostering a thriving ecosystem for innovation and growth." },
          { title: "Our Vision", text: "To be the go-to platform for budding entrepreneurs, providing them with resources, mentorship, and networking opportunities." },
        ].map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold text-neonBlue">{section.title}</h2>
            <p className="text-gray-400 text-xl">{section.text}</p>
          </div>
        ))}
      </div>      

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-xl hover:from-purple-600 hover:to-indigo-600 transition text-center max-w-5xl shadow-lg">
        <p className="text-white font-semibold text-lg">We're on a mission to help founders from all over India to build Startups!</p>
        <a href="/contact" className="mt-4 inline-block bg-white text-purple-700 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition cursor-none">Join Us</a>
      </div>
    </div>
  );
};

export default AboutUs;


