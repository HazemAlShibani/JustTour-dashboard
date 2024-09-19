"use client"

import { BreadcrumbResponsive } from "@/components/Breadcrumb"
import DashContainer from "@/components/DashContainer"
import { useToast } from "@/components/ui/use-toast"
import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"
import { getSitesData } from "../action"
import Loader from "@/components/Loader"
import Error from "@/components/Error"
import ShowSites from "./ShowSites"

const items = [
    { href: "/Dashboard/sites", label: "Sites" },
]

const Sites = () => {
    const {toast} = useToast()

    useEffect(() => {
        mutate()
    },[])

    const { mutate, data, isPending, isError} = useMutation({
        mutationKey: ['get-trips'],
        mutationFn: getSitesData,
        onSuccess: () => {
            toast({
                title: 'Your Sites are Fetched successfully',
                description: 'you can see them in The Table below!',
                variant: 'default',
                style: {
                  "background": "#14B8A6",
                  "color" : "white",
                  "border" : "none"
                }
              })
        },
        onError: () => {
            toast({
                title: 'Something went wrong!',
                description: 'There was an error on our end. Please try again.',
                variant: 'destructive',
            })
        }
    })
    

    return <DashContainer className='flex flex-col'>
        <BreadcrumbResponsive items={items}/>
        <h1 className="my-7 text-2xl font-semibold">Show Sites</h1>
        <div className="w-full flex-grow bg-white p-4 mb-7">
            {   
                isPending ? <Loader message="Fetching all The Sites for you!"/> : 
                data ? <ShowSites data={data.data}/> : null
            }
            {
                isError && <Error className="top-[50%] absolute left-[50%] -translate-x-[50%] z-20 -translate-y-[50%]"/>
            }
        </div>
    </DashContainer>
}

export default Sites