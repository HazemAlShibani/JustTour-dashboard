"use client"

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { Image, LayoutDashboard, ListFilter, LogOut, Plane, User2, UsersIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export const SideDrawerSmall = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="hidden xsm:flex">
            <div className="w-full bg-[#77a19c0a] py-2 px-6">
                <ListFilter onClick={() => setIsOpen(true)} className="w-7 h-7 hover:cursor-pointer" />
            </div>
            {
                isOpen && 
                <div className="fixed z-50 bg-white w-[60%] h-full top-0 duration-150">
                    <div className="py-10 text-teal-500 text-center">JustTour</div>
                    <ul className="h-fit flex flex-col gap-5">
            <Link href="/Dashboard">
                <li className=" relative left-3 lmd:left-0 text-white duration-100 hover:bg-teal-600 bg-teal-500 px-5 py-5 flex gap-3 items-center">
                    <div className="absolute -bottom-[12px] right-0 border-[6px] border-l-teal-500 border-t-teal-500 border-b-transparent border-r-transparent lmd:hidden"></div>
                    <LayoutDashboard className="w-7 h-7 text-white"/><span>Dashboard</span>
                </li>
            </Link>
            <Link href="/Dashboard/sites">
                <li className="relative left-3 lmd:left-0 text-white duration-100 hover:bg-teal-600 bg-teal-500 px-5 py-5 flex gap-3 items-center">
                    <div className="absolute -bottom-[12px] right-0 border-[6px] border-l-teal-500 border-t-teal-500 border-b-transparent border-r-transparent lmd:hidden"></div>
                    <Image className="w-7 h-7 text-white"/><span>Sites</span>
                </li>
            </Link>
            <Link href="/Dashboard/trips">
                <li className="relative left-3 lmd:left-0 text-white duration-100 hover:bg-teal-600 bg-teal-500 px-5 py-5 flex gap-3 items-center">
                    <div className="absolute -bottom-[12px] right-0 border-[6px] border-l-teal-500 border-t-teal-500 border-b-transparent border-r-transparent lmd:hidden"></div>
                    <Plane className="w-7 h-7 text-white"/><span>Trips</span>
                </li>
            </Link>
            <Link href="/Dashboard/teams">
                <li className="relative left-3  lmd:left-0 text-white duration-100 hover:bg-teal-600 bg-teal-500 px-5 py-5 flex gap-3 items-center">
                    <div className="absolute -bottom-[12px] right-0 border-[6px] border-l-teal-500 border-t-teal-500 border-b-transparent border-r-transparent lmd:hidden"></div>
                    <UsersIcon className="w-7 h-7 text-white" /><span>Teams</span>
                </li>
            </Link>
            <Link href="/Dashboard/tourists">
                <li className="relative left-3 lmd:left-0 text-white duration-100 hover:bg-teal-600 bg-teal-500 px-5 py-5 flex gap-3 items-center">
                    <div className="absolute -bottom-[12px] right-0 border-[6px] border-l-teal-500 border-t-teal-500 border-b-transparent border-r-transparent lmd:hidden"></div>
                    <User2 className="w-7 h-7 text-white"/><span>Tourists</span>
                </li>
            </Link>
            </ul>
            <Link href="/">
                <div className="w-full mt-11 flex text-teal-500 items-center justify-center gap-2 hover:cursor-pointer">
                    <LogOut className="w-7 h-7"/> <span>Logout</span>
                </div>
            </Link>
                </div>
            }
            {
                isOpen && 
                <div onClick={() => setIsOpen(false)} className="fixed z-40 bg-[#00000080] duration-150 w-full h-full top-0">
                </div>
            }
        </div>
    )
}

const SideDrawer = () => {
    return <div className=" h-full shadow-lg bg-white">
        <div className="py-10 text-teal-500 text-center">JustTour</div>
            <ul className="h-fit flex flex-col gap-5">
            <Link href="/Dashboard">
                <li className=" relative left-3 lmd:left-0 text-white duration-100 hover:bg-teal-600 bg-teal-500 px-5 py-5 flex gap-3 items-center">
                    <div className="absolute -bottom-[12px] right-0 border-[6px] border-l-teal-500 border-t-teal-500 border-b-transparent border-r-transparent lmd:hidden"></div>
                    <LayoutDashboard className="w-7 h-7 text-white"/><span className="lmd:hidden">Dashboard</span>
                </li>
            </Link>
            <Link href="/Dashboard/sites">
                <li className="relative left-3 lmd:left-0 text-white duration-100 hover:bg-teal-600 bg-teal-500 px-5 py-5 flex gap-3 items-center">
                    <div className="absolute -bottom-[12px] right-0 border-[6px] border-l-teal-500 border-t-teal-500 border-b-transparent border-r-transparent lmd:hidden"></div>
                    <Image className="w-7 h-7 text-white"/><span className="lmd:hidden">Sites</span>
                </li>
            </Link>
            <Link href="/Dashboard/trips">
                <li className="relative left-3 lmd:left-0 text-white duration-100 hover:bg-teal-600 bg-teal-500 px-5 py-5 flex gap-3 items-center">
                    <div className="absolute -bottom-[12px] right-0 border-[6px] border-l-teal-500 border-t-teal-500 border-b-transparent border-r-transparent lmd:hidden"></div>
                    <Plane className="w-7 h-7 text-white"/><span className="lmd:hidden">Trips</span>
                </li>
            </Link>
            <Link href="/Dashboard/teams">
                <li className="relative left-3  lmd:left-0 text-white duration-100 hover:bg-teal-600 bg-teal-500 px-5 py-5 flex gap-3 items-center">
                    <div className="absolute -bottom-[12px] right-0 border-[6px] border-l-teal-500 border-t-teal-500 border-b-transparent border-r-transparent lmd:hidden"></div>
                    <UsersIcon className="w-7 h-7 text-white" /><span className="lmd:hidden">Teams</span>
                </li>
            </Link>
            <Link href="/Dashboard/tourists">
                <li className="relative left-3 lmd:left-0 text-white duration-100 hover:bg-teal-600 bg-teal-500 px-5 py-5 flex gap-3 items-center">
                    <div className="absolute -bottom-[12px] right-0 border-[6px] border-l-teal-500 border-t-teal-500 border-b-transparent border-r-transparent lmd:hidden"></div>
                    <User2 className="w-7 h-7 text-white"/><span className="lmd:hidden">Tourists</span>
                </li>
            </Link>
            </ul>
            
            <Link href="/">
                <div className="w-full mt-11 flex text-teal-500 items-center justify-center gap-2 hover:cursor-pointer">
                    <LogOut className="w-7 h-7"/> <span className="lmd:hidden">Logout</span>
                </div>
            </Link>
    </div>
}

export default SideDrawer