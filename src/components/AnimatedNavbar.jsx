// // // AnimatedNavbar.jsx
// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { FiMenu, FiX } from "react-icons/fi";
// // import { NavLink } from "react-router";

// // const navLinks = ["Home", "About", "Contact"];

// // const AnimatedNavbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const navVariants = {
// //     hidden: { y: -50, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: { duration: 0.6, ease: "easeOut" },
// //     },
// //   };

// //   const mobileMenuVariants = {
// //     hidden: { x: "-100%" },
// //     visible: {
// //       x: 0,
// //       transition: { duration: 0.4, ease: "easeOut" },
// //     },
// //     exit: {
// //       x: "-100%",
// //       transition: { duration: 0.4, ease: "easeIn" },
// //     },
// //   };

// //   return (
// //     <>
// //       {/* Navbar */}
// //       <motion.nav
// //         variants={navVariants}
// //         initial="hidden"
// //         animate="visible"
// //         // className="fixed w-full top-0 left-0 bg-black shadow-md z-50 px-6 py-4 flex justify-between items-center"
// //         className="fixed w-full top-0 left-0 bg-black shadow-md z-50 px-6 py-4 flex justify-between items-center h-16"
// //       >
// //         <div className="text-xl font-bold text-blue-600">MyLogo</div>

// //         {/* Desktop Links */}
// //         <div className="hidden md:flex gap-6">
// //           {navLinks.map((link, i) => (
// //             <motion.a
// //               to={`/${link}`}
// //               key={i}
// //               href={`${link.toLowerCase()}`}
// //               whileHover={{ scale: 1.1 }}
// //               className="text-white hover:text-blue-600 transition"
// //             >
// //               <NavLink to={`/${link[0].toLowerCase() + link.slice(1)}`}>{link}</NavLink>
// //             </motion.a>
// //           ))}
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <div className="md:hidden">
// //           <button onClick={() => setMenuOpen((prev) => !prev)}>
// //             {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// //           </button>
// //         </div>
// //       </motion.nav>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {menuOpen && (
// //           <motion.div
// //             variants={mobileMenuVariants}
// //             initial="hidden"
// //             animate="visible"
// //             exit="exit"
// //             className="fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg z-40 px-6 py-10 space-y-6 md:hidden"
// //           >
// //             {navLinks.map((link, i) => (
// //               <motion.a
// //                 key={i}
// //                 href={`#${link.toLowerCase()}`}
// //                 whileHover={{ scale: 1.1 }}
// //                 onClick={() => setMenuOpen(false)}
// //                 className="block text-lg text-gray-800 hover:text-blue-600"
// //               >
// //                 {link}
// //               </motion.a>
// //             ))}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };

// // export default AnimatedNavbar;

// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { FiMenu, FiX } from "react-icons/fi";
// // import { NavLink } from "react-router";

// // const navLinks = [
// //   { name: "Home", path: "/home" },
// //   { name: "About", path: "/about" },
// //   { name: "Contact", path: "/contact" },
// // ];

// // const AnimatedNavbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   // Handle scroll effect
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 10);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   // Close menu when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (menuOpen && !event.target.closest(".mobile-menu-container")) {
// //         setMenuOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, [menuOpen]);

// //   // Close menu on route change
// //   useEffect(() => {
// //     setMenuOpen(false);
// //   }, [window.location.pathname]);

// //   const navVariants = {
// //     hidden: { y: -50, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: { duration: 0.6, ease: "easeOut" },
// //     },
// //   };

// //   const mobileMenuVariants = {
// //     hidden: { x: "-100%" },
// //     visible: {
// //       x: 0,
// //       transition: { duration: 0.4, ease: "easeOut" },
// //     },
// //     exit: {
// //       x: "-100%",
// //       transition: { duration: 0.4, ease: "easeIn" },
// //     },
// //   };

// //   const linkVariants = {
// //     hover: { scale: 1.05 },
// //     tap: { scale: 0.95 },
// //   };

// //   return (
// //     <>
// //       {/* Navbar */}
// //       <motion.nav
// //         variants={navVariants}
// //         initial="hidden"
// //         animate="visible"
// //         className={`fixed w-full top-0 left-0 shadow-md z-50 px-6 py-4 flex justify-between items-center h-16 transition-colors duration-300 ${
// //           scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-black"
// //         }`}
// //       >
// //         <NavLink
// //           to="/"
// //           className="text-xl font-bold text-blue-600 hover:text-blue-400 transition"
// //         >
// //           MyLogo
// //         </NavLink>

// //         {/* Desktop Links */}
// //         <div className="hidden md:flex gap-6">
// //           {navLinks.map((link, i) => (
// //             <motion.div
// //               key={link.path}
// //               variants={linkVariants}
// //               whileHover="hover"
// //               whileTap="tap"
// //             >
// //               <NavLink
// //                 to={link.path}
// //                 className={({ isActive }) =>
// //                   `text-white hover:text-blue-400 transition ${
// //                     isActive ? "text-blue-400 font-medium" : ""
// //                   }`
// //                 }
// //               >
// //                 {link.name}
// //               </NavLink>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <motion.button
// //           className="md:hidden text-white focus:outline-none"
// //           onClick={() => setMenuOpen((prev) => !prev)}
// //           whileHover={{ scale: 1.1 }}
// //           whileTap={{ scale: 0.9 }}
// //           aria-label={menuOpen ? "Close menu" : "Open menu"}
// //         >
// //           {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// //         </motion.button>
// //       </motion.nav>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {menuOpen && (
// //           <div className="fixed inset-0 z-40 md:hidden">
// //             {/* Overlay */}
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 0.5 }}
// //               exit={{ opacity: 0 }}
// //               className="absolute inset-0 bg-black"
// //               onClick={() => setMenuOpen(false)}
// //             />

// //             {/* Menu Content */}
// //             <motion.div
// //               variants={mobileMenuVariants}
// //               initial="hidden"
// //               animate="visible"
// //               exit="exit"
// //               className="absolute top-0 left-0 h-full w-3/4 bg-white shadow-lg z-50 mobile-menu-container"
// //             >
// //               <div className="px-6 py-10 space-y-6">
// //                 {navLinks.map((link) => (
// //                   <motion.div
// //                     key={link.path}
// //                     variants={linkVariants}
// //                     whileHover="hover"
// //                     whileTap="tap"
// //                   >
// //                     <NavLink
// //                       to={link.path}
// //                       className={({ isActive }) =>
// //                         `block text-lg ${
// //                           isActive
// //                             ? "text-blue-600 font-medium"
// //                             : "text-gray-800 hover:text-blue-600"
// //                         }`
// //                       }
// //                       onClick={() => setMenuOpen(false)}
// //                     >
// //                       {link.name}
// //                     </NavLink>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           </div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };

// // export default AnimatedNavbar;

// import React, { useState, useEffect, useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiX } from "react-icons/fi";
// import { NavLink } from "react-router";
// import SearchBar from "./SearchBar";
// import RegionFilter from "./RegionFilter";
// import UserContext from "../context/UserContext";

// const navLinks = [
//   { name: "Home", path: "/home" },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// const AnimatedNavbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const {setSearchTerm , setRegion } = useContext(UserContext)

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

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [window.location.pathname]);

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
//       transition: { duration: 0.4, ease: "easeOut" },
//     },
//     exit: {
//       x: "-100%",
//       transition: { duration: 0.4, ease: "easeIn" },
//     },
//   };

//   const linkVariants = {
//     hover: { scale: 1.05 },
//     tap: { scale: 0.95 },
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <motion.nav
//         variants={navVariants}
//         initial="hidden"
//         animate="visible"
//         className={`fixed w-full top-0 left-0 shadow-md z-50 px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 transition-colors duration-300 ${
//           scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-black"
//         }`}
//       >
//         <div className="flex justify-between items-center w-full md:w-auto">
//           <NavLink
//             to="/"
//             className="text-xl font-bold text-blue-600 hover:text-blue-400 transition"
//           >
//             MyLogo
//           </NavLink>

//           {/* Mobile Menu Button */}
//           <motion.button
//             className="md:hidden text-white focus:outline-none"
//             onClick={() => setMenuOpen((prev) => !prev)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             aria-label={menuOpen ? "Close menu" : "Open menu"}
//           >
//             {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </motion.button>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-6 w-full md:w-auto">
//           {navLinks.map((link, i) => (
//             <motion.div
//               key={link.path}
//               variants={linkVariants}
//               whileHover="hover"
//               whileTap="tap"
//             >
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `text-white hover:text-blue-400 transition ${
//                     isActive ? "text-blue-400 font-medium" : ""
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </motion.div>
//           ))}
//           {/* Add Search and Filter */}
//           <div className="ml-auto flex items-center gap-4">
//             <SearchBar setSearchTerm={setSearchTerm} />
//             <RegionFilter setRegion={setRegion} />
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <div className="fixed inset-0 z-40 md:hidden">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.5 }}
//               exit={{ opacity: 0 }}
//               className="absolute inset-0 bg-black"
//               onClick={() => setMenuOpen(false)}
//             />

//             <motion.div
//               variants={mobileMenuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="absolute top-0 left-0 h-full w-3/4 bg-white shadow-lg z-50 mobile-menu-container px-6 py-10 space-y-6"
//             >
//               {navLinks.map((link) => (
//                 <motion.div
//                   key={link.path}
//                   variants={linkVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                 >
//                   <NavLink
//                     to={link.path}
//                     className={({ isActive }) =>
//                       `block text-lg ${
//                         isActive
//                           ? "text-blue-600 font-medium"
//                           : "text-gray-800 hover:text-blue-600"
//                       }`
//                     }
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {link.name}
//                   </NavLink>
//                 </motion.div>
//               ))}

//               {/* Mobile search and filter */}
//               <div className="space-y-4 pt-6">
//                 <SearchBar setSearchTerm={setSearchTerm} />
//                 <RegionFilter setRegion={setRegion} />
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default AnimatedNavbar;
