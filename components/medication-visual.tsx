"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function MedicationVisual() {
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

    const element = document.getElementById("medication-visual")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div id="medication-visual" className="max-w-7xl mx-auto">
      {/* Watermark Text Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <h2 className="text-7xl md:text-9xl font-bold text-gray-100 opacity-10 select-none whitespace-nowrap">
          MEDICAL CAPSULE
        </h2>
      </div>

      <div className="relative py-12 md:py-24 z-10">
        {/* Left and Right Content with Centered Capsule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Badge */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0" />
              <h3 className="text-sm md:text-base font-semibold text-red-500">Easy Access to Trusted Medicines</h3>
            </div>
          </div>

          {/* Right Side - Heading and Description */}
          <div className="flex  flex-col justify-start">
            
            <p className="text-gray-600  text-base leading-relaxed max-w-md">
            Welcome to Care By Dr. Your health and well-being are our highest priority. Our dedicated team of specialists is committed to
              delivering exceptional care across a wide range of medical services — ensuring you receive the support,
              expertise, and attention you deserve.
            </p>
          </div>
        </div>

        {/* Center Capsule Image */}
        <div className="flex justify-center items-center mt-12 md:mt-16">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            
          </div>
        </div>
      </div>

      {/* Streamline Your Health Care Section */}
      <div className="relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
            {/* Left Side - Text Content */}
            <div className="flex flex-col space-y-4 md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight tracking-tight">
                Streamline Your
                <br />
                Health Care
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Enjoy hassle-free healthcare with fast, convenient prescription ordering and dependable delivery – so you get the medications you need, right on time and without the stress.
              </p>
            </div>

            {/* Right Side - Button */}
            <div className="flex md:items-end">
              <Button className="rounded-full bg-gray-900 text-white hover:bg-gray-800 font-semibold px-8 py-6 text-base whitespace-nowrap">
                More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
