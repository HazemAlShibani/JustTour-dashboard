import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"


interface DashContainer extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
  }


const DashContainer = ({className, children, ...props}: DashContainer) => {
    return <div className={cn("h-full px-6 pt-4 bg-[#77a19c0a]", className)}
            {...props}
            >
                {children}
            </div>
}

export default DashContainer