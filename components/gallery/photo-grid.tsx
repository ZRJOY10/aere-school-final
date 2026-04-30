"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import PhotoLightbox from "./photo-lightbox"

interface Photo {
  id: number
  title: string
  image: string
  description: string
}

interface PhotoGridProps {
  photos: Photo[]
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8
  const totalPages = Math.max(1, Math.ceil(photos.length / itemsPerPage))

  useEffect(() => {
    setCurrentPage(1)
    setSelectedIndex(null)
  }, [photos.length])

  useEffect(() => {
    setSelectedIndex(null)
  }, [currentPage])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  const startIndex = (currentPage - 1) * itemsPerPage
  const visiblePhotos = photos.slice(startIndex, startIndex + itemsPerPage)

  if (photos.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-green-200 bg-white/80 px-6 py-14 text-center shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">No photos available yet</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-600">
          Add images to the photo gallery folder and they will appear here automatically.
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="mb-5 flex flex-col gap-3 rounded-3xl border border-green-100 bg-white/80 px-4 py-4 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <p className="text-sm text-gray-600">
          Showing <span className="font-semibold text-gray-900">{startIndex + 1}</span>
          -<span className="font-semibold text-gray-900">{Math.min(startIndex + itemsPerPage, photos.length)}</span> of <span className="font-semibold text-gray-900">{photos.length}</span> photos
        </p>

        <div className="flex  items-center justify-between gap-2 sm:justify-end">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 transition hover:border-green-300 hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`h-9 min-w-9 cursor-pointer rounded-full px-3 text-sm font-semibold transition ${
                  page === currentPage
                    ? "bg-green-600 text-white shadow-md"
                    : "border border-green-200 bg-white text-green-700 hover:bg-green-50"
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 transition hover:border-green-300 hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5 lg:gap-6">
        {visiblePhotos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group cursor-pointer overflow-hidden rounded-3xl border border-green-100 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label={`Open ${photo.title}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />

              <div className="absolute  inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute  inset-x-0 bottom-0 p-4 sm:p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">
                  Photo {String(startIndex + index + 1).padStart(2, "0")}
                </p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-white transition group-hover:text-green-100">
                    {photo.title}
                  </h3>
                  <span className="shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    View
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <PhotoLightbox
          photos={visiblePhotos}
          initialIndex={selectedIndex}
          isOpen={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  )
}
