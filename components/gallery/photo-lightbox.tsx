"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface Photo {
  id: number
  title: string
  date: string
  image: string
  description: string
}

interface PhotoLightboxProps {
  photos: Photo[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export default function PhotoLightbox({
  photos,
  initialIndex,
  isOpen,
  onClose,
}: PhotoLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      } else if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const currentPhoto = photos[currentIndex]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[75vw] max-h-[98vh] sm:max-h-[95vh] h-[98vh] sm:h-[95vh] p-0 bg-black/95 border-none rounded-lg sm:rounded-xl" 
        showCloseButton={false}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-2 sm:p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} className="sm:hidden" />
            <X size={24} className="hidden sm:block" />
          </button>

          {/* Navigation Buttons */}
          {photos.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 sm:left-4 z-50 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={24} className="sm:hidden" />
                <ChevronLeft size={32} className="hidden sm:block" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-4 z-50 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={24} className="sm:hidden" />
                <ChevronRight size={32} className="hidden sm:block" />
              </button>
            </>
          )}

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
            <div className="relative max-w-7xl max-h-full w-full h-full">
              <Image
                src={currentPhoto.image}
                alt={currentPhoto.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Title and Date Overlay */}
          <div className="absolute top-4 left-4 z-40 bg-gradient-to-r from-black/70 to-transparent pr-20 pl-6 py-4 rounded-lg">
            <h2 className="text-white text-2xl font-semibold mb-1">
              {currentPhoto.title}
            </h2>
            <p className="text-white/80 text-sm">
              {new Date(currentPhoto.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>

          {/* Counter */}
          {photos.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
              {currentIndex + 1} / {photos.length}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
