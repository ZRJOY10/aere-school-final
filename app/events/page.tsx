import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

import eventData from "@/data/event.json"

export default function EventsPage() {
  const allNews = eventData.events;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-10 md:py-16 lg:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 h-auto text-sm md:text-base">
                <ArrowLeft size={18} className="md:hidden" />
                <ArrowLeft size={20} className="hidden md:block" />
                <span className="ml-1">Back to Home</span>
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8 md:mb-12">
            <div className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">All Updates</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">News & Events</h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Explore all the latest news and events from A.E.R.E School and College
            </p>
          </div>

          {/* Grid layout for all events */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {allNews.map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow border-gray-200">
                <div
                  className="h-36 sm:h-40 md:h-48 bg-gray-200"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-4 md:p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-gray-600 text-xs md:text-sm mb-2 md:mb-3">
                    <Calendar size={14} className="md:hidden" />
                    <Calendar size={16} className="hidden md:block" />
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 flex-grow line-clamp-2">{item.excerpt}</p>
                  <Button
                    variant="ghost"
                    className="text-green-600 hover:text-green-700 p-0 h-auto font-semibold w-fit text-sm"
                  >
                    Read More <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
