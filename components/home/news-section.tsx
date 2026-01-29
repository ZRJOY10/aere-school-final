"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"

export default function NewsSection() {
  const news = [
    {
      image: "/annual-science-fair.jpg",
      date: "2025-01-15",
      title: "Annual Science Fair Showcases Student Innovation",
      excerpt: "Students presented groundbreaking projects in physics, chemistry, and biology.",
    },
    {
      image: "/sports-day-celebration.jpg",
      date: "2025-01-10",
      title: "Sports Day 2025 - Victory and Excellence",
      excerpt: "An exciting day of inter-house competitions celebrating athletic achievement.",
    },
    {
      image: "/debate-competition.png",
      date: "2025-01-05",
      title: "National Debate Competition Winners Announced",
      excerpt: "Our students won first place in the National School Debate Championship.",
    },
    {
      image: "/cultural-program.jpg",
      date: "2024-12-28",
      title: "Annual Cultural Program - A Celebration of Talents",
      excerpt: "Students showcased their talents in dance, music, drama, and art performances.",
    },
    {
      image: "/math-olympiad.png",
      date: "2024-12-20",
      title: "Bangladesh Math Olympiad - Gold Medal Achievement",
      excerpt: "Our mathematics team secured top positions in the national competition.",
    },
    {
      image: "/alumni-reunion.png",
      date: "2024-12-15",
      title: "Annual Alumni Reunion - Connecting Generations",
      excerpt: "Former students returned to celebrate and share their success stories.",
    },
  ]

  return (
    <section id="news" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">Latest Updates</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">News & Events</h2>
          <p className="text-gray-600 text-lg">Stay updated with the latest happenings at A.E.R.E</p>
        </div>

        <Carousel className="w-full" opts={{ align: "start" }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {news.slice(0, 6).map((item, idx) => (
              <CarouselItem key={idx} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border-gray-200 h-full flex flex-col py-0">
                  <div className="relative w-full h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-6 pb-6 pt-4 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                      <Calendar size={16} />
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{item.excerpt}</p>
                    <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 h-auto font-semibold">
                      Read More <ArrowRight size={16} />
                    </Button>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="flex justify-center mt-8">
          <Link href="/events">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg font-semibold">
              See More Events & News
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
