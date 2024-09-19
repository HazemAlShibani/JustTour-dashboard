"use client"

import { cn } from "@/lib/utils"
import { BookCopy, Contact, Frown, Highlighter, Loader2, Mail, Phone, Star, StarHalf, Text, X } from "lucide-react"
import TripsOfTeam from "./tripsOfTeam"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useMutation } from "@tanstack/react-query"
import { deleteTeam, TeamData } from "../../action"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

const TeamInfo = ({teamInfo}: {teamInfo: TeamData}) => {
    const {toast} = useToast()
    const router = useRouter()
    const {team_id, TeamName, Email, Description, ContactInfo, Rate, ProfilePhoto, Followers, trips} = teamInfo

    const { mutate, isPending} = useMutation({
        mutationKey: ['delete-team'],
        mutationFn: async (team_id : number) => deleteTeam(team_id),
        onSuccess: () => {
            router.push("/Dashboard/teams")
        },
        onError: () => {
            toast({
                title: 'Something went wrong',
                description: 'There was an error on our end. Please try again.',
                variant: 'destructive',
            })
        }
    })

    
    return <div className="bg-white flex w-full h-full p-4 mb-7 mt-7 lmd:flex-col-reverse">
        <div className="w-[65%] h-full lmd:w-full border-r-2 lmd:border-hidden">
            <div className="flex flex-col">
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                    <Text className=" inline w-6 h-6 text-teal-500"/>{' '}
                    Description
                </h3>
                <div className="text-stone-600 max-h-20 lmd:max-h-full xsm:text-justify lmd:h-full px-7 xsm:px-0 overflow-auto">
                    <p> 
                        {Description}
                    </p>     
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                    <BookCopy className=" inline w-6 h-6 text-teal-500"/>{' '}
                    Trips
                </h3>
                <TripsOfTeam tripsData={trips} />
            </div>

        </div>
        <div className="w-[35%] h-full lmd:w-full relative">
            <div className="flex flex-col gap-4 mt-5 justify-center items-center">
                <div className="w-40 h-40">
                    <img src={ProfilePhoto} className="w-full h-full rounded-full"/>
                </div>
                <h1 className="my-3 text-3xl font-semibold">
                    {TeamName}
                </h1>
            </div>
            
            <div className="flex pl-4 flex-col">
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                    <Contact className=" inline w-6 h-6 text-teal-500"/>{' '}
                    Contact Information
                </h3>
                <div className="flex flex-col gap-3 pl-7 text-stone-500">
                    <p>
                        <Mail className=" inline w-4 h-4 text-teal-500"/>{' '} 
                        {Email}
                    </p>
                    <p>
                        <Phone className=" inline w-4 h-4 text-teal-500"/>{' '} 
                        {ContactInfo}
                    </p>
                </div>
            </div>
            <div className="flex pl-4 flex-col">
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                    <StarHalf className=" inline w-6 h-6 text-teal-500"/>{' '}
                    Rate
                </h3>
                <div className="flex gap-3 pl-7">
                {
                    [1, 2, 3, 4, 5].map((_, id) => {
                        return <Star className={cn({
                            "text-teal-500 fill-teal-500" : id  < Rate  
                        })} key={id} />
                    })
                }
                </div>
            </div>
            <Dialog>
                <DialogTrigger>
                    <Button className='p-1 absolute -top-3 -right-3 rounded-full bg-white hover:bg-transparent shadow-none'>
                        <X className="w-7 h-7 text-red-500"/>
                    </Button>
                </DialogTrigger>
            <DialogContent className="rounded-md border-2 border-red-500">
                <DialogHeader>
                    <DialogTitle className="m-auto mb-3 items-center flex flex-col gap-3">
                        <Frown className="w-7 h-7 text-red-500"/>
                        <p>Deleting This Team</p>
                    </DialogTitle>
                <DialogDescription>
                    <span className="text-gray-600">
                        Are you sure you want to delete this team from your system.
                    </span>
                    <span className="italic block px-2 text-gray-500">
                        Note: after Deleting the team, you can not access its information again!!  
                    </span>
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        onClick={() => mutate(team_id)}
                        className='p-1 rounded-md bg-red-500 text-white hover:bg-red-600 shadow-none'
                    >
                        {isPending ?
                         <Loader2 className="animate-spin w-7 h-7 text-white"/>
                         : "Delete"
                         }
                    </Button>
                </DialogFooter>
            </DialogContent>
            </Dialog>

            
        </div>
    </div>
}

export default TeamInfo