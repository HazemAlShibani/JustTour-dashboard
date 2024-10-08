import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Metadata } from "next"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = 'JustTour',
  description = 'Take Your Holiday to another step',
  image = '/bg4.jpeg',
}: {
  title?: string
  description?: string
  image?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    metadataBase: new URL("https://just-tour.vercel.app/")
  }
}