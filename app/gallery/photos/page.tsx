import Link from "next/link"
import { ArrowLeft, Camera } from "lucide-react"
import PhotoGrid from "@/components/gallery/photo-grid"
import photosData from "@/data/photos.json"

export default function PhotosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-4 md:mb-6"
          >
            <ArrowLeft size={18} className="md:hidden" />
            <ArrowLeft size={20} className="hidden md:block" />
            <span className="text-sm md:text-base">Back to Home</span>
          </Link>
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Camera size={24} className="md:hidden" />
              <Camera size={32} className="hidden md:block" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Photo Gallery</h1>
              <p className="text-white/90 mt-1 md:mt-2 text-sm md:text-base">
                Capturing moments and memories from our school journey
              </p>
            </div>
          </div>
          
          <div className="mt-4 md:mt-6 text-xs md:text-sm text-white/80 text-center sm:text-left">
            {photosData.photos.length} Photos Available
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <PhotoGrid photos={photosData.photos} />
      </div>
    </main>
  )
}
