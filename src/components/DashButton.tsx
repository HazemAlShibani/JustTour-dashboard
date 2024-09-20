import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const DashButton = () => {
    return (
        <Button
        className='w-fit xsm:w-full px-4 sm:px-6 lg:px-8 bg-white text-teal-500 border-2 border-teal-500 hover:bg-slate-100'
        >
            <Link href="/Dashboard">
                Dashboard <ArrowRight className='h-4 w-4 ml-1.5 inline' />
            </Link>
        </Button>
    )
}

export default DashButton