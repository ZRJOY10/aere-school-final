"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import PhotoLightbox from "./photo-lightbox"

interface Photo {
  id: number
  title: string
  date: string
  image: string
  description: string
}

interface PhotoGridProps {
  photos: Photo[]
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <>
      <TooltipProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <Card
              key={photo.id}
              onClick={() => setSelectedIndex(index)}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 bg-green-50/30 py-0"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>
                <div className="p-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <h3 className="font-medium text-sm line-clamp-1 group-hover:text-green-600 transition-colors flex-1">
                          {photo.title}
                        </h3>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{photo.title}</p>
                      </TooltipContent>
                    </Tooltip>
                    <p className="text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(photo.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TooltipProvider>

      {selectedIndex !== null && (
        <PhotoLightbox
          photos={photos}
          initialIndex={selectedIndex}
          isOpen={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  )
}
