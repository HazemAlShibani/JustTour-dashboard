"use client"
import { useState } from "react"
import { BreadcrumbResponsive } from "@/components/Breadcrumb"
import DashContainer from "@/components/DashContainer"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Dropzone, { FileRejection } from "react-dropzone"
import { Image, MousePointerSquareDashed } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { useUploadThing } from "@/lib/uploadthing"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import Loader from "@/components/Loader"
import { site, updateSite } from "@/app/Dashboard/action";


type assignFile = File & {preview : string; id: number}


let idImage = 0

let descriptionChange = ""

let oldImages : string[] = []

let isContain = false

const Update = ({siteInfo}: {siteInfo: site}) => {
  const {id, SiteName, Location , Details, MainPhoto, SecondaryPhotos} = siteInfo

  // const rr = new File(mainImage,"ccc")

  const router = useRouter()
  const { toast } = useToast()
  const [isDragOver, setIsDragOver] = useState<boolean>(false)
  const [isAccepted, setIsAccepted] = useState(true)
  const [isAdded, setIsAdded] = useState(false)
  const [mainFile, setMainFile] = useState<File | undefined | string>(MainPhoto)
  
  const [isDragOverSites, setIsDragOverSites] = useState<boolean>(false)
  const [isAcceptedSites, setIsAcceptedSites] = useState(false)
  const [mainFiles, setMainFiles] = useState<(assignFile | {id: number; SecondaryPhoto: string })[]>(SecondaryPhotos)



  // console.log(mainFile.preview || mainFile)

  const { mutate, isPending, isSuccess} = useMutation({
    mutationKey: ['update-site'],
    mutationFn: async ({ id, description, newFiles, oldFiles, isContainMain}: {id: number, description?: string;  newFiles?: string[]; oldFiles?: string[]; isContainMain: boolean}) => {
      updateSite({
          id : id,
          description: description,
          newFiles: newFiles,
          oldFiles : oldFiles,
          isContainMain: isContainMain,
        })
    },
    onSuccess: () => {
      router.push("/Dashboard/sites")
      toast({
        title: 'Your Site is added successfully',
        description: 'You could see it and keep tracking ',
        variant: 'default',
        style: {
          "background": "#14B8A6",
          "color" : "white",
          "border" : "none"
        }
      })
    },
    onError: () => {
        toast({
            title: 'Something went wrong!',
            description: 'There was an error on our end. Please try again.',
            variant: 'destructive',
        })
    }
})
  
//   // upload thing:
const {startUpload, isUploading} = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      let arrayOfURLs : string[] = [] 
      res.map((ele) => {
        arrayOfURLs.push(ele.url)
      })
      mutate({
          id: id,
          description: descriptionChange,
          newFiles: arrayOfURLs,
          oldFiles : oldImages,
          isContainMain: isContain,
      })
    },
    onUploadError: () => {
      toast({
        title: 'Uploading Images is failed!',
        description: 'There was an error on our uploading server. Please try again.',
        variant: 'destructive',
    })
    }
})


// // Check if tHe form is accepted:

const formSchema = z.object({
  siteName : z.string(),
  location : z.string(),
  description : z.string()
})

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    siteName: SiteName,
    description: Details,
    location: Location
  },
})

async function onSubmit(values: z.infer<typeof formSchema>) {
  
  if(mainFile == undefined || !mainFile) {
    setIsAdded(true)
    return
  }

  descriptionChange = values.description

  let arrayOfUploadedImages  : string[] = []
  let arrayOfUploadingImages : (File | File & {wow: number})[] = []
  
  if(typeof mainFile == "string") {
    arrayOfUploadedImages.push(mainFile)
  } else {
    // @ts-ignore
    arrayOfUploadingImages.push(Object.assign(mainFile, {wow : 1}))
    
  }


  for(let i = 0; i < mainFiles.length; i++) {
      // @ts-ignore
      if(mainFiles[i].preview == undefined) {
        // @ts-ignore
        arrayOfUploadedImages.push(mainFiles[i].path)
      } else {
        // @ts-ignore
        arrayOfUploadingImages.push(mainFiles[i])
      } 
    }
    
    // let arrayOfDeleteImages : string[] = [mainImage, ...secondaryImages.map(ele => ele.path)]
    


    oldImages = arrayOfUploadedImages

      //@ts-ignore
    if(arrayOfUploadingImages.at(0)?.wow != undefined) {
      isContain = true
    }

    // Without APIS:
    // if(arrayOfUploadingImages.length == 0) {
    //   mutate({
    //     id: id,
    //     description: descriptionChange,
    //     newFiles: [],
    //     oldFiles : oldImages,
    //     isContainMain: isContain,
    // })
    // } else {
    //   await startUpload([...arrayOfUploadingImages])
    // }

} 



// Drop Zone:
    const onDropRejected = (rejectedFiles: FileRejection[]) => {
        setIsDragOver(false)
        const [file] = rejectedFiles
        toast({
            title: `${file.file.type} type is not supported.`,
            description: "Please choose a PNG, JPG, or JPEG image instead.",
            variant: "destructive"
        })
    }

    const onDropAccepted = (acceptedFiles: File[]) => {
      setIsDragOver(false)
      setIsAdded(false)
      setMainFile(Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0])
        })
      )
      setIsAccepted(true)
    }

    const onDropRejectedSites = (rejectedFiles: FileRejection[]) => {
      setIsDragOverSites(false)
      const [file] = rejectedFiles
      toast({
          title: `${file.file.type} type is not supported.`,
          description: "Please choose a PNG, JPG, or JPEG image instead.",
          variant: "destructive"
      })
  }

  const onDropAcceptedSites = (acceptedFiles: File[]) => {
    setIsDragOverSites(false)
    setMainFiles([ ...mainFiles ,...acceptedFiles.flat().map(file => Object.assign(file, {
      preview: URL.createObjectURL(file),
      id: ++idImage + SecondaryPhotos.length
    })),
      ]
    )
    setIsAcceptedSites(true)
  }

    return (
      <>
      {
        isPending || isUploading ? (<Loader message="Update all Things for you!"/> ) :
        (
        !isSuccess ?
         (
          <>
          <div className="w-full mt-7 flex justify-between mb-2  xsm:flex-col  xsm:gap-2">
          <h1 className="text-2xl lmd:text-xl font-semibold">Update The Information</h1>
              <div className="flex gap-4  xsm:m-auto">
                <Button
                  onClick={() => router.push(`/Dashboard/sites/${id}`)}
                  className='w-fit px-5 sm:px-6 lg:px-8 text-white bg-red-500 hover:bg-red-600'>
                    Cancel
                </Button>
                <Button
                  onClick={form.handleSubmit(onSubmit)}
                  className='w-fit px-5 sm:px-6 lg:px-8 text-white bg-teal-500 hover:bg-teal-600'>
                    Submit
                </Button>
                </div>
          </div>
          
          <div className="w-full flex flex-grow bg-white p-4 mb-7 xsm:flex-col xsm:gap-5 xsm:mb-0">
              <div className="w-[30%] lmd:w-[40%] xsm:w-full h-full  flex flex-col gap-3 border-r-2 xsm:border-hidden px-2">
                  <Form {...form}>
                    <form >
                      <div className="w-full max-w-sm flex flex-col mb-2 gap-1.5">
                          <FormField
                            control={form.control}
                            name="siteName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Site Name</FormLabel>
                                <FormControl>
                                  <Input disabled={true} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                            />
                        </div>
                      <div className="w-full max-w-sm flex flex-col mb-2 gap-1.5">
                          <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Site Description</FormLabel>
                                <FormControl>
                                  <Input  placeholder="Type the site description..."  {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                            />
                        </div>
                      <div className="w-full max-w-sm flex flex-col gap-1.5">
                          <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Site Description</FormLabel>
                                <FormControl>
                                  <Input disabled={true}  {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                            />
                        </div>
                  </form>
                  </Form>
                  <div className='w-full flex flex-col gap-1.5 h-full'>
                  <Label htmlFor="siteImage">Main Site Image</Label>
                  {isAccepted && <span className="text-stone-400 text-[12px]">Click again to set another one!</span>}
                      <Dropzone
                        onDropRejected={onDropRejected}
                        onDropAccepted={onDropAccepted}
                        disabled={isAccepted}
                        accept={{
                          'image/png': ['.png'],
                          'image/jpeg': ['.jpeg'],
                          'image/jpg': ['.jpg'],
                        }}
                        onDragEnter={() => setIsDragOver(true)}
                        onDragLeave={() => setIsDragOver(false)}>
                          {
                              ({getInputProps, getRootProps}) => (
                                <div
                                    className={cn('h-full w-full min-h-56 flex-1 flex flex-col items-center justify-center border-2 border-dotted', {
                                      "border-red-500" : isAdded
                                    })}
                                    {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {
                                      !isAccepted ? (
                                        isDragOver ? 
                                        (
                                          <MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2' /> 
                                        ) :
                                        (
                                          <>
                                            <Image className='h-6 w-6 text-zinc-500 mb-2 hover:cursor-pointer' />
                                            <p className="text-center">
                                              <span className='font-semibold'>Click to upload</span> or
                                              drag and drop
                                            </p>
                                            <p className='text-xs text-zinc-500'>PNG, JPG, JPEG</p>
                                          </>
                                        ) 
                                      ) :
                                      null
                                    }
  
                                    {
                                      isAccepted &&
                                        <div 
                                          onClick={() => {
                                            setMainFile(undefined)
                                            setIsAccepted(false)
                                          }}
                                        >
                                            <img
                                              // @ts-ignore
                                              src={mainFile.preview || mainFile}
                                              // @ts-ignore
                                              onLoad={() => { URL.revokeObjectURL(mainFile.preview || mainFile) }}
                                            />
                                        </div>
                                    }
                              </div>
                          )}
                      </Dropzone>
                  </div>
              </div>
              <div className="w-[70%] lmd:w-[60%] xsm:w-full h-full pl-4">
                  <div className='w-full flex flex-col gap-1.5 h-[31%] xsm:h-auto'>
                  <Label htmlFor="siteImage">Site Images</Label>
                  {isAcceptedSites && <span className="text-stone-400 text-[12px]">Click again to set another one!</span>}
                      <Dropzone
                        onDropRejected={onDropRejectedSites}
                        onDropAccepted={onDropAcceptedSites}
                        multiple={true}
                        accept={{
                          'image/png': ['.png'],
                          'image/jpeg': ['.jpeg'],
                          'image/jpg': ['.jpg'],
                        }}
                        onDragEnter={() => setIsDragOverSites(true)}
                        onDragLeave={() => setIsDragOverSites(false)}>
                          {
                              ({getInputProps, getRootProps}) => (
                                <div
                                    className='h-full w-full xsm:min-h-56 flex-1 flex flex-col items-center justify-center border-2 border-dotted'
                                    {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {
                                        isDragOverSites ? 
                                        (
                                          <MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2' /> 
                                        ) :
                                        (
                                          <>
                                            <Image className='h-6 w-6 text-zinc-500 mb-2 hover:cursor-pointer' />
                                            <p className="text-center">
                                              <span className='font-semibold'>Click to upload</span> or
                                              drag and drop
                                            </p>
                                            <p className='text-xs text-zinc-500'>PNG, JPG, JPEG</p>
                                          </>
                                        ) 
                                    }
                              </div>
                          )}
                      </Dropzone>
                      
                  </div>
  
                  <div className="w-full h-[69%] xsm:h-auto mt-4 flex justify-center gap-2 flex-wrap">
                  {
                    mainFiles.map((file : assignFile | {id: number; SecondaryPhoto: string}) => 
                      (
                      <div
                      className="w-[20%] max-h-[100px] xsm:w-full xsm:max-h-[400px]"
                      key={file.id}
                          onClick={() => {
                            setMainFiles(mainFiles.flat().filter(
                              (ele : assignFile | {id: number; SecondaryPhoto: string}) => ele.id != file.id
                            ))
                          }}
                        >
                          <img
                            className="w-full h-full"
                            // @ts-ignore
                            src={file.preview || file.SecondaryPhoto}
                            // @ts-ignore
                            onLoad={() => { URL.revokeObjectURL(file.preview || file.SecondaryPhoto) }}
                            />
                      </div>
                      )
                    )
                  }
                  </div>
              </div>
          </div>
          </>
         )
        : <Loader message="Redirect to all sites..."/>
        )
      }
    </>
    )
}

export default Update