import { Button } from "@/components/ui/button"
import { DialogContent, DialogHeader, DialogDescription, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Frown, Meh } from "lucide-react"
import Link from "next/link"

const ConfirmUpdate = ({site_id}: {site_id : number}) => {
    return (
        <DialogContent className="rounded-md border-2 border-blue-500">
                <DialogHeader>
                    <DialogTitle className="m-auto mb-3 items-center flex flex-col gap-3">
                        <Meh className="w-7 h-7 text-blue-500"/>
                        <p>Update This Site</p>
                    </DialogTitle>
                <DialogDescription>
                    <span className="text-gray-600">
                        Are you sure you want to update the information of this site.
                    </span>
                    <span className="italic block px-2 text-gray-500">
                        Note: after update the exist information, you can not access it again!!  
                    </span>
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                        <Button
                            asChild
                            className='p-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 shadow-none'
                            >
                                <Link href={`/Dashboard/sites/${site_id}/update`}>
                                    Redirect
                                </Link>
                        </Button>
                </DialogFooter>
            </DialogContent>
    )
}

export default ConfirmUpdate