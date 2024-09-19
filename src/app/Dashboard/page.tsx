import { AreaChartHero } from "@/components/dashboard/AreaChart"
import DonutGroup from "@/components/dashboard/DonutGroup"
import ProgressGroup from "@/components/dashboard/ProgressGroup"
import DashContainer from "@/components/DashContainer"
import { AreaChart, Banknote, ChartBar } from "lucide-react"



const Dashboard = () => {
    return <DashContainer className="w-full flex flex-col gap-7 pt-10 h-full">
        <div className="w-full flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                <Banknote className="w-6 h-6 text-teal-500"/>
                <h1>Financial achievements</h1>
            </div>
            <div className="w-full flex justify-center gap-4 xsm:flex-wrap">
                <ProgressGroup/>
            </div>
        </div>

        <div className="w-full flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                <ChartBar className="w-5 h-5 text-teal-500"/>
                <h1>Trip Statistics</h1>
            </div>
            <div className="w-full flex justify-around gap-4 py-4 lmd:flex-wrap">
                    <DonutGroup/>
            </div>
        </div>

        <div className="w-full flex flex-col gap-2 mb-8">
        <div className="flex gap-2 items-center">
                <AreaChart className="w-6 h-6 text-teal-500"/>
                <h1>Prominent Teams</h1>
            </div>
            <AreaChartHero/>
        </div>
    </DashContainer>
}

export default Dashboard