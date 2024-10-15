// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Sidebar1 from './components/Sidebar1';
import Header from './components/Header';
import MainContent from './components/MainContent';
import NowPlaying from './components/NowPlaying';
import songs from './data/songs.js';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [songList, setSongList] = useState(songs);

  return (
    <div className="grid grid-cols-8 h-screen bg-gradient-to-r from-red-700 to-black text-gray-200">
      {/* Sidebar - full width on mobile, fixed width on medium and larger screens */}
      <div className="bg-black text-white col-span-2">
        <Sidebar1  className=" traspare"/>
      </div>

      {/* Main Content Area with Grid Layout */}
      <div className="bg-gray-800 text-gray-200 col-span-6">
        
        <div className="p-4">
        
          <div className="grid grid-cols-6 gap-1">
          <Header />
            {/* Center area for MainContent */}
            <div className="col-span-4">
              <MainContent 
                songs={songList} 
                setSongs={setSongList} 
                setCurrentSong={setCurrentSong} 
                currentSong={currentSong}
              />
            </div>

            {/* Now Playing Section */}
            <div className="col-span-2 w-full flex flex-col justify-end">
              {currentSong && (
                <NowPlaying 
                  song={currentSong} 
                  songs={songList} 
                  setCurrentSong={setCurrentSong}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
