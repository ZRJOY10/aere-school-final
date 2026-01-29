import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// @ts-ignore: global CSS module declaration missing in TypeScript
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "A.E.R.E School & College | Quality Education in Savar, Dhaka",
  description:
    "Welcome to A.E.R.E School and College - Established 1992. Excellence in Science-focused education with modern facilities. Located in Ashulia, Savar, Dhaka.",
  generator: "Next.js",
  icons: {
    icon: "/images/image.png",
    apple: "/images/image.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
