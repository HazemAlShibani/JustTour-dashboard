import { cn } from "@/lib/utils";
import Link from "next/link";
import { TripsData } from "../../action";

const TripsOfTeam = ({tripsData} : {tripsData : TripsData}) => {
    return <div className="px-7 xsm:px-0 flex flex-col gap-4 overflow-auto w-full max-h-[315px]">
        {
            tripsData.map((ele, id) => (
                <Link href={`/Dashboard/trips/${ele.id}`} key={id}>
                    <div className="border-l-4 flex hover:cursor-pointer items-center justify-between border-teal-500 px-7 py-4 text-stone-600 text-sm duration-150 hover:shadow-sm shadow-md w-full">
                        <span>{ele.Title}</span>
                        <span className={cn("min-w-20 text-center p-1", {
                            "text-red-500 bg-[#fff5f8] border-red-500 border-2 rounded-lg": ele.Status === 'Canceled',
                            "text-blue-500 bg-[#f0f8ff] border-blue-500 border-2 rounded-lg": ele.Status === 'Opened',
                            "text-green-500 bg-[#f1fff1] border-green-500 border-2 rounded-lg": ele.Status === 'Done',
                        })}>{ele.Status}</span>
                    </div>
                </Link>
            ))
        }
    </div>
}

export default TripsOfTeam;