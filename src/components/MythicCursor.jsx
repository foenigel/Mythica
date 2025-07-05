import React, { useEffect, useRef } from 'react';

const MythicCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;

      let x, y;

      if (e.type === 'touchmove' || e.type === 'touchstart') {
        if (e.touches && e.touches.length > 0) {
          x = e.touches[0].clientX;
          y = e.touches[0].clientY;
        }
      } else {
        x = e.clientX;
        y = e.clientY;
      }

      if (x !== undefined && y !== undefined) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('touchmove', moveCursor);
    window.addEventListener('touchstart', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('touchmove', moveCursor);
      window.removeEventListener('touchstart', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="mythic-cursor fixed w-6 h-6 bg-pink-500 rounded-full pointer-events-none"
      style={{ left: '-100px', top: '-100px', transition: 'left 0.05s, top 0.05s' }}
    />
  );
};

export default MythicCursor;
