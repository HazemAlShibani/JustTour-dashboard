import HomeImages from "@/components/HomeImages";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SlideContent from "@/components/SlideConent";
import View from "@/components/View";
import Phone from "@/components/Phone";
import Navbar from "@/components/Navbar";
import DashButton from "@/components/DashButton";


export type imagesHome = {
  id: number
  imagePath: string
  alt: string 
}[]

const IMAGE : imagesHome = [
  {
    id: 1,
    imagePath: "/bg1.jpeg",
    alt: "River"
  },
  {
    id: 2,
    imagePath: "/bg2.jpeg",
    alt: "tourist"
  },
  {
    id: 3,
    imagePath: "/bg3.jpeg",
    alt: "view"
  },
  {
    id: 4,
    imagePath: "/bg4.jpeg",
    alt: "culture"
  },
]


export type slideInfo = {
  id: number
    title: string
    description: string
    imagePath: string
}

type imagesFeatures = slideInfo[]

const FEATURES : imagesFeatures = [
    {
      id: 1,
      title: "Experience Syria Love Your Trip again",
      description: "Platform for travelers to share their experiences and rate attractions, accommodations and restaurants. with ability for users to upload photos, enriching the app's content for future visitors.",
      imagePath: "/s1.jpg"
    },
    {
      id: 2,
      title: "Try Syrian Food Make relationships",
      description: "Detailed guides covering Syria's major tourist destinations, including historical sites and cultural landmarks. High-quality images guides providing insights into the history and significance of various attractions.",
      imagePath: "/s2.jpg"
    },
    {
      id: 3,
      title: "Listen To Stories Look in History",
      description: "A tourism app designed specifically for Syria would offer a range of features aimed at enhancing the travel experience within this historically rich country.",
      imagePath: "/s3.jpg"
    },
    {
      id: 4,
      title: "Stop The Noise Think out Loud",
      description: "Integration with teams for easy booking and reservation. Options to book guided tours, activities, and experiences directly through your mobile by the app.",
      imagePath: "/s4.jpg"
    }
]

type CARDS = {
  id: number
  title: string
  description: string
}[]

const CARDS = [
  {
    id: 1,
    title: "Find your Destination",
    description: "Drawing inspiration from our trips and teams"
  },
  {
    id: 2,
    title: "Meet new People",
    description: "Managing trips to the most beautiful places"
  },
  {
    id: 3,
    title: "See old Civilization",
    description: "Protecting your self by our plans and equipment"
  },
  {
    id: 4,
    title: "Live the Life",
    description: "Enjoying like you are the only person on the Earth"
  },
]

type SOCIAL = {
  id: number
  logPath: string
  desPath: string
}[]

const SOCIAL: SOCIAL = [
  {
    id: 1,
    logPath: "/email.png",
    desPath: "mailto:hazem.alshibani03@gmail.com"
  },
  {
    id: 2,
    logPath: "/linkedin.png",
    desPath: "https://www.linkedin.com/in/hazem-al-shibani/"
  },
  {
    id: 3,
    logPath: "/facebook.png",
    desPath: "https://www.facebook.com/hazem.alshibani"
  }
]

export default async function Home() {
  const currentYear = new Date().getFullYear(); 
  return (
    <>
            <Navbar/>
    <div id="Home" className=" w-full h-[100vh] flex justify-between items-center md:relative">
      <div className="animate-moveLTR relative opacity-0 translate-x-[-100%] w-[50%] ml-4 h-full flex flex-col gap-2 justify-center 
                      md:m-0 md:w-full md:absolute md:items-center md:text-center md:gap-4 md:px-4 md:text-white">

        <div className="text-5xl font-bold sm:text-2xl">Let us figure out {' '}
        <span className=" md:before:hidden before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-teal-500 relative inline-block">
          <span className="relative text-white">incredible</span>
        </span>  
          places together
        </div>
        <div className="text-stone-500 pr-12 md:p-0 md:text-inherit">join us to get a wonderful journey and make a new experience in your life, with our services you can make your trip in the another level.</div>
        <div className="flex gap-3 md:flex-col">
        <Button
        className='w-fit  px-4 sm:px-6 lg:px-8 bg-teal-500 hover:bg-teal-600'
        >
          <a href="#DownloadIt">
          Get Started <ArrowRight className='h-4 w-4 ml-1.5 inline' />
          </a>
        </Button>
        <DashButton/>
          </div>
      </div>

      <div className="w-[50%] h-full md:w-full md:absolute md:top-0 md:-z-10">
        <HomeImages images={IMAGE}/>
      </div>
      </div>

      <div className="w-full relative min-h-[675px] md:block md:h-full md:min-h-full">
          <div className="flex items-center w-[calc((75%+4px)/2)] absolute left-[calc(35%/2+2px)] -top-[2px] h-[675px] border-t-[2px] border-l-[2px] border-b-[2px] border-teal-500
                          md:hidden">
            <img src="/underHome.jpg" className="relative w-[80%] animate-moveTB"/>
            <div className="w-full -bottom-[2px] left-[100%] border-b-[2px] border-teal-500 absolute"></div>
          </div>
          <div className="w-[60%] absolute top-[50%] -translate-y-[50%] left-[35%]
                          md:w-full md:left-0 md:top-0 md:translate-y-7 md:relative">

          <div className="p-2 mt-0 w-full grid grid-cols-2 gap-5 sm:grid-cols-1">
        {
          CARDS.map((element) => {
            return (
              <div key={element.id} className="bg-gray-50 shadow-md hover:shadow-none duration-75 md:py-10 text-center ring-1 ring-inset ring-gray-900/5 flex justify-center py-16
              relative ">
                <div className="absolute border-[20px] border-t-teal-500 border-l-teal-500 border-r-transparent border-b-transparent top-0 left-0 z-10"></div>
                <div className="absolute border-[20px] border-t-gray-50 border-l-gray-50 border-r-transparent border-b-transparent top-[10px] left-[10px] z-10"></div>
                <div className="mx-auto max-w-xs px-8">
                  
                  <p className="text-base font-bold text-gray-900">{element.title}</p>
                  <p className="mt-6 text-xs leading-5 text-gray-600">{element.description}</p>
              </div>
            </div>
            )
          })
        }
      </div>
          </div>
      </div>

      <div  className="w-full my-16 px-4 md:py-0">
      <div  id="Features" className="text-5xl pt-12 md:pt-0 font-bold md:text-4xl sm:text-2xl mb-9">Our {' '}<span className="text-teal-500">Features</span></div>
      <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-full max-w-full my-20 md:my-0"
    >
      <CarouselContent>
        {FEATURES.map((slideInfo, index) => (
          <CarouselItem key={index} className="basis-1/2 w-full lmd:basis-[100%] ">
            <SlideContent slideInfo={slideInfo}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>

      <View/>

      <div id="DownloadIt" className="w-full text-center py-2 border-y-4 border-x-0 border-dashed border-black">
        <div className="text-5xl font-bold uppercase md:text-3xl sm:text-xl">What are you waiting for?</div>
      </div>

      <Phone/>

      <div id="ContactUs" className="w-full text-center ">
        <div className="w-[50%] m-auto py-8">
          <ul className="flex justify-between items-center">
            {
              SOCIAL.map((ele) => (
            <li key={ele.id} className="w-12 h-12 bg-slate-50 p-3 rounded-full flex justify-center items-center">
                <a className="w-full h-full" target="_blank" href={ele.desPath}>
                    <img className="w-full" src={ele.logPath} />
                </a>
            </li>
              ))
            }
          </ul>
        </div>

        <div className="pb-8">JustTour Application &copy; {currentYear}</div>
      </div>

    </>
  );
}
