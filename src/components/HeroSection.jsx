// // HeroSection.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const textVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.3,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 1, ease: "easeOut" },
//   },
// };

// const HeroSection = () => {
//   return (
//     <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 bg-gray-100 min-h-screen">
//       {/* Left Text Content */}
//       <div className="md:w-1/2 space-y-6">
//         <motion.h1
//           className="text-5xl font-bold text-gray-800"
//           variants={textVariants}
//           initial="hidden"
//           animate="visible"
//           custom={1}
//         >
//           Welcome to Your Dream Platform
//         </motion.h1>

//         <motion.p
//           className="text-lg text-gray-600"
//           variants={textVariants}
//           initial="hidden"
//           animate="visible"
//           custom={2}
//         >
//           Build, grow, and scale with the best tools for developers.
//         </motion.p>

//         <motion.button
//           className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
//           variants={textVariants}
//           initial="hidden"
//           animate="visible"
//           custom={3}
//         >
//           Get Started
//         </motion.button>
//       </div>

//       {/* Right Image Content */}
//       <motion.div
//         className="md:w-1/2 mb-8 md:mb-0"
//         variants={imageVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <img
//           src="https://source.unsplash.com/600x400/?technology"
//           alt="hero"
//           className="rounded-xl shadow-lg w-full"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const HeroSection = () => {
  
  const navigate = useNavigate()
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      {/* Left Text Content */}
      <div className="md:w-1/2 space-y-6">
        <motion.h1
          className="text-5xl font-bold text-gray-800"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Discover Countries Around the World
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Explore detailed information, flags, population, languages, and more
          from every country — all in one place.
        </motion.p>
        
        <motion.button
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl cursor-pointer shadow-md hover:bg-blue-700 transition"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={3}
          onClick={() => navigate('/home')}
        >
          Explore Now
        </motion.button>
      </div>

      {/* Right Image Content */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png"
          alt="World Map"
          className="rounded-xl w-md ml-40"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
