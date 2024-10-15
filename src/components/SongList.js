// components/SongList.js
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SongItem from './SongItem';

const SongList = ({ songs, setSongs, setCurrentSong }) => {
  const moveSong = (dragIndex, hoverIndex) => {
    const updatedSongs = [...songs];
    const [movedSong] = updatedSongs.splice(dragIndex, 1);
    updatedSongs.splice(hoverIndex, 0, movedSong);
    setSongs(updatedSongs);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 rounded h-full overflow-y-auto max-w-2xl mx-auto shadow-lg w-full">
        {songs.map((song, index) => (
          <SongItem
            key={song.id}
            index={index}
            song={song}
            moveSong={moveSong}
            setCurrentSong={setCurrentSong}
            
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default SongList;
