// import React, { useEffect, useState, useContext } from "react";
// import UserContext from "../context/UserContext";
// import CountryCard from "./CountryCard";

// const Favourites = () => {
//   const { storedArray } = useContext(UserContext);

//   useEffect(() => {
//     console.log(storedArray);
//   }, [storedArray]);

//   return (
//     <div>
//       {storedArray.map((el) => {
//         return <CountryCard country={el} onClick="" />;
//       })}
//     </div>
//   );
// };

// export default Favourites;

import React, { useEffect, useContext, useState } from "react";
import UserContext from "../context/UserContext";
import CountryCard from "./CountryCard";
import { useNavigate } from "react-router";

const Favourites = () => {
  //   const { storedArray } = useContext(UserContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    let myData = JSON.parse(localStorage.getItem("countriesData")) || [];
    setData(myData);
  }, []);

  const deletedCountry = (countryName) => {
    let filtered = data.filter((el) => el.name.common !== countryName.name.common)
    localStorage.setItem("countriesData" , JSON.stringify(filtered))
    setData(filtered)
  }

  const handleClick = (country) => {
    // setPage(true)
    navigate(`/country/${country}`);
    // console.log("country is : ", country);
  };
  return (
    <div className="min-h-screen bg-white px-4 md:px-12 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Your Favourite Countries
      </h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You haven't added any favourites yet.
        </p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((country, index) => (
            <CountryCard key={index} country={country} button="Remove" onClick={() => handleClick(country.name.common)} onRemove={deletedCountry}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
