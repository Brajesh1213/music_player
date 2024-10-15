// src/components/MainContent.jsx
import React from 'react';
import SongList from './SongList';

const MainContent = ({ songs, setSongs, setCurrentSong, currentSong }) => {
  return (
    <div className="flex flex-col p-4 flex-1 bg-gray-900 min-h-screen overflow-hidden">
      {/* Display album photo of the current song if available */}
      {currentSong && currentSong.alb_img && (
        <div className="mb-4 w-full flex justify-center relative">
          <img 
            src={currentSong.alb_img} 
            alt={`Album cover of ${currentSong.title}`} 
            className="w-full sm:w-1/3 md:w-1/2 lg:w-2/3 h-auto object-cover rounded-lg shadow-lg  "
          />
        </div>
      )}
  {/* {console.log(currentSong)} */}

      <h2 class
      Name="text-xl text-center sm:text-left text-white mb-4">Popular</h2>
      <SongList 
        songs={songs} 
        setSongs={setSongs} 
        setCurrentSong={setCurrentSong} 
      />
    </div>
  );
};

export default MainContent;
