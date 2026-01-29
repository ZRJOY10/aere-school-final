import { MapPin, Phone, Mail, Facebook, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const importantLinks = [
    { label: "জাতীয় শিক্ষাক্রম", href: "/curriculum" },
    { label: "শিক্ষা মন্ত্রণালয়", href: "https://moedu.gov.bd" },
    { label: "মাধ্যমিক ও উচ্চমাধ্যমিক অধিদপ্তর", href: "https://dshe.gov.bd" },
    { label: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড", href: "https://nctb.gov.bd" },
    { label: "মাধ্যমিক শিক্ষা অধিদপ্তর", href: "https://dshe.gov.bd" },
  ]

  return (
    <section id="contact" className="py-10 md:py-12 lg:py-16 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Left - Contact Info */}
          <div className="lg:col-span-3 text-white space-y-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-400 mb-4 md:mb-6">
              A.E.R.E School and College
            </h2>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="shrink-0 mt-1" size={16} />
                <p>Ganakbari, Ashulia, Savar, Dhaka-1349</p>
              </div>
              
              <div className="flex items-start gap-2">
                <Phone className="shrink-0 mt-1" size={16} />
                <p>+8802581537774</p>
              </div>
              
              <div className="flex items-start gap-2">
                <Mail className="shrink-0 mt-1" size={16} />
                <p>drmc_bd@yahoo.com</p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Center - Large Map */}
          <div className="lg:col-span-6 order-first md:order-none">
            <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7291.886300616788!2d90.2793208345238!3d23.962450352952278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e7e7aac4bcfb%3A0x14aac02fd9af97bb!2sA.E.R.E%20School%20and%20College!5e0!3m2!1sen!2sbd!4v1769696879427!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="A.E.R.E School and College Location"
              />
            </div>
          </div>


          {/* Right - Important Links */}
          <div className="lg:col-span-3 text-white">
            <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-6">
              Important Links
            </h2>
            
            <nav className="space-y-2">
              {importantLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors group"
                >
                  <ArrowRight size={16} className="shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
