"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Users } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"
import teachersData from "@/data/teachers.json"

export default function TeachersSection() {
  const { teachers } = teachersData

  return (
    <section id="teachers" className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">Our Faculty</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Teachers</h2>
          <p className="text-gray-600 text-lg">Dedicated educators committed to nurturing young minds</p>
        </div>

        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {teachers.map((teacher) => (
              <CarouselItem key={teacher.id} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200 h-full flex flex-col group">
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow bg-white">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">{teacher.name}</h3>
                    <p className="text-green-600 font-medium text-sm mb-4 text-center">{teacher.designation}</p>
                    
                    <div className="space-y-2 mt-auto">
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Phone size={14} className="text-green-600 flex-shrink-0" />
                        <span className="truncate">{teacher.mobile}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Mail size={14} className="text-green-600 flex-shrink-0" />
                        <span className="truncate">{teacher.email}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-6" />
        </Carousel>

        <div className="flex justify-center mt-10">
          <Link href="/teachers">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
              <Users size={18} />
              View All Teachers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
