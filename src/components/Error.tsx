import { cn } from "@/lib/utils";
import { Ban } from "lucide-react"

const Error = ({message = 'Something went wrong!', className, colum = true}: {message?: string; className?: string; colum?: boolean}) => {
    return <div className={cn('w-full h-full flex justify-center items-center', className)}>
    <div className={cn('flex items-center gap-2', {
      "flex-col" : colum 
    })}>
    <Ban className='h-8 w-8 text-red-500' /> 
      <h3 className='font-semibold text-xl'>{message}</h3>
    </div>
  </div>
}

export default Error