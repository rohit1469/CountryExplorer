// import React from "react";

// export default function RegionFilter({ setRegion }) {
//   return (
//     <select
//       onChange={(e) => setRegion(e.target.value)}
//       className="w-full md:w-60 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//     >
//       <option value="">Filter by Region</option>
//       <option value="Africa">Africa</option>
//       <option value="Americas">Americas</option>
//       <option value="Asia">Asia</option>
//       <option value="Europe">Europe</option>
//       <option value="Oceania">Oceania</option>
//     </select>
//   );
// }


import React from "react";

export default function RegionFilter({ setRegion }) {
  return (
    <select
      onChange={(e) => setRegion(e.target.value)}
      className="w-full md:w-64 px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-800 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-md"
    >
      <option value="">🌍 Filter by Region</option>
      <option value="Africa">🌍 Africa</option>
      <option value="Americas">🌎 Americas</option>
      <option value="Asia">🌏 Asia</option>
      <option value="Europe">🌍 Europe</option>
      <option value="Oceania">🌊 Oceania</option>
    </select>
  );
}
