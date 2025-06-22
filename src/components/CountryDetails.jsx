// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import fetchingData from "./fetchingData.js";
// import { useScroll } from "framer-motion";
// import CountryCard from "./CountryCard";

// const CountryDetails = () => {
//   const { name } = useParams();
//   const [data, setData] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = name ? `https://restcountries.com/v3.1/name/${name}` : null;

//       try {
//         let response = await fetchingData(url);
//         setData(response.data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   return (
//     <div>
//       <h1>Country Details</h1>
//       <p>Showing result of {name}</p>

//       {data?.map((el) => {
//         return <CountryCard country={el} />;
//       })}
//     </div>
//   );
// };

// export default CountryDetails;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import fetchingData from "./fetchingData.js";
// import { useScroll } from "framer-motion";
// import CountryCard from "./CountryCard";
// import styled from "styled-components";
// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem;
// `;

// const Header = styled.header`
//   margin-bottom: 2rem;
//   text-align: center;
// `;

// const Title = styled.h1`
//   font-size: 2.5rem;
//   color: #2d3748;
//   margin-bottom: 0.5rem;
// `;

// const Subtitle = styled.p`
//   font-size: 1.2rem;
//   color: #4a5568;
// `;

// const CountriesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//   gap: 2rem;
//   margin-top: 2rem;
// `;

// const LoadingMessage = styled.p`
//   text-align: center;
//   font-size: 1.2rem;
//   color: #4a5568;
// `;

// const ErrorMessage = styled.p`
//   text-align: center;
//   font-size: 1.2rem;
//   color: #e53e3e;
//   padding: 2rem;
// `;

// const CountryDetails = () => {
//   const { name } = useParams();
//   const [data, setData] = useState();
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = name ? `https://restcountries.com/v3.1/name/${name}` : null;

//       try {
//         setIsLoading(true);
//         let response = await fetchingData(url);
//         setData(response.data);
//         setError(null);
//       } catch (error) {
//         console.log(error.message);
//         setError("Failed to fetch country data. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [name]);

//   return (
//     <Container>
//       <Header>
//         <Title>Country Details</Title>
//         <Subtitle>Showing results for: {name}</Subtitle>
//       </Header>

//       {isLoading ? (
//         <LoadingMessage>Loading country data...</LoadingMessage>
//       ) : error ? (
//         <ErrorMessage>{error}</ErrorMessage>
//       ) : (
//         <CountriesGrid>
//           {data?.map((el, index) => (
//             <CountryCard key={index} country={el} />
//           ))}
//         </CountriesGrid>
//       )}
//     </Container>
//   );
// };

// export default CountryDetails;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import fetchingData from "./fetchingData.js";
// import CountryCard from "./CountryCard";
// import "./CountryDetails.css"; // Import the CSS file
// import CountryMap from "../pages/CountryMap.jsx";
// import axios from "axios";
// import NationalAnthemPlayer from "./NationalAnthemPlayer.jsx";

// const CountryDetails = () => {
//   const { name } = useParams();
//   const [data, setData] = useState();
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const url = name
//           ? `https://restcountries.com/v3.1/name/${name}?fullText=true`
//           : null;
//         let response = await fetchingData(url);
//         setData(response.data[0]);
//         setError(null);
//       } catch (error) {
//         console.log(error.message);
//         setError("Failed to fetch country data. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [name]);
//   // console.log(country)

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   if (isLoading)
//     return <p className="loading-message">Loading country data...</p>;
//   if (error) return <p className="error-message">{error}</p>;
//   if (!data) return <p className="error-message">Country not found</p>;

//   return (
//     <div className="country-details-container">
//       <header className="country-details-header">
//         <h1 className="country-details-title">{data.name.common}</h1>
//         <p className="country-details-subtitle">
//           Official Name: <span>{data.name.official}</span>
//         </p>
//       </header>

//       <div className="country-details-content">
//         <div className="country-flag">
//           <img src={data.flags.png} alt={`${data.name.common} flag`} />
//         </div>

//         <div className="country-info">
//           <h2>Basic Information</h2>
//           <p>
//             <strong>Capital:</strong> {data.capital?.[0]}
//           </p>
//           <p>
//             <strong>Region:</strong> {data.region}
//           </p>
//           <p>
//             <strong>Subregion:</strong> {data.subregion}
//           </p>
//           <p>
//             <strong>Population:</strong> {data.population.toLocaleString()}
//           </p>

//           <h2>Languages</h2>
//           <p>
//             {data.languages ? Object.values(data.languages).join(", ") : "N/A"}
//           </p>

//           <h2>Currencies</h2>
//           <p>
//             {data.currencies
//               ? Object.values(data.currencies)
//                   .map((c) => `${c.name} (${c.symbol})`)
//                   .join(", ")
//               : "N/A"}
//           </p>

//           <NationalAnthemPlayer countryName={data.name.common} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CountryDetails;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import fetchingData from "./fetchingData.js";
// import CountryCard from "./CountryCard";
// import "./CountryDetails.css";
// import CountryMap from "../pages/CountryMap.jsx";
// import axios from "axios";
// import NationalAnthemPlayer from "./NationalAnthemPlayer.jsx";
// import { FaGlobe, FaCity, FaUsers, FaLanguage, FaMoneyBillWave } from "react-icons/fa";

// const CountryDetails = () => {
//   const { name } = useParams();
//   const [data, setData] = useState();
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [weather, setWeather] = useState(null);
//   const [showMap, setShowMap] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const url = name
//           ? `https://restcountries.com/v3.1/name/${name}?fullText=true`
//           : null;
//         let response = await fetchingData(url);
//         setData(response.data[0]);
//         setError(null);

//         // Fetch weather data if capital exists
//         if (response.data[0]?.capital?.[0]) {
//           fetchWeather(response.data[0].capital[0]);
//         }
//       } catch (error) {
//         console.log(error.message);
//         setError("Failed to fetch country data. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     const fetchWeather = async (capital) => {
//       try {
//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=YOUR_API_KEY`
//         );
//         setWeather(response.data);
//       } catch (error) {
//         console.error("Failed to fetch weather data:", error);
//       }
//     };

//     fetchData();
//   }, [name]);

//   if (isLoading) return (
//     <div className="loading-container">
//       <div className="loading-spinner"></div>
//       <p className="loading-message">Loading country data...</p>
//     </div>
//   );

//   if (error) return <p className="error-message">{error}</p>;
//   if (!data) return <p className="error-message">Country not found</p>;

//   return (
//     <div className="country-details-container">
//       <header className="country-details-header">
//         <h1 className="country-details-title">{data.name.common}</h1>
//         <p className="country-details-subtitle">
//           Official Name: <span>{data.name.official}</span>
//         </p>
//         {data.coatOfArms?.png && (
//           <div className="coat-of-arms">
//             <img src={data.coatOfArms.png} alt={`${data.name.common} coat of arms`} />
//           </div>
//         )}
//       </header>

//       <div className="country-details-content">
//         <div className="country-flag-section">
//           <div className="country-flag">
//             <img src={data.flags.png} alt={`${data.name.common} flag`} />
//             <p className="flag-description">{data.flags.alt || `Flag of ${data.name.common}`}</p>
//           </div>

//           <button
//             onClick={() => setShowMap(!showMap)}
//             className="map-toggle-btn"
//           >
//             {showMap ? 'Hide Map' : 'Show Map'}
//           </button>

//           {showMap && data.latlng && (
//             <div className="country-map-container">
//               <CountryMap lat={data.latlng[0]} lng={data.latlng[1]} countryName={data.name.common} />
//             </div>
//           )}
//         </div>

//         <div className="country-info">
//           <section className="info-section">
//             <h2><FaGlobe className="icon" /> Geography</h2>
//             <div className="info-grid">
//               <div className="info-item">
//                 <strong><FaCity /> Capital:</strong> {data.capital?.[0] || "N/A"}
//                 {weather && (
//                   <div className="weather-info">
//                     <span>{Math.round(weather.main.temp)}°C</span>
//                     <img
//                       src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
//                       alt={weather.weather[0].description}
//                     />
//                   </div>
//                 )}
//               </div>
//               <div className="info-item">
//                 <strong>Continent:</strong> {data.region}
//                 {data.subregion && `, ${data.subregion}`}
//               </div>
//               <div className="info-item">
//                 <strong>Area:</strong> {data.area.toLocaleString()} km²
//               </div>
//               <div className="info-item">
//                 <strong>Timezone:</strong> {data.timezones?.join(", ") || "N/A"}
//               </div>
//             </div>
//           </section>

//           <section className="info-section">
//             <h2><FaUsers className="icon" /> Demographics</h2>
//             <div className="info-grid">
//               <div className="info-item">
//                 <strong>Population:</strong> {data.population.toLocaleString()}
//               </div>
//               <div className="info-item">
//                 <strong>Density:</strong> {(data.population / data.area).toFixed(1)} per km²
//               </div>
//               {data.demonyms?.eng?.m && (
//                 <div className="info-item">
//                   <strong>Demonym:</strong> {data.demonyms.eng.m}
//                 </div>
//               )}
//             </div>
//           </section>

//           <section className="info-section">
//             <h2><FaLanguage className="icon" /> Languages</h2>
//             <div className="languages-grid">
//               {data.languages && Object.entries(data.languages).map(([code, language]) => (
//                 <div key={code} className="language-item">
//                   <span className="language-name">{language}</span>
//                   <span className="language-code">({code})</span>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section className="info-section">
//             <h2><FaMoneyBillWave className="icon" /> Economy</h2>
//             <div className="info-grid">
//               <div className="info-item">
//                 <strong>Currency:</strong>
//                 {data.currencies ? (
//                   Object.entries(data.currencies).map(([code, currency]) => (
//                     <span key={code}>
//                       {currency.name} ({currency.symbol || code})
//                     </span>
//                   ))
//                 ) : "N/A"}
//               </div>
//               <div className="info-item">
//                 <strong>Driving Side:</strong> {data.car?.side || "N/A"}
//               </div>
//             </div>
//           </section>

//           <NationalAnthemPlayer countryName={data.name.common} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CountryDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchingData from "./fetchingData.js";
import "./CountryDetails.css";
import CountryMap from "../pages/CountryMap.jsx";
import NationalAnthemPlayer from "./NationalAnthemPlayer.jsx";
import {
  FaGlobe,
  FaCity,
  FaUsers,
  FaLanguage,
  FaMoneyBillWave,
  FaMap,
  FaTemperatureHigh,
  FaCalendarAlt,
  FaCar,
  FaLandmark,
} from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GiEarthAmerica } from "react-icons/gi";
import { MdOutlineTranslate } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";

const CountryDetails = () => {
  const { name } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const url = name
          ? `https://restcountries.com/v3.1/name/${name}?fullText=true`
          : null;
        let response = await fetchingData(url);
        setData(response.data[0]);
        setError(null);

        if (response.data[0]?.capital?.[0]) {
          fetchWeather(response.data[0].capital[0]);
        }
      } catch (error) {
        console.log(error.message);
        setError("Failed to fetch country data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    const fetchWeather = async (capital) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=YOUR_API_KEY`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };

    fetchData();
  }, [name]);

  if (isLoading)
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-message">Discovering {name}...</p>
      </div>
    );

  if (error)
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <p className="error-message">{error}</p>
        <button className="retry-btn" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );

  if (!data)
    return (
      <div className="not-found-container">
        <h2>Country Not Found</h2>
        <p>We couldn't find information about "{name}"</p>
        <button className="back-btn" onClick={() => window.history.back()}>
          ← Back to Countries
        </button>
      </div>
    );

  return (
    <div className="country-details-container">
      {/* Hero Section */}
      <div
        className="country-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), url(${data.flags.png})`,
        }}
      >
        <div className="hero-content">
          <h1 className="country-title">{data.name.common}</h1>
          <p className="country-motto">{data.name.official}</p>
          {data.coatOfArms?.png && (
            <img
              src={data.coatOfArms.png}
              alt="Coat of Arms"
              className="coat-of-arms"
            />
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs-container">
        <button
          className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`tab-btn ${activeTab === "geography" ? "active" : ""}`}
          onClick={() => setActiveTab("geography")}
        >
          Geography
        </button>
        <button
          className={`tab-btn ${activeTab === "culture" ? "active" : ""}`}
          onClick={() => setActiveTab("culture")}
        >
          Culture
        </button>
        <button
          className={`tab-btn ${activeTab === "government" ? "active" : ""}`}
          onClick={() => setActiveTab("government")}
        >
          Government
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="tab-content">
            <div className="quick-facts">
              <div className="fact-card">
                <FaCity className="fact-icon" />
                <h3>Capital</h3>
                <p>{data.capital?.[0] || "N/A"}</p>
                {weather && (
                  <div className="weather-display">
                    <span>{Math.round(weather.main.temp)}°C</span>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                      alt={weather.weather[0].description}
                    />
                  </div>
                )}
              </div>

              <div className="fact-card">
                {/* <GiPopulation className="fact-icon" /> */}
                <FaUsers className="fact-icon" />
                <h3>Population</h3>
                <p>{data.population.toLocaleString()}</p>
              </div>

              <div className="fact-card">
                <FaMoneyBillWave className="fact-icon" />
                <h3>Currency</h3>
                <p>
                  {data.currencies
                    ? Object.values(data.currencies)
                        .map((c) => `${c.name} (${c.symbol || "—"})`)
                        .join(", ")
                    : "N/A"}
                </p>
              </div>

              <div className="fact-card">
                <MdOutlineTranslate className="fact-icon" />
                <h3>Languages</h3>
                <p>
                  {data.languages
                    ? Object.values(data.languages).slice(0, 3).join(", ")
                    : "N/A"}
                  {data.languages && Object.keys(data.languages).length > 3 && (
                    <span className="more-languages">
                      {" "}
                      +{Object.keys(data.languages).length - 3} more
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="flag-section">
              <div className="flag-container">
                <img src={data.flags.png} alt={`Flag of ${data.name.common}`} />
                <p className="flag-description">
                  {data.flags.alt || `The national flag of ${data.name.common}`}
                </p>
              </div>
              <button
                className="map-toggle-btn"
                onClick={() => setShowMap(!showMap)}
              >
                <FaMap /> {showMap ? "Hide Map" : "View on Map"}
              </button>
            </div>

            {showMap && data.latlng && (
              <div className="map-container">
                <CountryMap
                  lat={data.latlng[0]}
                  lng={data.latlng[1]}
                  countryName={data.name.common}
                />
              </div>
            )}

            <NationalAnthemPlayer countryName={data.name.common} />
          </div>
        )}

        {/* Geography Tab */}
        {activeTab === "geography" && (
          <div className="tab-content">
            <div className="section-card">
              <h2>
                <GiEarthAmerica /> Geography
              </h2>
              <div className="info-grid">
                <InfoItem
                  icon={<FaGlobe />}
                  label="Region"
                  value={`${data.region}${
                    data.subregion ? `, ${data.subregion}` : ""
                  }`}
                />
                <InfoItem
                  icon={<FaMap />}
                  label="Area"
                  value={`${data.area.toLocaleString()} km²`}
                />
                <InfoItem
                  icon={<FaTemperatureHigh />}
                  label="Climate"
                  value={getClimateZone(data.latlng?.[0])}
                />
                <InfoItem
                  icon={<IoMdTime />}
                  label="Timezones"
                  value={data.timezones?.join(", ") || "N/A"}
                />
              </div>
            </div>

            <div className="section-card">
              <h2>
                <FaUsers /> Demographics
              </h2>
              <div className="info-grid">
                <InfoItem
                  // icon={<GiPopulation />}
                  icon={<FaUsers />}
                  label="Population"
                  value={data.population.toLocaleString()}
                />
                <InfoItem
                  // icon={<GiPopulation />}
                  icon={<FaUsers />}
                  label="Density"
                  value={`${(data.population / data.area).toFixed(1)} per km²`}
                />
                {data.demonyms?.eng?.m && (
                  <InfoItem
                    icon={<MdOutlineTranslate />}
                    label="Demonym"
                    value={data.demonyms.eng.m}
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Culture Tab */}
        {activeTab === "culture" && (
          <div className="tab-content">
            <div className="section-card">
              <h2>
                <FaLanguage /> Languages
              </h2>
              <div className="languages-grid">
                {data.languages &&
                  Object.entries(data.languages).map(([code, language]) => (
                    <div key={code} className="language-card">
                      <span className="language-name">{language}</span>
                      <span className="language-code">{code}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="section-card">
              <h2>
                <FaCalendarAlt /> Holidays
              </h2>
              <p className="no-data-message">Holiday information coming soon</p>
            </div>
          </div>
        )}

        {/* Government Tab */}
        {activeTab === "government" && (
          <div className="tab-content">
            <div className="section-card">
              <h2>
                <RiGovernmentLine /> Government
              </h2>
              <div className="info-grid">
                <InfoItem
                  icon={<FaLandmark />}
                  label="Capital"
                  value={data.capital?.[0] || "N/A"}
                />
                <InfoItem
                  icon={<RiGovernmentLine />}
                  label="Government Type"
                  value={getGovernmentType(data)}
                />
                <InfoItem
                  icon={<FaCar />}
                  label="Driving Side"
                  value={data.car?.side ? `${data.car.side} side` : "N/A"}
                />
              </div>
            </div>

            <div className="section-card">
              <h2>
                <FaMoneyBillWave /> Economy
              </h2>
              <div className="info-grid">
                <InfoItem
                  icon={<FaMoneyBillWave />}
                  label="Currency"
                  value={
                    data.currencies
                      ? Object.entries(data.currencies)
                          .map(
                            ([code, currency]) =>
                              `${currency.name} (${currency.symbol || code})`
                          )
                          .join(", ")
                      : "N/A"
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper components
const InfoItem = ({ icon, label, value }) => (
  <div className="info-item">
    <div className="info-icon">{icon}</div>
    <div className="info-content">
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  </div>
);

// Helper functions
const getClimateZone = (latitude) => {
  if (latitude === undefined) return "Unknown";
  const absLat = Math.abs(latitude);
  if (absLat < 23.5) return "Tropical";
  if (absLat < 35) return "Subtropical";
  if (absLat < 66.5) return "Temperate";
  return "Polar";
};

const getGovernmentType = (countryData) => {
  if (!countryData.hasOwnProperty("unMember")) return "Unknown";
  if (countryData.unMember) return "UN Member State";
  if (countryData.independent) return "Independent State";
  return "Territory/Dependency";
};

export default CountryDetails;
