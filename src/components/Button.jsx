import React from "react";

export default function Button({ text = "Click Me", onClick , disabled}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      } text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300 ease-in-out`}
      // className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300 ease-in-out"
    >
      {text}
    </button>
  );
}
