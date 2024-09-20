"use client"

import { cn } from "@/lib/utils";
import { Blinds } from "lucide-react";
import { useEffect, useState } from "react"

const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState<number>(-1);
    const [isOnMobile, setIsOnMobile] = useState<boolean>(false);


    const [isOpenSideDrawer, setIsOpenSideDrawer] = useState<boolean>(false);
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        if(scrollPosition == -1) { setScrollPosition(window.pageYOffset)}
        
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });


    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 639px)');
        const handleScreenSizeChange = (event : any) => setIsOnMobile(event.matches);
        handleScreenSizeChange(mediaQuery);

        mediaQuery.addEventListener('change', handleScreenSizeChange);

        return () => mediaQuery.removeEventListener('change', handleScreenSizeChange);
    });

    return <div className={cn("w-[55%] h-12 fixed z-[999999] top-0 left-0 duration-100 flex items-center gap-[20%] md:w-full sm:justify-start md:backdrop-blur-3xl", {
        "backdrop-blur-sm" : scrollPosition > 10,
        "w-full justify-around" : scrollPosition > 650
    })}>
        { isOnMobile &&
            <>
            <div className={cn("w-[50%] h-[100vh] fixed z-[9999999] top-0 -left-[50%] duration-150 flex flex-col gap-9 py-12 bg-white", {
                "left-0": isOpenSideDrawer
            })}>
                <div className="m-auto my-0 font-extrabold">Just<span className="text-teal-500">Tour</span></div>
                <nav>
                    <ul className="flex flex-col">
                        <li className=" px-8 py-4 active::text-teal-500 hover:cursor-pointer duration-100 hover:text-teal-500"><a href="#Home">Home</a></li>
                        <li className=" px-8 py-4 active::text-teal-500 hover:cursor-pointer duration-100 hover:text-teal-500"><a href="#Features">Features</a></li>
                        <li className=" px-8 py-4 active::text-teal-500 hover:cursor-pointer duration-100 hover:text-teal-500"><a href="#AboutUs">About us</a></li>
                        <li className=" px-8 py-4 active::text-teal-500 hover:cursor-pointer duration-100 hover:text-teal-500"><a href="#ContactUs">Contact us</a></li>
                    </ul>
                </nav>
            </div>
            { isOpenSideDrawer && <div onClick={() => setIsOpenSideDrawer(false)} className="w-full h-[200vh] fixed z-[9999998] bg-[#00000080]"></div>}
            </>
        }
        {
            isOnMobile ?
                <div className="ml-4 hover:cursor-pointer" onClick={() => setIsOpenSideDrawer(true)}><Blinds className="w-7 h-7"/></div> :
                <div className="ml-4">Just<span className="text-teal-500">Tour</span></div>
        }
        <nav className="sm:hidden">
            <ul className="flex gap-6">
                <li className="hover:cursor-pointer duration-100 hover:text-teal-500"><a href="#Home">Home</a></li>
                <li className="hover:cursor-pointer duration-100 hover:text-teal-500"><a href="#Features">Features</a></li>
                <li className="hover:cursor-pointer duration-100 hover:text-teal-500"><a href="#AboutUs">About us</a></li>
                <li className="hover:cursor-pointer duration-100 hover:text-teal-500"><a href="#ContactUs">Contact us</a></li>
            </ul>
        </nav>
        
    </div>
}

export default Navbar