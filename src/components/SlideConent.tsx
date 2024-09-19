import type { slideInfo } from "@/app/page"
import { cn } from "@/lib/utils"

const SlideContent = ({slideInfo}: { slideInfo : slideInfo}) => {
    return (
            <div key={slideInfo.id} className={cn("w-full pb-5 h-96 xsm:h-auto xsm:flex-col flex items-center xsm:gap-4 bg-wight-500",{
                    "flex-row-reverse" : slideInfo.id % 2 == 0
                })}>
            <img src={slideInfo.imagePath} className="w-[60%] h-full"/>
            <div className="flex flex-col xsm:justify-center xsm:text-center gap-7 xsm:gap-2">
                <h1 className={cn("relative tracking-widest font-bold text-3xl xsm:text-xl", {
                        "-left-5 xsm:left-0" : slideInfo.id % 2 == 1,
                        "-right-5 text-right xsm:left-0 xsm:text-center" : slideInfo.id % 2 == 0,
                })}>{slideInfo.title}</h1>
                <div className={cn("xsm:text-xs",
                    {
                        "ml-3 xsm:ml-0": slideInfo.id % 2 == 1,
                        "mr-3 xsm:mr-0 text-right xsm:text-center": slideInfo.id % 2 == 0,
                     })}>
                {slideInfo.description}
                </div>
            </div>
        </div>
       
    )
}

{/* <div className="w-full h-full flex justify-between items-center">
{
    slideInfo.map((slideCard, id) => (
        <div key={id} className={cn("w-[45%] h-96 flex items-center bg-wight-500",{
            "flex-row-reverse" : id == 1
        })}>
    <img src={slideCard.imagePath} className="w-[60%] h-full "/>
    <div className="flex flex-col gap-7">
        <h1 className={cn("relative tracking-widest font-bold text-3xl", {
                "-left-5" : id == 0,
                "-right-5 text-right" : id == 1,
        })}>{slideCard.title}</h1>
        <div className={cn(
            {
                "ml-3": id == 0,
                "mr-3 text-right": id == 1,
             })}>
        {slideCard.description}
        </div>
    </div>
</div>
    )
    )
}
</div> */}
export default SlideContent