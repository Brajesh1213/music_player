// components/Sidebar.js
import React, { useState } from "react";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" fixed overflow-hidden m-1" >
      {/* Hamburger Button for small screens */}
      <button
        className="md:hidden p-2 text-white bg-red-500 focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transform transition-transform duration-300 md:translate-x-0 fixed md:relative bg-black text-white h-screen p-6 z-10 flex flex-col`}
      >
        
        <div className="mb-8">
          <h1 className="text-red-500 text-3xl font-bold">
            Dream<span className="text-white">Music</span>
          </h1>
        </div>
        
        <div className="mb-4">Menu</div>
        <nav className="flex-grow">
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 truncate cursor-pointer hover:text-red-500 transition duration-200">
              <span className="text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              </span>
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-3 truncate cursor-pointer hover:text-red-500 transition duration-200">
              <span className="text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
              </span>
              <span>Trends</span>
            </li>
            <li className="flex items-center space-x-3 truncate cursor-pointer hover:text-red-500 transition duration-200">
              <span className="text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                </svg>
              </span>
              <span>Library</span>
            </li>
            <li className="flex items-center space-x-3 truncate cursor-pointer hover:text-red-500 transition duration-200">
              <span className="text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Discover</span>
            </li>
          </ul>
        </nav>
        
        {/* Settings and Logout */}
        <div className="mt-auto">
          <div className="mb-4">General</div>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 truncate cursor-pointer hover:text-red-500 transition duration-200">
              <span className="text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.819l1.018-.41c.116-.044.284-.033.45.082.312.215.642.405.986.57.182.088.277.228.297.349l.178 1.072c.15.904.932 1.567 1.85 1.567h1.844c.917 0 1.699-.663 1.85-1.567l.179-1.072c.02-.12.115-.26.297-.349.344-.165.674-.355.986-.57.166-.115.334-.126.45-.082l1.018.41a1.875 1.875 0 0 0 2.282-.819l.922-1.597a1.875 1.875 0 0 0-.432-2.385l-.841-.692c-.095-.078-.17-.229-.154-.43.03-.38.03-.759 0-1.139-.015-.2.059-.352.153-.43l.841-.692a1.875 1.875 0 0 0 .432-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.819l-1.018.41c-.116.044-.284.033-.45-.083a7.493 7.493 0 0 0-.986-.57c-.182-.087-.277-.227-.297-.348l-.179-1.072c-.15-.904-.932-1.567-1.85-1.567h-1.844Zm.698 5.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Settings</span>
            </li>
            <li className="flex items-center space-x-3 truncate cursor-pointer hover:text-red-500 transition duration-200">
              <span className="text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path fillRule="evenodd" d="M5.25 3A2.25 2.25 0 0 0 3 5.25v13.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V5.25A2.25 2.25 0 0 0 18.75 3H5.25ZM12 15.75a.75.75 0 0 1-.75-.75V12.75H9a.75.75 0 0 1 0-1.5h2.25V9a.75.75 0 0 1 1.5 0v2.25H15a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-.75.75Z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
