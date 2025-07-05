import React from "react";
import homeBg from '../assets/Mythica/homeBg.png';
import logoSVG from '../assets/Mythica/mythicaLogo.svg';
import CardInfo from "../js/CardInfo";
import Card from "./Card";
import Waitlist from "./Waitlist";

const Home = () => {
    return ( <div className="w-full h-full min-h-screen bg-black">
        <section className="w-full relative z-10 p-20">
            <img src={logoSVG} className="min-w-[100px] h-fit max-w-[900px]" alt="" />
            <p className="text-white text-2xl max-w-[800px] mt-4 font-montserrat">Your monthly portal into magical indie worlds</p>
            <button className="bg-customPink text-lg text-white px-4 py-2 rounded-2xl mt-4 font-dillan font-normal">Join the Waitlist</button>
        
        <div className="w-full relative z-10 py-20">
            <h3 className="uppercase text-white text-xl font-medium font-montserrat">What is Mythica?</h3>
            <p className="text-white text-sm max-w-[480px] mt-2 font-montserrat">We’re passionate about indie fantasy stories. Every month, Mythica delivers one handpicked fantasy book from emerging authors—plus themed items that bring the story to life. Think cozy, magical, and full of surprise.</p>
        </div>
        <img src={homeBg} className="absolute right-0 top-0 h-full z-0" alt="" />
        </section>
        <section className="w-full relative z-10 p-20">
            <h3 className="text-white font-montserrat text-xl font-medium uppercase">What’s Inside?</h3>
            <div className="relative mt-12 flex justify-between">
                {
                    CardInfo.map((card, index) => (
                        <Card key={index} {...card} />
                    ))
                }
            </div>
        </section>
        <section className="w-full relative z-10 p-40">
            <h3 className="uppercase text-white font-montserrat font-medium text-xl">Join the Waitlist</h3>
            <Waitlist/>
        </section>
    </div> );
}
 
export default Home;