import React, { useEffect, useRef, useState} from "react";
import CardInfo from "../js/CardInfo";
import Card from "./Card";
import Waitlist from "./Waitlist";
import SplitText from '../components/SplitText';
import NavigationBar from "./NavigationBar";
import { motion, useScroll } from "framer-motion";
import heroBackground from '../assets/Mythica/heroBackground.png';
import Sample from "../js/Sample";
import magicText from '../assets/Mythica/magicSVG.svg';
import Lottie from "lottie-react";
import animationData from "../assets/Mythica/tap.json";
import { BsLock, BsUnlock, BsBox, BsPeople } from "react-icons/bs";

const Home = () => {
    const [isLocked, setIsLocked] = useState(true);
    const homeRef = useRef(null);
    const itemRef = useRef(null);
    const joinRef = useRef(null);

    const sections = {
        Home: homeRef,
        Items: itemRef,
        Join: joinRef
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setIsLocked(prev => !prev);
        }, 1000);

        return () => clearInterval(interval);
    })

    const goToJoinSection = (section) => {
        section.current.scrollIntoView({behavior: "smooth", block: "end"});
    }

    return ( <div className="w-full h-full flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
        <main ref={homeRef} className="relative flex items-center justify-center w-full max-w-[1600px] min-h-screen md:px-16 overflow-hidden">
            <NavigationBar sections={sections}/>
        <section className="w-full relative p-10 mt-14 z-30 md:px-6 md:py-20 md:mt-0">
            <SplitText/>
            <motion.p initial={{opacity:0, y:-20, filter:"blur(40px)"}} animate={{opacity:1, y:0, filter:"blur(0px)"}} transition={{duration:0.4, delay:0.6, ease:"easeInOut"}} className="text-white text-xl max-w-[800px] font-montserrat md:text-2xl md:mt-2">Your monthly portal into magical indie worlds</motion.p>
            <motion.button initial={{opacity:0, y:-20, filter:"blur(40px)"}} animate={{opacity:1, y:0, filter:"blur(0px)"}} transition={{duration:0.4, delay:0.7, ease:"easeInOut"}} className="bg-gradient-to-t from-buttonShadeOne via-buttonShadeTwo to-buttonShadeThree text-3xl text-white px-6 py-3 rounded-2xl mt-4 font-dillan font-normal cursor-pointer" onClick={() => goToJoinSection(joinRef)}>Join the Waitlist</motion.button>
            
        <div className="w-full relative z-10 mt-10 p-4 md:bg-transparent md:mt-0 md:py-20">
            <motion.h3 initial={{opacity:0, y:-20, filter:"blur(40px)"}} animate={{opacity:1, y:0, filter:"blur(0px)"}} transition={{duration:0.4, delay:0.8, ease:"easeInOut"}} className="uppercase text-white text-xl font-medium font-montserrat">What is Mythica?</motion.h3>
            <motion.p initial={{opacity:0, y:-20, filter:"blur(40px)"}} animate={{opacity:1, y:0, filter:"blur(0px)"}} transition={{duration:0.4, delay:0.9, ease:"easeInOut"}} className="text-white text-sm max-w-[480px] mt-2 font-montserrat font-normal">We’re passionate about indie fantasy stories. Every month, Mythica delivers one handpicked fantasy book from emerging authors—plus themed items that bring the story to life. Think cozy, magical, and full of surprise.</motion.p>
        </div>
        
        </section>
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: [0, 1.5, 1.2], opacity: [0, 1, 0.8] }} transition={{ duration: 2, ease: "easeInOut" }} className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-white via-white to-white blur-3xl opacity-70 animate-pulse"/>

        <>
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
            <filter id="rippleGooey">
            <feTurbulence id="turbulence" type="fractalNoise" baseFrequency="0.1" numOctaves="2" result="turbulence" seed="1"/>
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="gooey"/>
            <feComposite in="gooey" in2="SourceGraphic" operator="atop" />
            </filter>
        </svg>

        <motion.img initial={{ filter: "url(#rippleGooey)", opacity: 0, scale:2 }} animate={{ filter: "none", opacity: 1, scale:1}} transition={{ duration: 2, ease: "easeInOut" }} src={heroBackground}
            className="absolute object-cover z-20 w-full h-full left-0 top-0"/>
        <div className="bg-gradient-to-t from-black via-black/0 to-black/0 absolute top-0 h-full w-full z-20"></div>
        </>
        </main>

        <section className="w-full relative z-10 px-6 mt-10 flex flex-col items-center justify-center sm:px-20 md:hidden">
            <img src={magicText} className="w-max-[200px]" alt="" />
            <div className="relative w-40 h-40">
                <Lottie animationData={animationData} loop={true} />
            </div>
            <div className="flex gap-2 text-white font-montserrat items-center">{isLocked ? <BsLock size={20}/> : <BsUnlock size={20}/>}<p>Unlock different colors</p></div>
        </section>
        
        <section ref={itemRef} className="w-full relative z-10 py-20 px-4 mt-0 sm:px-20 md:py-20 md:px-20 md:mt-0 max-w-[1400px]">
            <h3 className="text-white font-montserrat text-xl font-medium uppercase flex-1">What's Inside?</h3>
            <h3 className="text-white font-montserrat text-md font-normal capitalize flex gap-2 mt-2 items-center"><BsBox size={20}/>Each Package includes</h3>
            <div className="relative mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-0">
                {
                    CardInfo.map((card, index) => (
                        <Card key={index} {...card} />
                    ))
                }
            </div>
        </section>
        <section className="w-full relative z-10 py-20 px-4 mt-10 sm:px-20 md:py-20 md:px-20 md:mt-0 max-w-[1400px]">
            <div className="flex flex-col w-full justify-between md:flex-row">
                <h3 className="text-white font-montserrat text-xl font-medium uppercase flex-1 flex gap-2 items-center"><BsPeople/>Our Community</h3>
                <h3 className="text-white font-dillan text-lg w-fit">A Look Inside</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 mt-10">
                 {
                Sample.map(({image}, index) => (
                    <img src={image} className="transition-all duration-300 hover:scale-105 ease-in-out rounded-xl hover:border-2 hover:border-white hover:blur-none md:blur-lg" key={index} alt="" />
                ))
                }
            </div>
           <p className="text-customGray font-montserrat italic mt-6 text-center text-sm">Handpicked fantasy reads and magical items—here’s a glimpse of what subscribers have received.</p>
        </section>
        <section ref={joinRef} className="w-full relative z-10 p-5 mt-0 mb-20 md:px-40 max-w-[1400px] md:mt-0">
            <h3 className="uppercase text-white font-montserrat font-medium text-xl"><span className="font-bold">Join</span> the Waitlist</h3>
            <Waitlist/>
        </section>
    </div> );
}
 
export default Home;