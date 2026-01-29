import Header from "@/components/shared/header"
import HeroSection from "@/components/home/hero-section"
import EventsNavigationSection from "@/components/shared/events-navigation-section"
import WelcomeVideoSection from "@/components/home/welcome-video-section"
import NoticeSection from "@/components/home/notice-section"
import GallerySection from "@/components/home/gallery-sectionn"
import NewsSection from "@/components/home/news-section"
import AchievementsSection from "@/components/home/achievements-section"
import ContactSection from "@/components/home/contact-section"
import Footer from "@/components/shared/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WelcomeVideoSection />
      <EventsNavigationSection />
      <GallerySection />
      <NoticeSection />
      {/* <NewsSection /> */}
      {/* <AchievementsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  )
}
