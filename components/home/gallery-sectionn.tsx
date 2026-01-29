import Link from "next/link"
import { Camera, Video } from "lucide-react"

export default function GallerySection() {
  return (
    <section id="gallery" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Photo Gallery */}
        <Link
          href="/images/School/birdsEyeView.jpg"
          className="group relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 transition-all duration-500 group-hover:from-green-700 group-hover:to-green-800">
            <div className="absolute inset-0 bg-[url('/images/School/TreePlantation.jpg')] bg-cover bg-center opacity-20 transition-opacity duration-500 group-hover:opacity-30" />
          </div>
          
          <div className="relative h-full flex flex-col items-center justify-center text-white p-6 md:p-8 transition-transform duration-500 group-hover:scale-105">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 md:mb-6 transition-all duration-500 group-hover:bg-white/30 group-hover:scale-110">
              <Camera size={32} className="md:hidden transition-transform duration-500 group-hover:rotate-12" />
              <Camera size={40} className="hidden md:block transition-transform duration-500 group-hover:rotate-12" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 transition-all duration-500 group-hover:tracking-wide text-center">
              Photo Gallery
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 text-center max-w-md transition-opacity duration-500 group-hover:text-white px-4">
              Explore our collection of memorable moments and activities
            </p>
            <div className="mt-4 md:mt-6 px-5 md:px-6 py-2 border-2 border-white rounded-full text-xs sm:text-sm font-semibold transition-all duration-500 group-hover:bg-white group-hover:text-green-600">
              View Photos
            </div>
          </div>
        </Link>

        {/* Video Gallery */}
        <Link
          href="/gallery/videos"
          className="group relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 transition-all duration-500 group-hover:from-blue-700 group-hover:to-blue-800">
            <div className="absolute inset-0 bg-[url('/images/School/birdsEyeCampus.jpg')] bg-cover bg-center opacity-20 transition-opacity duration-500 group-hover:opacity-30" />
          </div>
          
          <div className="relative h-full flex flex-col items-center justify-center text-white p-6 md:p-8 transition-transform duration-500 group-hover:scale-105">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 md:mb-6 transition-all duration-500 group-hover:bg-white/30 group-hover:scale-110">
              <Video size={32} className="md:hidden transition-transform duration-500 group-hover:rotate-12" />
              <Video size={40} className="hidden md:block transition-transform duration-500 group-hover:rotate-12" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 transition-all duration-500 group-hover:tracking-wide text-center">
              Video Gallery
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 text-center max-w-md transition-opacity duration-500 group-hover:text-white px-4">
              Watch highlights from our events, programs, and celebrations
            </p>
            <div className="mt-4 md:mt-6 px-5 md:px-6 py-2 border-2 border-white rounded-full text-xs sm:text-sm font-semibold transition-all duration-500 group-hover:bg-white group-hover:text-blue-600">
              Watch Videos
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
