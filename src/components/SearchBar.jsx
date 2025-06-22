// import React from "react";

// export default function SearchBar({ setSearchTerm }) {
//   return (
//     <input
//       type="text"
//       placeholder="Search for a country..."
//       onChange={(e) => setSearchTerm(e.target.value)}
//       className="w-full md:w-80 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
//     />
//   );
// }

import React from "react";

export default function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full md:w-80 px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-800 shadow-sm outline-none transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_10px_#3b82f6]"
    />
  );
}
