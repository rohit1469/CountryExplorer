// import React, { useEffect, useState, useContext } from "react";
// import fetchingData from "./fetchingData";
// import { div } from "framer-motion/client";
// import UserContext from "../context/UserContext.js";
// import { useSubmit } from "react-router";

// const CountryCard = ({ country }) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   // const [errorMsg , setErrorMsg] = useState('')
//   const { search, submit, setSubmit } = useContext(UserContext);

//   const url = search ? `https://restcountries.com/v3.1/name/${country}` : null;

//   useEffect(() => {
//     if (submit && url) {
//       const fetchData = async () => {
//         try {
//           const response = await fetchingData(url);
//           if (response?.data?.length) {
//             const array1 = response.data;
//             setData(array1);
//           } else {
//             setError("No countries found with that name");
//           }
//         } catch (error) {
//           setError(error.message);
//         } finally {
//           setSubmit(false);
//         }
//       };

//       fetchData();
//     }
//   }, [submit, url, useSubmit]);

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   const style = {
//     border: "1px solid",
//   };

//   if (error) return <div className="error-message">{error}</div>;

//   return (
//     <>
//       {data.map((el) => {
//         return (
//           <div key={el.id} style={style}>
//             <img src={el.flags.png} alt={el.flags.alt} />
//             <h1>{el.name.common}</h1>
//             <h3>{el.region}</h3>
//             <h3>{el.capital[0]}</h3>
//             <h3>{el.population}</h3>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default CountryCard;

// import React, { useEffect, useState, useContext } from "react";
// import fetchingData from "./fetchingData";
// import UserContext from "../context/UserContext.js";
// import styles from "./CountryCard.module.css"; // Import the CSS module

// const CountryCard = ({ country }) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const { search, submit, setSubmit } = useContext(UserContext);

//   const url = search ? `https://restcountries.com/v3.1/name/${country}` : null;

//   useEffect(() => {
//     if (submit && url) {
//       const fetchData = async () => {
//         try {
//           const response = await fetchingData(url);
//           if (response?.data?.length) {
//             setData(response.data);
//           } else {
//             setError("No countries found with that name");
//           }
//         } catch (error) {
//           setError(error.message || "Failed to fetch country data");
//         } finally {
//           setSubmit(false);
//         }
//       };

//       fetchData();
//     }
//   }, [submit, url, setSubmit]);

//   if (error) return <div className={styles.errorMessage}>{error}</div>;

//   if (!data.length && !submit) {
//     return (
//       <div className={styles.noResults}>
//         Search for a country to see results
//       </div>
//     );
//   }

//   return (
//     <div className={styles.countryCardsContainer}>
//       {data.map((el) => (
//         <div key={el.name.common} className={styles.countryCard}>
//           <img
//             src={el.flags.png}
//             alt={el.flags.alt || `${el.name.common} flag`}
//           />
//           <h2>{el.name.common}</h2>
//           <p>
//             <strong>Region:</strong> {el.region}
//           </p>
//           <p>
//             <strong>Capital:</strong> {el.capital?.[0] || "N/A"}
//           </p>
//           <p>
//             <strong>Population:</strong> {el.population.toLocaleString()}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CountryCard;

// import React, { useEffect, useState, useContext } from "react";
// import fetchingData from "./fetchingData";
// import UserContext from "../context/UserContext.js";
// import styles from "./CountryCard.module.css";

// const CountryCard = ({ country }) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const { search, submit, setSubmit } = useContext(UserContext);

//   const url = search ? `https://restcountries.com/v3.1/name/${country}` : null;

//   useEffect(() => {
//     if (submit && url) {
//       const fetchData = async () => {
//         try {
//           const response = await fetchingData(url);
//           if (response?.data?.length) {
//             setData(response.data);
//           } else {
//             setError("No countries found with that name");
//           }
//         } catch (error) {
//           setError(error.message || "Failed to fetch country data");
//         setData([]);
//         } finally {
//           setSubmit(false);
//         }
//       };

//       fetchData();
//     }
//   }, [submit, url, setSubmit]);

//   if (error) return <div className={styles.errorMessage}>{error}</div>;

//   if (!data.length && !submit) {
//     return <div className={styles.noResults}>Search for a country to see results</div>;
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.countryCardsContainer}>
//         {data.map((el) => (
//           <div key={el.name.common} className={styles.countryCard}>
//             <img
//               src={el.flags.png}
//               alt={el.flags.alt || `${el.name.common} flag`}
//             />
//             <h2>{el.name.common}</h2>
//             <p>
//               <strong>Region:</strong> {el.region}
//             </p>
//             <p>
//               <strong>Capital:</strong> {el.capital?.[0] || "N/A"}
//             </p>
//             <p>
//               <strong>Population:</strong> {el.population.toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default CountryCard;

// import React, { useEffect, useState, useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import fetchingData from "./fetchingData";
// import UserContext from "../context/UserContext.js";
// import styles from "./CountryCard.module.css";

// const CountryCard = ({ country }) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const { search, submit, setSubmit } = useContext(UserContext);

//   const url = search ? `https://restcountries.com/v3.1/name/${country}` : null;

//   useEffect(() => {
//     if (submit && url) {
//       const fetchData = async () => {
//         try {
//           const response = await fetchingData(url);
//           if (response?.data?.length) {
//             setData(response.data);
//             setError(null);
//           } else {
//             setError("No countries found with that name");
//             setData([]);
//           }
//         } catch (error) {
//           setError(error.message || "Failed to fetch country data");
//           setData([]);
//         } finally {
//           setSubmit(false);
//         }
//       };

//       fetchData();
//     }
//   }, [submit, url, setSubmit]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//     hover: {
//       y: -10,
//       scale: 1.03,
//       boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   const errorVariants = {
//     hidden: { scale: 0.9, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//   };

//   if (error) {
//     return (
//       <motion.div
//         className={styles.errorMessage}
//         variants={errorVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {error}
//       </motion.div>
//     );
//   }

//   if (!data.length && !submit) {
//     return (
//       <motion.div
//         className={styles.noResults}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         Search for a country to see results
//       </motion.div>
//     );
//   }

//   return (
//     <div className={styles.container}>
//       <motion.div
//         className={styles.countryCardsContainer}
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <AnimatePresence>
//           {data.map((el) => (
//             <motion.div
//               key={el.name.common}
//               className={styles.countryCard}
//               variants={cardVariants}
//               whileHover="hover"
//               layout
//             >
//               <motion.img
//                 src={el.flags.png}
//                 alt={el.flags.alt || `${el.name.common} flag`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <div className={styles.countryCardContent}>
//                 <motion.h2
//                   initial={{ x: -10 }}
//                   animate={{ x: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   {el.name.common}
//                 </motion.h2>
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <strong>Region:</strong> {el.region}
//                 </motion.p>
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   <strong>Capital:</strong> {el.capital?.[0] || "N/A"}
//                 </motion.p>
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   <strong>Population:</strong> {el.population.toLocaleString()}
//                 </motion.p>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };

// // export default CountryCard;

// import React, { useEffect, useState, useContext } from "react";
// import Button from "./Button";
// import { useLocation } from "react-router";
// import { toast } from "react-toastify";

// // import UserContext from "../context/UserContext";

// export default function CountryCard({ country, onClick, button, onRemove }) {
//   const [array, setArray] = useState(
//     JSON.parse(localStorage.getItem("countriesData")) || []
//   );
//   const [favourites, setFavourites] = useState([]);

//   const [added, setAdded] = useState(false);

//   const location = useLocation();
//   const path = location.pathname;

//   const shouldShow = !["/favorites"].includes(path);
//   const shouldShowClickMe = !["/home"].includes(path);
//   useState(() => {
//     const existing = JSON.parse(localStorage.getItem("countriesData")) || [];
//     const isAlreadyAdded = existing.some((el) => el.name.common === country.name.common )
//     setAdded(isAlreadyAdded)
//   } , [country.name.common])

//   // const { storedArray, setStoredArray } = useContext(UserContext);
//   // const navigate = useNavigate()

//   const handleClick = () => {
//     // setStoredArray([...storedArray, country]);
//     alert("Country Added Successful");
//     setAdded(true);
//     let existingArray = JSON.parse(localStorage.getItem("countriesData")) || [];

//     if (!isDuplicate) {
//       const updatedArray = [...existingArray, country];
//       localStorage.setItem("countriesData", JSON.stringify(updatedArray));
//       setArray(updatedArray);
//       setAdded(true);
//       toast.success("✅ Country added to favourites!", { theme: "light" });
//     } else {
//       toast.info("⚠️ Country is already in favourites!");
//     }
//   };

//   const deleteCountry = () => {
//     if (typeof onRemove === "function") {
//       onRemove(country);
//       toast("🗑️ Removed from favourites");
//     }
//   };

//   // const deleteCountry = () => {
//   //     let existingArray = JSON.parse(localStorage.getItem("countriesData")) || [];

//   //     let filteredArray = existingArray.filter((item) => item.name.common !== country.name.common)

//   //     localStorage.setItem("countriesData" , JSON.stringify(filteredArray))
//   //     setArray(filteredArray)

//   // }

//   // useEffect(() => {
//   //   // let getData = JSON.parse(localStorage.getItem("countriesData")) || [];

//   //   localStorage.setItem("countriesData", JSON.stringify(array));
//   // }, [array]);

//   return (
//     <div className="bg-white dark:bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
//       {/* <CountryDetails/> */}
//       <img
//         src={country.flags.png}
//         alt={`${country.name.common} flag`}
//         className="w-full h-40 object-cover"
//       />
//       <div className="p-4">
//         <h2 className="text-lg font-bold mb-2">{country.name.common}</h2>
//         <p>
//           <strong>Region:</strong> {country.region}
//         </p>
//         <p>
//           <strong>Capital:</strong> {country.capital?.[0]}
//         </p>
//         <p>
//           <strong>Population:</strong> {country.population.toLocaleString()}
//         </p>
//       </div>
//       {shouldShow && (
//         <Button
//           text={added ? "Added to Favourite" : "Add to Favourite"}
//           onClick={handleClick}
//           disabled={added}
//         />
//       )}

//       <Button text="Show Details" onClick={onClick} />
//       {shouldShowClickMe && <Button text={button} onClick={deleteCountry} />}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import Button from "./Button";
// import { useLocation } from "react-router";
// import { toast } from "react-toastify";

// export default function CountryCard({ country, onClick, button, onRemove }) {
//   const [array, setArray] = useState(
//     JSON.parse(localStorage.getItem("countriesData")) || []
//   );
//   const [added, setAdded] = useState(false);

//   const location = useLocation();
//   const path = location.pathname;

//   const shouldShow = !["/favorites"].includes(path);
//   const shouldShowClickMe = !["/home"].includes(path);

//   useEffect(() => {
//     const existingArray =
//       JSON.parse(localStorage.getItem("countriesData")) || [];
//     const isAlreadyAdded = existingArray.some(
//       (item) => item.name.common === country.name.common
//     );
//     setAdded(isAlreadyAdded);
//   }, [country.name.common]);

//   const handleClick = () => {
//     const existingArray =
//       JSON.parse(localStorage.getItem("countriesData")) || [];

//     const isDuplicate = existingArray.some(
//       (item) => item.name.common === country.name.common
//     );

//     if (!isDuplicate) {
//       const updatedArray = [...existingArray, country];
//       localStorage.setItem("countriesData", JSON.stringify(updatedArray));
//       setArray(updatedArray);
//       setAdded(true);
//       toast.success("✅ Country added to favourites!", { theme: "light" });
//     }
//   };

//   const deleteCountry = () => {
//     if (typeof onRemove === "function") {
//       onRemove(country);
//       toast("🗑️ Removed from favourites");
//     }
//   };

//   return (
//     <div className="bg-white dark:bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
//       <img
//         src={country.flags.png}
//         alt={`${country.name.common} flag`}
//         className="w-full h-40 object-cover"
//       />
//       <div className="p-4">
//         <h2 className="text-lg font-bold mb-2">{country.name.common}</h2>
//         <p>
//           <strong>Region:</strong> {country.region}
//         </p>
//         <p>
//           <strong>Capital:</strong> {country.capital?.[0]}
//         </p>
//         <p>
//           <strong>Population:</strong> {country.population.toLocaleString()}
//         </p>
//       </div>

//       {shouldShow && (
//         <Button
//           text={added ? "Added to Favourite" : "Add to Favourite"}
//           onClick={handleClick}
//           disabled={added}
//         />
//       )}

//       <Button text="Show Details" onClick={onClick} />

//       {shouldShowClickMe && <Button text={button} onClick={deleteCountry} />}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import Button from "./Button";
// import { useLocation } from "react-router";
// import { toast } from "react-toastify";

// export default function CountryCard({ country, onClick, button, onRemove }) {
//   const [added, setAdded] = useState(false);
//   const location = useLocation();
//   const path = location.pathname;

//   const shouldShow = !["/favorites"].includes(path);
//   const shouldShowClickMe = !["/home"].includes(path);

//   useEffect(() => {
//     const existingArray =
//       JSON.parse(localStorage.getItem("countriesData")) || [];
//     const isAlreadyAdded = existingArray.some(
//       (item) => item.name.common === country.name.common
//     );
//     setAdded(isAlreadyAdded);
//   }, [country.name.common]);

//   const handleClick = () => {
//     const existingArray =
//       JSON.parse(localStorage.getItem("countriesData")) || [];

//     const isDuplicate = existingArray.some(
//       (item) => item.name.common === country.name.common
//     );

//     if (!isDuplicate) {
//       const updatedArray = [...existingArray, country];
//       localStorage.setItem("countriesData", JSON.stringify(updatedArray));
//       setAdded(true);

//       toast.success(`🌍 ${country.name.common} added to favourites!`, {
//         position: "top-right",
//         autoClose: 2500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         style: {
//           backgroundColor: "#e6fffa",
//           color: "#2c7a7b",
//           fontWeight: "bold",
//           borderLeft: "6px solid #38b2ac",
//         },
//         icon: "💖",
//       });
//     } else {
//       toast.info("⚠️ Already added to favourites!", {
//         style: {
//           backgroundColor: "#fefcbf",
//           color: "#744210",
//           fontWeight: "bold",
//           borderLeft: "6px solid #f6ad55",
//         },
//         icon: "⚠️",
//       });
//     }
//   };

//   const deleteCountry = () => {
//     if (typeof onRemove === "function") {
//       onRemove(country);
//       toast.error(`❌ ${country.name.common} removed from favourites.`, {
//         position: "top-right",
//         autoClose: 2500,
//         hideProgressBar: false,
//         style: {
//           backgroundColor: "#ffe5e5",
//           color: "#9b2c2c",
//           fontWeight: "bold",
//           borderLeft: "6px solid #e53e3e",
//         },
//         icon: "🗑️",
//       });
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
//       <img
//         src={country.flags.png}
//         alt={`${country.name.common} flag`}
//         className="w-full h-40 object-cover"
//       />
//       <div className="p-4">
//         <h2 className="text-lg font-bold mb-2">{country.name.common}</h2>
//         <p>
//           <strong>Region:</strong> {country.region}
//         </p>
//         <p>
//           <strong>Capital:</strong> {country.capital?.[0]}
//         </p>
//         <p>
//           <strong>Population:</strong> {country.population.toLocaleString()}
//         </p>
//       </div>

//       {shouldShow && (
//         <Button
//           text={added ? "Added to Favourite" : "Add to Favourite"}
//           onClick={handleClick}
//           disabled={added}
//         />
//       )}

//       <Button text="Show Details" onClick={onClick} />
//       {shouldShowClickMe && <Button text={button} onClick={deleteCountry} />}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router";
// import { toast } from "react-toastify";

// export default function CountryCard({ country, onClick, button, onRemove }) {
//   const [added, setAdded] = useState(false);
//   const location = useLocation();
//   const path = location.pathname;

//   const shouldShow = !["/favorites"].includes(path);
//   const shouldShowClickMe = !["/home"].includes(path);

//   useEffect(() => {
//     const existingArray =
//       JSON.parse(localStorage.getItem("countriesData")) || [];
//     const isAlreadyAdded = existingArray.some(
//       (item) => item.name.common === country.name.common
//     );
//     setAdded(isAlreadyAdded);
//   }, [country.name.common]);

//   const handleClick = () => {
//     const existingArray =
//       JSON.parse(localStorage.getItem("countriesData")) || [];

//     const isDuplicate = existingArray.some(
//       (item) => item.name.common === country.name.common
//     );

//     if (!isDuplicate) {
//       const updatedArray = [...existingArray, country];
//       localStorage.setItem("countriesData", JSON.stringify(updatedArray));
//       setAdded(true);

//       toast.success(`🌍 ${country.name.common} added to favourites!`, {
//         position: "top-right",
//         autoClose: 2500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         style: {
//           backgroundColor: "#e6fffa",
//           color: "#2c7a7b",
//           fontWeight: "bold",
//           borderLeft: "6px solid #38b2ac",
//         },
//         icon: "💖",
//       });
//     } else {
//       toast.info("⚠️ Already added to favourites!", {
//         style: {
//           backgroundColor: "#fefcbf",
//           color: "#744210",
//           fontWeight: "bold",
//           borderLeft: "6px solid #f6ad55",
//         },
//         icon: "⚠️",
//       });
//     }
//   };

//   const deleteCountry = () => {
//     if (typeof onRemove === "function") {
//       onRemove(country);
//       toast.error(`❌ ${country.name.common} removed from favourites.`, {
//         position: "top-right",
//         autoClose: 2500,
//         hideProgressBar: false,
//         style: {
//           backgroundColor: "#ffe5e5",
//           color: "#9b2c2c",
//           fontWeight: "bold",
//           borderLeft: "6px solid #e53e3e",
//         },
//         icon: "🗑️",
//       });
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl relative">
//       <div className="relative">
//         <img
//           src={country.flags.png}
//           alt={`${country.name.common} flag`}
//           className="w-full h-40 object-cover"
//         />
//         <div className="absolute top-2 left-2 bg-white bg-opacity-80 text-sm text-gray-800 font-semibold px-3 py-1 rounded-full shadow">
//           {country.region}
//         </div>
//         {added && (
//           <div className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full shadow">
//             ✓ Favourite
//           </div>
//         )}
//       </div>

//       <div className="p-4 space-y-2">
//         <h2 className="text-xl font-bold text-gray-900">
//           {country.name.common}
//         </h2>
//         <p className="text-sm text-gray-600">
//           <span className="font-medium">Capital:</span>{" "}
//           {country.capital?.[0] || "N/A"}
//         </p>
//         <p className="text-sm text-gray-600">
//           <span className="font-medium">Population:</span>{" "}
//           {country.population.toLocaleString()}
//         </p>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-2 p-4 pt-0">
//         {shouldShow && (
//           <button
//             onClick={handleClick}
//             disabled={added}
//             className={`w-full py-2 px-4 rounded-md font-semibold text-sm transition-all duration-300 ${
//               added
//                 ? "bg-gray-300 text-gray-700 cursor-not-allowed"
//                 : "bg-blue-500 hover:bg-blue-600 text-white"
//             }`}
//           >
//             {added ? "Added to Favourite" : "Add to Favourite"}
//           </button>
//         )}

//         <button
//           onClick={onClick}
//           className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md text-sm font-semibold transition-all duration-300"
//         >
//           Show Details
//         </button>

//         {shouldShowClickMe && (
//           <button
//             onClick={deleteCountry}
//             className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-semibold transition-all duration-300"
//           >
//             {button}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";

export default function CountryCard({ country, onClick, button, onRemove }) {
  const [added, setAdded] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const shouldShow = !["/favorites"].includes(path);
  const shouldShowClickMe = !["/home"].includes(path);

  useEffect(() => {
    const existingArray =
      JSON.parse(localStorage.getItem("countriesData")) || [];
    const isAlreadyAdded = existingArray.some(
      (item) => item.name.common === country.name.common
    );
    setAdded(isAlreadyAdded);
  }, [country.name.common]);

  const handleClick = () => {
    const existingArray =
      JSON.parse(localStorage.getItem("countriesData")) || [];

    const isDuplicate = existingArray.some(
      (item) => item.name.common === country.name.common
    );

    if (!isDuplicate) {
      const updatedArray = [...existingArray, country];
      localStorage.setItem("countriesData", JSON.stringify(updatedArray));
      setAdded(true);

      toast.success(`🌍 ${country.name.common} added to favourites!`, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          backgroundColor: "#f0fff4",
          color: "#22543d",
          fontWeight: "bold",
          borderLeft: "6px solid #38a169",
        },
        icon: "💚",
      });
    } else {
      toast.info("⚠️ Already added to favourites!", {
        style: {
          backgroundColor: "#fffff0",
          color: "#744210",
          fontWeight: "bold",
          borderLeft: "6px solid #f6ad55",
        },
        icon: "⚠️",
      });
    }
  };

  const deleteCountry = () => {
    if (typeof onRemove === "function") {
      onRemove(country);
      toast.error(`❌ ${country.name.common} removed from favourites.`, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        style: {
          backgroundColor: "#ffe5e5",
          color: "#9b2c2c",
          fontWeight: "bold",
          borderLeft: "6px solid #e53e3e",
        },
        icon: "🗑️",
      });
    }
  };

  return (
    <div className="relative bg-white bg-opacity-70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          className="w-full h-44 object-cover rounded-t-3xl"
        />
        <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {country.region}
        </div>
        {added && (
          <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
            ♥ Favourite
          </div>
        )}
      </div>

      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">
          {country.name.common}
        </h2>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Capital:</span>{" "}
          {country.capital?.[0] || "N/A"}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 p-4 pt-0">
        {shouldShow && (
          <button
            onClick={handleClick}
            disabled={added}
            className={`w-full py-2 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
              added
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:brightness-110"
            }`}
          >
            {added ? "Already in Favourites" : "Add to Favourites"}
          </button>
        )}

        <button
          onClick={onClick}
          className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold hover:brightness-110 transition-all duration-300"
        >
          Show Details
        </button>

        {shouldShowClickMe && (
          <button
            onClick={deleteCountry}
            className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold hover:brightness-110 transition-all duration-300"
          >
            {button}
          </button>
        )}
      </div>
    </div>
  );
}
