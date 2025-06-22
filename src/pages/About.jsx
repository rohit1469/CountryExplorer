import React, { useEffect } from "react";
import UserContext from "../context/UserContext";
import { FiGlobe, FiCompass, FiCode, FiHeart } from "react-icons/fi";
import { useContext } from "react";
const About = () => {
  const {linkName} = useContext(UserContext)

  useEffect(() => {
    console.log(linkName)
  } , [])

  return (
    <div className="pt-24 px-6 max-w-5xl mx-auto text-black">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mb-4">
          Welcome to GlobeTrek
        </h1>
        <p className="text-gray-400 text-lg">
          Discover the world, one country at a time.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <FiGlobe className="text-teal-400 text-2xl" />
          <h2 className="text-2xl font-semibold">Our Mission</h2>
        </div>
        <p className="text-gray-500">
          GlobeTrek is built to make exploring global countries fun, visual, and
          informative. Whether you're a traveler, student, or simply curious —
          this app gives you access to key information about every country in
          the world.
        </p>
      </section>

      {/* Technologies Section */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <FiCode className="text-blue-400 text-2xl" />
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
        </div>
        <ul className="list-disc list-inside text-gray-500 space-y-1 ml-4">
          <li>⚛️ React.js – For building responsive UI</li>
          <li>🎨 Tailwind CSS – For fast and consistent styling</li>
          <li>🎞️ Framer Motion – For smooth animations</li>
          <li>🌍 REST Countries API – For real-time country data</li>
        </ul>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <FiCompass className="text-yellow-400 text-2xl" />
          <h2 className="text-2xl font-semibold">What You Can Do</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            🔍 Search countries by name
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            🌐 Filter countries by region
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            ❤️ Save your favorite countries
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            📊 View population, capital, currency, and more
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
