// components/Header.js
import React from "react";

function Header() {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-2 md:px-6 py-2 sm:py-1 md:py-4"
      style={{ background: "#600a0a" }}
    >
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-2 md:space-x-6 text-sm mb-2 sm:mb-0">
        <h2 className="text-base sm:text-sm md:text-xl cursor-pointer">Music</h2>
        <h2 className="text-base sm:text-sm md:text-xl cursor-pointer">Podcast</h2>
        <h2 className="text-base sm:text-sm md:text-xl cursor-pointer">Live</h2>
        <h2 className="text-base sm:text-sm md:text-xl cursor-pointer">Radio</h2>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-1 sm:space-x-1 md:space-x-2 bg-red-700 rounded-lg p-1 w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search"
          className="bg-red-700 text-white p-1 sm:p-1 md:p-2 rounded-lg w-full sm:w-20 md:w-32"
        />
        <button aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 sm:w-3 sm:h-3 md:w-6 md:h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
