"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { site } from "../../action"
import { Image, LocateFixedIcon, PenLine, RotateCcwIcon, SwitchCameraIcon, Text, X } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import DeleteSite from "./DeleteSite"
import ConfirmUpdate from "./ConfirmUpdate"

const SiteInfo = ({siteInfo}: {siteInfo: site}) => {
    const {id, SiteName, Location ,Details, MainPhoto, SecondaryPhotos} = siteInfo

    
    return (
    <div className="bg-white flex w-full h-full p-4 mb-7 mt-7 xsm:flex-col-reverse">
        <div className="w-[45%] h-full border-r-2 xsm:border-hidden xsm:w-full">
            <div className="flex flex-col">
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                    <PenLine className=" inline w-6 h-6 text-teal-500"/>{' '}
                    Site Name
                </h3>
                <div className="text-stone-600 px-7 overflow-auto">
                    <p> 
                        {SiteName}
                    </p>     
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                    <LocateFixedIcon className=" inline w-6 h-6 text-teal-500"/>{' '}
                    Site Location
                </h3>
                <div className="text-stone-600 px-7 overflow-auto">
                    <p> 
                        {Location}
                    </p>     
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                    <Text className=" inline w-6 h-6 text-teal-500"/>{' '}
                    Description
                </h3>
                <div className="text-stone-600 max-h-80 text-justify pl-7 pr-5 overflow-auto">
                    <p> 
                        {Details}
                    </p>     
                </div>
            </div>
        </div>
        <div className="w-[55%] pl-4 h-full relative xsm:w-full">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='p-1 absolute -top-3 right-6 rounded-full bg-white hover:bg-transparent shadow-none'>
                            <RotateCcwIcon className="w-7 h-7 text-blue-500"/>
                        </Button>
                    </DialogTrigger>
                    <ConfirmUpdate site_id={id} />
                </Dialog>
                        
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='p-1 absolute -top-3 -right-3 rounded-full bg-white hover:bg-transparent shadow-none'>
                            <X className="w-7 h-7 text-red-500"/>
                        </Button>
                    </DialogTrigger>
                    <DeleteSite site_id={id} />
                </Dialog>
                <div className="flex flex-col w-full h-[40%] xsm:h-auto ">
                    <h3 className="mt-2 mb-2 text-lg font-semibold">
                        <Image className=" inline w-6 h-6 text-teal-500"/>{' '}
                        Main Image
                    </h3>
                    <Dialog>
                            <div className=" flex justify-center items-center ">
                                <DialogTrigger asChild>
                                    <img src={MainPhoto} alt={SiteName} className="w-40 h-40 hover:cursor-pointer rounded-sm"/>
                                </DialogTrigger>
                            </div>
                        <DialogContent className="p-0 border-none shadow-none">
                                <img src={MainPhoto} alt={SiteName} className="w-full h-full"/>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="flex flex-col w-full h-[60%] xsm:h-auto">

                    <h3 className="mt-2 mb-2 text-lg font-semibold">
                        <SwitchCameraIcon className=" inline w-6 h-6 text-teal-500"/>{' '}
                        Site Images
                    </h3>
                    <Dialog>
                            <DialogTrigger asChild>
                                <div className="w-full max-h-64 overflow-y-auto flex flex-wrap gap-2 justify-start hover:cursor-pointer">
                                    {
                                        SecondaryPhotos.map((ele, id) => (
                                            <div key={id} className="w-20 h-20">
                                                <img src={ele.SecondaryPhoto} className="w-full h-full rounded-sm" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </DialogTrigger>
                        <DialogContent className="p-0 border-none shadow-none bg-transparent h-[90%]">
                            <Carousel
                                opts={{
                                    align: "center",
                                    loop: true
                                }}
                            >
                                <CarouselContent >
                                    {
                                        SecondaryPhotos.map((ele,id) => (
                                            <CarouselItem key={id}>
                                                <div className="w-full h-full">
                                                    <img src={ele.SecondaryPhoto} className="w-full h-[85%]" />
                                                </div>
                                    </CarouselItem>
                                        ))
                                    }
                                </CarouselContent>
                                <CarouselPrevious className="top-1/2 -left-1/2 -translate-x-1/2 bg-transparent text-white" />
                                <CarouselNext className="top-1/2 left-[150%] -translate-x-1/2 bg-transparent text-white" />
                            </Carousel>
                        </DialogContent>
                    </Dialog>
                </div>
        </div>
    </div>
    )
}

export default SiteInfo