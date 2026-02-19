"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Users, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import teachersData from "@/data/teachers.json"

const TEACHERS_PER_PAGE = 8

export default function TeachersPage() {
  const { teachers } = teachersData
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalPages = Math.ceil(teachers.length / TEACHERS_PER_PAGE)
  const startIndex = (currentPage - 1) * TEACHERS_PER_PAGE
  const endIndex = startIndex + TEACHERS_PER_PAGE
  const currentTeachers = teachers.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

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
              <Users size={24} className="md:hidden" />
              <Users size={32} className="hidden md:block" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Our Teachers</h1>
              <p className="text-white/90 mt-1 md:mt-2 text-sm md:text-base">
                Meet our dedicated faculty members
              </p>
            </div>
          </div>
          
          <div className="mt-4 md:mt-6 text-xs md:text-sm text-white/80 text-center sm:text-left">
            {teachers.length} Teachers
          </div>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentTeachers.map((teacher) => (
            <Card key={teacher.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200 group">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">{teacher.name}</h3>
                <p className="text-green-600 font-medium text-sm mb-4 text-center">{teacher.designation}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Phone size={14} className="text-green-600 flex-shrink-0" />
                    <span className="truncate">{teacher.mobile}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Mail size={14} className="text-green-600 flex-shrink-0" />
                    <span className="truncate">{teacher.email}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-10 w-10"
            >
              <ChevronLeft size={18} />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => goToPage(page)}
                className={`h-10 w-10 ${
                  currentPage === page 
                    ? "bg-green-600 hover:bg-green-700 text-white" 
                    : "hover:bg-green-50"
                }`}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-10 w-10"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        )}

        {/* Summary */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Showing {startIndex + 1} - {Math.min(endIndex, teachers.length)} of {teachers.length} teachers
        </div>
      </div>
    </main>
  )
}
