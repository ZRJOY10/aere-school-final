"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, ArrowRight, Download } from "lucide-react"
import noticesData from "@/data/notices.json"

interface Notice {
  id: number
  date: string
  title: string
  description: string
  details?: string
  image?: string
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })

const getFileName = (notice: Notice) =>
  `${notice.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}${notice.image?.slice(notice.image.lastIndexOf(".")) ?? ""}`

export default function NoticeSection() {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const notices: Notice[] = noticesData.notices

  const displayedNotices = showAll ? notices : notices.slice(0, 6)

  const handleCardClick = (notice: Notice) => {
    setSelectedNotice(notice)
    setModalOpen(true)
  }

  return (
    <section id="notices" className="py-12 md:py-16 lg:py-24 bg-gray-50 scroll-mt-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">Latest Updates</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Notice Board</h2>
          <p className="text-gray-600 text-base md:text-lg">
            Latest updates and announcements from  Atomic Energy Research Establishment School and College
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {notices.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <div className="flex items-center gap-3 mb-3">
              <Calendar className="text-green-500" size={32} />
              <span className="text-green-600 font-bold text-xl md:text-2xl">No Notices Yet</span>
              </div>
              <p className="text-gray-600 text-base md:text-lg text-center max-w-md">
              Stay tuned! Important updates and announcements will appear here soon.
              </p>
            </div>
          )}
          {displayedNotices.map((notice) => (
            <Card
              key={notice.id}
              onClick={() => handleCardClick(notice)}
              className="p-4 md:p-6 gap-0 hover:shadow-xl transition-all duration-300 cursor-pointer border-gray-200 group hover:border-green-500"
            >
              {notice.image && (
                <div className="relative w-full h-44 md:h-48 mb-4 overflow-hidden rounded-md bg-gray-100">
                  <Image
                    src={notice.image}
                    alt={notice.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex items-start gap-3 mb-3 md:mb-4">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors">
                  <Calendar className="text-green-600 group-hover:text-white transition-colors" size={18} />
                </div>
                <div className="flex-1">
                  <span className="text-xs md:text-sm font-medium text-green-600">{formatDate(notice.date)}</span>
                </div>
              </div>
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {notice.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{notice.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-green-600 text-xs md:text-sm font-semibold group-hover:gap-3 transition-all">
                  View Details
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                {notice.image && (
                  <a
                    href={notice.image}
                    download={getFileName(notice)}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-gray-600 hover:text-green-600 transition-colors"
                    aria-label={`Download ${notice.title}`}
                  >
                    <Download size={14} />
                    Download
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        {notices.length > 6 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              {showAll ? "Show Less" : "View All Notices"}
              <ArrowRight size={18} className={showAll ? "rotate-180" : ""} />
            </button>
          </div>
        )}
      </div>

      {/* Notice Details Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="w-[95vw] max-w-full sm:w-full sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[75vw] max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Notice Details</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(90vh-120px)] pr-2 sm:pr-4">
            {selectedNotice && (
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 pb-3 sm:pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Calendar className="text-green-600" size={20} />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-green-600">{formatDate(selectedNotice.date)}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{selectedNotice.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{selectedNotice.description}</p>
                {selectedNotice.image && (
                  <a
                    href={selectedNotice.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open full size in new tab"
                    className="flex justify-center rounded-md border border-gray-200 overflow-hidden bg-gray-50 cursor-zoom-in"
                  >
                    <Image
                      src={selectedNotice.image}
                      alt={selectedNotice.title}
                      width={1600}
                      height={1200}
                      sizes="(max-width: 1024px) 95vw, 75vw"
                      className="w-auto h-auto max-w-full max-h-[60vh] object-contain"
                    />
                  </a>
                )}
                {selectedNotice.details && (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                    {selectedNotice.details}
                  </div>
                )}
                {selectedNotice.image && (
                  <a
                    href={selectedNotice.image}
                    download={getFileName(selectedNotice)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    <Download size={18} />
                    Download Notice
                  </a>
                )}
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  )
}
