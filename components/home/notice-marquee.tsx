"use client"

import Link from "next/link"
import Marquee from "react-fast-marquee"
import noticesData from "@/data/notices.json"

export default function NoticeMarquee() {
  if (noticesData.notices.length === 0) return null

  return (
    <div className="bg-yellow-50 border-b border-yellow-200 py-1.5 sm:py-2 overflow-hidden">
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="bg-red-600 text-white px-2 sm:px-4 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold shrink-0 ml-2 sm:ml-4">
          NOTICE
        </span>
        <Marquee pauseOnHover={true} speed={50} gradient={false} className="flex-1">
          {noticesData.notices.map((notice) => (
            <Link
              key={notice.id}
              href="#notices"
              className="text-xs sm:text-sm text-gray-800 hover:text-green-700 hover:underline mx-4 sm:mx-8"
            >
              <span className="text-red-600 mr-2 sm:mr-4">★</span>
              {notice.title}
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
