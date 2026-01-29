import { Card } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default function AchievementsSection() {
  const achievements = [
    {
      year: "2024",
      title: "State Science Olympiad",
      award: "Gold Medal - Team",
    },
    {
      year: "2024",
      title: "National Board Exams",
      award: "95% Pass Rate",
    },
    {
      year: "2023",
      title: "Academic Excellence Award",
      award: "Top Institution in Region",
    },
    {
      year: "2023",
      title: "Green School Certification",
      award: "Environmental Excellence",
    },
    {
      year: "2022",
      title: "Best Faculty Award",
      award: "National Recognition",
    },
    {
      year: "2022",
      title: "Student Leadership",
      award: "50+ Community Projects",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">Our Pride</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
          <p className="text-gray-600 text-lg">Celebrating excellence and student success</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 border-green-200 bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-green-600 uppercase mb-1">{item.year}</p>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{item.award}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
