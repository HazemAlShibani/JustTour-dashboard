"use client"

import { BreadcrumbResponsive } from "@/components/Breadcrumb"
import DashContainer from "@/components/DashContainer"
import App from "@/components/Table"
import { getTripsData } from "../action"
import { useMutation } from "@tanstack/react-query"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"
import Loader from "@/components/Loader"
import { Ban } from "lucide-react"
import Error from "@/components/Error"

const items = [
    { href: "/Dashboard/trips", label: "Trips" },
]

const Teams = () => {
    // const data = await getData();
    const {toast} = useToast()

    useEffect(() => {
        mutate()
    },[])

    const { mutate, data, isPending, isError} = useMutation({
        mutationKey: ['get-trips'],
        mutationFn: getTripsData,
        onSuccess: () => {
            toast({
                title: 'Your Trips are Fetched successfully',
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
        <h1 className="my-7 text-2xl font-semibold">Show Trips</h1>
        <div className="w-full relative h-full bg-white mb-7">
            {
                isPending ? <Loader message="Fetching all The trips for you!"/> : 
                data ? <App type="trips" data={data.data}/> : null
            }
            {
                isError && <Error className="top-[50%] absolute left-[50%] -translate-x-[50%] z-20 -translate-y-[50%]" />
            }
        </div>
    </DashContainer>
    }

export default Teams