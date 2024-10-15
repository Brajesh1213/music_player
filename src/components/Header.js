// components/Header.js
import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between px-6  py-4" style={{background:"#600a0a"}}>
      <div className="flex space-x-6 text-sm">
        <h2 className="text-xl cursor-pointer">Music</h2>
        <h2 className="text-xl cursor-pointer">Podcast</h2>
        <h2 className="text-xl cursor-pointer">Live</h2>
        <h2 className="text-xl cursor-pointer">Radio</h2>
      </div>
      <div className="flex items-center space-x-2 bg-red-700 rounded-lg  p-1">
        <input
          type="text"
          placeholder="Search"
          className="bg-red-700 text-white p-2 rounded-lg "
        />
        <button aria-label="Search">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-6 h-6 text-white"
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
