import React from 'react';

const SplitText = () => {
  return (
<div className="relative group w-fit select-none cursor-pointer">
  {/* Intact full text */}
  <h1 className="text-6xl font-dillan uppercase text-white transition-opacity duration-300 group-hover:opacity-0 md:text-9xl">
    Mythica
  </h1>

  {/* Top half (hidden normally, visible and animated on hover) */}
  <h1 className="text-9xl font-dillan uppercase text-white absolute top-0 left-0 w-full
                 clip-top pointer-events-none
                 opacity-0 group-hover:opacity-100
                 transition-all duration-500
                 group-hover:-translate-y-5 group-hover:-translate-x-3"
  >
    Mythica
  </h1>

  {/* Bottom half (same) */}
  <h1 className="text-9xl font-dillan uppercase text-white absolute top-0 left-0 w-full
                 clip-bottom pointer-events-none
                 opacity-0 group-hover:opacity-100
                 transition-all duration-500
                 group-hover:translate-y-5 group-hover:translate-x-3"
  >
    Mythica
  </h1>
</div>





  );
};

export default SplitText;
