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
    <section className="relative pt-10 mx-auto  pb-0">
      <div className="max-w-7xl -mx-8   mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[600px] md:min-h-[700px]">
          {/* Background - White */}
          <div className="absolute inset-0 bg-white"></div>

          {/* Content Container */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full min-h-[600px] md:min-h-[700px]">
            {/* Left Side Content */}
            <div className="absolute left-8 md:left-12 lg:left-16 top-8 md:top-12 lg:top-16 right-1/2 pr-8 md:pr-12 lg:pr-16 flex flex-col h-[calc(100%-4rem)] md:h-[calc(100%-6rem)]">
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
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=800&fit=crop&q=80"
                  alt="Doctor consulting patient"
                  className="w-full h-auto object-cover rounded-2xl grayscale"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="absolute right-8 md:right-12 lg:right-16 top-8 md:top-12 lg:top-33 left-1/2 pl-8 md:pl-12 lg:pl-16 flex flex-col justify-center">
              {/* Description Text */}
              <p className="text-gray-900 text-base md:text-lg mb-8 max-w-xl leading-relaxed font-normal">
                We strive to provide exceptional healthcare by focusing on compassion, innovation, and patient
               
              </p>

              {/* Buttons */}
              <div className="flex flex-row items-center gap-6">
                <Button className="rounded-4xl bg-black hover:bg-gray-800 text-white px-8 py-6 text-base font-medium h-10">
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
                    <span className="absolute -top-1 -right-1 text-xs font-bold text-white bg-purple-600 w-6 h-6 rounded-full flex items-center justify-center z-10">2K</span>
                  </div>
                </div>
                
                {/* Text - can span multiple lines */}
                <p className="text-xs md:text-sm text-gray-700 font-medium leading-snug flex-1 min-w-0">
                  More than 2+ Doctors in your door
                </p>
                
                {/* Arrow Button - square with rounded corners */}
                <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg flex-shrink-0 transition-colors w-8 h-8 flex items-center justify-center">
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
