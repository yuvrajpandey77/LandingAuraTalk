"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container, SECTION_SPACING } from "@/lib/layout"

export default function ServicesSection() {
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

    const element = document.getElementById("services-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services-section" className={`${SECTION_SPACING} bg-gray-50`}>
      <Container>
        {/* Top Section - Heading and Description */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          {/* Left - Heading with Arrow */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight tracking-tight">
              Explore Our Range Of
              <br />
              <span className="inline-flex items-center">
                <svg
                  className="w-10 h-10 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              Healthcare Services
            </h2>
          </div>

          {/* Right - Description Text */}
          <div className="md:max-w-md">
            <p className=" mt-10 text-sm md:text-sm leading-relaxed">
             <span className="text-orange-600">Discover comprehensive healthcare </span>solutions tailored to your needs, including preventive care, advanced
              treatments, and personalized support for a healthier, happier life every day
            </p>
            
          </div>
        </div>

        {/* Three Cards in a Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Card - Mental Health Services */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-48 relative overflow-hidden">
              <img
                src="/woman-mental-health-therapy.jpg"
                alt="Mental Health Services"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg md:text-xl font-normal text-gray-900 mb-3 tracking-tight">Mental Health Services</h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed flex-1">
                Compassionate care and expert support to help you achieve emotional balance, mental clarity, and lasting
                well-being.
              </p>
              <button className="text-pink-500 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Middle Card - Meet Our Expert Doctors (Purple) */}
          <div className="rounded-2xl overflow-hidden bg-purple-400 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col">
            {/* Top Section - Badge Area (similar height to image) */}
            <div className="h-48 relative">
              {/* Badge at Top */}
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-lg px-3 py-2 flex items-center gap-2 z-10">
                <svg
                  className="w-4 h-4 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-xs font-medium text-gray-900">Cardiology</span>
                <span className="text-xs text-gray-600">•</span>
                <span className="text-xs font-medium text-gray-900">Dr. Waseem Khan</span>
              </div>
            </div>

            {/* Bottom Section - Text Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl md:text-2xl font-normal text-white mb-4 tracking-tight">Meet Our Expert Doctors</h3>
              <p className="text-white text-opacity-90 text-sm md:text-base mb-6 leading-relaxed">
                Get to know our highly qualified doctors committed to providing personalized care and expert medical
                guidance for every patient.
              </p>
              <Button className="w-full rounded-4xl bg-white text-purple-600 hover:bg-gray-100 font-semibold py-6 mt-auto">
                Book an Appointment
              </Button>
            </div>
          </div>

          {/* Right Card - Individual Counseling */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-48 relative overflow-hidden">
              <img
                src="/man-individual-counseling-therapy.jpg"
                alt="Individual Counseling"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg md:text-xl font-normal text-gray-900 mb-3 tracking-tight">Individual Counseling</h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed flex-1">
                Personalized one-on-one counseling sessions designed to address your unique emotional challenges.
              </p>
              <button className="text-pink-500 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
