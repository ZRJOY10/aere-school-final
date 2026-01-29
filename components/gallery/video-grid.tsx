"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import VideoLightbox from "./video-lightbox"

interface Video {
  id: number
  title: string
  date: string
  thumbnail: string
  videoUrl: string
  duration: string
  description: string
}

interface VideoGridProps {
  videos: Video[]
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <>
      <TooltipProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <Card
              key={video.id}
              onClick={() => setSelectedIndex(index)}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 bg-blue-50/30 py-0"
            >
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Play size={28} className="text-blue-600 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <h3 className="font-medium text-sm line-clamp-1 group-hover:text-blue-600 transition-colors flex-1">
                          {video.title}
                        </h3>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{video.title}</p>
                      </TooltipContent>
                    </Tooltip>
                    <p className="text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(video.date).toLocaleDateString('en-US', {
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
        <VideoLightbox
          videos={videos}
          initialIndex={selectedIndex}
          isOpen={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  )
}
