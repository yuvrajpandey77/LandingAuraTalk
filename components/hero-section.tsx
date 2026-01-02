"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-2 pb-0">
      <div className="mx-auto px-4 md:px-8">
        <div className="relative rounded-3xl pt-10 overflow-hidden border border-gray-200 min-h-[37.5rem] md:min-h-[43.75rem]">
          {/* Background - White */}
          <div className="absolute inset-0 bg-white"></div>

          {/* Colorful gradient - yellow and orange mix */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 100% 80% at 92% 85%, #FFDF2A 0%, #FFE066 15%, #FFA500 30%, #FF8C00 45%, #FF5810 60%, #FF4500 75%, #FFE5D4 85%, #FFFBF0 95%, #FFFFFF 100%)',
              maskImage: 'radial-gradient(ellipse 90% 75% at 92% 85%, black 0%, black 40%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 65%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 75% at 92% 85%, black 0%, black 40%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 65%, transparent 80%)',
            }}
          ></div>

          {/* Content Container */}
          <div className="relative z-10 p-4 md:p-8 lg:p-12 xl:p-16 h-full min-h-[37.5rem] md:min-h-[43.75rem]">
            {/* Left Side Content */}
            <div className="relative md:absolute left-0 md:left-2 lg:left-4 top-0 md:top-8 lg:top-12 xl:top-16 right-0 md:right-1/2 flex flex-col h-auto md:h-[calc(100%-4rem)] lg:h-[calc(100%-6rem)]">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4 md:mb-6 bg-white border border-black rounded-4xl px-3 md:px-4 py-2 w-fit">
                <svg
                  className="w-3.5 h-3.5 md:w-4 md:h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <span className="text-xs md:text-sm font-medium text-black">Expert Doctors</span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-4 md:mb-8 leading-tight tracking-tight">
                Our Mission Delivering
                <br />
                Compassionate,
                <br />
                Patient-Centered Care
              </h1>

              {/* Doctor Image - Below text, at bottom */}
              <div className="mt-4 md:mt-auto w-full">
                <img
                  src="./hero1.png"
                  alt="Doctor consulting patient"
                  className="w-full h-auto object-cover rounded-2xl grayscale"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="relative md:absolute right-0 md:right-2 lg:right-4 top-auto md:top-8 lg:top-12 xl:top-33 left-0 md:left-1/2 pl-0 md:pl-8 lg:pl-12 xl:pl-16 flex flex-col justify-center mt-6 md:mt-0 mb-20 md:mb-0">
              {/* Description Text */}
              <p className="text-gray-900 text-sm md:text-base lg:text-sm mb-4 md:mb-8 max-w-xl leading-relaxed font-normal">
                We strive to provide exceptional healthcare by focusing on compassion, innovation, and patient
                centered care with the help of technology in the comfort of your home and at your own pace and time.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6">
                <Button className="rounded-4xl bg-[#111111] hover:bg-black text-white px-6 md:px-8 py-4 md:py-6 text-sm md:text-base font-medium h-auto md:h-10 w-full sm:w-auto">
                  Book an Appointment
                </Button>
                <a
                  href="#"
                  className="text-orange-600 hover:text-orange-700 underline text-sm md:text-base font-medium text-center sm:text-left"
                >
                  Find a Doctor
                </a>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 right-4 md:right-6 lg:bottom-8 lg:right-8 bg-white rounded-xl shadow-lg p-3 md:p-4 lg:p-5 w-[calc(100%-2rem)] md:w-auto max-w-[280px] z-20">
              <div className="flex items-center gap-3">
                {/* Avatars with Badge */}
                <div className="flex -space-x-2 relative flex-shrink-0">
                  <img
                    src="/doctor-avatar-1.jpg"
                    alt=""
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/doctor-avatar-2.jpg"
                    alt=""
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
                  />
                  <div className="relative">
                    <img
                      src="/doctor-avatar-3.jpg"
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
                    />
                    {/* Badge on top of third avatar */}
                    <span className="absolute -top-1 -right-1 text-xs font-bold text-white w-6 h-6 rounded-full flex items-center justify-center z-10" style={{ backgroundColor: '#FF5810' }}>2K</span>
                  </div>
                </div>
                
                {/* Text - can span multiple lines */}
                <p className="text-xs md:text-sm text-gray-700 font-medium leading-snug flex-1 min-w-0">
                  More than 2+ Doctors in your door
                </p>
                
                {/* Arrow Button - square with rounded corners */}
                <button className="text-white p-2 rounded-lg flex-shrink-0 transition-colors w-8 h-8 flex items-center justify-center hover:opacity-90" style={{ backgroundColor: '#FF5810' }}>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
