"use client"

import { BreadcrumbResponsive } from "@/components/Breadcrumb";
import DashContainer from "@/components/DashContainer";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { getTrip } from "../../action";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import TripInfo from "./TripInfo";

const Trip = ({params} : {params: any}) => {
    const tripId : number = params.tripId;

    const {toast} = useToast()

    useEffect(() => {
        mutate(tripId)
    },[])

    const { mutate, data, isPending, isError} = useMutation({
        mutationKey: ['get-trip'],
        mutationFn: async (tripId : number) => getTrip(tripId),
        onError: () => {
            toast({
                title: 'Something went wrong',
                description: 'There was an error on our end. Please try again.',
                variant: 'destructive',
            })
        }
    })

    const items = [
        { href: "/Dashboard/trips", label: "Trips" },
        { href: `/Dashboard/trips/${tripId}`, label: `${data?.data.Title}` },
    ]

    return <DashContainer className='flex flex-col'>
    {
        isPending ? <Loader message="Fetching The trip for you!"/> : 
        data? (
            <>
                <BreadcrumbResponsive items={items}/>
                <TripInfo tripInfo={data.data} />
            </>
        ) : null 
    }
    {
        isError && <Error className="top-[50%] relative left-[50%] -translate-x-[50%] z-20 -translate-y-[50%]"/>
    }
</DashContainer>
}

export default Trip;