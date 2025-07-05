import React from "react";

const Card = ({info, image, color}) => {
      const colorMap = {
        customPink: "hover:bg-customPink",
        customNeonGreen: "hover:bg-customNeonGreen",
        customPurple: "hover:bg-customPurple",
    };

    const hoverClass = colorMap[color] || "hover:bg-customLightGrayBorder";

    return ( 
    <div className="relative flex justify-center border-[3px] border-customLightGrayBorder max-w-[420px] w-full h-[500px] p-6">
        <div className={`absolute bg-customLightGrayBorder p-8 mx-6 cursor-crosshair ${hoverClass}`}>
            <img src={image} className="" alt="" />
        </div>
        
        <p className="absolute bottom-0 text-white font-dillan bg-black p-2">{info ? info : "N/A"}</p>
    </div> );
}
 
export default Card;