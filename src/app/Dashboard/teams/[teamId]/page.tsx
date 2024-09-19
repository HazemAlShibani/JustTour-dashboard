"use client"

import { BreadcrumbResponsive } from "@/components/Breadcrumb";
import DashContainer from "@/components/DashContainer";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { getTeam } from "../../action";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import TeamInfo from "./TeamInfo";

const Team = ({params} : {params: any}) => {
    const teamId : number = params.teamId;

    const {toast} = useToast()

    useEffect(() => {
        mutate(teamId)
    },[])

    const { mutate, data, isPending, isError} = useMutation({
        mutationKey: ['get-team'],
        mutationFn: async (teamId : number) => getTeam(teamId),
        onError: () => {
            toast({
                title: 'Something went wrong',
                description: 'There was an error on our end. Please try again.',
                variant: 'destructive',
            })
        }
    })

    const items = [
        { href: "/Dashboard/teams", label: "Teams" },
        { href: `/Dashboard/teams/${teamId}`, label: `${data?.data.TeamName}` },
    ]

    return <DashContainer className='flex flex-col'>
    {
        isPending ? <Loader message="Fetching The team for you!"/> : 
        data? (
            <>
                <BreadcrumbResponsive items={items} />
                <TeamInfo teamInfo={data.data} />
            </>
        ) : null 
    }
    {
        isError && <Error className="top-[50%] relative left-[50%] -translate-x-[50%] z-20 -translate-y-[50%]"/>
    }
</DashContainer>
}

export default Team;