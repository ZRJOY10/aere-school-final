import fs from "fs"
import path from "path"
import Link from "next/link"
import { ArrowLeft, Camera, Images, ScanSearch, Sparkles } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import PhotoGrid from "@/components/gallery/photo-grid"

type GalleryPhoto = {
  id: number
  title: string
  image: string
  description: string
}

function buildGalleryPhotos(): GalleryPhoto[] {
  const galleryDirectory = path.join(process.cwd(), "public", "photo gallery")
  const supportedImageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"])

  const files = fs
    .readdirSync(galleryDirectory)
    .filter((fileName) => supportedImageExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((firstFile, secondFile) => {
      const firstMatch = firstFile.match(/\((\d+)\)/)
      const secondMatch = secondFile.match(/\((\d+)\)/)
      const firstValue = firstMatch ? Number(firstMatch[1]) : Number.POSITIVE_INFINITY
      const secondValue = secondMatch ? Number(secondMatch[1]) : Number.POSITIVE_INFINITY

      if (firstValue !== secondValue) {
        return firstValue - secondValue
      }

      return firstFile.localeCompare(secondFile)
    })

  return files.map((fileName, index) => ({
    id: index + 1,
    title: `${fileName.split('.')[0]} ${String(index + 1).padStart(2, "0")}`,
    image: encodeURI(`/photo gallery/${fileName}`),
    description: `Photo ${index + 1} from the school photo gallery.`,
  }))
}

const galleryPhotos = buildGalleryPhotos()

export default function PhotosPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(250,204,21,0.14),transparent_24%),linear-gradient(to_bottom,#f7fbf7,#ffffff_42%)]">
      <Header />

      <section className="relative overflow-hidden border-b border-green-100/80">
        <div className="absolute inset-0 bg-[url('/images/School/birdsEyeCampus.jpg')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 via-white/95 to-emerald-50/90" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-medium text-green-700 shadow-sm backdrop-blur-sm transition hover:border-green-300 hover:bg-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-green-700">
                <Camera size={14} />
                Photo Gallery
              </span>
              <h1 className="mt-5 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                A complete photo album from our school events
              </h1>
            

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-green-100 bg-white/85 p-4 shadow-sm backdrop-blur-sm">
                  <div className="flex items-center gap-3 text-green-700">
                    <Images size={18} />
                    <span className="text-sm font-semibold">{galleryPhotos.length} Photos</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-green-100 bg-white/85 p-4 shadow-sm backdrop-blur-sm">
                  <div className="flex items-center gap-3 text-green-700">
                    <ScanSearch size={18} />
                    <span className="text-sm font-semibold">Tap to View</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-gray-500">Open any image in the full-screen lightbox.</p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-green-600">All Images</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">Browse the full gallery</h2>
          </div>
          
        </div>

        <PhotoGrid photos={galleryPhotos} />
      </section>

      <Footer />
    </main>
  )
}
