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
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-red-700 to-black text-gray-200">
      {/* Sidebar */}
      <div className="bg-black text-white w-full md:w-1/4">
        <Sidebar1 />
      </div>

      {/* Main Content with Header */}
      <div className="flex flex-col flex-grow bg-gray-800">
        {/* Header spans the full width of MainContent and NowPlaying */}
        <Header />

        <div className="flex flex-col md:flex-row flex-grow">
          {/* Main Content Area */}
          <div className="flex-1 p-4">
            <MainContent
              songs={songList}
              setSongs={setSongList}
              setCurrentSong={setCurrentSong}
              currentSong={currentSong}
            />
          </div>

          {/* Now Playing Section */}
          <div className="w-full md:w-1/4 flex items-end justify-center p-4">
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
  );
}

export default App;
