import { cn } from "@/lib/utils"
import { Book, BookCopy, Circle, Contact, GitPullRequestCreateArrowIcon, HandCoins, Mail, Phone, Star, StarHalf, Text, Timer, TimerOff, TimerResetIcon, Wallet2, WalletCards, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TripData } from "../../action"

const TripInfo = ({tripInfo}:{tripInfo: TripData}) => {

const {
    TeamName,
    Title,
    StartDate,
    EndDate,
    StartBooking,
    EndBooking,
    Type,
    Location,
    Level,
    SubLimit,
    Cost,
    Description,
    Retrieve,
    Requirements,
    Rate,
    TripPhoto,   
    RetrieveEndDate,
    Percent,
    contestants,
    Status
} = tripInfo

    return <div className="bg-white flex w-full h-full p-4 mb-7 mt-7 lmd:flex-col-reverse">
        <div className="w-[65%] h-full lmd:w-full border-r-2 lmd:border-hidden">

            <div className="flex flex-col">
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                    <Text className=" inline w-6 h-6 text-teal-500"/>{' '}
                    Description
                </h3>
                <div className="text-stone-600 max-h-20 px-7 overflow-auto">
                    <p> 
                        {Description}
                    </p>     
                </div>
            </div>


            <div className="flex flex-col">
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                    <Book className=" inline w-6 h-6 text-teal-500"/>{' '}
                        Trip Reservation
                </h3>

                <div className="text-stone-600 px-7 mb-2 xsm:px-0 xsm:text-sm">
                    <h1 className="mt-2 text-black text-md font-semibold">
                        <TimerResetIcon className="inline w-6 h-6 text-teal-500"/>{' '}
                            Trip Date
                    </h1>
                    <div className="pl-7 w-full flex justify-around items-center lmd:flex-wrap">
                        <div className="flex gap-2">
                            <span className="text-black">Start Date:</span>
                            <span>{StartDate}</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="text-black">End Date:</span>
                            <span>{EndDate}</span>
                        </div>
                    </div>
                </div>

                <div className="text-stone-600 px-7 xsm:px-0 xsm:text-sm">
                    <h1 className="mt-1 text-black text-md font-semibold">
                        <TimerOff className="inline w-6 h-6 text-teal-500"/>{' '}
                            Trip Booking
                    </h1>
                    <div className="pl-7 w-full flex justify-around items-center lmd:flex-wrap">
                        <div className="flex gap-2">
                            <span className="text-black">Start Date:</span>
                            <span>{StartBooking}</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="text-black">End Date:</span>
                            <span>{EndBooking}</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col">
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                    <Wallet2 className=" inline w-6 h-6 text-teal-500"/>{' '}
                        Financial Information
                </h3>

                <div className="text-stone-600 px-7 mb-2 xsm:px-0 xsm:text-sm">
                    <div className="flex flex-wrap gap-y-3 w-full justify-around xsm:justify-start">
                        <div className="flex mt-2 gap-2 items-center">
                            <h1 className=" inline text-black text-md font-semibold">
                                <HandCoins className="inline w-6 h-6 text-teal-500"/>{' '}
                                    Cost: 
                            </h1>
                            <span>{Cost}{' '}SYR</span>
                        </div>
                        {
                            Retrieve != "false" ? <>
                            <div className="flex mt-2 gap-2 items-center">
                            <h1 className=" inline text-black text-md font-semibold">
                                <WalletCards className="inline w-6 h-6 text-teal-500"/>{' '}
                                    Retrieve Percentage: 
                            </h1>
                            <span>{Percent}%</span>
                        </div>
                        <div className="flex mt-2 gap-2 items-center">
                            <h1 className=" inline text-black text-md font-semibold">
                                <Timer className="inline w-6 h-6 text-teal-500"/>{' '}
                                Retrieve Date: 
                            </h1>
                            <span>{RetrieveEndDate}</span>
                        </div>
                        </> : " "
                    }
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <h3 className="text-lg font-semibold">
                    <GitPullRequestCreateArrowIcon className=" inline w-6 h-6 text-teal-500"/>{' '}
                    Requirement
                </h3>
                <div className="text-stone-600 max-h-16 px-7 overflow-auto">
                    <p> 
                       {Requirements}
                    </p>     
                </div>
            </div>


        </div>
        <div className="w-[35%] h-full lmd:w-full">
            <div className="flex flex-col gap-4 mt-3 justify-center items-center">
                <div className="w-40 h-40">
                    <img src={TripPhoto} className="w-full h-full rounded-full"/>
                </div>
                <h1 className="my-3 text-2xl lmd:text-xl font-semibold">
                    {Title}
                </h1>
            </div>
            
            <div className=" pl-4 lmd:pl-0">
                <h3 className="mt-3 mb-2 text-lg font-semibold">
                    <Contact className=" inline w-6 h-6 text-teal-500"/>{' '}
                    Trip Information
                </h3>
                <div className="w-full h-full flex flex-wrap">
                    <div className="flex gap-3 pl-5 my-1 items-center">
                        <h3 className=" text-md font-semibold">
                            <Circle className="inline w-3 h-3 mr-2 fill-teal-500 text-teal-500"/>{' '}
                            Team:
                        </h3>
                        <div className="text-stone-600 px-4 overflow-auto">
                                {TeamName}
                        </div>
                    </div>
                    <div className="flex gap-3 pl-5 my-1 items-center">
                        <h3 className=" text-md font-semibold">
                            <Circle className="inline w-3 h-3 mr-2 fill-teal-500 text-teal-500"/>{' '}
                            Level:
                        </h3>
                        <div className="text-stone-600 px-4 overflow-auto">
                                {Level}
                        </div>
                    </div>
                    <div className="flex gap-3 pl-5 my-1 items-center">
                        <h3 className=" text-md font-semibold">
                            <Circle className="inline w-3 h-3 mr-2 fill-teal-500 text-teal-500"/>{' '}
                            Type:
                        </h3>
                        <div className="text-stone-600 px-4 overflow-auto">
                                {Type}
                        </div>
                    </div>
                    <div className="flex gap-3 pl-5 my-1 items-center">
                        <h3 className=" text-md font-semibold">
                            <Circle className="inline w-3 h-3 mr-2 fill-teal-500 text-teal-500"/>{' '}
                            Subscribers:
                        </h3>
                        <div className="text-stone-600 px-4 overflow-auto">
                                {contestants}{' '}/{' '}{SubLimit}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex pl-4 flex-col lmd:pl-0">
                <h3 className="mt-3 mb-2 text-lg font-semibold">
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
        </div>
    </div>
}

export default TripInfo