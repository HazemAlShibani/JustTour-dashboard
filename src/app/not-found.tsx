import { Ban } from "lucide-react";

const Page = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className='flex flex-col items-center gap-2'>
        <Ban className='h-8 w-8 text-red-500' />
        <h3 className='font-semibold text-xl'>Page Not Found</h3>
        <p>Try to write a correct URL or Do not try invalid paths</p>
      </div>
    </div>
    )
}

export default Page;