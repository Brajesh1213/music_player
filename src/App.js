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
    <div className="grid grid-cols-8  md:grid-cols-8 sm:grid-cols-8 gap-1 h-screen bg-gradient-to-r from-red-700 to-black text-gray-200">
      {/* Sidebar */}
      <div className="bg-black text-white col-span-2  md:col-span-2 sm:col-span-1 ">
        <Sidebar1 />
      </div>

      {/* Main Content */}        
      

      <div className="bg-gray-800 text-gray-200 col-span-6  sm:col-span-6 md:col-span-6 grid grid-cols-6 md:grid-cols-6 sm:grid-cols-6">


          {/* Main Content Area */}
          <div className=" col-span-4 md:col-span-4 sm:col-span-3  ">
          <Header />

            <MainContent 
              songs={songList} 
              setSongs={setSongList} 
              setCurrentSong={setCurrentSong} 
              currentSong={currentSong}
            />
          </div>

          {/* Now Playing Section - Last 2 Columns */}
          <div className="col-span-2 md:col-span-2  sm:col-span-4 flex items-end justify-end flex-row md:justify-center sm:justify-center">
          {/* Content goes here */}
{/* </div> */}
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
  );
}

export default App;
