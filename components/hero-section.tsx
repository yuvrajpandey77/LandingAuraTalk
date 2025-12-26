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

          {/* Colorful gradient - purple, pink, orange, yellow, cream mix */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 100% 80% at 92% 85%, #C8A8E9 0%, #D4B5F0 8%, #E8A5D6 15%, #FF8CC8 25%, #FF6B9D 35%, #FF7A5C 45%, #FF9F6B 55%, #FFB88C 65%, #FFD4B8 75%, #FFE5D4 85%, #FFFBF0 95%, #FFFFFF 100%)',
              maskImage: 'radial-gradient(ellipse 90% 75% at 92% 85%, black 0%, black 40%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 65%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 75% at 92% 85%, black 0%, black 40%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 65%, transparent 80%)',
            }}
          ></div>

          {/* Content Container */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full min-h-[37.5rem] md:min-h-[43.75rem]">
            {/* Left Side Content */}
            <div className="absolute left-2 md:left-2 lg:left-4 top-8 md:top-12 lg:top-16 right-1/2  flex flex-col h-[calc(100%-4rem)] md:h-[calc(100%-6rem)]">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 bg-white border border-black rounded-4xl px-4 py-2 w-fit">
                <svg
                  className="w-4 h-4 text-black"
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
                <span className="text-sm font-medium text-black">Expert Doctors</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-8 leading-tight tracking-tight">
                Our Mission Delivering
                <br />
                Compassionate,
                <br />
                Patient-Centered Care
              </h1>

              {/* Doctor Image - Below text, at bottom */}
              <div className="mt-auto w-full">
                <img
                  src="./hero1.png"
                  alt="Doctor consulting patient"
                  className="w-full h-auto object-cover rounded-2xl grayscale"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="absolute right-2 md:right-2 lg:right-4 top-8 md:top-12 lg:top-33 left-1/2 pl-8 md:pl-12 lg:pl-16 flex flex-col justify-center">
              {/* Description Text */}
              <p className="text-gray-900 text-base md:text-sm mb-8 max-w-xl leading-relaxed font-normal">
                We strive to provide exceptional healthcare by focusing on compassion, innovation, and patient
                centered care with the help of technology in the comfort of your home and at your own pace and time.
              </p>

              {/* Buttons */}
              <div className="flex flex-row items-center gap-6">
                <Button className="rounded-4xl bg-[#111111] hover:bg-black text-white px-8 py-6 text-base font-medium h-10">
                  Book an Appointment
                </Button>
                <a
                  href="#"
                  className="text-orange-600 hover:text-orange-700 underline text-base font-medium"
                >
                  Find a Doctor
                </a>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white rounded-xl shadow-lg p-4 md:p-5 w-auto max-w-[280px]">
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
                    <span className="absolute -top-1 -right-1 text-xs font-bold text-white w-6 h-6 rounded-full flex items-center justify-center z-10" style={{ backgroundColor: '#7C5CFA' }}>2K</span>
                  </div>
                </div>
                
                {/* Text - can span multiple lines */}
                <p className="text-xs md:text-sm text-gray-700 font-medium leading-snug flex-1 min-w-0">
                  More than 2+ Doctors in your door
                </p>
                
                {/* Arrow Button - square with rounded corners */}
                <button className="text-white p-2 rounded-lg flex-shrink-0 transition-colors w-8 h-8 flex items-center justify-center hover:opacity-90" style={{ backgroundColor: '#7C5CFA' }}>
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
