"use client" 

import { getDonutData } from "@/app/Dashboard/action"
import { DonutChartUsageExample } from "@/components/dashboard/DonutChart"
import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"
import Error from "../Error"


const DonutGroup = () => {
    
    useEffect(() => {
        mutate()
    },[])

    const { mutate, data, isPending, isError} = useMutation({
        mutationKey: ['get-donut'],
        mutationFn: getDonutData,
    })
    
    
    return (
        !isError ? <>
            <DonutChartUsageExample isPending={isPending} sales={data?.data.levels} />
            <DonutChartUsageExample isPending={isPending} sales={data?.data.types} />
            <DonutChartUsageExample isPending={isPending} sales={data?.data.rates} />
        </> : (
            <div className="w-full flex justify-center items-center  h-[116px]">
                <Error colum={false} className="flex-row" />
            </div>
        )
    )
}

export default DonutGroup