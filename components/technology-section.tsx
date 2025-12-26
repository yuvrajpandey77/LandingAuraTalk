"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Container, SECTION_SPACING } from "@/lib/layout"

export default function TechnologySection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("technology-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="technology-section" className={`${SECTION_SPACING} bg-white`}>
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Dashboard Preview */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img src="/healthcare-dashboard-ui-preview.jpg" alt="Dashboard Preview" className="w-full h-auto" />
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`flex flex-col justify-center space-y-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight tracking-tight">
              Improving health with intelligent technology
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our innovative health technology delivers personalized healthcare solutions that enhance wellness, prevent illness, and promote healthier lifestyles.
            </p>
            <div className="pt-4">
              <Button className="rounded-full bg-white text-black border border-black hover:bg-gray-800 hover:text-white font-semibold px-8 py-6 text-base">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
