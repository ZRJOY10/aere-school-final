"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Notice {
  date: string
  title: string
  description: string
  fullDetails?: string
}

export default function NoticeSection() {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  // const notices: Notice[] = [
  //   {
  //     date: "Jan 15, 2025",
  //     title: "Admission Form 2025",
  //     description: "Online admission form for session 2025 is now open",
  //     fullDetails: "Dear Students and Parents,\n\nWe are pleased to announce that the online admission form for the academic session 2025 is now available. Interested candidates can visit our website and fill out the application form.\n\nKey Details:\n• Application Start Date: January 15, 2025\n• Last Date to Apply: February 28, 2025\n• Admission Test Date: March 15, 2025\n• Required Documents: Birth Certificate, Previous Academic Records, Passport-sized Photographs\n\nFor more information, please contact our admission office or visit the school campus during office hours (9 AM - 4 PM).\n\nAdmission Office\n Atomic Energy Research Establishment School and College"
  //   },
  //   {
  //     date: "Jan 10, 2025",
  //     title: "Mid-term Examination",
  //     description: "Mid-term exams scheduled from Jan 20-30, 2025",
  //     fullDetails: "Attention All Students,\n\nThe mid-term examination for the current academic session will be conducted from January 20 to January 30, 2025.\n\nExamination Schedule:\n• Classes 6-8: January 20-25, 2025\n• Classes 9-10: January 22-28, 2025\n• College (XI-XII): January 24-30, 2025\n\nImportant Instructions:\n• Students must arrive 30 minutes before the exam starts\n• Bring your admit card and student ID\n• No mobile phones or electronic devices allowed\n• Exam routine will be published on the notice board\n\nPlease prepare well and maintain academic integrity.\n\nExamination Controller\n Atomic Energy Research Establishment School and College"
  //   },
  //   {
  //     date: "Jan 05, 2025",
  //     title: "Science Fair 2025",
  //     description: "Annual Science Fair registration opens on Jan 5th",
  //     fullDetails: "Dear Students,\n\nWe are excited to announce the Annual Science Fair 2025! This is a wonderful opportunity to showcase your scientific creativity and innovation.\n\nRegistration Details:\n• Registration Opens: January 5, 2025\n• Registration Deadline: January 25, 2025\n• Fair Date: February 10-11, 2025\n• Venue: School Auditorium and Science Labs\n\nCategories:\n• Physics Projects\n• Chemistry Experiments\n• Biology Research\n• Environmental Science\n• Technology Innovation\n\nPrizes will be awarded to top three projects in each category. Individual and group projects (max 3 members) are welcome.\n\nRegister with your science teacher today!\n\nScience Department\n Atomic Energy Research Establishment School and College"
  //   },
  //   {
  //     date: "Dec 28, 2024",
  //     title: "Holiday Break",
  //     description: "Winter vacation from Dec 20 - Jan 3, 2025",
  //     fullDetails: "Dear Students and Parents,\n\nThe school will remain closed for winter vacation from December 20, 2024, to January 3, 2025.\n\nImportant Information:\n• Last Working Day: December 19, 2024\n• Reopening Date: January 4, 2025\n• Office Hours During Break: 10 AM - 2 PM (for urgent matters only)\n\nHoliday Homework:\nAll students are requested to complete their holiday homework assigned by respective subject teachers. Homework should be submitted on the first day after reopening.\n\nWe wish everyone a joyful and safe winter break!\n\nAdministration\n Atomic Energy Research Establishment School and College"
  //   },
  //   {
  //     date: "Dec 15, 2024",
  //     title: "Annual Sports Day",
  //     description: "Inter-house sports competition on December 22",
  //     fullDetails: "Dear Students and Parents,\n\nWe are thrilled to invite you to our Annual Sports Day celebration on December 22, 2024!\n\nEvent Details:\n• Date: December 22, 2024\n• Time: 8:00 AM - 4:00 PM\n• Venue: School Playground\n\nSchedule of Events:\n• 8:00 AM - Opening Ceremony\n• 9:00 AM - Track Events (100m, 200m, 400m, Relay)\n• 11:00 AM - Field Events (High Jump, Long Jump, Shot Put)\n• 1:00 PM - Team Sports (Football, Cricket, Volleyball)\n• 3:30 PM - Prize Distribution & Closing Ceremony\n\nAll students are encouraged to participate and support their respective houses. Parents and guardians are cordially invited to attend.\n\nSports Department\n Atomic Energy Research Establishment School and College"
  //   },
  //   {
  //     date: "Dec 10, 2024",
  //     title: "Parent-Teacher Meeting",
  //     description: "Scheduled parent-teacher meeting for all classes",
  //     fullDetails: "Dear Parents,\n\nWe cordially invite you to attend the Parent-Teacher Meeting scheduled for December 18, 2024.\n\nMeeting Schedule:\n• Classes 6-8: 9:00 AM - 12:00 PM\n• Classes 9-10: 1:00 PM - 4:00 PM\n• College (XI-XII): December 19, 2024 (9:00 AM - 1:00 PM)\n\nVenue: Respective Classrooms\n\nThis is an important opportunity to discuss your child's academic progress and address any concerns. Please make every effort to attend.\n\nPrincipal\n Atomic Energy Research Establishment School and College"
  //   },
  //   {
  //     date: "Dec 05, 2024",
  //     title: "Cultural Program Auditions",
  //     description: "Auditions for annual cultural program on December 8",
  //     fullDetails: "Dear Students,\n\nAuditions for the Annual Cultural Program will be held on December 8, 2024.\n\nEvent Categories:\n• Dance (Solo/Group)\n• Music (Vocal/Instrumental)\n• Drama/Theater\n• Poetry Recitation\n• Stand-up Comedy\n\nAudition Details:\n• Date: December 8, 2024\n• Time: 2:00 PM onwards\n• Venue: School Auditorium\n\nInterested students should register with the cultural committee by December 6. Don't miss this opportunity to showcase your talent!\n\nCultural Committee\n Atomic Energy Research Establishment School and College"
  //   },
  //   {
  //     date: "Nov 28, 2024",
  //     title: "Library Book Return Notice",
  //     description: "Return all borrowed books before December 15",
  //     fullDetails: "Dear Students,\n\nThis is a reminder to return all borrowed library books before December 15, 2024.\n\nImportant Points:\n• Last date for book return: December 15, 2024\n• Late fees: 5 Taka per day per book\n• Lost books must be reported and replaced\n• Library cards will be blocked for overdue books\n\nThe library will conduct a complete inventory check during winter break. Students with pending returns will not be allowed to borrow new books in the next semester.\n\nLibrarian\n Atomic Energy Research Establishment School and College"
  //   },
  // ]

  const notices: Notice[] = [];

  const displayedNotices = showAll ? notices : notices.slice(0, 6)

  const handleCardClick = (notice: Notice) => {
    setSelectedNotice(notice)
    setModalOpen(true)
  }

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">Latest Updates</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Notice Board</h2>
          <p className="text-gray-600 text-base md:text-lg">
            Latest updates and announcements from  Atomic Energy Research Establishment School and College
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">

            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <div className="flex items-center gap-3 mb-3">
              <Calendar className="text-green-500" size={32} />
              <span className="text-green-600 font-bold text-xl md:text-2xl">No Notices Yet</span>
              </div>
              <p className="text-gray-600 text-base md:text-lg text-center max-w-md">
              Stay tuned! Important updates and announcements will appear here soon.
              </p>
            </div>
          {displayedNotices.map((notice, index) => (
            <Card
              key={index}
              onClick={() => handleCardClick(notice)}
              className="p-4 md:p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-gray-200 group hover:border-green-500"
            >
              <div className="flex items-start gap-3 mb-3 md:mb-4">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors">
                  <Calendar className="text-green-600 group-hover:text-white transition-colors" size={18} />
                </div>
                <div className="flex-1">
                  <span className="text-xs md:text-sm font-medium text-green-600">{notice.date}</span>
                </div>
              </div>
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {notice.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{notice.description}</p>
              <div className="flex items-center gap-2 text-green-600 text-xs md:text-sm font-semibold group-hover:gap-3 transition-all">
                View Details
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>

        {notices.length > 6 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              {showAll ? "Show Less" : "View All Notices"}
              <ArrowRight size={18} className={showAll ? "rotate-180" : ""} />
            </button>
          </div>
        )}
      </div>

      {/* Notice Details Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="w-[95vw] max-w-full sm:w-full sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[75vw] max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Notice Details</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(90vh-120px)] pr-2 sm:pr-4">
            {selectedNotice && (
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 pb-3 sm:pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Calendar className="text-green-600" size={20} />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-green-600">{selectedNotice.date}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{selectedNotice.title}</h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                  {selectedNotice.fullDetails || selectedNotice.description}
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  )
}
