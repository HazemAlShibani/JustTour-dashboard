"use client"

import type { imagesHome } from "@/app/page"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const HomeImages = ({images}: {images: imagesHome}) => {
    const [existImage, setImage] = useState<number>(1)

    useEffect(() => {
        const time = setTimeout(() => {
            if(existImage < images.length) {
                setImage((prev) => prev + 1)
            } else {
                setImage(1)
            } 
            
        }, 7000);

        return () => clearTimeout(time);
    })

    return (
    <div className="w-full h-full flex justify-between items-center md:relative md:blur-[3px]">
        <div className="w-[10%] md:w-fit md:absolute md:bottom-2 md:left-[50%] md:translate-x-[-50%] ">
            <ul className="flex flex-col items-center gap-5 md:flex-row ">
                {
                    images.map((imageInfo) => (
                    <li onClick={() => setImage(imageInfo.id)} key={imageInfo.id}>
                        {
                            <div className={cn("w-5 h-5 overflow-hidden flex justify-center items-center border-stone-300 border-2 rounded-[50%]", {
                                "border-teal-500" : existImage == imageInfo.id
                            })}>
                                { existImage == imageInfo.id ? <span className="animate-scale rounded-[50%] bg-stone-100" ></span> : ""}
                            </div>
                        }
                    </li>
                ))
                }
            </ul>
        </div>
        <div className=" w-[90%] relative before:content-[''] before:absolute before:-left-1 before:z-1000 before:w-[2px] before:h-full before:bg-teal-500 h-full md:before:hidden md:absolute md:w-full">
            { 
            images.map((imageInfo) => (
                existImage == imageInfo.id ? <img key={imageInfo.id} src={imageInfo.imagePath} alt={imageInfo.alt} className="animate-slow w-full h-full"/> : ""
            ))
            }
            </div>

    </div>) 
}

export default HomeImages