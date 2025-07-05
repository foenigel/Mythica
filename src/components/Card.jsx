import React from "react";

const Card = ({info, image, color}) => {
      const colorMap = {
        customPink: "hover:bg-customPink",
        customNeonGreen: "hover:bg-customNeonGreen",
        customPurple: "hover:bg-customPurple",
    };

    const hoverClass = colorMap[color] || "hover:bg-customLightGrayBorder";

    return ( 
    <div className="relative flex justify-center max-w-[420px] w-full h-[400px] p-6 md:h-[500px] md:border-[3px] md:border-customLightGrayBorder">
        <div className={`absolute bg-customLightGrayBorder p-4 mx-6 cursor-crosshair ${hoverClass} md:p-8`}>
            <img src={image} className="" alt="cardImage" />
        </div>
        
        <p className="absolute bottom-0 text-white font-dillan bg-black p-2">{info ? info : "N/A"}</p>
    </div> );
}
 
export default Card;