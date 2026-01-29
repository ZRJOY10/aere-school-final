"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Marquee from "react-fast-marquee"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import headerData from "@/data/header.json"
import noticesData from "@/data/notices.json"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Bar: Logo + Institute Name | Action Buttons */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-8 py-2.5 sm:py-3">
          <div className="flex justify-between items-center">
            {/* Left: Logo & Name */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Image src={headerData.logo} alt="AERE Logo" width={40} height={40} className="rounded-full w-9 h-9 sm:w-[50px] sm:h-[50px]" />
              <div>
                <h1 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight line-clamp-1">
                  {headerData.instituteName}
                </h1>
                <p className="text-green-100 text-[10px] sm:text-xs">EIIN: {headerData.eiin}</p>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="hidden md:flex items-center gap-2">
              {headerData.topButtons.map((button) => (
                <Link key={button.id} href={button.href} className="group">
                  <Button
                    variant={button.variant as "default" | "destructive" | "outline"}
                    size="sm"
                    className={
                      `transition-all duration-200 cursor-pointer group-hover:scale-105 group-hover:shadow-lg ` +
                      (button.variant === "destructive"
                        ? "bg-red-600 hover:bg-red-700"
                        : button.variant === "outline"
                          ? "border-white text-green-600 hover:bg-green-500 hover:text-white"
                          : "bg-green-600 hover:bg-green-700 text-white")
                    }
                  >
                    <span className="group-hover:underline">{button.label}</span>
                  </Button>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <NavigationMenu className="hidden md:flex justify-center w-full py-2">
            <NavigationMenuList className="flex gap-1">
              {headerData.navigation.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <Link href={item.href} passHref>
                    <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition">
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Marquee Notice Line */}
      <div className="bg-yellow-50 border-b border-yellow-200 py-1.5 sm:py-2 overflow-hidden">
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="bg-red-600 text-white px-2 sm:px-4 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold shrink-0 ml-2 sm:ml-4">NOTICE</span>
          <Marquee
            pauseOnHover={true}
            speed={50}
            gradient={false}
            className="flex-1"
          >
            {noticesData.notices.map((notice, idx) => (
              <span key={notice.id} className="text-xs sm:text-sm text-gray-800 mx-4 sm:mx-8">
                {idx > 0 && <span className="text-red-600 mx-2 sm:mx-4">★</span>}
                {notice.text}
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-2">
          {headerData.navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="block text-sm font-medium text-gray-700 hover:text-green-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 space-y-2">
            {headerData.topButtons.map((button) => (
              <Link key={button.id} href={button.href}>
                <Button
                  variant={button.variant as "default" | "destructive" | "outline"}
                  className={button.variant === "destructive" ? "bg-red-600 hover:bg-red-700 w-full" : "w-full"}
                >
                  {button.label}
                </Button>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
