import React from "react";
import noteIcon from '../assets/Mythica/noteIcon.svg';
import dragonImage from '../assets/Mythica/dragon.png';

const Waitlist = () => {
    return ( <div className="w-full h-auto flex items-center justify-center mt-12">
        <div className="relative border-[3px] border-borderOne bg-black w-full h-max-[400px] rounded-2xl overflow-hidden">
            {/* <div className="waitlistTopBar animate-pulse"></div> */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-7">
                <div className="md:col-span-3 flex flex-col gap-8 justify-center mt-8 md:mt-0 p-10">
                    <div className="flex gap-4 items-center md:px-4">
                        <label htmlFor="Name" className="text-white font-montserrat">Name</label>
                        <input type="text" className="bg-white px-2 py-1 focus:outline-none w-full" />
                    </div>
                    <div className="flex gap-4 items-center md:px-4">
                        <label htmlFor="Email" className="text-white font-montserrat">Email</label>
                        <input type="email" className="bg-white px-2 py-1 focus:outline-none w-full" />
                    </div>
                    <div className="flex flex-col gap-8 w-full justify-end items-end md:px-4">
                        <button className="col-span-4 bg-gradient-to-t from-buttonShadeOne via-buttonShadeTwo to-buttonShadeThree rounded-full w-full max-w-[360px] text-white font-montserrat py-2 sm:max-w-[520px] md:max-w-[310px]">Notify me</button>
                        <p className="text-customGray italic flex gap-1 items-center font-montserrat text-xs capitalize sm:pr-28 md:pr-8"><img src={noteIcon} alt="" />We’ll let you know when we launch!</p>
                    </div>
                </div>
                <div className="md:col-span-4 flex justify-end">
                    <img src={dragonImage} className="w-auto max-h-[350px]" alt="bookImage" />
                </div>
            </div>
            
        </div>
    </div> );
}
 
export default Waitlist;