import { Loader2 } from "lucide-react"

const Loader = ({message = 'Loading Data For You'}: {message?: string}) => {
    return <div className='w-full h-full flex justify-center items-center'>
    <div className='flex flex-col items-center gap-2'>
      <Loader2 className='h-8 w-8 animate-spin text-zinc-500' />
      <h3 className='font-semibold text-xl'>{message}</h3>
    </div>
  </div>
}

export default Loader