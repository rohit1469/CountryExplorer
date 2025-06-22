import './LoadingSkeleton.css'

// // const LoadingSkeleton = () => (
// //     <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
// //       {[...Array(8)].map((_, index) => (
// //         <div key={index} className="skeleton-card">
// //           <div className="skeleton-image"></div>
// //           <div className="skeleton-line"></div>
// //           <div className="skeleton-line short"></div>
// //           <div className="skeleton-line medium"></div>
// //         </div>
// //       ))}
// //     </div>
// //   );


// //   export default LoadingSkeleton

// // const GlobeLoader = () => (
// //   <div className="flex flex-col items-center justify-center h-64">
// //     <div className="relative w-24 h-24 mb-4">
// //       <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
// //       <div className="absolute top-1/2 left-1/2 w-4 h-4 -mt-2 -ml-2 bg-blue-500 rounded-full animate-pulse"></div>
// //       {[...Array(6)].map((_, i) => (
// //         <div 
// //           key={i}
// //           className="absolute top-0 left-1/2 w-2 h-2 -ml-1 bg-blue-400 rounded-full"
// //           style={{
// //             transform: `rotate(${i * 60}deg) translateY(-40px)`,
// //             animation: `pulse 1.5s ease-in-out infinite`,
// //             animationDelay: `${i * 0.2}s`
// //           }}
// //         ></div>
// //       ))}
// //     </div>
// //     <p className="text-gray-600 dark:text-gray-300">Loading countries...</p>
// //   </div>
// // );

// // export default GlobeLoader

// const GlobeLoader = () => (
//   <div className="flex flex-col items-center justify-center h-64">
//     <div className="flex items-end h-20 mb-6">
//       {['#38b2ac', '#4299e1', '#9f7aea', '#ed64a6', '#f56565'].map((color, i) => (
//         <div 
//           key={i}
//           className="w-4 mx-1 rounded-t-sm"
//           style={{
//             height: `${40 + Math.random() * 40}px`,
//             backgroundColor: color,
//             animation: `wave 1.2s ease-in-out infinite`,
//             animationDelay: `${i * 0.1}s`
//           }}
//         ></div>
//       ))}
//     </div>
//     <p className="text-gray-600 dark:text-gray-300">Fetching country data...</p>
//   </div>
// );


// export default GlobeLoader


// import './GlobeLoader.css';

// const GlobeLoader = () => (
//   <div className="globe-loader-wrapper">
//     <div className="globe-container">
//       <div className="globe"></div>
//       {[...Array(8)].map((_, i) => (
//         <div
//           key={i}
//           className="orbit-dot"
//           style={{
//             transform: `rotate(${i * 45}deg) translateX(70px)`,
//             animationDelay: `${i * 0.15}s`,
//           }}
//         ></div>
//       ))}
//     </div>
//     <p className="loader-text">Fetching country data...</p>
//   </div>
// );

// export default GlobeLoader;

// import './GlobePulseLoader.css';

// const GlobePulseLoader = () => (
//   <div className="globe-pulse-wrapper">
//     {[...Array(9)].map((_, i) => (
//       <span
//         key={i}
//         className="globe-dot"
//         style={{
//           top: `${30 + Math.random() * 40}%`,
//           left: `${30 + Math.random() * 40}%`,
//           animationDelay: `${i * 0.2}s`,
//         }}
//       ></span>
//     ))}
//     <p className="loader-text">Mapping world data...</p>
//   </div>
// );

// export default GlobePulseLoader;


// import './RotatingGlobeLoader.css';

const RotatingGlobeLoader = () => (
  <div className="globe3d-loader">
    <div className="globe3d"></div>
    <p className="globe3d-text">Loading global data...</p>
  </div>
);

export default RotatingGlobeLoader;
