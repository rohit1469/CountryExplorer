import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiMenu, FiGlobe, FiX } from "react-icons/fi";

const FooterGlass = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-black text-white backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          {/* <h2 className="text-3xl font-bold text-blue-400">GlobeTrek</h2> */}

          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full flex items-center justify-center shadow">
              <FiGlobe size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
              GlobeTrek
            </span>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Discover, explore, and share your adventures with the world.
          </p>
          <div className="flex mt-5 space-x-4">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Trips</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">
            Stay up to date with our travel deals!
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 w-full rounded-md text-gray-400"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 py-6 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} GlobeTrek. Made with ❤️ by ROHIT. All
        rights reserved.
      </div>
    </footer>
  );
};

export default FooterGlass;
