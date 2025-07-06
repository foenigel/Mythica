import { div } from "framer-motion/client";
import React, { useState } from "react";

const NavigationBar = ({sections}) => {
    const [selectNav, setSelectNav] = useState("Home");
    const items = [
    { label: "Home"},
    { label: "Items"},
    { label: "Join"},
    ];

    const goToSection = (label) => {
        const sectionRef = sections[label];
        if (sectionRef?.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "end"});
        }
    }

    return ( 
    <div className="absolute h-fit z-50 top-5 max-w-[1400px] rounded-full bg-slate-900/80 backdrop-blur-2xl px-4 py-2 md:right-10">
        <ul className="flex gap-6">
            {
                items.map(({label}, index) => (
                    <li key={index} className={`font-montserrat font-medium cursor-pointer px-6 py-2 transition-all duration-500 ease-in-out hover:animate-pulse ${selectNav === label ? "bg-white text-black rounded-2xl" : "text-white"}`} onClick={() => {goToSection(label); setSelectNav(label);}}>{label}</li>
                ))

            }
            
        </ul>
    </div>
     );
}
 
export default NavigationBar;