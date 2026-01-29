"use client"
import Link from "next/link"
import { Construction, Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Icon */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
          <Construction className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-600" />
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl sm:text-8xl font-bold text-green-600 mb-4">404</h1>

        {/* Message */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
          Page Under Development
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          We're working hard to bring you this page. Please check back soon or return to the homepage.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
              <Home size={18} className="mr-2" />
              Go to Homepage
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => typeof window !== "undefined" && window.history.back()}
            className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </Button>
        </div>

        {/* Footer Text */}
        <p className="mt-10 text-xs text-gray-400">
          A.E.R.E School and College
        </p>
      </div>
    </main>
  )
}
