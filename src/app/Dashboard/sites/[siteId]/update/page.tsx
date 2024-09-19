"use client"

import { getSite } from "@/app/Dashboard/action";
import { BreadcrumbResponsive } from "@/components/Breadcrumb";
import DashContainer from "@/components/DashContainer";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import Update from "./Update";
import Error from "@/components/Error";


const items = [
  { href: "/Dashboard/sites", label: "Sites" },
  { href: "/Dashboard/sites/", label: "Sites" },
]

const UpdateSite = ({params} : {params: any}) => {
  const siteId : number = params.siteId;

  const {toast} = useToast()

  useEffect(() => {
      mutate(siteId)
  },[])

  const { mutate, data, isPending, isError} = useMutation({
      mutationKey: ['get-site'],
      mutationFn: async (siteId : number) => getSite(siteId),
      onError: () => {
          toast({
              title: 'Something went wrong',
              description: 'There was an error on our end. Please try again.',
              variant: 'destructive',
          })
      }
  })

  const items = [
      { href: "/Dashboard/sites", label: "Sites" },
      { href: `/Dashboard/sites/${siteId}`, label: `${data?.data.SiteName}` },
      { href: `/Dashboard/sites/${siteId}/update`, label: `Update` },
  ]

  return (  <DashContainer className='flex flex-col'>
        <BreadcrumbResponsive items={items}/>
            {   
                isPending ? ( <div className="w-full flex-grow bg-white p-4 mb-7"><Loader message="Ready to make some updates!"/></div>): 
                data ? <Update siteInfo={data.data}/> : null
            }
            {
                isError && <Error className="top-[50%] absolute left-[50%] -translate-x-[50%] z-20 -translate-y-[50%]"/>
            }
        </DashContainer>
  )
}

export default UpdateSite