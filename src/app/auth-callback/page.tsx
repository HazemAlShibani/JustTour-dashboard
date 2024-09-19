"use client"

import { useQuery } from "@tanstack/react-query"
import { checkIsAdmin } from "./action"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

const Page = () => {
  const router = useRouter();  
    const { data } = useQuery({
      queryKey: ['auth-callback'],
      queryFn: async () => await checkIsAdmin(),
      retry: 4,
      retryDelay: 500,
    })

    if(data) {
      if(data?.isAdmin) {
        router.push('/Dashboard')
      } else {
        router.push('/')
      }
    } else {
      router.push('api/auth/register')
    }

    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className='flex flex-col items-center gap-2'>
        <Loader2 className='h-8 w-8 animate-spin text-zinc-500' />
        <h3 className='font-semibold text-xl'>Logging you in...</h3>
        <p>You will be redirected automatically if your are the Admin.</p>
      </div>
    </div>
    )
}

export default Page