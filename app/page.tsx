"use client"

import { useState, useEffect } from "react"
import { SECTION_SPACING } from "@/lib/layout"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MedicationVisual from "@/components/medication-visual"
import IPhoneSection from "@/components/iphone-section"
import ServicesSection from "@/components/services-section"
import DashboardSection from "@/components/dashboard-section"
import TechnologySection from "@/components/technology-section"
import Footer from "@/components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <section className={`${SECTION_SPACING} bg-white`}>
        <MedicationVisual />
      </section>
      <ServicesSection />
      <DashboardSection />
      <TechnologySection />
      <Footer />
    </main>
  )
}
