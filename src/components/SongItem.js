// components/SongItem.js
import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const SongItem = ({ song, index, moveSong, setCurrentSong }) => {
  const ref = useRef(null);
// console.log();

  const [, drop] = useDrop({
    accept: 'SONG',
    hover(item) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      // Prevent replacing items with themselves
      if (dragIndex === hoverIndex) return;

      // Move the song and update the index
      moveSong(dragIndex, hoverIndex);

      // Update the item's index so it knows where it is now
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'SONG',
    item: { type: 'SONG', index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`flex justify-between items-center p-3 bg-red-800 rounded my-2 transition-all duration-200 ease-in-out ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
      onClick={() => setCurrentSong(song)}
    >
      <p className="text-white text-sm sm:text-base md:text-lg">{song.title}</p>
      <span className="text-white text-sm sm:text-base md:text-lg">{song.time}</span>
      
    </div>
  );
};

export default SongItem;
