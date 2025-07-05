import React from "react";
import GooeyNav from './GooeyNav'

const NavigationBar = ({sections}) => {
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
    <div className="absolute h-fit z-20 right-10 top-5">
    <GooeyNav
         items={items.map((item, i) => ({
          ...item,
          onClick: () => goToSection(item.label),
        }))}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
    />
    </div>
     );
}
 
export default NavigationBar;