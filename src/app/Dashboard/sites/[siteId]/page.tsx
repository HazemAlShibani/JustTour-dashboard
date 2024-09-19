"use client"

import { BreadcrumbResponsive } from "@/components/Breadcrumb";
import DashContainer from "@/components/DashContainer";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { getSite } from "../../action";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import SiteInfo from "./SiteInfo";

const Site = ({params} : {params: any}) => {
    const siteId : number = params.siteId;

    const {toast} = useToast()

    useEffect(() => {
        mutate(siteId)
    },[])

    const { mutate, data, isPending, isError} = useMutation({
        mutationKey: ['get-site'],
        mutationFn: async (siteId : number) => getSite(siteId),
        onError: () => {
            toast({
                title: 'Something went wrong',
                description: 'There was an error on our end. Please try again.',
                variant: 'destructive',
            })
        }
    })

    const items = [
        { href: "/Dashboard/sites", label: "Sites" },
        { href: `/Dashboard/sites/${siteId}`, label: `${data?.data.SiteName}` },
    ]

    return <DashContainer className='flex flex-col'>
    {
        isPending ? <Loader message="Fetching The site for you!"/> : 
        data? (
            <>
                <BreadcrumbResponsive items={items} />
                <SiteInfo siteInfo={data.data} />
            </>
        ) : null 
    }
    {
        isError && <Error className="top-[50%] relative left-[50%] -translate-x-[50%] z-20 -translate-y-[50%]"/>
    }
</DashContainer>
}

export default Site