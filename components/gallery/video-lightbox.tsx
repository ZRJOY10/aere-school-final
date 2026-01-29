"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface Video {
  id: number
  title: string
  date: string
  thumbnail: string
  videoUrl: string
  duration: string
  description: string
}

interface VideoLightboxProps {
  videos: Video[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export default function VideoLightbox({
  videos,
  initialIndex,
  isOpen,
  onClose,
}: VideoLightboxProps) {
  const [currentIndex] = useState(initialIndex)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  const currentVideo = videos[currentIndex]

  // Extract YouTube video ID if it's a YouTube URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1`
    }
    return url
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[75vw] max-h-[98vh] sm:max-h-[95vh] h-auto sm:h-[95vh] p-0 bg-black/95 border-none rounded-lg sm:rounded-xl" 
        showCloseButton={false}
      >
        <div className="relative w-full h-full flex items-center justify-center min-h-[50vh] sm:min-h-0">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} className="sm:hidden" />
            <X size={24} className="hidden sm:block" />
          </button>

          {/* Video Container */}
          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
            <div className="relative max-w-7xl w-full aspect-video">
              <iframe
                src={getYouTubeEmbedUrl(currentVideo.videoUrl)}
                title={currentVideo.title}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Title and Date Overlay */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-40 bg-gradient-to-r from-black/70 to-transparent pr-8 sm:pr-20 pl-3 sm:pl-6 py-2 sm:py-4 rounded-lg max-w-[70%] sm:max-w-none">
            <h2 className="text-white text-base sm:text-xl md:text-2xl font-semibold mb-0.5 sm:mb-1 line-clamp-1 sm:line-clamp-none">
              {currentVideo.title}
            </h2>
            <div className="flex items-center gap-2 sm:gap-3">
              <p className="text-white/80 text-xs sm:text-sm">
                {new Date(currentVideo.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <span className="text-white/60 hidden sm:inline">•</span>
              <p className="text-white/80 text-xs sm:text-sm hidden sm:block">{currentVideo.duration}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
