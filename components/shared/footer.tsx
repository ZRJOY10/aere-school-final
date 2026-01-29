import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/image.png" alt="AERE Logo" width={40} height={40} className="rounded-full" />
              <div>
                <p className="text-sm font-bold text-white"> Atomic Energy Research Establishment</p>
                <p className="text-xs text-gray-400">School & College</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">Atomic Energy Research Establishment</p>
            <p className="text-xs text-gray-500 mt-1">EIIN: 108406</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Library
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © 2025  Atomic Energy Research Establishment School and College. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs sm:text-sm">
              <a href="#" className="hover:text-green-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-400 transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-green-400 transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
