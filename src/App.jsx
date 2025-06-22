// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { Routes, Router, Route, Outlet } from "react-router";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import HeroSection from "./components/HeroSection";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// function App() {
//   const Layout = () => {
//     return (
//       <>
//         <Navbar />
//         <Outlet />
//       </>
//     );
//   };

//   return (
//     <Routes>
//       {/* Home has HeroSection + other content */}

//       <Router>
//         <>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<HeroSection />} />
//             <Route path="about" element={<About />} />
//             <Route path="contact" element={<Contact />} />
//           </Route>
//         </>
//       </Router>
//     </Routes>
//   );
// }

// export default App;

// import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// // import AnimatedNavbar from "./components/AnimatedNavbar";

// import HeroSection from "./components/HeroSection";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import { useState } from "react";
// import UserContext from "./context/UserContext";
// import CountryDetails from "./components/CountryDetails";
// import Navbar from "./components/Navbar";
// import Explore from "./pages/Explore";

// const Layout = () => (
//   <>
//     {/* <AnimatedNavbar /> */}
//     <Navbar />
//     <div className="pt-16">
//       {" "}
//       {/* Tailwind: pt-16 = padding-top: 4rem (64px) */}
//       <Outlet />
//     </div>
//   </>
// );

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <HeroSection /> },
//       { path: "home", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//       { path: "explore", element: <Explore /> },
//       { path: "/country/:name", element: <CountryDetails /> },
//     ],
//   },
// ]);

// function App() {
//   const [search, setSearch] = useState("");
//   const [submit, setSubmit] = useState(false);
//   const [filtered, setFiltered] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [region, setRegion] = useState("");
//   const handleChange = () => {};

//   return (
//     <UserContext.Provider
//       value={{
//         search,
//         setSearch,
//         handleChange,
//         submit,
//         setSubmit,
//         filtered,
//         setFiltered,
//         searchTerm,
//         setSearchTerm,
//         region,
//         setRegion,
//       }}
//     >
//       <RouterProvider router={router} />
//     </UserContext.Provider>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
import UserContext from "./context/UserContext";
import Footer from "./pages/Footer";
import VisaChecker from "./components/VisaChecker";
import Favourites from "./components/Favourites";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles

const Layout = () => (
  <>
    <Navbar />
    <div className="pt-16">
      <Outlet />
    </div>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HeroSection /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "contact", element: <Contact /> },
      { path: "visa-checker", element: <VisaChecker /> },
      { path: "favorites", element: <Favourites /> },
      { path: "/country/:name", element: <CountryDetails /> },
    ],
  },
]);

function App() {
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [linkName, setLinkName] = useState("");
  const [storedArray, setStoredArray] = useState([]);
  // ✅ Fetch countries here once for entire app
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population"
        );
        const data = await res.json();
        setCountries(data);
        setFiltered(data); // set initial filtered list
      } catch (err) {
        console.error("Failed to fetch countries", err);
      }
    };
    fetchCountries();
  }, []);

  // ✅ Filter logic here so all pages use same data
  useEffect(() => {
    let result = countries;

    if (searchTerm) {
      result = result.filter((c) =>
        c.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (region) {
      result = result.filter((c) => c.region === region);
    }

    setFiltered(result);
  }, [searchTerm, region, countries]);

  return (
    <UserContext.Provider
      value={{
        search,
        setSearch,
        handleChange: () => {},
        submit,
        setSubmit,
        filtered,
        setFiltered,
        countries,
        setCountries,
        searchTerm,
        setSearchTerm,
        region,
        setRegion,
        linkName,
        setLinkName,
        storedArray,
        setStoredArray,
      }}
    >

            <ToastContainer position="top-right" autoClose={3000} theme="light" />

      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
