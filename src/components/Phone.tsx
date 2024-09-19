import { AppleIcon, ArrowRight, BookIcon, Plane } from 'lucide-react'
import { Button } from './ui/button'

const features = [
  {
    name: 'Comprehensive Destination Guides.',
    description: "Highlight the depth and breadth of information available, from historical sites and natural wonders to cultural landmarks, ensuring travelers feel well-prepared for their journey.",
    icon: Plane,
  },
  {
    name: 'Booking and Reservations.',
    description: 'Promote the convenience of booking accommodations, tours, and activities directly through the app, streamlining the planning process for users.',
    icon: BookIcon,
  },
]

export default function Phone() {
  return (
      <div className='bg-[#EFF6F4] overflow-hidden'>
        <div className="grid  ml-4 gap-x-8 gap-y-20 justify-center items-center grid-cols-2 md:grid-cols-1 md:mx-4">
          <div className="pr-8 pt-4 md:pr-0 md:pt-0 md:my-5">
            <div className="lg:max-w-lg md:m-auto">
            
              <p className="mt-2 sm:text-2xl font-bold tracking-tight text-gray-900 text-4xl">Let us create your moments</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-lg">
              Discover the magic of Syria with our comprehensive tourism app – your ultimate guide to exploring this ancient land.
              </p>
              <dl className="mt-10 lg:max-w-xl space-y-8 text-base leading-7 text-gray-600 max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-teal-500" />
                      {feature.name}
                    </dt>{' '}
                    <dd>{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <Button
                className='w-fit ml-9 mt-8 px-4 sm:px-6 lg:px-8 bg-teal-500 hover:bg-teal-600'
              >
              Download it <ArrowRight className='h-4 w-4 ml-1.5 inline' />
              </Button>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="/mobile.png"
            width={2432}
            height={1442}
            className=" relative sm:w-[48rem] m-auto max-w-none w-[50rem] md:hidden"/>
        </div>
      </div>
  )
}