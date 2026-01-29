"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

import eventData from "@/data/event.json"

interface Event {
    id: number
    title: string
    image: string
    startDate: string
    endDate: string
    excerpt: string
    venue?: string
}

const events: Event[] = eventData.events.slice(-7);

// const events: Event[] = [
//     {
//         id: "1",
//         title: "RYRC এর RCRC Basic & First Aid...",
//         image: "/annual-science-fair.jpg",
//         startDate: "21.03.2023",
//         endDate: "23.03.2023",
//         excerpt:
//             "আজ ২১ মার্চ ২০২৩ রোজ মঙ্গলবার Remians' Youth Red Crescent-RYRC এর ক্লাব সেকশনের সদস্যদের গঠনের মূল উদ্দেশ্য 'RCRC Basic & First Aid...",
//         venue: "DRMC Auditorium",
//     },
//     {
//         id: "2",
//         title: "জাতীয় শিক্ষাক্রম - ২০২২ বিষয়ক...",
//         image: "/cultural-program.jpg",
//         startDate: "04.03.2023",
//         endDate: "04.03.2023",
//         excerpt:
//             "নতুন কারিকুলাম সম্পর্কিত ইন্ডাস্ট্রি প্রশিক্ষণ কর্মশালার মূল উদ্দেশ্য হলো: --- নতুন কারিকুলাম প্রশিক্ষকদের মাধ্যমে প্রশিক্ষণপ্রাপ্ত...",
//     },
//     {
//         id: "3",
//         title: "Workshop on US College Application.",
//         image: "/sports-day-celebration.jpg",
//         startDate: "23.08.2025",
//         endDate: "23.08.2025",
//         excerpt:
//             "Venue: DRMC Auditorium Time: 23nd August 10:30am",
//     },
//     {
//         id: "4",
//         title: "Annual Science Fair 2025",
//         image: "/debate-competition.png",
//         startDate: "15.01.2025",
//         endDate: "17.01.2025",
//         excerpt:
//             "Students presented groundbreaking projects in physics, chemistry, and biology at the annual science fair.",
//     },
// ]

const leftNavigation = [
    { label: "ALL NOTICE", href: "/notices" },
    { label: "PHOTO GALLERY", href: "/gallery/photos" },
    { label: "VIDEO GALLERY", href: "/gallery/videos" },
    { label: "GOVERNING BODY", href: "/about/governing-body" },
    { label: "FACULTY MEMBERS", href: "/about/faculty" },
    { label: "EX PRINCIPALS", href: "/about/ex-principals" },
    { label: "RECORDED LECTURE", href: "/resources/lectures" },
    { label: "COLLEGE RESULT", href: "/results" },
]

const rightNavigation = [
    { label: "ACADEMIC CALENDAR", href: "/academic/calendar" },
    { label: "LIBRARY", href: "/facilities/library" },
    { label: "SYLLABUS", href: "/academic/syllabus" },
    { label: "HOUSES", href: "/student-life/houses" },
    { label: "ACHIEVEMENTS", href: "/achievements" },
    { label: "RULES & REGULATION", href: "/about/rules" },
    { label: "JOBS & VACANCIES", href: "/careers" },
    { label: "CONTACT US", href: "/contact" },
]

export default function EventsNavigationSection() {
    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (!api) {
            return
        }

        const interval = setInterval(() => {
            api.scrollNext()
        }, 4000)

        return () => clearInterval(interval)
    }, [api])

    return (
        <section className="py-10 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <div className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">Stay Updated</div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Events & Quick Links</h2>
                    <p className="text-gray-600 text-base md:text-lg">Explore our upcoming events and access important resources</p>
                </div>

                {/* Mobile Navigation Grid - Shows only on mobile */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 lg:hidden">
                    {[...leftNavigation, ...rightNavigation].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="block px-2 py-2.5 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white text-xs font-semibold text-center transition-all duration-200 rounded-lg shadow-sm hover:shadow-md"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Left Navigation - Hidden on mobile */}
                    <div className="hidden lg:block lg:col-span-2">
                        <nav className="space-y-2">
                            {leftNavigation.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block px-3 py-2.5 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white text-sm font-semibold text-center transition-all duration-200 rounded-lg shadow-sm hover:shadow-md"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Center - Events Carousel */}
                    <div className="lg:col-span-8">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            setApi={setApi}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {events.map((event) => (
                                    <CarouselItem key={event.id} className="pl-2 md:pl-4 basis-[90%] sm:basis-[48%] md:basis-1/3">
                                        <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow border-gray-200">
                                            {/* Image */}
                                            <div className="relative h-36 sm:h-40 md:h-48 w-full bg-gray-200">
                                                <Image
                                                    src={event.image}
                                                    alt={event.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-3 md:p-4 flex-1 flex flex-col">
                                                <h3 className="font-bold text-sm md:text-base text-gray-900 mb-2 md:mb-3 line-clamp-2">
                                                    {event.title}
                                                </h3>

                                                {/* Dates */}
                                                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3 text-xs md:text-sm">
                                                    <div>
                                                        <span className="text-green-600 font-semibold block text-xs">STARTS</span>
                                                        <span className="text-gray-700">{event.startDate}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-green-600 font-semibold block text-xs">ENDS</span>
                                                        <span className="text-gray-700">{event.endDate}</span>
                                                    </div>
                                                </div>

                                                {/* excerpt */}
                                                <p className="text-gray-600 text-xs md:text-sm line-clamp-2 md:line-clamp-3 mb-3 md:mb-4 flex-1">
                                                    {event.excerpt}
                                                </p>

                                                {/* View Button */}
                                                <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm">
                                                    View
                                                </Button>
                                            </div>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-8" />
                            <CarouselNext className="hidden md:flex -right-4 lg:-right-8" />
                        </Carousel>
                    </div>

                    {/* Right Navigation - Hidden on mobile */}
                    <div className="hidden lg:block lg:col-span-2">
                        <nav className="space-y-2">
                            {rightNavigation.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block px-3 py-2.5 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white text-sm font-semibold text-center transition-all duration-200 rounded-lg shadow-sm hover:shadow-md"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}
