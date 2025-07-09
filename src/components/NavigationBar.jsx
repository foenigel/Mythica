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
    <div className="absolute h-fit z-50 top-5 max-w-[1400px] rounded-full bg-black backdrop-blur-2xl px-12 py-4 md:right-10">
        <ul className="flex gap-12">
            {
                items.map(({label}, index) => (
                    <li key={index} className={`font-montserrat font-medium cursor-pointer pb-[2px] transition-all duration-500 ease-in-out hover:animate-pulse ${selectNav === label ? "border-b-4 border-navBarSelect rounded-xs text-white" : "text-white"}`} onClick={() => {goToSection(label); setSelectNav(label);}}>{label}</li>
                ))

            }
            
        </ul>
    </div>
     );
}
 
export default NavigationBar;