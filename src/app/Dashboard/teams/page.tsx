"use client"

import { BreadcrumbResponsive } from "@/components/Breadcrumb"
import DashContainer from "@/components/DashContainer"
import App from "@/components/Table"
import { getTeamsData } from "../action"
import { useMutation } from "@tanstack/react-query"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"
import Loader from "@/components/Loader"
import Error from "@/components/Error"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddTeam from "./AddTeam"

const items = [
    { href: "/Dashboard/teams", label: "Teams" },
]

const Teams = () => {
    // const data = await getData();
    const {toast} = useToast()

    useEffect(() => {
        mutate()
    },[])

    const { mutate, data, isPending, isError} = useMutation({
        mutationKey: ['get-teams'],
        mutationFn: getTeamsData,
        onSuccess: () => {
            toast({
                title: 'Your Teams are Fetched successfully',
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
        <div className="flex items-center justify-between">
            <h1 className="my-6 text-2xl font-semibold">Show Teams</h1>
            
            <Dialog>
                <DialogTrigger asChild>
                    <Button className='w-fit px-5 sm:px-6 lg:px-8 text-white bg-teal-500 hover:bg-teal-600'>
                        Add Team
                    </Button>
                </DialogTrigger>
                <AddTeam/>
            </Dialog>

        </div>
        <div className="w-full h-full relative bg-white mb-7">
            {
                isPending ? <Loader message="Fetching all The teams for you!"/> : 
                data ? <App type="teams" data={data.data}/> : null
            }
            {
                isError && <Error className="top-[50%] absolute left-[50%] -translate-x-[50%] z-20 -translate-y-[50%]"/>
            }
        </div>
    </DashContainer>
    }

export default Teams