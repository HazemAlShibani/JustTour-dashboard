"use client"

import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"
import { Star } from "lucide-react"
import { useRef } from "react"

type posts = {
  id: number
  rate: number
  description: string
  date: string
  datetime: string
  category: string
  author: {
    name: string
    imageUrl:
    string
  },
}[]

const posts: posts = [
    {
      id: 1,
      rate: 3,
      description: 'it was a beautiful experience, the app is amazing which gives me a lot of trips to join them with beautiful interfaces.',
      date: 'Jun 16, 2024',
      datetime: '2024-06-16',
      category: 'Dorob',
      author: {
        name: 'Asma Rafeh',
        imageUrl:
          '/p1.jpg',
      },
    },
    {
      id: 2,
      rate: 4,
      description: 'it was a beautiful experience, the app is amazing which gives me a lot of trips to join them with beautiful interfaces.',
      date: 'Mar 18, 2024',
      datetime: '2024-03-18',
      category: 'Ana Al-Sori',
      author: {
        name: 'Ahmad Salem',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      rate: 5,
      description: 'it was a beautiful experience, the app is amazing which gives me a lot of trips to join them with beautiful interfaces.',
      date: 'Jun 27, 2024',
      datetime: '2024-6-27',
      category: 'Altabea',
      author: {
        name: 'Ghaith Adel',
        imageUrl:
          '/p2.jpg',
      },
    },
  ]
  
  export default function View() {
      const ref = useRef<HTMLDivElement | null>(null)
      const inView = useInView(ref, {once: true , amount: 0.5})

    return (
      <>
      <div id="AboutUs" className=" pt-12 md:pt-0 text-5xl px-4 font-bold md:text-4xl sm:text-2xl md:mb-9 sm:mb-0">Why {' '}<span className="text-teal-500">US?</span></div>
        <div ref={ref} className="min-h-[15rem] my-36 md:my-0 md:mb-8">
        {
          inView ? <div className="mx-auto animate-moveBTT opacity-0 translate-y-12  max-w-7xl lg:px-6 px-20 ">
          <div className="lg:mx-auto grid lg:max-w-2xl lg:grid-cols-1 gap-x-8 gap-y-16 sm:pt-10 mx-0 max-w-none grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <div
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category}
                  </div>
                </div>
                <div className="group relative">
                  <div className="mt-3 flex gap-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {
                      [1, 2, 3, 4, 5].map((_, id) => {
                        return <Star className={cn({
                          "text-teal-500 fill-teal-500" : id  < post.rate  
                        })} key={id} />
                      })
                      }
                  </div>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        {post.author.name}
                    </p>
                  </div>
                </div>
              </article>
            ))}
            </div>
        </div> : null
        }
        
      </div>
      </>
     )
  }
  