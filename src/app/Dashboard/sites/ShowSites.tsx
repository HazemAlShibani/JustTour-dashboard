"use client"

import { Input } from "@/components/ui/input"
import { sites } from "../action"
import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import Link from "next/link";

const ShowSites = ({data}: {data : sites}) => {
    const [dataSites, setDataSites] = useState<sites | undefined>(data);

    const changeTheInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        const searchingData = e.target.value.toLowerCase().trim();
        const updated = data?.filter((ele) => ele.SiteName.toLowerCase().includes(searchingData));
        setDataSites(updated);
    }


    return <div className="w-full h-full flex flex-col gap-4">
    <div className="w-full flex justify-between xsm:flex-col-reverse xsm:gap-3 xsm:flex-wrap xsm:items-end">
        <Input className="w-[40%] xsm:w-full" onChange={changeTheInputValue} type="text" placeholder="Filtering the Sites..."/>
        <Link href="/Dashboard/sites/addSite">
            <Button className='w-fit px-5 sm:px-6 lg:px-8 text-white bg-teal-500 hover:bg-teal-600'>
                Add Site
            </Button>
        </Link>
    </div>
    <div className="w-full h-full flex gap-2 flex-wrap xsm:justify-center xsm:contents">
        {
            dataSites?.map((ele, id) => (
                    <Link className="h-fit" key={id} href={`/Dashboard/sites/${ele.id}`}>
                <div  className="flex flex-col pb-2 gap-2 w-40 h-44 xsm:w-full xsm:h-56 bg-slate-200 rounded-sm overflow-hidden hover:cursor-pointer">
                        <img src={ele.MainPhoto} className="w-full h-[80%]" />
                        <p className="text-center font-semibold">{ele.SiteName}</p>
            </div>
                    </Link>
            ))
        }
        {
            dataSites?.length == 0 ? 
            <div className="w-full h-full flex justify-center items-center">
                <Frown className="w-7 h-7 text-teal-500 mr-2"/> 
                <p className="font-semibold">There are no Sites!</p>
            </div> :
            ""
        }
    </div>
    </div>
}

export default ShowSites