import { Button } from "@/components/ui/button"
import { DialogContent, DialogHeader, DialogDescription, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { useMutation } from "@tanstack/react-query"
import { Frown, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { deleteSite } from "../../action"

const DeleteSite = ({site_id}: {site_id : number}) => {
    const { toast } = useToast()
    const router = useRouter()

    const { mutate, isPending} = useMutation({
        mutationKey: ['delete-site'],
        mutationFn: async (site_id : number) => deleteSite(site_id),
        onSuccess: () => {
            router.push("/Dashboard/sites")
        },
        onError: () => {
            toast({
                title: 'Something went wrong',
                description: 'There was an error on our end. Please try again.',
                variant: 'destructive',
            })
        }
    })



    return (
        <DialogContent className="rounded-md border-2 border-red-500">
                <DialogHeader>
                    <DialogTitle className="m-auto mb-3 items-center flex flex-col gap-3">
                        <Frown className="w-7 h-7 text-red-500"/>
                        <p>Deleting This Site</p>
                    </DialogTitle>
                <DialogDescription>
                    <span className="text-gray-600">
                        Are you sure you want to delete this site from your system.
                    </span>
                    <span className="italic block px-2 text-gray-500">
                        Note: after Deleting the site, you can not access its information again!!  
                    </span>
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        // Without APIS:
                        // onClick={() => mutate(site_id)}
                        className='p-1 rounded-md bg-red-500 text-white hover:bg-red-600 shadow-none'
                    >
                        {
                        isPending ?
                            <Loader2 className="animate-spin w-7 h-7 text-white"/>
                            : "Delete"
                        }
                    </Button>
                </DialogFooter>
            </DialogContent>
    )
}

export default DeleteSite