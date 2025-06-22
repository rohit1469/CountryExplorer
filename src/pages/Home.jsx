// import React, { useState, useEffect, useContext } from "react";
// import CountryCard from "../components/CountryCard";
// import fetchingData from "../components/fetchingData";
// import { motion } from "framer-motion";
// import MovingFlags from "./MovingFlags";
// import UserContext from "../context/UserContext";
// const Home = () => {
//   const [data, setData] = useState([]);
//   const [searchCountryData, setSeacrchCountryData] = useState();
//   const { search, setSearch, handleChange, submit, setSubmit } =
//     useContext(UserContext);
//   const handleClick = () => {
//     handleChange(setSubmit(true));
//   };
//   const textVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.3,
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     }),
//   };
//   const url =
//     "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetchingData(url);
//         const array1 = response.data;
//         setData(array1);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//    const containerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "60vh",  // Adjust this value as needed
//     width: "100%",
//     padding: "2rem",
//     boxSizing: "border-box"
//   };

//   const movingFlagsStyle = {
//     width: "70%",
//     overflow: "hidden",
//     marginTop: "3rem",
//   };

//   //  useEffect(() => {

//   // }, []);

//   // useEffect(() => {
//   //   console.log(searchCountryData);
//   // }, [searchCountryData]);

//   let flagsArray = data.map((el) => el.flags.png);

//   return (
//     <>
//       <div style={movingFlagsStyle}>
//         <MovingFlags flags={flagsArray} />
//       </div>
//       <motion.div
//         className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center"
//         variants={textVariants}
//         initial="hidden"
//         animate="visible"
//         custom={3}
//         // style={{border:"1px solid red" , display:"block" , margin:"auto"}}
//       >
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search for a country..."
//           className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//         />
//         <button
//           onClick={handleClick}
//           className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
//         >
//           Search
//         </button>
//       </motion.div>

//       <div style={containerStyle}>
//       <CountryCard country={search} />

//       </div>

//     </>
//   );
// };

// export default Home;

// import React, { useState, useEffect, useContext } from "react";
// import CountryCard from "../components/CountryCard";
// import UserContext from "../context/UserContext";
// // import ThemeToggle from "../components/ThemeToggle"; // Optional

// export default function Home() {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { setFiltered, searchTerm, region, filtered } = useContext(UserContext);

//   useEffect(() => {
//     fetch(
//       "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setCountries(data);
//         setFiltered(data);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     let results = countries;

//     if (searchTerm)
//       results = results.filter((c) =>
//         c.name.common.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//     if (region) results = results.filter((c) => c.region === region);

//     setFiltered(results);

//   }, [searchTerm, region, countries]);

//   if (loading) return <h1>Loading...</h1>;

//   return (
//     <div className="p-6">
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filtered.length > 0 ? (
//           filtered.map((country, idx) => (
//             <CountryCard key={idx} country={country} />
//           ))
//         ) : (
//           <h1>No results found</h1>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useContext } from "react";
import CountryCard from "../components/CountryCard";
import UserContext from "../context/UserContext";
// import LoadingSkeleton from "./LoadingSkeleton";
import GlobeLoader from "./LoadingSkeleton";
// import CountryDetails from "../components/CountryDetails";
import { useNavigate } from "react-router";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
    // const [favourites, setFavourites] = useState([]);

  // const [page, setPage] = useState(false);
  const navigate = useNavigate();
  const { setFiltered, searchTerm, region, filtered } = useContext(UserContext);


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population"
        );

        const data = await response.json();
        // setInterval(() => {
        setCountries(data);
        setFiltered(data);
        setLoading(false);
        // }, 3000);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    let results = countries;

    if (searchTerm) {
      results = results.filter((c) =>
        c.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (region) {
      results = results.filter((c) => c.region === region);
    }

    setFiltered(results);
    // console.log(filtered)
  }, [searchTerm, region, countries]);

  // Loading Skeleton Component
  const handleClick = (country) => {
    // setPage(true)
    navigate(`/country/${country}`);
    // console.log("country is : ", country);
  };

  return (
    <div className="p-6">
      {loading ? (
        <GlobeLoader />
      ) : filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((country, idx) => (
            <CountryCard
              key={country.name.common}
              country={country}
              onClick={() => handleClick(country.name.common)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <svg
            className="w-16 h-16 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-600">
            No countries found
          </h2>
          <p className="text-gray-500 mt-2">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}
