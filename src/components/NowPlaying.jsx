import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';

const NowPlaying = ({ song, songs, setCurrentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const soundRef = useRef(null);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.unload();
    }

    if (song && song.src) {
      const newSound = new Howl({
        src: [song.src],
        html5: true,
        onend: handleNext,
        onplay: () => requestAnimationFrame(updateProgress),
      });

      soundRef.current = newSound;
      newSound.play();
      setIsPlaying(true);
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.unload();
      }
    };
  }, [song]);

  const updateProgress = () => {
    if (soundRef.current) {
      const currentTime = soundRef.current.seek();
      const duration = soundRef.current.duration();
      setProgress((currentTime / duration) * 100);

      if (isPlaying) {
        requestAnimationFrame(updateProgress);
      }
    }
  };

  const handlePlayPause = () => {
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.pause();
      } else {
        soundRef.current.play();
        requestAnimationFrame(updateProgress);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e) => {
    if (soundRef.current) {
      const { value } = e.target;
      const seekTime = (value / 100) * soundRef.current.duration();
      soundRef.current.seek(seekTime);
      setProgress(value);
    }
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex((s) => s.id === song.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = songs.findIndex((s) => s.id === song.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-red-600 w-80 max-w-full rounded-lg p-2 sm:p-4 shadow-lg overflow-hidden">
      <div className="w-full flex justify-center items-center text-sm px-3 py-1 font-bold mb-2">
        <span className="text-md font-bold">Now Playing</span>
      </div>
      <div className="w-full">
        <img
          src={song.img || '/assets/images/default.png'}
          alt={song.title}
          className="w-full h-40 sm:h-48 object-cover rounded-lg border-2 border-red-500"
        />
      </div>
      <div className="bg-red-800 w-full flex flex-col items-center p-2 mb-2">
        <h3 className="text-base sm:text-lg font-semibold">{song.title}</h3>
        <p className="text-gray-300 text-xs sm:text-sm">{song.album}</p>
      </div>
      <div className="w-full flex items-center space-x-2 mb-2">
        <span className="text-xs sm:text-sm">{formatTime(soundRef.current?.seek() || 0)}</span>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="w-full h-2 bg-gray-400 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-red-800"
        />
        <span className="text-xs sm:text-sm">{formatTime(soundRef.current?.duration() || 0)}</span>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="text-white p-1 sm:p-2 rounded-full transition duration-200 hover:bg-red-800 w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center"
          onClick={handlePrev}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
          </svg>
        </button>
        <button
          className="text-white p-1 sm:p-2 rounded-full transition duration-200 hover:bg-red-800 w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          )}
        </button>
        <button
          className="text-white p-1 sm:p-2 rounded-full transition duration-200 hover:bg-red-800 w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center"
          onClick={handleNext}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NowPlaying;
