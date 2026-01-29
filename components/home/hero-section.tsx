"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import heroData from "@/data/hero.json"

export default function HeroSection() {
  const [chairmanModalOpen, setChairmanModalOpen] = useState(false)
  const [principalModalOpen, setPrincipalModalOpen] = useState(false)
  const [api, setApi] = useState<CarouselApi>()

  const { chairman, principal, carouselImages } = heroData

  useEffect(() => {
    if (!api) {
      return
    }

    const interval = setInterval(() => {
      api.scrollNext()
    }, 10500)

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-6 md:py-8">
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-3 items-stretch">
          {/* Left: Chairman */}
          <div className="order-2 md:order-1 lg:col-span-2">
            <div className="h-full flex flex-col items-center text-center p-4 md:p-4 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg border border-gray-200">
              <div className="relative w-1/3 sm:w-3/4 aspect-[3/4] sm:aspect-[3/4] aspect-[3/5] flex mb-2">
                <Image
                  src={chairman.image}
                  alt={chairman.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 66vw, (max-width: 768px) 75vw, 200px"
                  style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute' }}
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-0.5">{chairman.name}</h3>
              <p className="text-xs text-gray-600 mb-2 whitespace-pre-line">{chairman.designation}</p>
              <p className="text-xs text-gray-700 mb-3 line-clamp-3 flex-grow">{chairman.excerpt}</p>
              <Button
                onClick={() => setChairmanModalOpen(true)}
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white w-full text-xs"
              >
                Read More
              </Button>
            </div>
          </div>

          {/* Center: Image Carousel */}
          <div className="order-1 md:col-span-2 lg:col-span-8 lg:order-2">
            <div className="h-full overflow-hidden shadow-lg rounded-lg border border-gray-200">
              <Carousel 
                className="w-full h-full" 
                opts={{ loop: true }}
                setApi={setApi}
              >
                <CarouselContent>
                  {carouselImages.map((image) => (
                    <CarouselItem key={image.id}>
                      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[8/3]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          priority={image.id === 1}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">{image.caption}</h2>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>

          {/* Right: Principal */}
          <div className="order-3 lg:col-span-2">
            <div className="h-full flex flex-col items-center text-center p-4 md:p-4 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg border border-gray-200">
              <div className="relative w-1/3 sm:w-3/4 aspect-[3/4] sm:aspect-[3/4] aspect-[3/5] flex mb-2">
                <Image
                  src={principal.image}
                  alt={principal.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 66vw, (max-width: 768px) 75vw, 200px"
                  style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute' }}
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-0.5">{principal.name}</h3>
              <p className="text-xs text-gray-600 mb-2">{principal.designation}</p>
              <p className="text-xs text-gray-700 mb-3 line-clamp-3 flex-grow">{principal.excerpt}</p>
              <Button
                onClick={() => setPrincipalModalOpen(true)}
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white w-full text-xs"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Chairman Modal */}
      <Dialog open={chairmanModalOpen} onOpenChange={setChairmanModalOpen}>
        <DialogContent className="w-[95vw] max-w-full sm:w-full sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[75vw] max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Message from the President</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(90vh-120px)] pr-2 sm:pr-4">
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-lg overflow-hidden mb-3 sm:mb-4 border-4 border-green-100">
                <Image
                  src={chairman.image}
                  alt={chairman.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{chairman.name}</h3>
              <p className="text-xs sm:text-sm text-gray-600 whitespace-pre-line">{chairman.designation}</p>
            </div>
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
              {chairman.message} <br />
              {chairman.name} <br />
              President <br />
              Governing Body <br />
              Atomic Energy Research Establishment School and College
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Principal Modal */}
      <Dialog open={principalModalOpen} onOpenChange={setPrincipalModalOpen}>
        <DialogContent className="w-[95vw] max-w-full sm:w-full sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[75vw] max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Message from the Principal</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(90vh-120px)] pr-2 sm:pr-4">
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-lg overflow-hidden mb-3 sm:mb-4 border-4 border-green-100">
                <Image
                  src={principal.image}
                  alt={principal.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{principal.name}</h3>
              <p className="text-xs sm:text-sm text-gray-600 whitespace-pre-line">{principal.designation}</p>
            </div>
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
              {principal.message}<br />
              {principal.name} <br />
              Principal <br />
              Atomic Energy Research Establishment School and College
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  )
}
