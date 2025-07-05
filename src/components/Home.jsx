import React, { useRef} from "react";
import homeBg from '../assets/Mythica/homeBg.png';
import heroImage from '../assets/Mythica/heroImage.png';
import CardInfo from "../js/CardInfo";
import Card from "./Card";
import Waitlist from "./Waitlist";
import SplitText from '../components/SplitText';
import NavigationBar from "./NavigationBar";

const Home = () => {
    const homeRef = useRef(null);
    const itemRef = useRef(null);
    const joinRef = useRef(null);

    const sections = {
        Home: homeRef,
        Items: itemRef,
        Join: joinRef
    }

    const goToJoinSection = (section) => {
        section.current.scrollIntoView({behavior: "smooth", block: "end"});
    }

    return ( <div className="w-full h-full min-h-screen bg-black overflow-hidden">
        <main ref={homeRef} className="relative flex tems-center justify-center w-full">
            <NavigationBar sections={sections}/>
        <section className="w-full relative p-10 mt-14 z-30 md:p-20 md:mt-0">
            <SplitText/>
            <p className="text-white text-xl max-w-[800px] font-montserrat md:text-2xl">Your monthly portal into magical indie worlds</p>
            <button className="bg-customPink text-lg text-white px-4 py-2 rounded-2xl mt-4 font-dillan font-normal cursor-pointer" onClick={() => goToJoinSection(joinRef)}>Join the Waitlist</button>
            
        <div className="w-full bg-black/40 backdrop-blur-2xl rounded-2xl relative z-10 mt-10 p-4 md:bg-transparent md:mt-0 md:py-20 md:backdrop-blur-none">
            <h3 className="uppercase text-white text-xl font-medium font-montserrat">What is Mythica?</h3>
            <p className="text-white text-sm max-w-[480px] mt-2 font-montserrat">We’re passionate about indie fantasy stories. Every month, Mythica delivers one handpicked fantasy book from emerging authors—plus themed items that bring the story to life. Think cozy, magical, and full of surprise.</p>
        </div>
        
        </section>
        <img src={heroImage} className="absolute z-20 bottom-0 right-20 w-full h-auto max-w-[600px]" alt="" />
        </main>
        <img src={homeBg} className="absolute right-0 top-0 h-full z-0" alt="" />
        <section ref={itemRef} className="w-full relative z-10 p-10 mt-10 md:p-20 md:mt-20">
            <h3 className="text-white font-montserrat text-xl font-medium uppercase">What’s Inside?</h3>
            <div className="relative mt-8 flex flex-col justify-between md:flex-row md:mt-12">
                {
                    CardInfo.map((card, index) => (
                        <Card key={index} {...card} />
                    ))
                }
            </div>
        </section>
        <section ref={joinRef} className="w-full relative z-10 p-5 md:p-40">
            <h3 className="uppercase text-white font-montserrat font-medium text-xl">Join the Waitlist</h3>
            <Waitlist/>
        </section>
    </div> );
}
 
export default Home;