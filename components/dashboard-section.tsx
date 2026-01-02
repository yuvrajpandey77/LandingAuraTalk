"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { Container, SECTION_SPACING } from "@/lib/layout"

export default function DashboardSection() {
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

    const element = document.getElementById("dashboard-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="dashboard-section" className={`${SECTION_SPACING} bg-white`}>
      <Container>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900  leading-tight tracking-tight">Our Key Healthcare</h2>
        <p className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4 leading-tight tracking-tight">Services</p>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-4 gap-6 auto-rows-max">
          {/* Welcome Card */}
          <div
            className={`md:col-span-2 rounded-2xl bg-gradient-to-br from-[#FFDF2A] to-[#FF5810] text-white p-8 h-64 flex flex-col justify-between transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div>
              <h3 className="text-xl md:text-2xl font-normal text-white mb-2 tracking-tight">Welcome Back! AURATALK</h3>
              <p className="text-white/90">Check Your Health Regularly</p>
            </div>
            <button className="w-fit px-4 py-2 bg-black text-white font-semibold rounded-full text-sm hover:bg-gray-800 transition-colors">
              Check now
            </button>
          </div>

          {/* Statistics Card 1 - Diabetes */}
          <div
            className={`rounded-2xl bg-gradient-to-br from-[#FFDF2A] to-[#FF5810] text-white p-8 h-64 flex flex-col justify-between transition-all duration-1000 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h3 className="text-xl md:text-2xl font-normal text-white tracking-tight mb-4">Diabetes</h3>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-white/90">Score</p>
                <p className="text-3xl font-bold">84%</p>
              </div>
              <div className="w-12 h-32 bg-white bg-opacity-20 rounded-full" />
            </div>
          </div>

          {/* Doctor Profile Card */}
          <div
            className={`md:col-span-1 md:row-span-2 rounded-2xl bg-gradient-to-br from-[#FFDF2A] to-[#FF5810] text-white p-8 flex flex-col justify-between transition-all duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-normal text-white mb-1 tracking-tight">Dr. Sarah Johnson</h3>
                <p className="text-white/90 mb-2 font-medium">Cardiologist & Heart Specialist</p>
                <p className="text-sm text-white/80 mb-4">15+ years of experience</p>
                <p className="text-sm text-white/90 mb-4 leading-relaxed">
                  Expert in cardiovascular health, preventive care, and advanced heart treatments. Committed to providing personalized, compassionate care for optimal patient outcomes.
                </p>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <p className="text-sm text-white/90">4.8 (200+ reviews)</p>
              </div>
            </div>
            <button className="w-fit px-6 py-2 bg-black text-white font-semibold rounded-full text-sm hover:bg-gray-800 transition-colors">
              Book Appointment
            </button>
          </div>

          {/* Health Monitoring Card */}
          <div
            className={`rounded-2xl bg-gradient-to-br from-[#FFDF2A] to-[#FF5810] text-white p-8 h-64  flex flex-col justify-between transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h3 className="text-xl md:text-2xl font-normal text-white tracking-tight">
              Stay proactive <br />
              with routine <br />
              health checks
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/90">Regular checkups prevent future health issues</p>
              <img src="/heart-monitor-icon.jpg" alt="" className="w-16 h-16 opacity-70" />
            </div>
          </div>

          {/* Statistics Card 2 - Health Progress */}
          <div
            className={`rounded-2xl bg-gray-800 text-white p-8 h-64 flex flex-col justify-between transition-all duration-1000 delay-400 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h3 className="text-xl md:text-2xl font-normal text-white tracking-tight mb-4">Health Progress</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Monthly</span>
                <span className="text-2xl font-bold">90.5%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-11/12 bg-gradient-to-r from-green-400 to-green-500" />
              </div>
            </div>
          </div>

          {/* Statistics Card 3 - Blood Pressure */}
          <div
            className={`rounded-2xl bg-gradient-to-br from-[#FFDF2A] to-[#FF5810] text-white p-8 h-64  flex flex-col justify-between transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h3 className="text-xl md:text-2xl font-normal text-white tracking-tight mb-4">Blood Pressure</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/90">Current</span>
                <span className="text-2xl font-bold">120/80</span>
              </div>
              <p className="text-xs text-white/90">Status: Normal</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
