import React from 'react';
import { motion } from 'framer-motion';

const SplitText = () => {
  const text = "Mythica";

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6, ease:"easeInOut"}} className="relative group w-fit select-none cursor-pointer">
      {/* Initial animation */}
      <motion.h1
        initial={{ x: -900, filter: "blur(40px)" }}
        animate={{ x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.2, delay: 0.7, ease: "easeInOut" }}
        className="relative z-10 text-6xl md:text-[160px] font-dillan uppercase text-white group-hover:opacity-0 transition-opacity"
      >
        {text}
      </motion.h1>

      {/* Shimmer text layer */}
      <h1
        className="absolute top-0 left-0 w-full text-6xl md:text-[160px] font-dillan uppercase 
                   text-transparent bg-gradient-to-r from-[#b47aff] via-[#5ed1ff] to-[#b47aff]
                   bg-[length:300%_300%] bg-clip-text
                   group-hover:animate-shimmer
                   drop-shadow-[0_0_20px_#8ef] pointer-events-none"
      >
        {text}
      </h1>

      {/* Optional fantasy blur clone effect */}
      {[1, -1].map((dir, i) => (
        <h1
          key={i}
          className={`absolute top-0 left-0 w-full text-6xl md:text-[160px] font-dillan uppercase text-white
                      opacity-0 group-hover:opacity-100
                      transition-all duration-500 ease-in-out
                      group-hover:translate-x-[${2 * dir}px] group-hover:translate-y-[${-2 * dir}px]
                      filter blur-sm pointer-events-none mix-blend-screen`}
        >
          {text}
        </h1>
      ))}

      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 1.8s infinite linear;
        }
      `}</style>
    </motion.div>
  );
};

export default SplitText;
