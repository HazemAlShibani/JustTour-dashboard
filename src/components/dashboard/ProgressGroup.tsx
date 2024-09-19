"use client"

import { getProgressData } from "@/app/Dashboard/action"
import { ProgressBarUsageExample } from "@/components/dashboard/DataBars"
import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"
import Error from "../Error"


const ProgressGroup = () => {
    
    useEffect(() => {
        mutate()
    },[])

    const { mutate, data, isPending, isError} = useMutation({
        mutationKey: ['get-progress'],
        mutationFn: getProgressData,
    })
    
    
    return (
        !isError ? <>
        {/* @ts-ignore */}
            <ProgressBarUsageExample  isPending={isPending} data={data?.weekly}/>
        {/* @ts-ignore */}
            <ProgressBarUsageExample  isPending={isPending} data={data?.monthly} />
        </> : 
        <div className="w-full flex justify-center items-center  h-[116px]">
            <Error colum={false} className="flex-row" />
        </div>
    )
}

export default ProgressGroup