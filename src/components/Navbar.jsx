// import React, { useState, useEffect, useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiX, FiSearch, FiGlobe } from "react-icons/fi";
// import { NavLink } from "react-router";
// import UserContext from "../context/UserContext";
// import SearchBar from "./SearchBar";
// import RegionFilter from "./RegionFilter";
// import { useLocation } from "react-router";

// const navLinks = [
//   { name: "Home", path: "/home" },
//   { name: "Favorites", path: "/favorites" },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
//   { name: "Visa-Checker", path: "/visa-checker" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { setSearchTerm, setRegion, linkName, setLinkName } =
//     useContext(UserContext);

//   const location = useLocation();
//   const currentPath = location.pathname;
//   const shouldShowSearch = !["/about", "/contact"].includes(currentPath);
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuOpen && !event.target.closest(".mobile-menu-container")) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [menuOpen]);

//   const navVariants = {
//     hidden: { y: -50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const mobileMenuVariants = {
//     hidden: { x: "-100%" },
//     visible: {
//       x: 0,
//       transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
//     },
//     exit: {
//       x: "-100%",
//       transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   const linkVariants = {
//     hover: { scale: 1.05 },
//     tap: { scale: 0.95 },
//   };

//   const Logo = () => (
//     <div className="flex items-center space-x-2">
//       <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
//         <svg
//           className="w-6 h-6 text-white"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
//             fill="currentColor"
//           />
//           <path
//             d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
//             fill="currentColor"
//           />
//           <path
//             d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
//             fill="currentColor"
//           />
//         </svg>
//       </div>
//       <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
//         GlobeTrek
//       </span>
//     </div>
//   );

//   return (
//     <>
//       {/* Navbar */}
//       <motion.nav
//         variants={navVariants}
//         initial="hidden"
//         animate="visible"
//         className={`fixed w-full top-0 left-0 z-50 px-6 py-3 transition-all duration-300 ${
//           scrolled
//             ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
//             : "bg-gradient-to-b from-gray-900 to-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4">
//           <div className="flex justify-between items-center w-full md:w-auto">
//             <NavLink to="/">
//               <Logo />
//             </NavLink>

//             {/* Mobile Menu Button */}
//             <motion.button
//               className="md:hidden text-white focus:outline-none"
//               onClick={() => setMenuOpen((prev) => !prev)}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               aria-label={menuOpen ? "Close menu" : "Open menu"}
//             >
//               {menuOpen ? (
//                 <FiX size={24} className="text-teal-400" />
//               ) : (
//                 <FiMenu size={24} />
//               )}
//             </motion.button>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8 w-full md:w-auto">
//             {navLinks.map((link) => (
//               <motion.div
//                 key={link.path}
//                 variants={linkVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//               >
//                 <NavLink
//                   to={link.path}
//                   onClick={() => setLinkName(link.name)}
//                   className={({ isActive }) =>
//                     `text-white hover:text-teal-400 transition ${
//                       isActive ? "text-teal-400 font-medium" : ""
//                     }`
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               </motion.div>
//             ))}

//             {/* Search and Filter */}
//             <div className="ml-auto flex items-center gap-4">
//               {/* {show && <SearchBar setSearchTerm={setSearchTerm} />} */}
//               {shouldShowSearch && <SearchBar setSearchTerm={setSearchTerm} />}
//               {shouldShowSearch && <RegionFilter setRegion={setRegion}/>}
//               {/* <RegionFilter setRegion={setRegion} /> */}
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <div className="fixed inset-0 z-40 md:hidden">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.7 }}
//               exit={{ opacity: 0 }}
//               className="absolute inset-0 bg-black"
//               onClick={() => setMenuOpen(false)}
//             />

//             <motion.div
//               variants={mobileMenuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="absolute top-0 left-0 h-full w-3/4 bg-gray-900 shadow-xl z-50 mobile-menu-container px-6 py-8 space-y-8 overflow-y-auto"
//             >
//               <div className="flex justify-between items-center border-b border-gray-700 pb-4">
//                 <Logo />
//                 <button
//                   onClick={() => setMenuOpen(false)}
//                   className="text-gray-400 hover:text-teal-400"
//                 >
//                   <FiX size={24} />
//                 </button>
//               </div>

//               <div className="space-y-6">
//                 {navLinks.map((link) => (
//                   <motion.div
//                     key={link.path}
//                     variants={linkVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                   >
//                     <NavLink
//                       to={link.path}
//                       className={({ isActive }) =>
//                         `block text-lg ${
//                           isActive
//                             ? "text-teal-400 font-medium"
//                             : "text-gray-300 hover:text-teal-400"
//                         }`
//                       }
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       {link.name}
//                     </NavLink>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Mobile search and filter */}
//               <div className="space-y-4 pt-6 border-t border-gray-700">
//                 <h3 className="text-gray-400 uppercase text-sm font-semibold">
//                   Explore
//                 </h3>
//                 {linkName !== "about" ? (
//                   <SearchBar setSearchTerm={setSearchTerm} />
//                 ) : null}

//                 <div className="pt-2">
//                   <RegionFilter setRegion={setRegion} />
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect, useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu,FiGlobe, FiX } from "react-icons/fi";
// import { NavLink } from "react-router";
// import UserContext from "../context/UserContext";
// import SearchBar from "./SearchBar";
// import RegionFilter from "./RegionFilter";
// import { useLocation } from "react-router";

// const navLinks = [
//   { name: "Home", path: "/home" },
//   { name: "Favorites", path: "/favorites" },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
//   { name: "Visa-Checker", path: "/visa-checker" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { setSearchTerm, setRegion, linkName, setLinkName } =
//     useContext(UserContext);

//   const location = useLocation();
//   const currentPath = location.pathname;
//   const shouldShowSearch = !["/about", "/contact"].includes(currentPath);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navVariants = {
//     hidden: { y: -50, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
//   };

//   const mobileMenuVariants = {
//     hidden: { x: "100%" },
//     visible: {
//       x: 0,
//       transition: { duration: 0.4, ease: "easeInOut" },
//     },
//     exit: {
//       x: "100%",
//       transition: { duration: 0.3, ease: "easeInOut" },
//     },
//   };

//   const Logo = () => (
//     <div className="flex items-center space-x-2">
//       <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full flex items-center justify-center shadow">
//         <FiGlobe size={20} className="text-white" />
//       </div>
//       <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
//         GlobeTrek
//       </span>
//     </div>
//   );

//   return (
//     <motion.nav
//       variants={navVariants}
//       initial="hidden"
//       animate="visible"
//       className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 backdrop-blur-md ${
//         scrolled ? "bg-white/90 shadow-md" : "bg-white/60"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <NavLink to="/">
//           <Logo />
//         </NavLink>

//         <div className="hidden md:flex items-center space-x-6">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.path}
//               to={link.path}
//               onClick={() => setLinkName(link.name)}
//               className={({ isActive }) =>
//                 `text-sm font-medium transition duration-200 hover:text-teal-500 ${
//                   isActive ? "text-teal-600" : "text-gray-700"
//                 }`
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}

//           {shouldShowSearch && <SearchBar setSearchTerm={setSearchTerm} />}
//           {shouldShowSearch && <RegionFilter setRegion={setRegion} />}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             variants={mobileMenuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="md:hidden fixed top-0 right-0 h-full w-64 bg-white z-40 shadow-xl p-6 space-y-6"
//           >
//             <div className="flex justify-between items-center">
//               <Logo />
//               <button onClick={() => setMenuOpen(false)}>
//                 <FiX size={24} className="text-gray-500" />
//               </button>
//             </div>

//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => {
//                     setMenuOpen(false);
//                     setLinkName(link.name);
//                   }}
//                   className={({ isActive }) =>
//                     `text-base font-medium transition hover:text-teal-500 ${
//                       isActive ? "text-teal-600" : "text-gray-700"
//                     }`
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}
//             </div>

//             <div className="pt-4 border-t border-gray-200">
//               {shouldShowSearch && <SearchBar setSearchTerm={setSearchTerm} />}
//               {shouldShowSearch && <RegionFilter setRegion={setRegion} />}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { NavLink } from "react-router";
import UserContext from "../context/UserContext";
import SearchBar from "./SearchBar";
import RegionFilter from "./RegionFilter";
import { useLocation } from "react-router";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "Favorites", path: "/favorites" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Visa-Checker", path: "/visa-checker" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setSearchTerm, setRegion, linkName, setLinkName } =
    useContext(UserContext);

  const location = useLocation();
  const currentPath = location.pathname;
  const shouldShowSearch = !["/about", "/contact"].includes(currentPath);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <FiGlobe className="text-cyan-500 w-7 h-7" />
      <span className="text-2xl font-extrabold text-gray-800">GlobeTrek</span>
    </div>
  );

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-3 ${
        scrolled ? "bg-white shadow-md" : "bg-white/80"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/">
          <Logo />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setLinkName(link.name)}
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-cyan-600 border-b-2 border-cyan-600 pb-1"
                    : "text-gray-600 hover:text-cyan-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          {shouldShowSearch && <SearchBar setSearchTerm={setSearchTerm} />}
          {shouldShowSearch && <RegionFilter setRegion={setRegion} />}
        </div>

        {/* Mobile menu icon */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            exit={{ y: -200 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 bg-white rounded-lg shadow-md px-6 py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => {
                  setMenuOpen(false);
                  setLinkName(link.name);
                }}
                className={({ isActive }) =>
                  `block text-base font-medium ${
                    isActive
                      ? "text-cyan-600"
                      : "text-gray-700 hover:text-cyan-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {shouldShowSearch && <SearchBar setSearchTerm={setSearchTerm} />}
            {shouldShowSearch && <RegionFilter setRegion={setRegion} />}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
