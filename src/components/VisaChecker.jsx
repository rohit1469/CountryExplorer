// import React, { useState } from "react";
// import visaData from "../data/visaRules.json";

// export default function VisaChecker() {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [result, setResult] = useState(null);

//   const handleCheck = () => {
//     const rule = visaData.find(
//       (entry) => entry.from === from && entry.to === to
//     );
//     setResult(
//       rule || {
//         visa: "Unknown",
//         method: "-",
//         stay: "-",
//         note: "Check with official embassy or visa portal.",
//       }
//     );
//   };

//   // Extract unique country names from the JSON file
//   const countryList = Array.from(
//     new Set([
//       ...visaData.map((item) => item.from),
//       ...visaData.map((item) => item.to),
//     ])
//   ).sort();

//   // const countryList1 = [
//   //   "USA",
//   //   "UK",
//   //   "Germany",
//   //   "France",
//   //   "Japan",
//   //   "China",
//   //   "India",
//   //   "Russia",
//   //   "Canada",
//   //   "Australia",
//   //   "Italy",
//   //   "South Korea",
//   //   "Brazil",
//   //   "Singapore",
//   //   "Netherlands",
//   //   "Sweden",
//   //   "Switzerland",
//   //   "UAE",
//   //   "Saudi Arabia",
//   //   "Spain",
//   //   "Israel",
//   //   "Norway",
//   //   "Finland",
//   //   "Denmark",
//   //   "New Zealand",
//   //   "Ireland",
//   //   "Turkey",
//   //   "Mexico",
//   //   "South Africa",
//   //   "Pakistan"
//   // ];

//   // let countryList = countryList1.sort()

//   // console.log(countryList);

//   return (
//     <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
//       <h2 className="text-2xl font-bold mb-4 text-center">
//         🛂 Visa Requirement Checker
//       </h2>

//       <div className="flex flex-col gap-4">
//         <select
//           value={from}
//           onChange={(e) => setFrom(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="">Select your nationality</option>
//           {countryList.map((c, i) => (
//             <option key={i} value={c}>
//               {c}
//             </option>
//           ))}
//         </select>

//         <select
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="">Select destination country</option>
//           {countryList.map((c, i) => (
//             <option key={i} value={c}>
//               {c}
//             </option>
//           ))}
//         </select>

//         <button
//           onClick={handleCheck}
//           disabled={!from || !to}
//           className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
//         >
//           Check Visa Requirement
//         </button>
//       </div>

//       {result && (
//         <div className="mt-6 bg-gray-100 p-4 rounded shadow">
//           <h3 className="text-lg font-semibold mb-2">Result:</h3>
//           <p>
//             <strong>From:</strong> {from}
//           </p>
//           <p>
//             <strong>To:</strong> {to}
//           </p>
//           <p>
//             <strong>Visa:</strong> {result.visa_required}
//           </p>
//           <p>
//             <strong>Method:</strong> {result.method}
//           </p>
//           <p>
//             <strong>Stay:</strong> {result.stay_duration}
//           </p>
//           {/* <p>
//             <strong>Note:</strong> {result.note}
//           </p> */}
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import visaData from "../data/visaRules.json";

// export default function VisaChecker() {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [result, setResult] = useState(null);

//   const handleCheck = () => {
//     const rule = visaData.find(
//       (entry) => entry.from === from && entry.to === to
//     );
//     setResult(
//       rule || {
//         visa_required: "Unknown",
//         method: "-",
//         stay_duration: "-",
//         note: "Check with official embassy or visa portal.",
//       }
//     );
//   };

//   const countryList = Array.from(
//     new Set([
//       ...visaData.map((item) => item.from),
//       ...visaData.map((item) => item.to),
//     ])
//   ).sort();

//   return (
//     <div className="max-w-xl mx-auto mt-16 bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-xl border border-blue-100">
//       <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
//         🛂 Visa Requirement Checker
//       </h2>

//       <div className="space-y-5">
//         <div>
//           <label className="block text-sm font-medium text-blue-800 mb-1">
//             From (Your Nationality)
//           </label>
//           <select
//             value={from}
//             onChange={(e) => setFrom(e.target.value)}
//             className="w-full p-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             <option value="">Select your nationality</option>
//             {countryList.map((c, i) => (
//               <option key={i} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-blue-800 mb-1">
//             To (Destination Country)
//           </label>
//           <select
//             value={to}
//             onChange={(e) => setTo(e.target.value)}
//             className="w-full p-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             <option value="">Select destination country</option>
//             {countryList.map((c, i) => (
//               <option key={i} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>
//         </div>

//         <button
//           onClick={handleCheck}
//           disabled={!from || !to}
//           className={`w-full py-3 text-white rounded-xl font-semibold transition-all duration-300 ${
//             !from || !to
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           Check Visa Requirement
//         </button>
//       </div>

//       {result && (
//         <div className="mt-8 p-6 bg-white border border-blue-100 rounded-2xl shadow-md">
//           <h3 className="text-xl font-bold text-blue-800 mb-3">Visa Details</h3>
//           <ul className="space-y-2 text-sm text-blue-900">
//             <li>
//               <strong>From:</strong> {from}
//             </li>
//             <li>
//               <strong>To:</strong> {to}
//             </li>
//             <li>
//               <strong>Visa Required:</strong> {result.visa_required}
//             </li>
//             <li>
//               <strong>Method:</strong> {result.method}
//             </li>
//             <li>
//               <strong>Stay Duration:</strong> {result.stay_duration}
//             </li>
//             {result.note && (
//               <li>
//                 <strong>Note:</strong> {result.note}
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import visaData from "../data/visaRules.json";

// export default function VisaChecker() {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [result, setResult] = useState(null);

//   const handleCheck = () => {
//     const rule = visaData.find(
//       (entry) => entry.from === from && entry.to === to
//     );
//     setResult(
//       rule || {
//         visa_required: "Unknown",
//         method: "-",
//         stay_duration: "-",
//         note: "Check with official embassy or visa portal.",
//       }
//     );
//   };

//   const countryList = Array.from(
//     new Set([...visaData.map((item) => item.from), ...visaData.map((item) => item.to)])
//   ).sort();

//   return (
//     <div className="max-w-2xl mx-auto mt-16 bg-white shadow-lg rounded-2xl p-8 border-t-8 border-blue-600">
//       <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-8">
//         🌐 Visa Requirement Checker
//       </h2>

//       <div className="grid md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             From (Nationality)
//           </label>
//           <select
//             value={from}
//             onChange={(e) => setFrom(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">-- Select Country --</option>
//             {countryList.map((c, i) => (
//               <option key={i} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             To (Destination)
//           </label>
//           <select
//             value={to}
//             onChange={(e) => setTo(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">-- Select Country --</option>
//             {countryList.map((c, i) => (
//               <option key={i} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="mt-6 text-center">
//         <button
//           onClick={handleCheck}
//           disabled={!from || !to}
//           className={`px-6 py-3 text-white rounded-lg text-lg font-medium transition-all duration-200 ${
//             !from || !to ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           Check Now
//         </button>
//       </div>

//       {result && (
//         <div className="mt-10 bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm">
//           <h3 className="text-xl font-bold text-blue-700 mb-4">Result</h3>
//           <ul className="space-y-2 text-gray-700 text-sm">
//             <li>
//               <strong>From:</strong> {from}
//             </li>
//             <li>
//               <strong>To:</strong> {to}
//             </li>
//             <li>
//               <strong>Visa Required:</strong> {result.visa_required}
//             </li>
//             <li>
//               <strong>Method:</strong> {result.method}
//             </li>
//             <li>
//               <strong>Stay Duration:</strong> {result.stay_duration}
//             </li>
//             {result.note && (
//               <li>
//                 <strong>Note:</strong> {result.note}
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import visaData from "../data/visaRules.json";

export default function VisaChecker() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const rule = visaData.find(
      (entry) => entry.from === from && entry.to === to
    );
    setResult(
      rule || {
        visa_required: "Unknown",
        method: "-",
        stay_duration: "-",
        note: "Check with official embassy or visa portal.",
      }
    );
  };

  const countryList = Array.from(
    new Set([...visaData.map((item) => item.from), ...visaData.map((item) => item.to)])
  ).sort();

  return (
    <div className="max-w-3xl mx-auto mt-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-10 rounded-3xl shadow-2xl border border-blue-200">
      <h2 className="text-4xl font-black text-center text-blue-700 mb-10 tracking-tight">
        🌍 Travel Visa Checker
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-2">
            Nationality (From)
          </label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="rounded-xl border border-blue-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
          >
            <option value="">Choose your nationality</option>
            {countryList.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-2">
            Destination Country (To)
          </label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="rounded-xl border border-blue-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
          >
            <option value="">Choose destination</option>
            {countryList.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleCheck}
          disabled={!from || !to}
          className={`inline-block px-8 py-3 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ${
            !from || !to ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
          }`}
        >
          Check Visa Info
        </button>
      </div>

      {result && (
        <div className="mt-12 bg-white p-6 rounded-2xl border-t-4 border-blue-500 shadow-sm">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Visa Information</h3>
          <div className="space-y-2 text-gray-800">
            <p>
              <strong>From:</strong> {from}
            </p>
            <p>
              <strong>To:</strong> {to}
            </p>
            <p>
              <strong>Visa Required:</strong> {result.visa_required}
            </p>
            <p>
              <strong>Method:</strong> {result.method}
            </p>
            <p>
              <strong>Stay Duration:</strong> {result.stay_duration}
            </p>
            {result.note && (
              <p>
                <strong>Note:</strong> {result.note}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
