import React , {useContext , useEffect} from "react";
import UserContext from "../context/UserContext";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const {linkName} = useContext(UserContext)
  
    useEffect(() => {
      console.log(linkName)
    } , [])
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact GlobeTrek</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center space-x-4">
              <FiMail className="text-blue-500 text-2xl" />
              <span>contact@globetrek.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FiPhone className="text-blue-500 text-2xl" />
              <span>+91 9306143762</span>
            </div>
            <div className="flex items-center space-x-4">
              <FiMapPin className="text-blue-500 text-2xl" />
              <span>Bhiwani, India</span>
            </div>
          </div>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
